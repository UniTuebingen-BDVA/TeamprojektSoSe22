import * as d3 from "d3";
import {meaningfulSeq} from "../common/RNA_Generator";
import {calculate_nussinov} from "../common/nussinov";

function createGraphData(sequence, dot_bracket){
    let data = {"nodes": [],
                "links": []};
        
    for (let i = 0; i < sequence.length; i++){
        // create node with sequence[i]
        let new_node = {"id": i,
                        "name": sequence[i] + i}
        data.nodes.push(new_node)

        // set path from sequence[i] to sequence[i+1]
        let new_link = {"source": i,
                        "target": i+1,
                        "type": "old"};
        data.links.push(new_link)
        if(i == sequence.length - 1){
            data.links.pop()
        }
        
        // finds bracket partner by "eliminating" closing brackets, until matching closing bracket is found
        if (dot_bracket[i] == "("){
            let k = 0;
            for (let j = i+1; j < dot_bracket.length; j++){
                if(dot_bracket[j] == "("){
                    k++;
                } else if (dot_bracket[j] == ")"){
                    if (k == 0){
                        new_link = {"source": i,
                                    "target": j,
                                    "type": "new"};
                        data.links.push(new_link)
                        break;
                    } else {
                        k--;
                    }
                }
            }
        }
    }
    return data;
}
// set the dimensions and margins of the graph
const margin = {top: 20, right: 20, bottom: 30, left: 40},
width = 400 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

// Initialize svg
const svg = d3.select("#rna_seq")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("style", "outline: thin solid black;")
    .append("g")
    .attr("transform",
            `translate(${margin.left}, ${margin.top}) scale(0.7)`);

const sequence = meaningfulSeq(10);
const dot_bracket = calculate_nussinov(sequence).secondary_structure;

// const sequence = "CACGCUGAACGUACU";
//const dot_bracket = ".(((.(..))))(.)";
//const sequence = "AGGAGACAGUUGGUUGAGAC";
//const dot_bracket = ".(....(.)((.)((.))))";
let data = createGraphData(sequence, dot_bracket);

// Initialize the links
const link = svg
    .selectAll("line")
    .data(data.links)
    .join("line")
    .attr("stroke", d => d.type=="old" ? "#bbbbbb" : "red")
    .style("stroke-width", "8px");

// Initialize the nodes
const node = svg.selectAll(".node")
    .data(data.nodes)
    .enter().append("g");

const circle = node.append("circle")
    .attr("r", 20)
    .style("fill", "#779eb2");

const label = node.append("svg:text")
    .attr("text-anchor", "middle")
    .text(d => d.name)
    .attr("stroke", "black");

// Let's list the force we wanna apply on the network
const simulation = d3.forceSimulation(data.nodes)                 
    .force("link", d3.forceLink()                               
            .id(function(d) { return d.id; })                     
            .links(data.links)                                 
            )
    .force("charge", d3.forceManyBody()
                        .strength(0)
                        .distanceMax(60))         
    .force("center", d3.forceCenter(width / 2, height / 2))     
    .force('collide', d3.forceCollide(d => 40))
    .on("end", ticked);

// This function is run at each iteration of the force algorithm, updating the nodes position.
function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    circle.attr("cx", function (d) { return d.x; })
    .attr("cy", function (d) {
        return d.y;
    });

    label.attr("x", function (d) { return d.x; })
    .attr("y", function (d) {
        return d.y;
    });
}

