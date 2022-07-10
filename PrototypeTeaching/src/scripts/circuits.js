// from https://gist.github.com/savinuvijay/06de64299e23bbdea7e38d825e3ad774

function D3GraphConvert(graph) {
    let v = [];
    for (let i = 0; i < graph.nodes.length; i++){
        let new_v = {
            vertex: graph.nodes[i].id,
            adjList: []
        }
        v.push(new_v)
    }

    for (let i = 0; i < graph.links.length; i++){
        v[graph.links[i].source].adjList.push(graph.links[i].target)
        v[graph.links[i].target].adjList.push(graph.links[i].source)
    }

    let new_graph = {
        vertices: v
    }

    return  new_graph;

}

// ----- Form spanning tree

function GetSpanningTree(graph) {
    const spannigTree = new Map();

    graph.vertices.forEach((node) => {
        spannigTree.set(node.vertex, new Set());
    });

    let visitedVertices = new Set();

    graph.vertices.forEach((node) => {
        node.adjList.forEach((child) => {
            if (!visitedVertices.has(child)) {
                visitedVertices.add(child);
                spannigTree.get(node.vertex).add(child);
                spannigTree.get(child).add(node.vertex);
            }
        });
    });
    return spannigTree;
}

// ----- Find rejected edges Method

function GetRejectedEdges(graph, spannigTree) {
    let rejectedEdges = new Set();

    graph.vertices.forEach((node) => {
        if (spannigTree.has(node.vertex)) {
            node.adjList.forEach((child) => {
                if (!spannigTree.get(node.vertex).has(child)) {
                    if (!rejectedEdges.has(child + "-" + node.vertex)) {
                        rejectedEdges.add(node.vertex + "-" + child);
                    }
                }
            });
        }
    });

    return rejectedEdges;
}

// ----- Find Cycle Method

function FindCycle(
    start,
    end,
    spannigTree,
    visited = new Set(),
    parents = new Map(),
    current_node = start,
    parent_node = " "
) {
    let cycle = null;
    visited.add(current_node);
    parents.set(current_node, parent_node);
    const destinations = spannigTree.get(Number(current_node));
    for (const destination of destinations) {
        if (destination === end) {
            cycle = GetCyclePath(start, end, current_node, parents);
            return cycle;
        }
        if (destination == parents.get(current_node)) {
            continue;
        }
        if (!visited.has(destination)) {
            cycle = FindCycle(
                start,
                end,
                spannigTree,
                visited,
                parents,
                destination,
                current_node
            );
            if (!!cycle) return cycle;
        }
    }
    return cycle;
}

// ----- Get all cycles from the input graph

function GetAllCycles(graph, spannigTree) {
    let cycles = [];
    let rejectedEdges = GetRejectedEdges(graph, spannigTree);
    rejectedEdges.forEach((edge) => {
        let ends = edge.split("-");
        let start = Number(ends[0]);
        let end = Number(ends[1]);
        let cycle = FindCycle(start, end, spannigTree);
        if (!!cycle) {
            cycles.push(cycle);
        }
    });
    return cycles;
}

// ----- Get Cycle path by backtracking

function GetCyclePath(start, end, current, parents) {
    let cycle = [end];
    while (current != start) {
        cycle.push(current);
        current = parents.get(current);
    }
    cycle.push(start);
    return cycle;
}

// ----- Sort vertices by decreasing order of number of edges

function GetSortedVertices(graph2) {
    graph2.vertices.sort(function (a, b) {
        return b.adjList.length - a.adjList.length;
    });
    return graph2;
}

// ----- main function that find Circuits

 export function FindCircuits(graph) {
    let convertedGraph = D3GraphConvert(graph);
    let sortedGraph = GetSortedVertices(convertedGraph);
    let spannigTree = GetSpanningTree(sortedGraph);
    return GetAllCycles(convertedGraph, spannigTree);
}