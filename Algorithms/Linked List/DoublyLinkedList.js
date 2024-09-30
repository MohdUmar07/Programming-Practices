class DoublyNode {
    constructor(data) {
        this.data = data;
        this.next = null; 
        this.prev = null; 
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; 
    }

    append(data) {
        const newNode = new DoublyNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        newNode.prev = current; 
    }

    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.data + ' <-> ');
            current = current.next;
        }
        console.log('null');
    }


    printReverse() {
        let current = this.head;
        while (current && current.next) {
            current = current.next;
        }
        while (current) {
            process.stdout.write(current.data + ' <-> ');
            current = current.prev;
        }
        console.log('null');
    }
}

// Example usage
const doublyList = new DoublyLinkedList();
doublyList.append(1);
doublyList.append(2);
doublyList.append(3);
doublyList.printList();    
doublyList.printReverse();  
