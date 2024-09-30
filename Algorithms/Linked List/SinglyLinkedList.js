class Node {
    constructor(data) {
        this.data = data;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node at the end
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Print the list
    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.data + ' -> ');
            current = current.next;
        }
        console.log('null');
    }
}

// Example usage
const list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.printList();
