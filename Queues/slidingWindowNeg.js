class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class Linklist {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addAtHead(data) {
        let newNode = new Node(data);
        if (this.head == null) this.tail = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    removeAtHead() {
        if (this.head == null) return;
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
        if (this.head == null) this.tail = null;
    }

    addAtTail(data) {
        if (this.head == null) {
            this.addAtHead(data);
            return;
        }
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    removeAtTail() {
        if (this.head == null) return;
        if (this.head.next == null) {
            this.head = null;
            return;
        }
        let tail = this.head;
        while (tail.next.next != null) {
            tail = tail.next
        }
        tail.next = null;
    }

    getHead() {
        if (this.head == null) return undefined;
        return this.head.data;
    }

    isEmpty() {
        return this.head === null;
    }
}

class queue {
    constructor() {
        this.ll = new Linklist();
    }

    enque(x) {
        this.ll.addAtTail(x);
    }

    dequeue() {
        this.ll.removeAtHead();
    }

    getFront() {
        return this.ll.getHead();
    }

    isEmpty() {
        return this.ll.isEmpty();
    }

}


function slidingWindowNeg(arr, k) {
    let output = [];
    let qu = new queue();
    let j = k - 1;
    for (let i = 0; i <= arr.length-k; i++){
        let start = i, end = j;
        while (start <= end) {
            if (arr[start] < 0) qu.enque(start);
            if (i > qu.getFront()) qu.dequeue();
            start++;
        }
        if (!qu.isEmpty()) output.push(arr[qu.getFront()]);
        else output.push(0)
        j++;
    }
    return output;
}

console.log(slidingWindowNeg([2, 0,-5,1, -3, -4], 3));