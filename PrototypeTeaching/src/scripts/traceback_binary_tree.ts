import { get_current_index } from "../scripts/validate_fill";

// represents the position of a cell within a table, or similar matrix
class pos {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// represents cell within the table as an element to be used for traceback
// works as a binary tree
export class PathNode {
  cell: HTMLTableCellElement;
  left: PathNode | undefined;
  right: PathNode | undefined;
  value: number;
  pos: pos;
  constructor(cell: HTMLTableCellElement) {
    this.cell = cell;
    this.value = parseInt(cell.innerText);
    this.pos = get_current_index(cell);
    this.left = this.left;
    this.right = this.right;
  }
  // initial values.
  //  this = node to be added
  //  crtNode = headNode
  //  prevNode = parent of node to be added
  addNode(crtNode: PathNode, prevNode: PathNode) {
    if (crtNode.cell === prevNode.cell) {
      if (crtNode.left === undefined) {
        crtNode.left = this;
      } else if (crtNode.right === undefined) {
        crtNode.right = this;
      }
    } else {
      if (crtNode.left != undefined) {
        this.addNode(crtNode.left, prevNode);
      }
      if (crtNode.right != undefined) {
        this.addNode(crtNode.right, prevNode);
      }
      return false;
    }
  }
}

// initial crtNode should be HeadNode
// edits a high-scope variable, that should be set to true before invoking the function
// additional possible check: use score similar to single-solution
function isDone(crtNode: PathNode | undefined) {
  if (crtNode != undefined) {
    console.log(crtNode);
    if (
      crtNode.left === undefined &&
      crtNode.right === undefined &&
      crtNode.pos.x != crtNode.pos.y
    ) {
      console.log(crtNode);
      //tailEndsCorrect = false; //must correspond to a known previously initialized variable
    } else {
      isDone(crtNode.left);
      isDone(crtNode.right);
    }
  }
}

// initial values should be: crtNode = headNode, crtString = .....
// given a head node, returns the corresponding dot bracket notation
function dotBracket(crtNode: PathNode, crtString: string): string {
  if (crtNode.left !== undefined) {
    if (crtNode.value - crtNode.left.value === 1) {
      if (
        crtNode.left.pos.x - crtNode.pos.x === 1 &&
        crtNode.pos.y - crtNode.left.pos.y === 1
      ) {
        crtString = addBasePair(crtString!, crtNode.pos);
      }
    }
    dotBracket(crtNode.left, crtString);
  }
  if (crtNode.right !== undefined) {
    if (crtNode.value - crtNode.right.value === 1) {
      if (
        crtNode.right.pos.x - crtNode.pos.x === 1 &&
        crtNode.pos.y - crtNode.right.pos.y === 1
      ) {
        crtString = addBasePair(crtString!, crtNode.pos);
      }
    }
    dotBracket(crtNode.right, crtString);
  }
  return crtString;
}

// adds a base pair in given dot bracket structure at given position, returns new dot bracket
export function addBasePair(str: string, pos: pos): string {
  if (pos.x > pos.y) {
    str = setCharAt(str, pos.y - 1, ")");
    str = setCharAt(str, pos.x - 1, "(");
    return str;
  } else {
    str = setCharAt(str, pos.x - 1, "(");
    str = setCharAt(str, pos.y - 1, ")");
    return str;
  }
}

// helper function, sets char at certain position in string
function setCharAt(str: string, pos: number, char: string): string {
  return str.substring(0, pos) + char + str.substring(pos + 1);
}

// fills the dp matrix, useful for debugging traceback stage etc.
// to prevent being stuck in fill phase, set isFilled to true
function fillTable(nMatrix, tbody, seq: string): void {
  for (let i = 0; i < seq.length; i++) {
    for (let j = 0; j < seq.length; j++) {
      tbody.rows[i + 1].cells[j + 1].innerText = nMatrix[i][j];
    }
  }
}
