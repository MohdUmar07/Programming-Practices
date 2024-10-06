function bfs(graph, startNode) {
    let queue = [startNode];
    let visited = new Set();
    visited.add(startNode);
  
    while (queue.length > 0) {
      let node = queue.shift(); // Dequeue the first node
      console.log(node);
  
      // Explore the neighbors
      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor); // Enqueue unvisited neighbors
        }
      }
    }
  }
  
  // Example graph represented as an adjacency list
  const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
  };
  
  // Run BFS from node 'A'
  bfs(graph, 'A');
  