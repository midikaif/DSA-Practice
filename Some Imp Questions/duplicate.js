
// Remove Duplicate with indexof and for Loop

// ----------------------------------------------
    // let Dup = [1, 5, 6, 8, 6, 1, 5, 6];
    // let Dup = ['a','a','d','d','d','a','e','b'];
    // let Rdup = [];
    // for (let v of Dup) {
    //     if (Rdup.indexOf(v) === -1) {
    //         Rdup.push(v)
    //     }
    // }
    // console.log(Rdup);
// -----------------------------------------------

// Removing duplicate using function

// ----------------------------------------------
    // function duplicate(s){
    // let noDuplicate = []
    // for(let i = 0; i<s.length; i++){
    //   if(noDuplicate.indexOf(s[i]) === -1){
    //   noDuplicate.push(s[i]);
    //   }
    // }
    // return noDuplicate;
    // }

// -----------------------------------------------

// Remove duplicate using Object

// -----------------------------------------------

    // let arr = [1,3,5,1,3,4];
    // let obj = {};
    // for (let value of arr) {
    //     obj.value = true;
    // }
    // console.log(Object.keys(obj))

// ----------------------------------------------

// Dublicate things obj

// -----------------------------------------------
    // let arr1 = ['a', 'b', 'c', 'a', 'c', 'd', 'a'];

    // const obj = {};
    // arr1.map(item => {
    //     obj[item] = 0;
    //     console.log(obj[item], item)
    // })
    // console.log(Object.values(obj))