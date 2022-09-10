/**
 * validates input by user
 * @param {Cell}  cell1 - HTML Object (Cell)
 * @param {Cell} cell2 - HTML Object (Cell)
 * @param {Traceback_obj[]} all_optimal_solutions - array of all optimal solutions as Traceback_obj
 * @return {{Traceback_obj[], boolean}} array of all solutions, that could be part of the user traceback
 * and a boolean if a hit was found.
 * @effects : colors the cells in red if they are part of the traceback.
 */
export function validate_traceback(cell1, cell2, all_optimal_solutions){
  let index_cell1 = get_current_index(cell1);
  let index_cell2 = get_current_index(cell2);
  let result = is_path_valid(index_cell1, index_cell2, all_optimal_solutions);
  if(result.found_hit){
    cell1.style.backgroundColor = "red";
    cell2.style.backgroundColor = "red";
  }
  return result;
}

/**
 * checks if two cells are consecutive and part of a path of all optimal solutions
 * @param {Cell}  index_cell1 - HTML Object (Cell)
 * @param {Cell} index_cell2 - HTML Object (Cell)
 * @param {Traceback_obj[]} all_optimal_solutions - array of all optimal solutions as Traceback_obj
 * @return {{Traceback_obj[], boolean}} array of all solutions, that could be part of the user traceback,
 * and a boolean.
 */
function is_path_valid(index_cell1, index_cell2, all_optimal_solutions){
  let output = false;
  let found_hit = false;
  let no_hits = [];
  let hits   = [];
  let number_of_optimal_solutions = all_optimal_solutions.length;

  for (let j = 0; j < number_of_optimal_solutions; j++) {
    let path = all_optimal_solutions[j].traceback_path;
    // DEBUG
    // console.log(all_optimal_solutions);
    // console.log(index_cell1, index_cell2);

    for (let i = 0; i < path.length; i++) {

      if(path[i][0][0] == index_cell1.x && path[i][0][1] == index_cell1.y){
        if(path[i][1][0] == index_cell2.x && path[i][1][1] == index_cell2.y){
          output = true;
          if(!found_hit){
            hits.push(all_optimal_solutions[j])
          }



          let traceback_puffer = all_optimal_solutions[j].traceback_puffer

          for (let k = 0; k < all_optimal_solutions[j].traceback_puffer.length; k++) {
            if(traceback_puffer[k][0] == index_cell1.x && traceback_puffer[k][1] == index_cell1.y
                || traceback_puffer[k][0] == index_cell2.x && traceback_puffer[k][1] == index_cell2.y){

              traceback_puffer.splice(k,1);
              k--;
            }
          }

          // path.splice(i,1);
          found_hit = true;
          // DEBUG
          // console.log(hits)
        }

      }
    }

    if(!found_hit){
      no_hits.push(all_optimal_solutions[j]);
    }
    found_hit = false;
  }

  if(output){
    return {output_hits: hits,found_hit: true};
  }else {
    return {output_hits: no_hits,found_hit: false};
  }

}

export function extract_cells_from_solutions(solutions):void{
  for (let i = 0; i < solutions.length; i++) {
    let traceback = solutions[i];
    for (let j = 1; j < traceback.traceback_path.length; j++) {
      traceback.traceback_puffer.push(traceback.traceback_path[j][1]);
    }
    traceback.traceback_puffer.push((traceback.traceback_path[0][0]));
    traceback.traceback_puffer.push((traceback.traceback_path[0][1]));
  }
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

// gets current index of given cell (inside HTML table)
export function get_current_index(cell){
  let x = cell.closest("tr").rowIndex -1;
  let y = cell.cellIndex -1;
  return {x: x, y: y};
}