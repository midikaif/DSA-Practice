class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class Linklist {
    constructor() {
        this.head = null;

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

    push(x) {
        this.ll.addAtHead(x);
    }

    pop() {
        this.ll.removeAtHead();
    }

    top() {
        return this.ll.get();
    }

    isEmpty() {
        return this.ll.isEmpty();
    }
}

function nextGreaterElem(arr) {
    let st = new Stack();
    let output = [];
    st.push(0);
    for (let i = 1; i < arr.length; i++) {
        while (!st.isEmpty() && arr[i] > arr[st.top()]) {
            output[st.top()] = arr[i];
            st.pop();
        }
        st.push(i);
    }

    while (!st.isEmpty()) {
        output[st.top()] = -1;
        st.pop();
    }
    return output;
}

// [12, 7, 3, 5, 4, 6, 8]
// [7,  3,  , 4,  ,  ,  ]

function nextSmallerElem(arr) {
    let st = new Stack();
    let output = [];
    st.push(0);
    for (let i = 1; i < arr.length; i++) {
        while (!st.isEmpty() && arr[i] < arr[st.top()]) {
            output[st.top()] = arr[i];
            st.pop();
        }
        st.push(i);
    }
    while (!st.isEmpty()) {
        output[st.top()] = -1;
        st.pop();
    }
    return output;
}


function nse(arr) {
    let st = new Stack();
    let nse = [];
    //initialize
    for (let i = 0; i < arr.length; i++) nse[i] = arr.length - i;

    for (let i = 0; i < arr.length; i++) {
        // for next less
        while (!st.isEmpty() && st.top()[0] > arr[i]) {
            let x = st.top();
            st.pop();
            nse[x[1]] = i - x[1];
        }
        st.push([arr[i], i]);
    }
    return nse;
}




// [ 0, 1, 2, 3, 4, 5, 6]
// [12, 7, 3, 5, 4, 6, 8]
// [7 ,12]
//[ ,4 ,5 ,6]
function prevGreaterElem(arr) {
    arr.reverse();
    let output = nextGreaterElem(arr);
    output.reverse();
    arr.reverse();
    return output;
}

function prevSmallerElem(arr) {
    arr.reverse();
    let output = nextSmallerElem(arr);
    output.reverse();
    arr.reverse();
    return output;
}

function pse(arr) {
    let st = new Stack();
    let pse = [];
    for (let i = 0; i < arr.length; i++) pse[i] = i + 1;

    for (let i = 0; i < arr.length; i++) {
        // for previous less
        while (!st.isEmpty() && st.top()[0] > arr[i])
            st.pop();
        pse[i] = st.isEmpty() ? i + 1 : i - st.top()[1];
        st.push([arr[i], i]);
    }
    return pse;
}




let arr = [12, 7, 3, 5, 4, 6, 8];
console.log(prevGreaterElem(arr));
console.log(prevSmallerElem(arr));