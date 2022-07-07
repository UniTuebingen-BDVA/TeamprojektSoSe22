/**
 * Class for Nussinov implementation
 * @param {string} input_sequence - RNA Sequence to use for the Nussinov algorithm
 */
class nussinov{
    sequence: string;
    sequence_length: number;
    matrix: number[][];
    max_score: number;
    calculations: any[];
    backtrace: any[][];
    secondary_structure: string[];

    constructor(public input_sequence: string) {
        // Set Sequence
        this.sequence = input_sequence;
        this.sequence_length = input_sequence.length;
        // Construct Matrix
        this.matrix = make2dArray(input_sequence.length,7);
        this.max_score = 0;
        this.calculations = [];
        // Construct result parameter
        this.backtrace = make2dArray(input_sequence.length,7);
        this.secondary_structure = initialize_sec_struct(input_sequence.length);
    }
}

/**
 * Funktion to create a 2d Array
 * @param {number} size - size of the 2d Array
 * @param {number} val - value for diagonal axis
 * @return {number[][]} Return 2d Matrix of size with val on diagonal axis
 */
function make2dArray(size:number, val:number):number[][] {
    let arr:number[][] = new Array(size);

    for(let i = 0; i < size; i++) {
        arr[i] = new Array(size);
        for(let j = 0; j < size; j++) {
            arr[i][j] = val;
        }
    }
    return arr;
}

/**
 * Initialize Dot-Bracket secondary structure String as Array
 * @param {number} len - Length of secondary structure String
 * @return {string[]} Returns Dot-Bracket secondary structure String as Array
 */
function initialize_sec_struct(len:number):string[]{
    let arr:string[] = [];

    for(let i = 0; i < len; i++){
        arr[i] = ".";
    }
    return arr;
}

/**
 * //TODO ???
 * @param matrix_a ???
 * @return ???
 */
function duplicate(matrix_a){
    return matrix_a.map(function(arr) {return arr.slice();});
}

/**
 * Implementation of the Nussinov algorithm
 * @param {nussinov} nuss - Nussinov object as input
 * @param {number} pos_i - first position in Matrix
 * @param {number} pos_j - second position in Matrix
 */
function get_score(nuss: nussinov, pos_i: number, pos_j: number):void{
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

/**
 * Check for canonical Basepair
 * @param {string} base_i - basepair one
 * @param {string} base_j - basepair two
 * @return {boolean}
 */
function is_canonical(base_i: string, base_j: string):boolean{
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

/**
 * Create stepwise calculation matrix
 * @param {nussinov} nuss - Input Nussinov object
 */
function calculate_matrix(nuss: nussinov):void {
    for (let i = 1; i < nuss.sequence_length; i++){
        nuss.matrix[i][i-1] = 0;
    }
    for (let i = 0; i < nuss.sequence_length; i++){
        nuss.matrix[i][i] = 0;
    }

    let a = duplicate(nuss.matrix);
    nuss.calculations.push(a);

    for (let n = 1; n < nuss.sequence_length; n++){
        for (let j = n; j < nuss.sequence_length; j++){
            let i = j - n;
            get_score(nuss, i, j);
        }
    }
    nuss.max_score = nuss.matrix[0][nuss.sequence_length-1];
}

/**
 * Calculate Backtrace Matrix
 * @param {nussinov} nuss - Nussinov Object
 * @param {number} pos_i - first position in Matrix
 * @param {number} pos_j - second position in Matrix
 */
function backtrace(nuss: nussinov, pos_i:number, pos_j:number):void{
    let new_pos = nuss.backtrace[pos_i][pos_j][0];
    if(pos_i < pos_j){
        if(new_pos.length == 4){
            // DEBUG
            // console.log("Bifurcation");
            backtrace(nuss, new_pos[0], new_pos[1]);
            backtrace(nuss, new_pos[2], new_pos[3]);
        }

        if(new_pos[0] === pos_i+1 && new_pos[1] === pos_j-1){
            // DEBUG
            // console.log("This case");
            nuss.secondary_structure[pos_i] = "(";
            nuss.secondary_structure[pos_j] = ")";
            backtrace(nuss, new_pos[0], new_pos[1]);
        } else {
            backtrace(nuss, new_pos[0], new_pos[1]);
        }
    }

}

/**
 * Apply Nussinov on Input sequence
 * @param {string} sequence - Sequence to apply nussinov
 * @return {nussinov} - Return a Nussinov Object
 */
function calculate_nussinov(sequence: string):nussinov{
    let nuss = new nussinov(sequence);
    calculate_matrix(nuss);
    backtrace(nuss, 0, nuss.sequence_length-1);
    return nuss;
}

module.exports = { make2dArray, initialize_sec_struct, calculate_nussinov };