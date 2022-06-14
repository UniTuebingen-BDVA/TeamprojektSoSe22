function make2dArray(d, val) {
    let arr = new Array(d);
    for(let i = 0; i < d; i++) {
        arr[i] = new Array(d);
        for(let j = 0; j < d; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}

function initialize_sec_struc(len){
    let arr = [];
    for(let i = 0; i < len; i++){
        arr[i] = ".";
    }
    return arr;
}

function duplicate(matrix_a){
    return matrix_a.map(function(arr) {return arr.slice();});
}

class nussinov{
    sequence: string;
    sequence_lenght: number;
    matrix: number[][];
    max_score: number;
    calculations: any[];
    backtrace: any[][];
    secondary_structure: string[];

    constructor(public input_sequence: string) {
        this.sequence = input_sequence;
        this.sequence_lenght = input_sequence.length;
        this.matrix = make2dArray(input_sequence.length,7);
        this.max_score = 0;
        this.calculations = [];
        this.backtrace = make2dArray(input_sequence.length,7);
        this.secondary_structure = initialize_sec_struc(input_sequence.length);
    }

}

function get_score(nuss: nussinov, pos_i: number, pos_j: number){
    const map = new Map();
    let cords = [];
    let values = [];
    //Case 1
    let value = nuss.matrix[pos_i + 1][pos_j];
    if(!map.has(value)){
        cords.push([pos_i + 1, pos_j]);
        map.set(value, cords);
        values.push(value);
    }
    //Case 2
    value = nuss.matrix[pos_i][pos_j - 1];
    if(map.has(value)){
        cords = map.get(value);
        cords.push([pos_i, pos_j - 1])
        map.set(value, cords);
    } else {
        cords = [[pos_i, pos_j - 1]];
        map.set(value, cords);
        values.push(value);
    }

    //Case 3
    let minimal_loop_length = 1;
    if(pos_j - pos_i > minimal_loop_length){
        if(is_canonical(nuss.sequence.charAt(pos_i), nuss.sequence.charAt(pos_j))){
            value = nuss.matrix[pos_i + 1][pos_j - 1] + 1;
            if (map.has(value)) {
                cords = map.get(value);
                cords.push([pos_i + 1, pos_j - 1])
                map.set(value, cords);
            } else {
                cords = [[pos_i + 1, pos_j - 1]];
                map.set(value, cords);
                values.push(value);
            }
        }
    }

    //Case 4
    for (let k = pos_i + 1; k < pos_j - 1; k++){ // <= ??
        value = nuss.matrix[pos_i][k] + nuss.matrix[k + 1][pos_j];
        if(map.has(value)){
            cords = map.get(value);
            cords.push([pos_i, k, k + 1, pos_j])
            map.set(value, cords);
        } else {
            cords = [[pos_i, k, k + 1, pos_j]];
            map.set(value, cords);
            values.push(value);
        }
    }
    let max = Math.max.apply(null, values);
    nuss.matrix[pos_i][pos_j] = max;

    let a = duplicate(nuss.matrix);
    nuss.calculations.push(a);
    nuss.backtrace[pos_i][pos_j] = map.get(max);
}

function is_canonical(base_i: string, base_j: string){
    switch(base_i){
        case "A":
            return base_j === "U";
        case "U":
            return base_j === "A" || base_j === "G";
        case "G":
            return base_j === "C" || base_j === "U";
        case "C":
            return base_j === "G";
        default:
            return false;
    }
}

function calculate_matrix(nuss: nussinov){
    for (let i = 1; i < nuss.sequence_lenght; i++){
        nuss.matrix[i][i-1] = 0;
    }
    for (let i = 0; i < nuss.sequence_lenght; i++){
        nuss.matrix[i][i] = 0;
    }

    let a = duplicate(nuss.matrix);
    nuss.calculations.push(a);

    for (let n = 1; n < nuss.sequence_lenght; n++){
        for (let j = n; j < nuss.sequence_lenght; j++){
            let i = j - n;
            get_score(nuss, i, j);
        }
    }
    nuss.max_score = nuss.matrix[0][nuss.sequence_lenght-1];
}

function backtrace(nuss: nussinov, pos_i, pos_j){
    let new_pos = nuss.backtrace[pos_i][pos_j][0];
    if(pos_i < pos_j){
        if(new_pos.length == 4){
            console.log("Bifurcation");
            backtrace(nuss, new_pos[0], new_pos[1]);
            backtrace(nuss, new_pos[2], new_pos[3]);
        }

        if(new_pos[0] === pos_i+1 && new_pos[1] === pos_j-1){
            console.log("This case");
            nuss.secondary_structure[pos_i] = "(";
            nuss.secondary_structure[pos_j] = ")";
            backtrace(nuss, new_pos[0], new_pos[1]);
        } else {
            backtrace(nuss, new_pos[0], new_pos[1]);
        }
    }

}

function calculate_nussinov(sequence: string){
    let nuss = new nussinov(sequence);
    calculate_matrix(nuss);
    backtrace(nuss, 0, nuss.sequence_lenght-1);
    return nuss;
}

// from stackoverflow, for debugging
/*
function createTable(tableData) {
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');

    tableData.forEach(function(rowData) {
        let row = document.createElement('tr');

        rowData.forEach(function(cellData) {
            let cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table)
}
*/
