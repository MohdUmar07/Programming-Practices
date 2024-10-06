function dfs(graph, node, visited = new Set()) {
    if (visited.has(node)) return;
  
    console.log(node);
    visited.add(node);
  
    for (let neighbor of graph[node]) {
      dfs(graph, neighbor, visited); // Recursively visit unvisited neighbors
    }
  }
  
  // Example graph (same as before)
  const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
  };
  
  // Run DFS from node 'A'
  dfs(graph, 'A');
  