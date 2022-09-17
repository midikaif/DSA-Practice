class Node{
    constructor(k, v) {
        this.key = k;
        this.value = v;
        this.next = null;
    }
}

class Hashmap{
    constructor() {
        this.currSize = 2; // current size of the array
        this.arr = [];
        this.lambda = 0.5;
        this.elements = 0; // number of elements inserted in the hashmap

        for (let i = 0; i < this.currSize; i++){
            this.arr.push(null);
        }
    }

    hash(key) {
        let ans = 0, c = 101, m = this.currSize, x = 1;
        for (let i = 0; i < key.length; i++){
            ans = ((ans % m) + (key.charCodeAt(i) * x) % m) % m;
            x = x * c;
            
        }
        return ans;
    }

    insert(k, v) {
        if (this.search(k) !== undefined) {
            // then we just need to update
            let bucketIndex = this.hash(k);
            let temp = this.arr[bucketIndex];
            while(temp != null && temp.key != k) {
                temp = temp.next;
            } 
            temp.value = v;
            return;
        }
        let bucketIndex = this.hash(k);
        let newNode = new Node(k, v);
        //add at head
        newNode.next = this.arr[bucketIndex];
        this.arr[bucketIndex] = newNode;

        this.elements++;

        //checking load factor
        let currLoadFactor = this.elements / this.currSize;
        if (currLoadFactor > this.lambda) this.rehash();

    }

    rehash() {
        this.elements = 0;
        let oldSize = this.currSize;
        this.currSize = 2 * oldSize;
        let oldArr = this.arr;
        this.arr = [];
        for (let i = 0; i < this.currSize; i++){
            this.arr.push(null);
        }

        for (let i = 0; i < oldArr.length; i++){
            let temp = oldArr[i];
            while (temp != null) {
                this.insert(temp.key, temp.value);
                temp = temp.next;
            }
        }
    }

    search(key) {
        let bucketIndex = this.hash(key);
        let temp = this.arr[bucketIndex];
        while (temp != null) {
            if (temp.key == key) return temp.value;
            temp = temp.next;
        }
        return undefined;
    }

    display() {
        console.log(this.arr);
    }
}

let hm = new Hashmap();
hm.insert('kaif', 12);
hm.display();
console.log('******');
hm.insert('sagar', 12);
hm.display();
console.log('******');
hm.insert('sakunsh', 33);
hm.display();
console.log('******');
hm.insert('bill', 0);
hm.display();
console.log('*********');
hm.insert('glass', 94);
hm.display();
console.log(hm.search('kaif'));