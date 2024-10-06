function bfsShortestPath(graph, startNode, targetNode) {
    let queue = [[startNode]];
    let visited = new Set();
  
    while (queue.length > 0) {
      let path = queue.shift();
      let node = path[path.length - 1];
  
      if (node === targetNode) {
        return path;
      }
  
      if (!visited.has(node)) {
        visited.add(node);
  
        for (let neighbor of graph[node]) {
          let newPath = [...path, neighbor];
          queue.push(newPath);
        }
      }
    }
    return null; // No path found
  }
  
  // Example graph (unweighted)
  const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
  };
  
  // Find shortest path from 'A' to 'F'
  const shortestPath = bfsShortestPath(graph, 'A', 'F');
  console.log('Shortest path from A to F:', shortestPath);
  