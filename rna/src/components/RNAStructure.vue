<template>
  <div :id="'rna_seq' + id"></div>
</template>

<script setup>
import * as d3 from "d3";
import { v4 as uuidv4 } from "uuid";
import { meaningfulSeq } from "../../../common/RNA_Generator";
import { calculate_nussinov } from "../../../common/nussinov";
import { createGraphData } from "../../../common/graph";
import { onMounted } from "vue";

//Unique ID for the d3 svg select
const id = uuidv4();

//properties of the RNAstruktur
const props = defineProps({
  sequence: String,
  dotBracket: String,
  length: {
    type: Number,
    default: 5,
  },
  secondaryStructure: Boolean,
});

//Emits
const emit = defineEmits({
  combine: Array,
});

//On creation of the RNAstruktur
onMounted(() => {
  //Generate sequence and dot-bracket notation
  let sequence = "";
  let dot_bracket = "";
  if (props.secondaryStructure) {
    if (typeof props.sequence !== "undefined") {
      sequence = props.sequence;
      if (typeof props.dotBracket !== "undefined") {
        dot_bracket = props.dotBracket;
      } else {
        dot_bracket = calculate_nussinov(sequence).secondary_structure;
      }
    } else {
      sequence = meaningfulSeq(props.length);
      dot_bracket = calculate_nussinov(sequence).secondary_structure;
    }
  } else {
    if (typeof props.sequence !== "undefined") {
      sequence = props.sequence;
    } else {
      sequence = meaningfulSeq(props.length);
    }
    for (let i = 0; i < sequence.length; i++) {
      dot_bracket += ".";
    }
  }
  let data = createGraphData(sequence, dot_bracket);

  // set the dimensions and margins of the graph
  const margin = { top: 30, right: 30, bottom: 30, left: 30 },
    width = 300 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

  // Initialize svg
  const svg = d3
    .select("#rna_seq" + id)
    .append("svg")
    .call(
      d3.zoom().on("zoom", function (event, d) {
        svg.attr("transform", event.transform);
      })
    )
    .attr("viewBox", `0 0 ${width} ${height}`)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top}) scale(0.5)`);

  // Initialize the links
  let link = svg
    .selectAll("line")
    .data(data.links)
    .join("line")
    .attr("stroke", (d) => d.color)
    .style("stroke-width", "8px");

  // Initialize the nodes
  let node = svg
    .selectAll(".node")
    .data(data.nodes)
    .enter()
    .append("g")
    .on("click", toggleNode);

  // Init the optical nodes
  const circle = node
    .append("circle")
    .attr("r", 20)
    .style("fill", (d) => d.color);

  // Set the nodes labels
  const label = node
    .append("svg:text")
    .attr("text-anchor", "middle")
    .text((d) => d.name)
    .attr("stroke", "black");

  // Initialize force simulation
  const simulation = d3
    .forceSimulation(data.nodes)
    .force(
      "link",
      d3
        .forceLink()
        .id(function (d) {
          return d.id;
        })
        .links(data.links)
        .distance(40)
        .strength(1)
    )
    .force("charge", d3.forceManyBody().strength(-500))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collide", d3.forceCollide().radius(40));

  simulation.on("tick", ticked);

  /**
   * Update the Position of the d3 Simulation Components every time the function is called.
   */
  function ticked() {
    link
      .attr("x1", function (d) {
        return d.source.x;
      })
      .attr("y1", function (d) {
        return d.source.y;
      })
      .attr("x2", function (d) {
        return d.target.x;
      })
      .attr("y2", function (d) {
        return d.target.y;
      });

    circle
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      });

    label
      .attr("x", function (d) {
        return d.x;
      })
      .attr("y", function (d) {
        return d.y;
      });
  }

  /**
   * Initialise a drag handler for the nodes of the Simulation.
   */
  const drag_handler = d3
    .drag()
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

  /**
   * Functions for connecting two nodes
   */
  // Buffer for the clicked Nodes
  let clickedNodes = [];
  // Heightmap to check for crossover connections
  let heightmap = [];
  for (let i = 0; i < sequence.length; i++) {
    heightmap.push(0);
  }

  /**
   * CHeck if two nodes are a canonical basepair
   * @param nodes needs 2 input nodes
   * @returns {boolean} returns if nodes are a canonical basepair
   */
  function isCanonicalBasepair(nodes) {
    let base1 = nodes[0]["name"];
    let base2 = nodes[1]["name"];

    base1 = base1.substring(0, base1.length - 1);
    base2 = base2.substring(0, base2.length - 1);

    if (base1 + base2 === "CG") {
      return true;
    } else if (base1 + base2 === "GC") {
      return true;
    } else if (base1 + base2 === "AU") {
      return true;
    } else if (base1 + base2 === "UA") {
      return true;
    } else if (base1 + base2 === "UG") {
      return true;
    } else if (base1 + base2 === "GU") {
      return true;
    }

    return false;
  }

  /**
   * Is triggert when nodes have been clicked and check if the lasst two clicked nodes can be connected
   * @param event
   * @param d
   */
  function toggleNode(event, d) {
    // Check if node is already clicked
    if (!clickedNodes.includes(d)) {
      clickedNodes.push(d);
      clickedNodes = clickedNodes.sort();
      // Check if 2 Nodes are clicked and they can be combined
      if (clickedNodes.length === 2 && checkLinks(clickedNodes)) {
        let allLinks = data.links;

        // Check the connection already exists
        for (const i in allLinks) {
          if (
            (allLinks[i].source.id === clickedNodes[0].id &&
              allLinks[i].target.id === clickedNodes[1].id) ||
            (allLinks[i].source.id === clickedNodes[1].id &&
              allLinks[i].target.id === clickedNodes[0].id)
          ) {
            // and if the link is red (placed by the user): remove the link
            if (allLinks[i].color === "red") {
              emit("combine", clickedNodes);
              removeLink(allLinks[i].index);
              decreaseHeightmap(clickedNodes);
            }
            clickedNodes = [];
            return;
          }
        }

        // Else connect the 2 nodes
        if (isCanonicalBasepair(clickedNodes)) {
          emit("combine", clickedNodes);
          addLink();
          increaseHeightmap(clickedNodes);
        }
        clickedNodes = [];
      }
      // If Nodes cannot be connected clear the Buffer
      else if (clickedNodes.length === 2 && !checkLinks(clickedNodes)) {
        clickedNodes = [];
      }
    }
  }

  // Function to reload the simulation after changing the connections
  /**
   * Updates the Links in the Simulation and restart the force simulation to apply the changes
   */
  function updateSimulationLinks() {
    link = svg
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke", (d) => d.color)
      .style("stroke-width", "8px")
      .lower();

    simulation.nodes(data.nodes).on("tick", ticked);
    simulation.force(
      "link",
      d3
        .forceLink()
        .id(function (d) {
          return d.id;
        })
        .links(data.links)
    );

    simulation.alpha(0.5).restart();
  }

  // remove a link between two nodes
  /**
   * Removes a link from the data by given index
   * @param linkIndex index of the link to remove
   */
  function removeLink(linkIndex) {
    data.links = data.links.filter((el) => el.index !== linkIndex);

    link.remove();

    updateSimulationLinks();
  }

  /**
   * Add a new link between the two clicked Nodes to the data
   */
  function addLink() {
    // Create the new Link
    let newLink = {
      source: clickedNodes[0],
      color: "red",
      index: data.links.length,
      target: clickedNodes[1],
    };
    // Add Link
    data.links.push(newLink);

    updateSimulationLinks();
  }

  /**
   * Decrease the Heightmap variable between 2 given Nodes
   * @param nodes two nodes as array
   */
  function decreaseHeightmap(nodes) {
    // Extract the IDs of the nodes
    const ids = [];
    for (const elem in nodes) {
      ids.push(nodes[elem].id);
      ids.sort();
    }
    // Decrease Heightmap
    for (let i = ids[0] + 1; i < ids[1]; i++) {
      heightmap[i] -= 1;
    }
  }

  /**
   * Increase Heightmap variable between 2 given Nodes
   * @param nodes two nodes as array
   */
  function increaseHeightmap(nodes) {
    // Extract the IDs of the Nodes
    const ids = [];
    for (const elem in nodes) {
      ids.push(nodes[elem].id);
      ids.sort();
    }
    // Increase Heightmap
    for (let i = ids[0] + 1; i < ids[1]; i++) {
      heightmap[i] += 1;
    }
  }

  /**
   * Check if a connection between two nodes is possible
   * @param nodes needs 2 nodes as array
   * @returns {boolean} check if the nodes can be connected
   */
  function checkLinks(nodes) {
    //Extract IDs of the two nodes
    const ids = [];
    for (const elem in nodes) {
      ids.push(nodes[elem].id);
    }

    //Check if Nodes are on same level to check for cross over connections
    if (heightmap[ids[0]] !== heightmap[ids[1]]) {
      return false;
    }

    // Check if Node has already a link
    // Extract all links that have been made by the user with the IDs of the nodes
    const links = data.links.filter((el) => {
      return (
        el.color === "red" &&
        (ids.includes(el.source.id) || ids.includes(el.target.id))
      );
    });

    // If there are connections with at least on of the Nodes
    if (links.length > 0) {
      // Check if the connection between the two clicked Nodes already exists
      // Then return true, so it can be removed
      return (
        ids.includes(links[0].source.id) && ids.includes(links[0].target.id)
      );
    }
    return true;
  }
});
</script>
