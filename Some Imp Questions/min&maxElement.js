// minimum and maximum in an element;

let arr = [2,3,15,6];
let min = Infinity;
let max = -Infinity;
for(let value of arr){
    if(value<min){
        min = value;
    }
    if(value>max){
        max = value;
    }
}
console.log(`Minimum Number is ${min} and Maximum Number is ${max}`);