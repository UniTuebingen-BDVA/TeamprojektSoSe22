import { get_current_index } from "./validate_fill";

export function helper_active(cell){
    let pos = get_current_index(cell);
    let table = cell.parentNode.parentNode;
    if (pos.y > pos.x){
        // case 1
        table.rows[pos.x+1].cells[pos.y].style.backgroundColor = "orange";
    
        // case 2
        table.rows[pos.x].cells[pos.y - 1].style.backgroundColor = "yellow";

        // case 3
        table.rows[pos.x+1].cells[pos.y - 1].style.backgroundColor = "brown";

        // case 4 [Bifurcation]
        let color = "#808080";
        let k = pos.x + 1 < pos.y ? pos.x + 1 : pos.y;
        while (k != pos.y){
            table.rows[pos.x].cells[k].style.backgroundColor = color;
            table.rows[k + 1].cells[pos.y].style.backgroundColor = color;
            color = gray_gradient(color, -20);
            k++;
        }
    }
    
}

export function helper_inactive(table){
    console.log("helper inactive was called on: " + table);
    console.log(table);
    for (let i = 1; i < table.rows.length; i++){
        for (let j = 1; j < table.rows[0].cells.length; j++){
            let crt_cell = table.rows[i].cells[j];
            console.log(crt_cell.style.backgroundColor);
            if (! (crt_cell.style.backgroundColor == "red" ||
                   crt_cell.style.backgroundColor == "lightblue" || 
                   crt_cell.style.backgroundColor == "blue")) {
                crt_cell.style.backgroundColor = "transparent";
            }
        }
    }
}

function gray_gradient(color, increment){
    let r = (parseInt(color.substring(1, 3), 16) + increment) % 266;
    let g = (parseInt(color.substring(3, 5), 16) + increment) % 266;
    let b = (parseInt(color.substring(5, 7), 16) + increment) % 266;

    return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}