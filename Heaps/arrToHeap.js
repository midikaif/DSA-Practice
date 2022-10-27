/**
 * Create a MAX heap with an array of n size;
 * 
 * Time complexity: O(n);
 * Space complexity: O(1);
 */

class MaxHeap {
    constructor(a) {
        this.arr = a;
        for (let i = this.arr.length - 1; i >= 0; i--)
            this.downHeapify(i);
    }

    upHeapify(idx) {
        while (idx > 0) { // we cannot heapify root so stop the loop
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.arr[parentIdx] < this.arr[idx]) {
                //if parent is less than child swap them
                let temp = this.arr[parentIdx];
                this.arr[parentIdx] = this.arr[idx];
                this.arr[idx] = temp;

                // move upwards
                idx = parentIdx;
            } else {
                // already a Heap
                break;
            }
        }
    }

    downHeapify(idx) {
        /**
         * Time - O(logN);
         * space - O(1)
         */
        while (idx < this.arr.length) {
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let greatest = idx;
            if (left < this.arr.length && this.arr[left] > this.arr[greatest]) {
                greatest = left;
            }
            if (right < this.arr.length && this.arr[right] > this.arr[greatest]) {
                greatest = right;
            }

            if (greatest === idx) break;

            let temp = this.arr[greatest];
            this.arr[greatest] = this.arr[idx];
            this.arr[idx] = temp;
            idx = greatest;
        }
    }

    removeRoot() {
        //you can write swap function inplace of this
        this.arr[0] = this.arr.pop();
        this.downHeapify(0);
    }
    insert(x) {
        this.arr.push(x);
        this.upHeapify(this.arr.length - 1);
    }
    display() {
        console.log(this.arr);
    }
}


let hp = new MaxHeap([3,2,3,1,2,4,5,5,6]);
hp.display();
