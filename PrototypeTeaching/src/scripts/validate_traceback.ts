
export function validate_traceback(cell1, cell2, backtrace_matrix){
    let path = get_path(backtrace_matrix);
    let index_cell1 = get_current_index(cell1)
    let index_cell2 = get_current_index(cell2)
    //console.log(index_cell1)
    //console.log(index_cell2)
    console.log(is_path_valid(index_cell1, index_cell2, path))
    if(is_path_valid(index_cell1, index_cell2, path)){
        cell1.style.backgroundColor = "red";
        cell2.style.backgroundColor = "red";
    }
    return
}

function is_path_valid(index_cell1, index_cell2, path){
    for (let i = 0; i < path.length; i++) {
        if(path[i][0][0] == index_cell1.x && path[i][0][1] == index_cell1.y){
            if(path[i][1][0] == index_cell2.x && path[i][1][1] == index_cell2.y){
                return true;
            }
        }
    }
    return false;
}

// gets current index of given cell (inside HTML table)
function get_current_index(cell){
    let x = cell.closest("tr").rowIndex -1;
    let y = cell.cellIndex -1;
    return {x: x, y: y};
}


function get_path(backtrace_matrix){
    let path = [];
    path_trace(backtrace_matrix, path, 0, backtrace_matrix.length-1);
    return path;
}


function path_trace(backtrace_matrix, path, pos_i, pos_j){
    let new_pos = backtrace_matrix[pos_i][pos_j][0];
    if(pos_i < pos_j){
        if(new_pos.length == 4){
            //console.log("Bifurcation");
            path.push([[pos_i, pos_j], [new_pos[0], new_pos[1]]])
            path.push([[pos_i, pos_j], [new_pos[2], new_pos[3]]])

            path_trace(backtrace_matrix, path, new_pos[0], new_pos[1]);
            path_trace(backtrace_matrix, path, new_pos[2], new_pos[3]);
            return;
        }

        if(new_pos[0] === pos_i+1 && new_pos[1] === pos_j-1){
            //console.log("This case");
            path.push([[pos_i, pos_j], new_pos])
            path_trace(backtrace_matrix, path, new_pos[0], new_pos[1]);
            return;
        } else {
            //console.log(new_pos)
            path.push([[pos_i, pos_j], new_pos])
            path_trace(backtrace_matrix, path, new_pos[0], new_pos[1]);
            return;
        }
    }

}