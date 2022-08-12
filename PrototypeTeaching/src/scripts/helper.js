import { get_current_index } from "./validate_fill";

export function helper_active(cell){
    let pos = get_current_index(cell);
    let table = cell.parentNode.parentNode;
    if (pos.y > pos.x){
        // case 1
        table.rows[pos.x + 1].cells[pos.y].style.backgroundColor = "#45350a";
    
        // case 2
        table.rows[pos.x].cells[pos.y - 1].style.backgroundColor = "#b4a069";

        // case 3
        table.rows[pos.x + 1].cells[pos.y - 1].style.backgroundColor = "#ab8316";
        
        // case 4 [Bifurcation]
        let color = "#808080";
        let decrement = -20;
        let k = pos.x + 1 < pos.y ? pos.x + 1 : pos.y;
        while (k != pos.y){
            let cell_left = table.rows[pos.x].cells[k];
            cell_left.style.backgroundColor = cell_left.style.backgroundColor == "red" ? "red" : color;

            let cell_right = table.rows[k + 1].cells[pos.y];
            cell_right.style.backgroundColor = cell_right.style.backgroundColor == "red" ? "red" : color;

            color = gray_gradient(color, decrement);
            k++;
        }
    }
    
}

export function helper_inactive(table){
    for (let i = 1; i < table.rows.length; i++){
        for (let j = 1; j < table.rows[0].cells.length; j++){
            let crt_cell = table.rows[i].cells[j];
            if (! (crt_cell.style.backgroundColor == "red" ||
                   crt_cell.style.backgroundColor == "lightblue" || 
                   crt_cell.style.backgroundColor == "blue")) {
                crt_cell.style.backgroundColor = "transparent";
            }
        }
    }
}

function gray_gradient(color, increment){
    let n = 230;
    let r = math_modulo(parseInt(color.substring(1, 3), 16) + increment, n);
    let g = math_modulo(parseInt(color.substring(3, 5), 16) + increment, n);
    let b = math_modulo(parseInt(color.substring(5, 7), 16) + increment, n);

    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

function math_modulo(num, n){
    return ((num % n) + n) % n;
}