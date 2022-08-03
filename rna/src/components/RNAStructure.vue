<template>
  <div id="rna_seq"></div>
</template>

<script setup>
import * as d3 from "d3";
import {meaningfulSeq} from "../scripts/RNA_Generator";
import {calculate_nussinov} from "../scripts/nussinov";
import {createGraphData} from "../scripts/graph";

const probs = defineProps({
  sequence: String,
  dotBracket: String,
  length: {
    type: Number,
    default: 5
  },
  secondaryStructure: Boolean
})

const emit = defineEmits({
  combine: Array
})

window.addEventListener("load", function(event) {
  //Generate sequence and dot-bracket notation
  let sequence = "";
  let dot_bracket = "";
  if(probs.secondaryStructure){
    if(typeof probs.sequence !== "undefined"){
      sequence = probs.sequence;
      if(typeof probs.dotBracket !== "undefined"){
        dot_bracket = probs.dotBracket;
      } else {
        dot_bracket = calculate_nussinov(sequence).secondary_structure;
      }
    } else {
      sequence = meaningfulSeq(probs.length);
      dot_bracket = calculate_nussinov(sequence).secondary_structure;
    }

  } else {
    if(typeof probs.sequence !== "undefined"){
      sequence = probs.sequence;

    } else {
      sequence = meaningfulSeq(probs.length);
    }
    for(let i; i < sequence.length; i++){
      dot_bracket += ".";
    }
  }
  let data = createGraphData(sequence, dot_bracket);

 /*  console.log(data) */

  // set the dimensions and margins of the graph
  const margin = {top: 30, right: 30, bottom: 30, left: 30},
      width = 300 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

  // Initialize svg
  const svg = d3.select("#rna_seq")
      .append("svg")
      .call(d3.zoom().on("zoom", function (event, d) {
        svg.attr("transform", event.transform)}))
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform",
          `translate(${margin.left}, ${margin.top}) scale(0.5)`);

  // Initialize the links
  let link = svg
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke", d => d.color)
      .style("stroke-width", "8px");

  // Initialize the nodes
  let node = svg.selectAll(".node")
      .data(data.nodes)
      .enter().append("g")
      .on("click", togglenode);

  const circle = node.append("circle")
      .attr("r", 20)
      .style("fill", d => d.color);

  const label = node.append("svg:text")
      .attr("text-anchor", "middle")
      .text(d => d.name)
      .attr("stroke", "black");

  // Initialize force simulation
  const simulation = d3.forceSimulation(data.nodes)
      .force("link", d3.forceLink()
          .id(function(d) { return d.id; })
          .links(data.links)
          .distance(40)
          .strength(1)
      )
      .force("charge", d3.forceManyBody()
          .strength(-500))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force('collide', d3.forceCollide()
          .radius(40))

  simulation.on("tick", ticked);

  // Update node position every tick
  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    circle
        .attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });

    label
        .attr("x", function (d) { return d.x; })
        .attr("y", function (d) { return d.y; });
  }

  // Initialize node drag handler
  const drag_handler = d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  drag_handler(node);

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  let clickedNodes = []

  function togglenode(event, d) {
    if (!clickedNodes.includes(d)){
      clickedNodes.push(d);
      clickedNodes = clickedNodes.sort()
    }
    if (clickedNodes.length === 2){
      let datalinks = data.links
      clickedNodes = clickedNodes.sort()
      for (const obj in datalinks) {
        // if a link already exists
        if (datalinks[obj].source.id === clickedNodes[0].id && datalinks[obj].target.id === clickedNodes[1].id ||
            datalinks[obj].source.id === clickedNodes[1].id && datalinks[obj].target.id === clickedNodes[0].id) {
          // and if the link is red (placed by the user): remove the link
          if (datalinks[obj].color === "red") {
            console.log("remove link")
            emit('combine', clickedNodes);
            removeLink(datalinks[obj].index);
          }
          clickedNodes = [];
          return;
        }
      }
      emit('combine', clickedNodes);
      update();
      clickedNodes = [];
      return;
    }

/*     console.log("DEBUG: " + clickedNodes); */

  }

  function simulateLinks() {
    link = svg
        .selectAll("line")
        .data(data.links)
        .join("line")
        .attr("stroke", d => d.color)
        .style("stroke-width", "8px")
        .lower();

    simulation.nodes(data.nodes).on("tick", ticked);
    simulation.force("link", d3.forceLink()
        .id(function(d) { return d.id; })
        .links(data.links));

    simulation.alpha(0.5).restart();
  }

  // remove a link between two nodes
  function removeLink(lindex) {
    data.links = data.links.filter(el => el.index !== lindex);

    link.remove();

    /* console.log(data.links) */

    simulateLinks()
  }

  // connect two nodes
  function update() {
    let newLink = {"source" : clickedNodes[0],
      "color" : "red",
      "index": data.links.length,
      "target": clickedNodes[1]};

    data.links.push(newLink);

    /* console.log(data.links) */

    simulateLinks()
  }
});

</script>