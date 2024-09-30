class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add element to the queue (enqueue operation)
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove element from the queue (dequeue operation)
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // View the front element of the queue
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Display all elements in the queue
    printQueue() {
      return this.items.toString();
    }
  }
  
  // Usage example
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.printQueue());  // Output: 10,20,30
  console.log(queue.dequeue());     // Output: 10
  console.log(queue.front());       // Output: 20
  