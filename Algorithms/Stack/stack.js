class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add element to the stack (push operation)
    push(element) {
      this.items.push(element);
    }
  
    // Remove element from the stack (pop operation)
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // View the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Display all elements in the stack
    printStack() {
      return this.items.toString();
    }
  }
  
  // Usage example
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.printStack()); // Output: 10,20,30
  console.log(stack.pop());        // Output: 30
  console.log(stack.peek());       // Output: 20
  