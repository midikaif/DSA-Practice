
class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class Linklist {
    constructor(d) {
        this.head = null;
        this.min = null;
    }


    getMin() {
        if (this.head == null)
            return null;
        return this.min;
    }

    addAtHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    removeAtHead() {
        if (this.head == null) return;
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
    }

    get() {

        if (this.head != null)
            return this.head.data;
        return undefined;
    }

    isEmpty() {
        return this.head == null;
    }
}


class Stack {
    constructor() {
        this.ll = new Linklist();
    }

    makeMin(x) {
        this.ll.min = x;
    }

    getMin() {
        return this.ll.getMin();
    }

    push(x) {
        if (this.isEmpty()) {
            this.ll.addAtHead(x);
            this.makeMin(x);
        }

        if (x < this.getMin()) {
            let temp = x - this.getMin();
            this.ll.addAtHead(temp);
            this.ll.addAtHead(x);
            this.makeMin(x);
        }
        else {
            let temp = x - this.getMin();
            this.ll.addAtHead(temp);
            this.ll.addAtHead(x);
        }
    }

    pop() {
        if (this.isEmpty()) {
            console.log("***")
            this.makeMin(undefined)
            return undefined;
        }
        this.ll.removeAtHead();
        if (this.top() < 0) {
            let temp = this.getMin() - this.top();
            this.makeMin(temp);
        }
        this.ll.removeAtHead();
    }

    top() {
        return this.ll.get();
    }

    isEmpty() {
        return this.ll.isEmpty();
    }
}

let st = new Stack();
st.push(2);
st.push(1);
st.push(1);
st.push(7);
st.push(5);
st.push(0);
st.push(1);
st.push(-1);
st.push(-2);
st.pop();
st.pop();
st.pop();
// st.pop();
// st.pop();
// st.pop();
// st.pop();
// st.pop();
// st.pop();
// st.pop();
console.log(st.getMin());
