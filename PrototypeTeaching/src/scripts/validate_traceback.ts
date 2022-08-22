// validates input by user
//  parameters:
//      cell1: HTML Object (Cell)
//      cell2: HTML Object (Cell)
//      backtrace_matrix: Array of Arrays (filled with the traceback)
//  returns:
//      : nothing
//  side effects:
//      colors the cells in red if they are part of the
//      traceback.

export function validate_traceback(cell1, cell2, backtrace_matrix) {
  const path = get_path(backtrace_matrix);
  const index_cell1 = get_current_index(cell1);
  const index_cell2 = get_current_index(cell2);
  if (is_path_valid(index_cell1, index_cell2, path)) {
    cell1.style.backgroundColor = "red";
    cell2.style.backgroundColor = "red";
    return true;
  }
  return false;
}

// checks if two cells are consecutive and part of the path
function is_path_valid(index_cell1, index_cell2, path) {
  for (let i = 0; i < path.length; i++) {
    if (path[i][0][0] == index_cell1.x && path[i][0][1] == index_cell1.y) {
      if (path[i][1][0] == index_cell2.x && path[i][1][1] == index_cell2.y) {
        return true;
      }
    }
  }
  return false;
}

// gets current index of given cell (inside HTML table)
function get_current_index(cell) {
  const x = cell.closest("tr").rowIndex - 1;
  const y = cell.cellIndex - 1;
  return { x: x, y: y };
}

// wrapper for the path_trace function
export function get_path(backtrace_matrix){
    let path = [];
    path_trace(backtrace_matrix, path, 0, backtrace_matrix.length-1);
    return path;
}

// extracts one path of the backtrace matrix
// and retruns it as a list of touples.

function path_trace(backtrace_matrix, path, pos_i, pos_j) {
  const new_pos = backtrace_matrix[pos_i][pos_j][0];
  if (pos_i < pos_j) {
    if (new_pos.length == 4) {
      //console.log("Bifurcation");
      path.push([
        [pos_i, pos_j],
        [new_pos[0], new_pos[1]],
      ]);
      path.push([
        [pos_i, pos_j],
        [new_pos[2], new_pos[3]],
      ]);

      path_trace(backtrace_matrix, path, new_pos[0], new_pos[1]);
      path_trace(backtrace_matrix, path, new_pos[2], new_pos[3]);
      return;
    }

    if (new_pos[0] === pos_i + 1 && new_pos[1] === pos_j - 1) {
      //console.log("This case");
      path.push([[pos_i, pos_j], new_pos]);
      path_trace(backtrace_matrix, path, new_pos[0], new_pos[1]);
      return;
    } else {
      //console.log(new_pos)
      path.push([[pos_i, pos_j], new_pos]);
      path_trace(backtrace_matrix, path, new_pos[0], new_pos[1]);
      return;
    }
  }
}
export function is_traceback_finished(backtrace_matrix) {
  const traceback = get_path(backtrace_matrix);
  if (traceback[-1].style.backgroundColor == "red") {
    return true;
  } else {
    return false;
  }
}
