import { FindCircuits } from "./circuits";

export function createGraphData(sequence, dot_bracket) {
  let data = { nodes: [], links: [] };

  for (let i = 0; i < sequence.length; i++) {
    // create node with sequence[i]
    let new_node = { id: i, name: sequence[i] + i, color: "#779eb2" };
    data.nodes.push(new_node);

    // set path from sequence[i] to sequence[i+1]
    let new_link = { source: i, target: i + 1, color: "#bbbbbb" };
    data.links.push(new_link);
    if (i === sequence.length - 1) {
      data.links.pop();
    }

    // finds bracket partner by "eliminating" closing brackets, until matching closing bracket is found
    if (dot_bracket[i] === "(") {
      let k = 0;
      for (let j = i + 1; j < dot_bracket.length; j++) {
        if (dot_bracket[j] === "(") {
          k++;
        } else if (dot_bracket[j] === ")") {
          if (k === 0) {
            new_link = { source: i, target: j, color: "red" };
            data.links.push(new_link);
            break;
          } else {
            k--;
          }
        }
      }
    }
  }
  let circuits = FindCircuits(data);
  //stabilize stems and loops
  for (const c of circuits) {
    if (c.length === 4) {
      data.links.push({
        source: c[0],
        target: c[2],
        color: "transparent",
      });
      data.links.push({
        source: c[1],
        target: c[3],
        color: "transparent",
      });
    } else if (c.length > 4) {
      data.nodes.push({
        id: c.reduce((pv, cv) => pv + cv, 0),
        name: "",
        color: "transparent",
      });
      for (let i = 0; i < c.length; i++) {
        data.links.push({
          source: c.reduce((pv, cv) => pv + cv, 0),
          target: c[i],
          color: "transparent",
        });
      }
    }
  }
  return data;
}
