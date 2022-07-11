import * as d3 from "d3";

export function create_table(sequence){
	let data = fill_initial(get_table(sequence))
	tabulate(data, sequence)
}

function get_table(sequence){
    let n = sequence.length;
    let data = [];
    let header = sequence.split("");
    header.unshift("D", "");
    data.push(header);
    for(let i = 0; i < n; i++){
        let column = new Array(n+2);
        column.fill('');
        column[0] = sequence[i];
        data.push(column);
    }
    return data;
}

function fill_initial(table){
    let n = table.length;
    let m = table[0].length;
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            if (i == j){
                table[i][j] = 0;
                table[i][j+1] = 0;
            }
        }
    }
    return table;
}

function tabulate(data, sequence) {
    var table = d3.select('#table').append('table');
    var	tbody = table.append('tbody');

    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');

    // create a cell in each row for each column
    var cells = rows.selectAll('td')
        .data( function (row){
            return row;
        })
        .enter()
        .append('td')
        .attr('class', function (d){
            return (d == "" ||  d == 0) ? 'cell' : 'head';
        })
        .text(function (d){ return d;});
    return table;
}