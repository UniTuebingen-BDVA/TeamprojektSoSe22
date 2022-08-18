import * as d3 from "d3";

// calls functions to render the table
export function create_table(sequence) {
  let data = fill_initial(get_table(sequence));
  tabulate(data, sequence);
}

// creates a table with the given sequence, with the sequence as a header
function get_table(sequence) {
  let n = sequence.length;
  let data = [];
  let header = sequence.split("");
  header.unshift("D");
  data.push(header);
  for (let i = 0; i < n; i++) {
    let column = new Array(n + 1);
    column.fill("");
    column[0] = sequence[i];
    data.push(column);
  }
  return data;
}

// fills the initial values, returns the table
function fill_initial(table) {
  for (let i = 1; i < table.length; i++) {
    table[i][i] = 0;
    if (i + 1 < table.length) {
      table[i + 1][i] = 0;
    }
  }
  return table;
}

// calls functions to render a filled table
export function create_filled_table(sequence, nussinovMatrix) {
  let data = add_seq_to_table(sequence, nussinovMatrix);
  tabulate(data, sequence);
}

// adds the header and sequence name to a matrix
function add_seq_to_table(sequence, nussinovMatrix) {
  for (let i = 2; i < sequence.length; i++) {
    for (let j = 0; j < i - 1; j++) {
      nussinovMatrix[i][j] = "";
    }
  }
  let n = sequence.length;
  let data = nussinovMatrix;
  let header = sequence.split("");
  header.unshift("D");
  data.unshift(header);
  for (let i = 0; i < n; i++) {
    data[i + 1].unshift(sequence[i]);
  }
  console.log(data);
  return data;
}

// renders table at the object with the id "table"
function tabulate(data) {
  var table = d3.select("#table").append("table");
  var tbody = table.append("tbody");

  // create a row for each object in the data
  var rows = tbody.selectAll("tr").data(data).enter().append("tr");

  // create a cell in each row for each column
  var cells = rows
    .selectAll("td")
    .data(function (row) {
      return row;
    })
    .enter()
    .append("td")
    .attr("class", function (d) {
      return d == "" || typeof d == "number" ? "cell" : "head";
    })
    .text(function (d) {
      return d;
    });
  return table;
}
