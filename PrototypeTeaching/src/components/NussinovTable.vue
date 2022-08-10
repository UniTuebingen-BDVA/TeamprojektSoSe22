<script setup lang="ts">
import { create_table } from "../scripts/table";
import { onMounted, ref } from "vue";
import { calculate_nussinov } from "../../../common/nussinov"
import { is_entire_table_filled, validate_fill, get_current_index } from "../scripts/validate_fill";
import { validate_traceback} from "../scripts/validate_traceback";
import RNAStructure from "./RNAStructure.vue";

let pairCounter = 0;
let isFilled = false;
let isTracebackFinished = ref(false);


const probs = defineProps({
    sequence: {
        type: String,
        required: true
    }
});

let res = {
    finishScreen: false.toString(),
    sequence: probs.sequence,
    dotBracket: ".".repeat(probs.sequence.length)
};

function updateResult(seq, dotBracket, finishScreen){
    console.log("Result has been updated, new dotBracket is:" + dotBracket);
    res.sequence = seq;
    res.dotBracket = dotBracket;
    res.finishScreen = finishScreen;
};

// ISSUES:
// may move to different file to improve clarity
// edit file accordingly if single-/multi-solution is used

class pos{
    x:number;
    y:number;
    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }
}

class PathNode{
    cell:HTMLTableCellElement;
    left:PathNode|undefined;
    right:PathNode|undefined;
    value:number;
    pos:pos;
    constructor(cell:HTMLTableCellElement){
        this.cell = cell;
        this.value = parseInt(cell.innerText);
        this.pos = get_current_index(cell);
        this.left = this.left;
        this.right = this.right;
    }
    // this == newNode
    addNode(crtNode:PathNode, prevNode:PathNode){
        if (crtNode.cell === prevNode.cell){
            if (crtNode.left === undefined){
                crtNode.left = this;
            } else if (crtNode.right === undefined){
                crtNode.right = this;
            }
        } else {
            if (crtNode.left != undefined){
                this.addNode(crtNode.left, prevNode);
            } 
            if (crtNode.right != undefined){
                this.addNode(crtNode.right, prevNode);
            }
            return false;
        }
    }
}

// alternative solution with worse efficiency, and harder to understand
// initial crtNode should be HeadNode
// edits a high-scope variable, that should be set to true before invoking the function

// additional possible check: use score similar to single-solution
function isDone(crtNode:PathNode|undefined){
    if (crtNode != undefined){
        console.log(crtNode);
        if (crtNode.left === undefined && crtNode.right === undefined && crtNode.pos.x != crtNode.pos.y){
            console.log(crtNode);
            //tailEndsCorrect = false;
        } else {
            isDone(crtNode.left);
            isDone(crtNode.right);
        }
    }
}
// initial values should be: crtNode = headNode, crtString = .....
function dotBracket(crtNode:PathNode, crtString:string){
        if (crtNode.left !== undefined){
            if (crtNode.value - crtNode.left.value === 1){
                if (
                    (crtNode.left.pos.x - crtNode.pos.x === 1)
                    && (crtNode.pos.y - crtNode.left.pos.y === 1)){
                        crtString = addBasePair(crtString!, crtNode.pos);
                    }
            }
            dotBracket(crtNode.left, crtString);
        }
        if (crtNode.right !== undefined){
            if (crtNode.value - crtNode.right.value === 1){
                if (
                    (crtNode.right.pos.x - crtNode.pos.x === 1)
                    && (crtNode.pos.y - crtNode.right.pos.y === 1)){
                        crtString = addBasePair(crtString!, crtNode.pos);
                    }
            }
            dotBracket(crtNode.right, crtString);
        }
        return crtString;
    }

function addBasePair(str:string, pos:pos):string{
    if (pos.x > pos.y){
        str = setCharAt(str, pos.y - 1, ')');
        str = setCharAt(str, pos.x - 1, '(');
        return str;
    } else {
        str = setCharAt(str, pos.x - 1, '(');
        str = setCharAt(str, pos.y - 1, ')');
        return str;
    }
}

function setCharAt(str:string, pos:number, char:string):string{
    return (str.substring(0, pos) + char + str.substring(pos+1));
}

