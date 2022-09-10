
// // ==========================================

// const oddLetter = letter => {
//     const letterArr = letter.split(' ');
//     const letterLen = letterArr.length;
//     const middle = (letterLen - 1) / 2;
//     const newLetter = letterArr.slice(middle).concat(letterArr.slice(0, middle))
//     const arr = [];
//     letterArr.forEach(element => {
//         arr.push(newLetter.join(' '));
//         newLetter.pop();
//         newLetter.unshift(' ');
//     });
//     arr.reverse();
//     return arr.join('\n');
// }


// // console.log(oddLetter('W E L C O M E'));


// function oddletter1(string) {
//     let arr = string.split(' ');
//     let middle = (arr.length - 1) / 2;
//     let changedString = arr.slice(middle).concat(arr.slice(0, middle));
//     let newArr = [];
//     arr.forEach(element => {
//         newArr.push(changedString.join(' '));
//         changedString.pop();
//         changedString.unshift(' ');
//     });
//     newArr.reverse();
//     return newArr.join('\n');

// }

// console.log(oddletter1('W E L C O M E'))


// ====================================================


 // input -> welcome
      // output -> 
      //      c
      //     co
      //    com
      //   come
      //  comew
      // comewe
      //comewel
// ----------------------------------

    //   let str = "";
    //   const input = 'welcome';
    //   const n = input.length;
    //   let count;

    //   for(let i = 0; i<n; i++){
    //         for(let j = i+1; j<n; j++){
    //               str += ' ';
    //         }
    //         count = 0;
    //         for(let k = 0; k<=i; k++){
    //               let temp = k + parseInt(n/2);
    //               if(temp<n){
    //               str += input[temp]
    //               }
    //               else{
    //                     for(; count<=(temp-n); count++){
    //                           str += input[count];
    //                           // count++;
    //                     }
    //               }
    //         }            
    //         str += '\n';
    //   }
    //   console.log(str)


// ------------------------------------------------

    //   let str = "";
    //   const input = 'welcome';
    //   const n = input.length;
    //   for(let i = 0; i<n; i++){
    //         for(let j = i; j<n; j++){
    //               str += ' ';
    //         }
    //         for(let k = 0; k<=i; k++){
    //               str += input[k]
    //         }            
    //         str += '\n';
    //   }
    //   console.log(str)

// --------------------------------------------
