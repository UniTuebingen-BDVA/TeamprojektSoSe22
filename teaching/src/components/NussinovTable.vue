<script setup lang="ts">
import { create_table } from "../scripts/table";
import { onMounted, ref } from "vue";
import { calculate_nussinov, nussinov } from '../../../common/nussinov';
import { is_entire_table_filled, validate_fill } from "../scripts/validate_fill";
import { validate_traceback, get_path, extract_cells_from_solutions} from "../scripts/validate_traceback";
import { pos, addBasePair} from "../scripts/traceback_binary_tree";
import { helper_active, helper_inactive } from "../scripts/helper";
import RNAStructure from "./RNAStructure.vue";

let isFilled:boolean = false;
let isTracebackFinished = ref(false);
let rowCounter:number = 0;
let x:number = -1;
let y:number = 0;
let cell_step_back: any;

//For emitting the image id, ergo which nussinov case is present at the moment
const emit = defineEmits<{
  (event: 'updateImage', id: number): void
}>()

const probs = defineProps({
    sequence: {
        type: String,
        required: true
    },
    helper: {
        type: Boolean,
        required: false,
        default: true
    },
    isStepper: {
        type: Boolean,
        default: false
    }
});

let dotBracket_str:string = ".".repeat(probs.sequence.length);
let res = {
  finishScreen: false.toString(),
  sequence: probs.sequence,
  dotBracket: ".".repeat(probs.sequence.length),
};

function updateResult(seq:string, dotBracket:string, finishScreen:string) {
  res.sequence = seq;
  res.dotBracket = dotBracket;
  res.finishScreen = finishScreen;
}

//Get the next cell in the table
function updateCellIndex(oldx:number,oldy:number, seq:string){
    if (oldy === seq.length-1) {
        rowCounter++;
        oldx = -1;
        oldy = rowCounter;
    }
    x = ++oldx;
    y = ++oldy;
}

//Find which nussinov case is present at the moment
function findNewCase(traceback:any[]){
    if(traceback[0][0][0] == traceback[0][1][0] - 1 && traceback[0][0][1] == traceback[0][1][1]){
        emit("updateImage", 1);
    } else if(traceback[0][0][0] == traceback[0][1][0] && traceback[0][0][1] == traceback[0][1][1] + 1){
        emit("updateImage", 2);
    } else if(traceback[0][0][0] == traceback[0][1][0] - 1 && traceback[0][0][1] == traceback[0][1][1] + 1){
        emit("updateImage", 3);
    } else{
        emit("updateImage", 4);
    }
}

//Update stepper traceback
function updateTraceback(table:HTMLTableSectionElement, traceback:any[]){
    //Update dot-bracket
    if ((traceback[0][0][0] == traceback[0][1][0] - 1) && (traceback[0][0][1] == traceback[0][1][1] + 1)) {
        dotBracket_str = addBasePair(dotBracket_str, new pos(traceback[0][0][0], traceback[0][0][1]));
    }
    //Connect arrow
    if (table!.rows[traceback[0][0][0] + 1].cells[traceback[0][0][1] + 1].style.backgroundColor === "blue" &&
        table!.rows[traceback[0][1][0] + 1].cells[traceback[0][1][1] + 1].style.backgroundColor === "") {
        table!.rows[traceback[0][1][0] + 1].cells[traceback[0][1][1] + 1].style.backgroundColor = "red";
        cell_step_back = traceback.shift()[0];
        if (traceback.length == 0) {
            table!.rows[cell_step_back[0] + 1].cells[cell_step_back[1] + 1].style.backgroundColor = "red";
            isTracebackFinished.value = true;
            updateResult(probs.sequence, dotBracket_str, true.toString());
        }
    } else {
        findNewCase(traceback);
        //Start traceback
        if (table!.rows[traceback[0][0][0] + 1].cells[traceback[0][0][1] + 1].style.backgroundColor === "") {
            table!.rows[traceback[0][0][0] + 1].cells[traceback[0][0][1] + 1].style.backgroundColor = "blue";
        }
        //Cleanup last arrow
        else {
            table!.rows[traceback[0][0][0] + 1].cells[traceback[0][0][1] + 1].style.backgroundColor = "blue";
            table!.rows[cell_step_back[0] + 1].cells[cell_step_back[1] + 1].style.backgroundColor = "red";
        
        }
    }
}

