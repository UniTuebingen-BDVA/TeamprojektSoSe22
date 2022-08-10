import Swal from 'sweetalert2';

// checks if current cell is valid to be filled out (only diagonals & upper triangle matrix)
function is_cell_valid(cell){
    let table = cell.parentNode.parentNode.parentNode;
    let pos = get_current_index(cell)

    if (pos.y > pos.x){
        let cell_left_val = parseInt(table.rows[pos.x].cells[pos.y - 1].innerText);
        let cell_below_val = parseInt(table.rows[pos.x + 1].cells[pos.y].innerText);

        return ! isNaN(cell_left_val) && ! isNaN(cell_below_val);
    } else {
        return false;
    }
}

// gets current index of given cell (inside HTML table)
export function get_current_index(cell){
    let x = cell.closest("tr").rowIndex;
    let y = cell.cellIndex;
    return {x: x, y: y};
}

// checks if input is correct, according to the nussinov algorithm
function is_cell_value_correct(cell, user_input, nussinovMatrix){
    let pos = get_current_index(cell);
    pos.x--;
    pos.y--;
    
    if (parseInt(user_input) == nussinovMatrix[pos.x][pos.y]){
        return true;
    } else {
        return false;
    }
}

// checks if current cell is filled
function is_not_filled(cell){
    return isNaN(parseInt(cell.innerText))
}

// checks if last cell is filled
export function is_entire_table_filled(cell){
    let table = cell.parentNode.parentNode; //tbody
    let last_cell = table.rows[1].cells[table.rows.length-1]
    return ! is_not_filled(last_cell)
}

// validates input by user
//  parameters:
//      cell: HTML Object (Cell)
//      nussinovMatrix: Array of Arrays (filled nussinovMatrix)
//  returns:
//      boolean: false, if not valided, else true
export async function validate_fill(cell, nussinovMatrix){
    if (is_not_filled(cell)){
        if(is_cell_valid(cell)){
            const {value: user_input } = await Swal.fire({
                title: 'Please enter the value for the current cell!',
                input: 'number',
                showCancelButton: true,
                inputAttributes: {
                    min: 0
                },
                inputValidator: (value) => {
                    if (!value) {
                        return 'Please enter a number!';
                    }
                    else if (value < 0) {
                        return 'Are you sure it can be negative?';
                    }
                }
            })

            //If clicked on cancel button or outside of alert
            if(typeof user_input === "undefined"){
                return false;
            }

            if((!isNaN(user_input)) && is_cell_value_correct(cell, user_input, nussinovMatrix)){
                cell.innerText = user_input;
                return true;
            }
            else{
                Swal.fire({
                    title: 'Oops...',
                    text: 'Your value was incorrect, please check the equation and try again!',
                    icon: 'error',
                    confirmButtonText: 'Got it'
                  })
                return false;
            }
        } else {
            Swal.fire({
                title: 'Oops...',
                text: 'This cell cannot be filled yet, remember you can only fill cells along the diagonal in the upper triangle matrix!',
                icon: 'error',
                confirmButtonText: 'Got it'
              })
            return false;
        }
    } else {
        Swal.fire({
            title: 'Oops...',
            text: 'This cell is already filled, choose a different cell!',
            icon: 'error',
            confirmButtonText: 'Got it'
          })
        return false;
    }
}