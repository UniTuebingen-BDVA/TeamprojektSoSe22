/**
 * Class TracebackChild
 * @param {any[][]} traceback_input - traceback_matrix of Nussinov
 * @param {boolean} is_bifurcation - is this TracebackChild a bifurcation
 * @param {number[]} next_position - gives the position of its nodes
 */
class TracebackChild {
  traceback: any[][]
  bifurcation: boolean;
  next_position: number[];
  nodes: TracebackNode[];
  constructor(public traceback_input: any[][], public is_bifurcation: boolean, public next_position_input: number[]){
    this.traceback = traceback_input;
    this.bifurcation = is_bifurcation;
    this.next_position = next_position_input;
    this.nodes = build_nodes(traceback_input, next_position_input);
  }
}

/**
 * Funktion to create TracebackNodes given a traceback matrix and the position
 * @param {any[][]} traceback_input - the traceback matrix
 * @param {number[]} position - the position of the node
 * @return {TracebackNode[]} returns the TracebackNode.
 */
function build_nodes(traceback_input:any[][], position:number[]):TracebackNode[]{
  if(position.length == 4){
    let node_1 = new TracebackNode(traceback_input, false, [position[0], position[1]]);
    let node_2 = new TracebackNode(traceback_input, false, [position[2], position[3]]);
    return [node_1, node_2];
  }else {
    return [new TracebackNode(traceback_input, false, position)];
  }
}

/**
 * Class node
 * @param {any[][]} traceback_input - traceback_matrix of Nussinov
 * @param {boolean} root - is this node the root?
 * @param {number[]} input_position - position of the node
 */
class TracebackNode{
  traceback: any[][];
  is_root: boolean;
  position: number[];
  children: TracebackChild[];

  constructor(public traceback_input: any[][], public root: boolean, public input_position: number[]) {
    this.is_root = root;
    this.traceback = traceback_input;
    this.position = input_position;
    this.children = build_children(traceback_input, input_position);
  }
}

/**
 * Funktion to create TracebackChildren given a traceback matrix and a position
 * @param {any[][]} traceback_input - the traceback matrix
 * @param {number[]} position - the position of the next node that the child is pointing at
 * @return {TracebackChild[]} returns the TracebackChild.
 */
function build_children(traceback:any[][], position:number[]):TracebackChild[]{
  let new_positions = traceback[position[0]][position[1]];
  let children = [];
  for (let i = 0; i < new_positions.length; i++) {
    if(new_positions[i].length == 4){
      children.push(new TracebackChild(traceback, true, new_positions[i]))
    }else
      children.push(new TracebackChild(traceback, false, new_positions[i]))
  }
  return children;
}


/**
 * Class for keeping track of different Traceback paths
 * @param {number} sequenze_length - The length of the Sequenze.
 */
class Traceback_obj{
  traceback_path: any[][];
  secondary_structure: string[];
  bifurcation_puffer: any[];
  traceback_puffer: number[][];

  constructor(public sequenze_length: number) {
    this.traceback_path = [];
    this.secondary_structure = initialize_sec_struc(sequenze_length)
    this.bifurcation_puffer = [];
    this.traceback_puffer = [];
  }
}


/**
 * Class for Nussinov implementation
 * @param {string} input_sequence - RNA Sequence to use for the Nussinov algorithm
 */
export class nussinov{
  sequence: string;
  sequence_length: number;
  matrix: number[][];
  calculations: any[];
  backtrace: any[][];
  secondary_structure: string[];
  max_score: number;

  all_tracebacks: Traceback_obj[];
  nTree: any;


  constructor(public input_sequence: string) {
    this.sequence = input_sequence;
    this.sequence_length = input_sequence.length;
    this.matrix = make2dArray(input_sequence.length,-9);
    this.calculations = [];
    this.backtrace = make2dArray(input_sequence.length,-9);
    this.secondary_structure = initialize_sec_struc(input_sequence.length);

    this.all_tracebacks = [];
    this.nTree = [];
  }
}


/**
 * Funktion to create a 2d Array
 * @param {number} size - size of the 2d Array
 * @param {number} val - initial value for every cell
 * @return {number[][]} Return 2d Matrix of size with val in every cell
 */
function make2dArray(size:number, val:number):number[][]  {
  let arr = new Array(size);
  for(let i = 0; i < size; i++) {
    arr[i] = new Array(size);
    for(let j = 0; j < size; j++) {
      arr[i][j] = val;
    }
  }
  return arr;
}

/**
 * Funktion that initializes Dot-Bracket secondary structure String as Array
 * @param {number} len - Length of secondary structure String
 * @return {string[]} Returns Dot-Bracket secondary structure String as Array
 */
function initialize_sec_struc(len:number):string[]{
  let arr = [];
  for(let i = 0; i < len; i++){
    arr[i] = ".";
  }
  return arr;
}

/**
 * Funktion that deepcopys the 2d matrix_a
 * @param {any[][]} matrix_a - The matrix that one wants to copy
 * @return {any[][]} - a copy of the matrix a
 */
function duplicate(matrix_a: any[][]):any[][] {
  return matrix_a.map(function(arr) {return arr.slice();});
}