onMounted(() => {
    create_table(probs.sequence);
    let nussinov:nussinov = calculate_nussinov(probs.sequence, false);
    let nussinovMatrix:number[][] = nussinov.matrix;
    let nussinovBacktrace:number[][] = nussinov.backtrace;
    let traceback = get_path(nussinovBacktrace);
    let first_cell:HTMLTableCellElement|null = null;
    let all_optimal_solutions:any[] = nussinov.all_tracebacks;
    extract_cells_from_solutions(all_optimal_solutions);

    let chosen_solution:any;
    let crt_cell:HTMLTableCellElement;

    let table = document.querySelector("#table")!.querySelector("tbody");
    let stepper = document.querySelector("#stepper")!;

    if(!probs.isStepper) {
        table!.addEventListener("click", function (event) {
            crt_cell = event.target as HTMLTableCellElement;
            if (crt_cell.className == 'cell' && !isTracebackFinished.value) {

                // fill stage
                if (!isFilled) {
                    validate_fill(crt_cell, nussinovMatrix).then(function() {
                        isFilled = is_entire_table_filled(crt_cell);
                    });
                }

                // traceback stage
                else {
                    if (first_cell === null) {
                        first_cell = crt_cell;
                        if (probs.helper){
                            helper_active(first_cell, table!);
                        }
                        // if the cell was already correct, it's marked with a different color
                        if (first_cell!.style.backgroundColor == "red") {
                            first_cell!.style.backgroundColor = "blue";
                            return;
                        }

                        first_cell!.style.backgroundColor = "lightblue";
                    } else {
                        if (first_cell!.style.backgroundColor == "lightblue") {
                            first_cell!.style.backgroundColor = "transparent";
                        }

                        // if the cell already correct, it's marked with the red color
                        // (so no progress gets deleted)
                        if (first_cell!.style.backgroundColor == "blue") {
                            first_cell!.style.backgroundColor = "red";
                        }

                        if (probs.helper){
                            helper_inactive(table!);
                        }
                        let validate_traceback_output = validate_traceback(first_cell, crt_cell, all_optimal_solutions);
                        all_optimal_solutions = validate_traceback_output.output_hits;


                        if(all_optimal_solutions.length == 1){
                            if(all_optimal_solutions[0].traceback_puffer.length == 0){
                                chosen_solution = all_optimal_solutions[0];
                                isTracebackFinished.value = true;
                                updateResult(probs.sequence, chosen_solution.secondary_structure.join(""), true.toString());
                            }
                        }
                        first_cell = null;
                    }
                }
            }
        });
    } else {
        stepper.addEventListener("click", function (event) {
            if(!isTracebackFinished.value) {
                if (!isFilled){
                    updateCellIndex(x,y,probs.sequence);
                    table!.rows[x+1].cells[y+1].innerText = nussinovMatrix[x][y].toString(); //Update cell x, y
                    if(rowCounter === probs.sequence.length-2) {
                        isFilled = true;
                    }
                } else {
                    updateTraceback(table!,traceback);
                }
            }
        });
    }
});
</script>

<template>
  <div class="flex-container">
    <div class="tableScreen">
      <p id="tracebackDone" v-if="isTracebackFinished">You are done!</p>
      <div id="table"></div>
    </div>

    <div class="finishScreen">
      <p v-if="isTracebackFinished">
        The secondary-structure of this sequence is:
      </p>
      <RNAStructure
        :key="res.finishScreen"
        :sequence="probs.sequence"
        :secondary-structure="true"
        :dotBracket="res.dotBracket"
      ></RNAStructure>
    </div>
    <div id="stepper">
        <button v-if="probs.isStepper && !isTracebackFinished" type="button" class="nButton">{{"Next Step"}}</button>
    </div>
</div>

</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.inputPrompt > h2{
    font-family: var(--uni-font);
}
</style>
<style scoped>
.nButton{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: max-content;
    height: 40px;
    font-family: var(--uni-font);
    padding: 10px;
    font-size: 20px;
    font-weight: 550;
    transition: color .3s;
    border: solid 2px var(--uni-color-red);
    background-color: transparent;
    color: var(--uni-color-red);
    }
.nButton:hover{
    background-color: var(--uni-color-red-hover);
    color: white;
}
.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.tableScreen{
    flex: 0 1 60%;
}
.finishScreen{
    flex: 0.5 1 30%;
}
.flex-container > div {
    margin: 0% 2.5%;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
}

#tracebackDone {
    margin-top: 2em;
    color: black;
    position: relative;
    text-align: center;
}
</style>