function fillTable(nMatrix, tbody, seq:string){
    for (let i = 0; i < seq.length; i++){
        for (let j = 0; j < seq.length; j++){
            tbody.rows[i+1].cells[j+1].innerText = nMatrix[i][j];
        }
    }
}

onMounted(() => {

    create_table(probs.sequence);
    let nussinov = calculate_nussinov(probs.sequence);
    let maxScore = nussinov.max_score;
    let nussinovMatrix = nussinov.matrix;
    let nussinovBacktrace = nussinov.backtrace;
    let first_cell:string|EventTarget|null = "";
    let dotBracket_str = ".".repeat(probs.sequence.length);

    let table = document.querySelector("#table")!.querySelector("tbody");

    // when multiple options are available: use array of PathNodes instead
    // let headNode = new PathNode(table!.rows[1].cells[table!.rows.length-1]);

    // FOR TESTING PURPOSES
    fillTable(nussinovMatrix, table, probs.sequence);
    isFilled = true;


    table!.addEventListener("click", function (event) {
        if (event.target!.className == 'cell' && !isTracebackFinished.value) {

            // fill stage
            if (!isFilled) {
                validate_fill(event.target, nussinovMatrix);
                isFilled = is_entire_table_filled(event.target);
            }

            // traceback stage 
            else {
                //headNode.value = nussinov.max_score;
                if (first_cell == "") {

                    first_cell = event.target;

                    // if the cell was already correct, it's marked with a different color
                    if (first_cell!.style.backgroundColor == "red") {
                        first_cell!.style.backgroundColor = "blue";
                        return;
                    }

                    first_cell!.style.backgroundColor = "lightblue";

                }
                else {
                    if (first_cell!.style.backgroundColor == "lightblue") {
                        first_cell!.style.backgroundColor = "white";
                    }

                    // if the cell already correct, it's marked with the red color
                    // (so no progress gets deleted)
                    if (first_cell!.style.backgroundColor == "blue") {
                        first_cell!.style.backgroundColor = "red";
                    }

                    if (validate_traceback(first_cell, event.target, nussinovBacktrace)){
                        let crtNode = new PathNode(event.target!);
                        let prevNode = new PathNode(first_cell!);

                        //crtNode.addNode(headNode, prevNode);
                        console.log("CrtNode: " + crtNode.pos.x + ", " + crtNode.pos.y);
                        console.log("PrevNode: " + prevNode.pos.x + ", " + prevNode.pos.y);
                        if ((crtNode.pos.x == prevNode.pos.x + 1) && (crtNode.pos.y == prevNode.pos.y - 1)){
                            console.log("Pairing detected.");
                            dotBracket_str = addBasePair(dotBracket_str, prevNode.pos);
                            pairCounter++;
                        }
                        console.log(pairCounter);
                        if (pairCounter == maxScore){
                            isTracebackFinished.value = true;
                            res.dotBracket = dotBracket_str;
                            updateResult(probs.sequence, dotBracket_str, true.toString());
                        }
                        // isTracebackFinished.value = isDone(headNode);
                        // console.log(isTracebackFinished.value);
                        // if (isTracebackFinished.value){
                        //     console.log(dotBracket_str);
                        //     dotBracket_str = dotBracket(headNode, dotBracket_str);
                        //     console.log(dotBracket_str);
                        // }
                    }
                    first_cell = "";
                }
            };
        }
    });
});

</script>

<template>
<div>
    <div id="table"></div>
    <div id="tracebackDone" v-if="isTracebackFinished">
        You are done!        
    </div>
    <div class="finishScreen">
        <p v-if="isTracebackFinished">The secondary-structure of this sequence is: </p>
        <RNAStructure :key="res.finishScreen" :sequence="probs.sequence" :secondary-structure="true" :dotBracket=res.dotBracket></RNAStructure>
    </div>
    
    
</div>

</template>

<style scoped>
#tracebackDone {
    margin-top: 2em;
    color: black;
    position: relative;
    text-align: center;
    
}
.finishScreen {
    width: 22em;
    height: 20em;
    margin: 5em;
}
</style>
