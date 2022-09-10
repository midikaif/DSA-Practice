let string = 'occurrence';
let obj = {};
let arr = string.split('')
arr.map( x => {
    if(obj[x]){
        obj[x] += 1;
    }
    else{
    obj[x] = 1;
    }
})
for(let [keys, values] of Object.entries(obj))
console.log(`${keys} occur ${values} times`);
