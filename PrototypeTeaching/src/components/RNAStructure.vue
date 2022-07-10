<template>
    <div id="rna_seq"></div>
</template>

<script setup>
    import * as d3 from "d3";
    import {meaningfulSeq} from "../common/RNA_Generator";
    import {calculate_nussinov} from "../common/nussinov";
    import {createGraphData} from "./graph";

    const probs = defineProps({
        length: Number
    })

    window.addEventListener("load", function(event) {
        const sequence = meaningfulSeq(probs.length);
        const dot_bracket = calculate_nussinov(sequence).secondary_structure;
        let data = createGraphData(sequence, dot_bracket);

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
            .attr("style", "outline: thin solid black;")
            .append("g")
            .attr("transform",
                    `translate(${margin.left}, ${margin.top}) scale(0.5)`);

        // Initialize the links
        const link = svg
            .selectAll("line")
            .data(data.links)
            .join("line")
            .attr("stroke", d => d.color)
            .style("stroke-width", "8px");

        // Initialize the nodes
        const node = svg.selectAll(".node")
            .data(data.nodes)
            .enter().append("g");

        const circle = node.append("circle")
            .attr("r", 20)
            .style("fill", d => d.color);

        const label = node.append("svg:text")
            .attr("text-anchor", "middle")
            .text(d => d.name)
            .attr("stroke", "black");

        const simulation = d3.forceSimulation(data.nodes)                 
            .force("link", d3.forceLink()                               
                    .id(function(d) { return d.id; })
                    .links(data.links)                       
                    .distance(50)
                    .strength(1)                           
                    )
            .force("charge", d3.forceManyBody().strength(-300))         
            .force("center", d3.forceCenter(width / 2, height / 2))     
            .force('collide', d3.forceCollide(40))
            .on("tick", ticked);

        // This function is run at each iteration of the force algorithm, updating the nodes position.
        function ticked() {
            link
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            circle
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function (d) {
                    return d.y;});

            label
                .attr("x", function (d) { return d.x; })
                .attr("y", function (d) {
                    return d.y;});
        }
    });
</script>