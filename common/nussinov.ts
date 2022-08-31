/**
 * Class TracebackChild
 * @param {any[][]} traceback_input - traceback_matrix of Nussinov
 * @param {boolean} is_bifurcation - is this TracebackChild a bifurcation
 * @param {number[]} next_position - gives the position of its nodes
 */
class TracebackChild {
  traceback: number[][]
  bifurcation: boolean;
  next_position: number[];
  // TracebackNode is an array that stores all Nodes of a child
  nodes: TracebackNode[];

  constructor(public traceback_input: number[][], public is_bifurcation: boolean, public next_position_input: number[]){
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
function build_nodes(traceback_input:number[][], position:number[]):TracebackNode[]{
  // Case if child is a bifurcation
  if(position.length == 4){
    let node_1 = new TracebackNode(traceback_input, false, [position[0], position[1]]);
    let node_2 = new TracebackNode(traceback_input, false, [position[2], position[3]]);
    return [node_1, node_2];
    // Case if child is no bifurcation
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
  traceback: number[][];
  is_root: boolean;
  position: number[];
  // TracebackChild is an array that stores all the children of a node.
  children: TracebackChild[];

  constructor(public traceback_input: number[][], public root: boolean, public input_position: number[]) {
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
function build_children(traceback:number[][], position:number[]):TracebackChild[]{
  let new_positions = traceback[position[0]][position[1]];
  let children = [];
  for (let i = 0; i < new_positions.length; i++) {
    //case if the next position is a bifurcation.
    if(new_positions[i].length == 4){
      children.push(new TracebackChild(traceback, true, new_positions[i]))
      //case if the next position is not a bifurcation.
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
  // Stores the path of the traceback with tuples of coordinates that are consecutive.
  traceback_path: number[][];
  // the secondary structure in dot-bracket notation.
  secondary_structure: string[];
  // needed for internal calculation of the traceback path.
  // it caches the bifurcation.
  bifurcation_puffer: number[][];
  // is used for the visualization of the traceback.
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
export class Nussinov{
  // The sequence
  sequence: string;
  // The length of the sequence
  sequence_length: number;
  // The scoring matrix
  matrix: number[][];
  // All interim results of the scoring matrix
  calculations: any[];
  // The backtrace matrix
  // Each cell consists of an array with all position variations that result in the cell's score.
  backtrace: number[][];
  // One secondary structure (in dot-bracket notation).
  secondary_structure: string[];
  // The max score
  max_score: number;

  // All optimal solutions
  // all_tracebacks consists of an array of Traceback objects (Traceback_obj)
  all_tracebacks: Traceback_obj[];
  // The traceback tree.
  nTree: any;


  constructor(public input_sequence: string) {
    this.sequence = input_sequence;
    this.sequence_length = input_sequence.length;
    this.matrix = make2dArray(input_sequence.length,-9);
    this.calculations = [];
    this.backtrace = make2dArray(input_sequence.length,-9);
    this.secondary_structure = initialize_sec_struc(input_sequence.length);
    this.max_score = 0;

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
export function make2dArray(size:number, val:number):number[][]  {
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
export function initialize_sec_struc(len:number):string[]{
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
export function duplicate(matrix_a: any[][]):any[][] {
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

  // map stores the different coordinates with their score as key.
  const map = new Map();
  // is used to be able to store all cords with the same value as one entry.
  let cords = [];
  // is used to store all keys, in order to keep track which key has the highest score.
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

  //Case 4 bifurcation
  for (let k = pos_i + 1; k < pos_j - 1; k++){
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

  // extracts the max score
  let max = Math.max.apply(null, values);
  nuss.matrix[pos_i][pos_j] = max;

  // stores all intermediate steps
  let a = duplicate(nuss.matrix);
  nuss.calculations.push(a);

  // stores all positions that created the max score in the backtrace matrix.
  nuss.backtrace[pos_i][pos_j] = map.get(max);
}

/**
 * Funktion that checks for two given Chars {A, U, G, C} if they are canonical.
 * also wobble base pairs are counted as a match.
 * @param {string} base_i - basepair one
 * @param {string} base_j - basepair two
 * @return {boolean}
 */
export function is_canonical(base_i: string, base_j: string):boolean{
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

  // Initializes the Matrix with 0 on the diagonal
  for (let i = 1; i < nuss.sequence_length; i++){
    nuss.matrix[i][i-1] = 0;
  }
  for (let i = 0; i < nuss.sequence_length; i++){
    nuss.matrix[i][i] = 0;
  }

  let a = duplicate(nuss.matrix);
  nuss.calculations.push(a);

  // goes through the upper right corner of the matrix and calls for each cell the function
  // get_score
  for (let n = 1; n < nuss.sequence_length; n++){
    for (let j = n; j < nuss.sequence_length; j++){
      let i = j - n;
      get_score(nuss, i, j);
    }
  }
  // stores the maximum score with the nussinov class.
  nuss.max_score = nuss.matrix[0][nuss.sequence_length-1];
}


/**
 * Function that generates the secondary structure of the path from a Traceback_obj.
 * @param {Traceback_obj} trace - Traceback object
 * @param {number} pos_i - first position in Matrix
 * @param {number} pos_j - second position in Matrix
 */
function traceback(traceback: Traceback_obj):void{
  let path = traceback.traceback_path;
  const path_length = path.length;

  for (let i = 0; i < path_length; i++) {
    let pos_tuple = path[i];
    let pos = pos_tuple[0]
    let next_pos = pos_tuple[1];
    // checks if consecutive positions are diagonal
    if(next_pos[0] === pos[0]+1 && next_pos[1] === pos[1]-1) {
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
    // checks if bifurcation_puffer is empty
    if(traceback.bifurcation_puffer.length == 0){
      nuss.all_tracebacks.push(traceback);
    }else {
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

    // Case 1 there is exactly one TracebackChild or the last TracebackChild of Case 2
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
  // creates the nussinov class
  let nuss = new Nussinov(sequence);

  // calculates the matrix and the backtrace matrix
  calculate_matrix(nuss);

  // creates the tree for the traceback
  nuss.nTree = new TracebackNode(nuss.backtrace, true, [0, sequence.length-1]);

  // creates first traceback_obj for initializing the extraction of all tracebacks.
  let fist_traceback = new Traceback_obj(nuss.sequence_length);

  // extracts all tracebacks
  extract_tracebacks_from_nTree(nuss, nuss.nTree, fist_traceback, single_structure);

  // goes through all tracebacks and creates the secondary structure for each.
  const number_of_optimal_solutions = nuss.all_tracebacks.length;
  for (let i = 0; i < number_of_optimal_solutions; i++) {
    traceback(nuss.all_tracebacks[i]);
  }

  // stores one secondary structure in the nussinov class.
  nuss.secondary_structure = fist_traceback.secondary_structure;
  return nuss;
}
