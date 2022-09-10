let obj1 = {
    name: "John",
    age: 23,
    degree: "CS",
    car: 23
}

let obj2 = { 
    name: 'john',
    age: 23,
    degree: "CS"
}
let result = false;

for(let value in obj1){
    if(obj1[value] === obj2[value]){
    result = true;
    break;
    }
    else
    result = false
}

console.log(result)