/**
 * Funktion that calculates the score for a given position and
 * stores the result in the matrix of the given Nussinov object.
 * In addition all possible paths are stored in the traceback matrix of the object.
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
 * Funktion that checks for two given Chars {A, U, G, C} if they are canonical.
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
 * Function that calculates stepwise the matrix of an Nussinov object
 * @param {nussinov} nuss - Input Nussinov object
 */
function calculate_matrix(nuss: nussinov):void{
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
 * Function that generates the secondary structure of the path from a Traceback_obj.
 * @param {Traceback_obj} trace - Traceback object
 * @param {number} pos_i - first position in Matrix
 * @param {number} pos_j - second position in Matrix
 */
function next_gen_traceback(traceback: Traceback_obj):void{
  let path = traceback.traceback_path;
  const path_length = path.length;

  for (let i = 0; i < path_length; i++) {
    let pos_tuple = path[i];
    let pos = pos_tuple[0]
    let new_pos = pos_tuple[1];
    if(new_pos[0] === pos[0]+1 && new_pos[1] === pos[1]-1) {

      // Debug
      //console.log("This case");

      traceback.secondary_structure[pos[0]] = "(";
      traceback.secondary_structure[pos[1]] = ")";
    }
  }
}

/**
 * Recursive function that extracts the tracebacks from a given Nussinov object using its nTree.
 * @param {nussinov} nuss - the nussinov Object that is processed.
 * @param {TracebackNode} node - the TracebackNode where we are at the moment.
 * @param {Traceback_obj} traceback - the Traceback_obj we are computing atm.
 * @param {boolean} single_structure - if we want only one structure.
 * @return {void}
 */
function extract_tracebacks_from_nTree(nuss:nussinov, node:TracebackNode,
                                       traceback:Traceback_obj, single_structure: boolean):void{
  let children_count = node.children.length;

  // Case 1: there is no TracebackChild
  if(children_count == 0){
    if(traceback.bifurcation_puffer.length == 0){
      nuss.all_tracebacks.push(traceback);
    }else {

      //Debug
      //console.log("Puffer needed")

      let next_node = traceback.bifurcation_puffer.pop();
      extract_tracebacks_from_nTree(nuss, next_node, traceback, single_structure);
    }
  } else {

    // "switch" if we only want one secondary structure:
    if(single_structure){
      children_count = 1;
    }

    // Case 2 node has multiple children
    if (children_count > 1) {
      for (let i = 1; i < children_count; i++) {

        // For every children we need a new path
        let new_traceback = new Traceback_obj(nuss.sequence_length);
        new_traceback.traceback_path = duplicate(traceback.traceback_path);
        new_traceback.bifurcation_puffer = traceback.bifurcation_puffer.slice();

        let child = node.children[i];
        process_childs(nuss, node, child, new_traceback, single_structure);
      }
    }

    // Case 3 there is exactly one TracebackChild or the last TracebackChild of Case 2
    let child = node.children[0];
    process_childs(nuss, node, child, traceback, single_structure);

  }
}

/**
 * Function that processes childs from tree
 * @param {nussinov} nuss - the nussinov Object that is processed.
 * @param {TracebackNode} node - the TracebackNode where we are at the moment.
 * @param {TracebackChild} child - one of the TracebackChilds of the node
 * @param {Traceback_obj} traceback - the Traceback_obj we are computing atm.
 * @param {boolean} single_structure - if we want only one structure.
 * @return {void}
 */
function process_childs(nuss:nussinov, node: TracebackNode, child: TracebackChild,
                        traceback:Traceback_obj, single_structure:boolean):void{

  const pos = node.position
  const next_pos = child.next_position
  const pos_tuple = [pos, next_pos];


  if (child.bifurcation) {
    traceback.traceback_path.push([pos, [next_pos[0], next_pos[1]]]);
    traceback.traceback_path.push([pos, [next_pos[2], next_pos[3]]]);

    traceback.bifurcation_puffer.push(child.nodes[1]);
    extract_tracebacks_from_nTree(nuss, child.nodes[0], traceback, single_structure);
  } else {
    traceback.traceback_path.push(pos_tuple);
    extract_tracebacks_from_nTree(nuss, child.nodes[0], traceback, single_structure);
  }
}


/**
 * Apply Nussinov on Input sequence
 * @param {string} sequence - Sequence to apply nussinov
 * @return {nussinov} - Return a Nussinov Object
 */
export function calculate_nussinov(sequence: string, single_structure = true):nussinov{
  let nuss = new nussinov(sequence);
  calculate_matrix(nuss);

  nuss.nTree = new TracebackNode(nuss.backtrace, true, [0, sequence.length-1]);

  let fist_traceback = new Traceback_obj(nuss.sequence_length);


  extract_tracebacks_from_nTree(nuss, nuss.nTree, fist_traceback, single_structure);


  let number_of_optimal_solutions = nuss.all_tracebacks.length;


  for (let i = 0; i < number_of_optimal_solutions; i++) {
    next_gen_traceback(nuss.all_tracebacks[i]);
  }

  nuss.secondary_structure = fist_traceback.secondary_structure;

  return nuss;
}
