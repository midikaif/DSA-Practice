
const array_for_userdata = {
    name: 'Ben Accord',
    email: 'ben.english@example.com',
    age: 25,
    dob: '08/12/1996',
    active: true
};


const array_animals = {
    lion: 1,
    giraffe: 2,
    tiger: 3,
    elephant: 4
};


// ---------------------------------------------

// CODE TO DIVIDE THE STRING IN VOWELS AND CONSONANTS

// ----------------------------------------------

    // function isVowel(v){
    //     if(v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u'){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

    // function vowelsAndConsonants(s) {
    //     let string = s.split('');
    //     let vowels = []
    //     let consonants = []
    //     for(let i = 0; i<string.length; i++){
    //         let v = isVowel(string[i])
    //         if(v){
    //             vowels.push(string[i]);
    //         }
    //         else{
    //             consonants.push(string[i]);
    //         }
    //     }
    //     for(let values of vowels){
    //         console.log(values)
    //     }
    //     for(let values of consonants){
    //         console.log(values)
    //     }
    // }

    // vowelsAndConsonants('javascriptloops');

// ---------------------------------


    // function isVowel(string){
    //     return string.match(/[aeiou]/gi);
    // }

// --------------------------------

// SECOND LARGEST IN AN Array

// ------------------------------

// function getSecondLargest(nums) {
//     let greater;
//     let first = nums[0];
//     let second;
//     for(let i = 1; i<nums.length - 1; i++){
//      //   console.log(first);
//      if(first<nums[i]){
//          first = nums[i];
//         }
//         if(second===first){
    //             break;
    //         }
    //         second = first;
    //     }
    //     console.log(second);
    // }
    
    // getSecondLargest([2,4,5,6,7,3,2,7,2,4,5]);
    
    
// -------------------------------------------
    
    // for(let key in array_for_userdata){
    //         console.log(`${key} -> ${array_for_userdata[key]}`);
    //     }
    
// -------------------------------------------

// FOREACH()

// -----------------------------------------------
    // arr = [2,3,6]
    // let temp = 0;
    // arr.forEach(function(x) {        //x will have array value one by one
    //     if(x%2===0){
    //         console.log('Even');
    //     }
    //     else{
    // console.log('Odd');
    //     }
    // });

// ----------------------------------------------------

    // arr.forEach(x => {              //same as upper one but with => rather than function()
    // if(x%2===0){
    //     console.log('Even');
    // }
    // else{
    //     console.log('Odd');
    // }
    // })

// ------------------------------------------------

    // let entries = Object.entries(array_animals);
    // console.log(entries);

    // console.log(Object.entries('hello'))

    // for(let [a, b] of Object.entries(array_animals)){
    //     console.log(a, b);
    // }

// -----------------------------------------------

// arr = [1, 4, 7, 2, 6];
// arr.forEach(function(value, index, array){
//     console.log(`${index} index of ${value}`)
// })

// ----------------------------------------

// let keys = Object.keys(array_animals);
// console.log(keys);

// -----------------------------------

// let arr = [34, 'the', 65];
// let x,y,z;
// [x,,y] = arr;
// console.log(x,y)

// ------------------------------------------

        
// ------------------------------------------------------
        
    

// --------------------------------------------------

    // Count things
        
// -------------------------------------------------------

// let arr1 = ['a', 'b', 'c', 'a', 'c', 'd', 'a'];

    // const obj = {};
    // arr1.map(item => {
    //     if (obj[item]){
    //     obj[item] += 1;}
    //     else{
    //     obj[item] = 1;}
    //     console.log(obj[item], item)
    // })
    // console.log(Object.values(obj))

// ----------------------------------------------------

// ------------------------------------------------------

// let str = `why are you so easy`
// console.log(str.match(/[aeiou]/gi));


// ----------------------------------------------------

// Functions of MAP(), FILTER(), AND REDUCE()

// --------------------------------------------------------
// let arr = [
//     { firstName: 'harjeet', lastName: 'sagar', age: 54 },
//     { firstName: 'kaif', lastName: 'khan', age: 24 },
//     { firstName: 'mansi', lastName: 'jaiswal', age: 24 },
//     { firstName: 'ruhani', lastName: 'makhija', age: 31 }
// ]

// let output = arr.map(x => x.firstName + x.lastName);


// let output = arr.filter(x => x.age>30).map(x => x.firstName)


// let output = arr.reduce(function (acc, curr) {
//     if(curr.age>30){
//         acc += ' ' + curr.firstName;
//     }
//     return acc;
// }, []);


// let output = arr.reduce(function (acc, curr) {
//     if (acc[curr.age]) {
//         acc[curr.age] += 1;
//     }
//     else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});


// console.log(output);