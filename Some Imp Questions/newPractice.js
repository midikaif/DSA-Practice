myString = 'kayaka'
console.log(myString.split('').reverse().join(''));
console.log(myString)
 //   ----QUESTIONS----

// Write a program using recursion to print a triangle of length n.

// function printn(num) {

//       if (num == 0)
//         return;
//       console.log("* ");
    
//       printn(num - 1);
    
//     }
    
//     function pattern(n, i) {
    
//       if (n == 0)
//         return;
//       printn(i);
//       document.write("<br/>");
    
//       pattern(n - 1, i + 1);
//     }
    
//     var n = 5;
//     pattern(n, 1);
    



//                      QUESTION

// Question 3: Create an JSON object for grades of a class having structure

// {"name": 'John', "grade": 8, "sex": 'M'},

// Also write a program to find classroomAverage ,boysAverage ,girlsAverage,

// highestGrade and lowestGrade

// Solution:-------->

      // var grades = [{
      //       "name": 'John',
      //       "grade": 8,
      //       "sex": 'M'
      // },
      // {
      //       "name": 'Sarah',
      //       "grade": 12,
      //       "sex": 'F'
      // },
      // {
      //       "name": 'Bob',
      //       "grade": 16,
      //       "sex": 'M'
      // },
      // {
      //       "name": 'Johnny',
      //       "grade": 2,
      //       "sex": 'M'
      // },
      // {
      //       "name": 'Ethan',
      //       "grade": 4,
      //       "sex": 'M'
      // },
      // {
      //       "name": 'Paula',
      //       "grade": 18,
      //       "sex": 'F'
      // },
      // {
      //       "name": 'Donald',
      //       "grade": 5,
      //       "sex": 'M'
      // },
      // {
      //       "name": 'Jennifer',
      //       "grade": 13,
      //       "sex": 'F'
      // },
      // {
      //       "name": 'Courtney',
      //       "grade": 15,
      //       "sex": 'F'
      // },
      // {
      //       "name": 'Jane',
      //       "grade": 9,
      //       "sex": 'F'
      // }
      // ];
      // let isBoy = student => student.sex === 'M'
      
      // let isGirl = student => student.sex === 'F'
      
      // let getBoys = grades => (
      // grades.filter(isBoy)
      // )
      
      // let getGirls = grades => (
      // grades.filter(isGirl)
      // )
      
      // let average = grades => (
      // grades.reduce((acc, curr) => (
      //       acc + curr.grade
      // ), 0) / grades.length
      // )
      
      // let maxGrade = grades => (
      // Math.max(...grades.map(student => student.grade))
      // )
      
      // let minGrade = grades => (
      // Math.min(...grades.map(student => student.grade))
      // )
      // console.log(average(grades));
      // console.log(average(getBoys(grades)));
      // console.log(average(getGirls(grades)));
      // console.log(maxGrade(grades));
      // console.log(minGrade(grades));
      
// ---------------------------------------------------------

//                               QUESTION

// ---------------------------------------
// Sort using recursion
      // function sortRecursive(arr, n) {
      //       if (n <= 1)
      //       return;
      //       sortRecursive(arr, n - 1);
      //       let last = arr[n - 1];
      //       let j = n - 2;
      //       while (j >= 0 && arr[j] > last) {
      //       arr[j + 1] = arr[j];
      //       j--;
      //       }
      //       arr[j + 1] = last;
      // }
      
      // let arr = [5, 6, 35, 89, 14, 56, 26, 19, 65, 38, 44];
      // sortRecursive(arr, arr.length);
       
      // ------------------------------------------

// let arr = [3, 2, 5, 7, 6, 8];
// console.log(sort(arr, 0));


// ----------------->
//   <----Spliting the array in Chunks---->
// ----------------->

// function splitArr(arr, chunks) {
//       let splittedArr = [];
//       let j = 0;
//       for (let i = 0; i < arr.length; i += chunks){
//             let chunk = arr.slice(i, i+chunks);
//             splittedArr.push(chunk)
//       }
//       for (const iterator of splittedArr) {
            
//             console.log(iterator)
//       }
// }

// splitArr([1, 2, 3, 4, 5, 6,7,8,9,10], 3);











// var restoreString = function (s, indices) {
//       let restored = "";
//       for(let i =0; i<indices.length; i++){
//           // for(let j = 0; j<indices.length; j++){
//               restored += s[indices[i]]; 
//           // }
//       }
//       console.log(restored);
// };
  
// restoreString('codeleet',[4,5,6,7,0,2,1,3])




// ------------ RECURSION --- EXAMPLES ----------------------

// ---------FACTORIAL---->

      // function rFactorial(n) {
      //       if (n <= 1)
      //             return 1;
      //       return n * rFactorial(n - 1);
      // }

      // console.log(rFactorial(-5))

// ---------FEBONACCI ---->

function rFebonacci(n) {
      if (n === 0 || n === 1)
            return n;
      return rFebonacci(n - 1) + rFebonacci(n - 2);
      
}

console.log(rFebonacci(5));

// -------PRINT INCREASING NUMBERS ---->

// function increase(n) {
//       if (n <= 0)
//             return n;
//       increase(n - 1);
//       console.log(n)
// }

// increase(5)

// ---------ARRAY IS SORTED---->

      // function isSorted(arr, start, last) {
      //       let count = 0;
      //       if (start < last) {
      //             if (arr[start] > arr[start - 1]) {
      //                   isSorted(arr, start + 1, last)
                        
      //             }
      //             else {
      //                   return false;
      //             }
      //       }
      //       return true;
      // }

      // console.log(isSorted([1,2,3,7,5,6], 1, 5))

// ----------------------------------------------------

// Take an array of size 10. Calculate sum of all array elements using tail recursion.

// const arr = [2,4,5,6,7,1,8,9,5,4]

// let sum = 0;
// function sumArr(arr, n) {
//       sum += arr[n]
//       if (n === 0)
//             return ;
//       sumArr(arr, n - 1);
// }
// sumArr(arr, 9);
// console.log(sum)



//  -----------------READ IT AGAIN------------------

// -----------HIGHER ORDER FUNCTIONS------------------

// function updating(arr, operation){
//       const updated = [];
//       for(let element of arr){
//             updated.push(operation(element))
//       }
//       return updated
// }

// function double(num){
//       return num*3;
// }

// console.log(updating([1,2,3], double))

// ---------------------------------------------------

      // const callback = (n) => n**2;

      // const cube = (callback, n) => callback(n)*n

      // console.log(cube(callback, 4));

// ---------------------------------------------------

      // const names = ['apple', 'google', 'flipkart']

      // const uppercaseName = names.map((name) => name.toUpperCase());

      // console.log(uppercaseName)

// -----------------------END--------------------------


// ------------------COMPOSABILITY---------------------

      // let numbers = [2,3,6,8,7];
      // console.log(findSquare(isEven(numbers)));

      // function isEven(arr) {
      //       let evenArr = [];
      //       for(let even of arr){
      //             if(even%2===0){
      //                   evenArr.push(even)
      //             }
      //       }
      //       return evenArr;
      // }

      // function findSquare (arr) {
      //      for(let index in arr){
      //             arr[index] *= arr[index]
      //      }
      
      //       return arr;
      // }
      // -------------------------------------------------------
      
// --------------------Iterating JSON--------------------

      // let cars = [
      //       {
      //             "brand": "BMW",
      //             "model": "X3",
      //             "price": 58,
      //             "power": 700
      //       },
      //       {
      //             "brand": "audi",
      //             "model": "A3",
      //             "price": 36,
      //             "power": 300      
      //       },
      //       {
      //             "brand": "Rolce Royce",
      //             "model": "dawn",
      //             "price": 108,
      //             "power": 670
      //       }
      // ]
      
      // for(let car of cars){
      //       console.log(`${car.brand} ${car.model} worths ${car.price} Million dollars with ${car.power} power engine`)
      // }

// ----------------------Finding maximum Price----------------

      // let obj = [
      //       {
      //             "brand": "BMW",
      //             "model": "X3",
      //             "price": 58,
      //             "power": 700
      //       },
      //       {
      //             "brand": "audi",
      //             "model": "A3",
      //             "price": 36,
      //             "power": 700      
      //       },
      //       {
      //             "brand": "Rolce Royce",
      //             "model": "dawn",
      //             "price": 108,
      //             "power": 700
      //       }
      // ]

      // let max = 0;
      // let expensive;
      // for(let car of obj){
      //       if(car.price>max){
      //             max = car.price;
      //             expensive = car.brand;
      //       }
      // }

      // console.log(`Most expensive car is ${expensive} with price of ${max} million`)

// ------------------------------------------------------------

// ---------------------JSON ITERATING--------------------------

      // let students = [
      //       {
      //             "RollNo": 2,
      //             "Name": "John Doe",
      //             "Class": 12,
      //             "Marks": 93
      //       },
      //       {
      //             "RollNo": 1,
      //             "Name": "Annie",
      //             "Class": 12,
      //             "Marks": 89
      //       },
      //       {
      //             "RollNo": 3,
      //             "Name": "Susane",
      //             "Class": 12,
      //             "Marks": 94
      //       }
      // ]

// -----------------MAX MARKS------------------------

      // let maxMarks = -Infinity;
      // let topper ;

      // for(let student of students){
      //       if(student.Marks>maxMarks){
      //             maxMarks = student.Marks;
      //             topper = student.Name;
      //       }
      // }

      // console.log(`${topper} tops with ${maxMarks} Marks`)

// ------------------SORTING--------------------
// --------------ISN'T COMPLETED----------------
      // let sortedStudents = [];
      // let n = students.length-1;
      // for(let i = n; i>=0; i--){
      //       if(i-1>0){
      //             if(students[i].RollNo>students[i-1].RollNo){
      //                   sortedStudents.push(students[i]);
      //             }
      //       }
      // }

// ---------------JSON QUESTION---------------

let students = [
      {
            "Name": "John",
            "grade": 8,
            "sex": "M"
      },
      {
            "Name": "Annie",
            "grade": 12,
            "sex": "F"
      },
      {
            "Name": "Susane",
            "grade": 2,
            "sex": "F"
      },
      {
            "Name": "Susane",
            "grade": 7,
            "sex": "M"
      }
]









// ---------------------------------------------


// -------------SORTING USING RECURSION------------------

// function sortRecursion(arr, start, last) {
//       if (start < last) {
//             if (arr[start] > arr[last]) {
//                   let temp = arr[start];
//                   arr[start] = arr[last];
//                   arr[last] = temp;
//             }
//             sortRecursion(arr, start+1, last)
//       }
      // if (last > 0) {
      //       if (arr[start] > arr[last]) {
      //             let temp = arr[start];
      //             arr[start] = arr[last];
      //             arr[last] = temp;
      //       }
      //       sortRecursion(arr, start, last - 1)
      // }
// }
// var numbers = [7,1,9,15,2,9,36,5,12,6];
// sortRecursion(numbers, 0, 5)

// ---------------------------------End sorting with recursion--------------


// -----------------------Sorting with while LOOP---------------------

// function bubbleSort(array) {
//       var done = false;
//       while (!done) {
//         done = true;
//         for (var i = 1; i < array.length; i += 1) {
//           if (array[i - 1] > array[i]) {
//             done = false;
//             var tmp = array[i - 1];
//             array[i - 1] = array[i];
//             array[i] = tmp;
//           }
//         }
//       }
    
//       return array;
//     }
    
//     bubbleSort(numbers);
//     console.log(numbers);

// ---------------------------------END

// ------------------------SORTING WITHOUT SORT FUNCTION--------

// function sorting(arr) {
//       let n = arr.length;
//       for (let i = 0; i < n; i++){
//             for (let j = 0; j < n; j++) {
//                   if (arr[i] > arr[j]) {
//                         let temp = arr[i];
//                         arr[i] = arr[j];
//                         arr[j] = temp;
//                   }
//             }
//       }
//       console.log(arr)
// }

// let arr = [9, 3, 1, 7, 4, 8];
// sortRecursion(arr)
// --------------------------END



// --------------STAR USING RECURSION-----------------------

      // let str = ""
      // function recursionStar(n) {
      //       if(n>1)
      //             recursionStar(n - 1)
      //       for (let i = 0; i<n; i++)
      //       str += '*'
      //       str += '\n'
      //       return
      // }

      // recursionStar(5);
      // console.log(str);

// -------------------------------------------------------
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
      //   // printing spaces
      //   for (let j = 0; j < n - i; j++) {
            //     string += " ";
            //   }
            //   // printing star
            //   for (let k = 0; k < i; k++) {
                  //     string += "*";
                  //   }
                  //   string += "\n";
                  // }
                  // console.log(string);
                  
                  
                  
// ----------------------------
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

      // let str = "";
      // const input = 'welcome';
      // const n = input.length;
      // let count;

      // for(let i = 0; i<n; i++){
      //       for(let j = i+1; j<n; j++){
      //             str += ' ';
      //       }
      //       count = 0;
      //       for(let k = 0; k<=i; k++){
      //             let temp = k + parseInt(n/2);
      //             if(temp<n){
      //             str += input[temp]
      //             }
      //             else{
      //                   for(; count<=(temp-n); count++){
      //                         str += input[count];
      //                         // count++;
      //                   }
      //             }
      //       }            
      //       str += '\n';
      // }
      // console.log(str)


// ------------------------------------------------

      // let str = "";
      // const input = 'welcome';
      // const n = input.length;
      // for(let i = 0; i<n; i++){
      //       for(let j = i; j<n; j++){
      //             str += ' ';
      //       }
      //       for(let k = 0; k<=i; k++){
      //             str += input[k]
      //       }            
      //       str += '\n';
      // }
      // console.log(str)

// --------------------------------------------

// -----------------------------------------
// let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
// let realName, city, heroName;
// ({realName, city, heroName} = newAvenger);
// console.log(realName); // Error : "Unexpected token ="
// ---------------------------------

// function palindrome(myString){ // function to find palindrome
//       let checkPalindrome = myString.split('').reverse().join(''); // using split, reverse and join to reverse the string
//       if(myString === checkPalindrome) // checking whether its same or not
//             console.log(myString + " is a Palindrome"); // if same then this
//       else
//             console.log(myString + " is not a Palindrome"); //otherwise this...         

// }           

      
// palindrome('madam')

// palindrome('Star Wars')

// palindrome('2,3,4,3,2')

// palindrome('7,10,7,8,9')          










// let arr = [
//       [2,1,2,1,4],
//       [7,18,99,8,4,22],
//       [8,21,22,15],
//       [7,15,21,18]
// ];
// const obj = {
//       1: 1,
//       2: 2,
//       3: 3,
//       };
//       console.log(Object.keys(obj) == Object.values(obj));


// -------------------------------------
            // GO THROUGH AGAIN
// -------------------------------------

// var R = 4, C = 4;

// Function that calculate
// unique element
// function unique(mat, n, m)
// {
// 	var maximum = 0, flag = 0;
// 	for(var i = 0; i < n; i++)
// 		for(var j = 0; j < m; j++)
		
// 			// Find maximum element in a matrix
// 			if (maximum < mat[i][j])
// 				maximum = mat[i][j];

// 	// Take 1-D array of (maximum + 1) size
// 	var b = Array(maximum+1).fill(0);
// 	for(var i = 0 ; i < n; i++)
// 		for(var j = 0; j < m; j++)
// 			b[mat[i][j]]++;

// 	// Print unique element
// 	for(var i = 1; i <= maximum; i++)
// 		if (b[i] == 1)
// 			console.log(i + " ");
// 			flag = 1;
			
// 	if (flag == 0)
// 	{
// 		console.log("No unique element found");
// 	}
// }

// //Input array
// var mat = [ 
//       [ 11, 2, 2, 20 ],
// 	[ 5, 16, 20, 7 ],
// 	[ 1, 13, 5, 16 ],
// 	[ 6, 7, 18, 15 ]
// ];
				
// //execute the logic
// unique(mat, R, C);

// --------------------------------------------


// -----------------------------------------------

// function uniqueElement(arr){
//       let sum=0;
//       for(let i = 0; i<arr.length; i++){
//             for(let j = 0; j<arr[i].length; j++){
//                   sum ^= arr[i][j]; // ^ (XOR) gives 1^0 => 1 and 2^2 => 2;  
//             }
//       }
//       console.log(sum);
// }

// uniqueElement(arr);

// ------------------------------------------------

// ------UNIQUE ELEMENT-----

// ----------------------------------------
// let obj = {}

// for(let i = 0; i<arr.length; i++){
//       for(let j = 0; j<arr[0].length; j++){
//             if(obj[arr[i][j]]){
//                   obj[arr[i][j]] += 1
//             }
//             else{
//                   obj[arr[i][j]] = 1
//             }
//       }
// }

// ------------------------------
// MAXIMUM IN AN ARRAY

      // let arr = [
      //       [2,14,15,16],
      //       [7,18,20,22],
      //       [8,21,23,24],
      //       [10,26,27,28]
      // ]

      // let max = -Infinity;
      // for(let i = 0; i<arr.length; i++){
      //       for(let j = 0; j<arr[0].length; j++){
      //             if(arr[i][j]>max){
      //                   max = arr[i][j]
      //             }
      //       }
      //       console.log(max)
      // }














//  spiralPrint(f, h, arr) {
// 	let i, e = 0, g = 0;
// 	/*
// 		e - starting row index
// 		f - ending row index
// 		g - starting column index
// 		h - ending column index
// 		i - iterator
// 	*/

// 	while (e < f && g < h) {
// 		// print the first row 
// 		for (i = g; i < h; ++i) {
// 			console.log(arr[e][i] + ' ');
// 		}
// 		e++;

// 		// print the last column 
// 		for (i = e; i < f; ++i) {
// 			console.log(arr[i][h - 1] + ' ');
// 		}
// 		h--;

// 		// print the last row 
// 		if (e < f) {
// 			for (i = h - 1; i >= g; --i) {
// 				console.log(arr[f - 1][i] + ' ');
// 			}
// 			f--;
// 		}

// 		// print the first column 
// 		if (g < h) {
// 			for (i = f - 1; i >= e; --i) {
// 				console.log(arr[i][g] + ' ');
// 			}
// 			g++;
// 		}
// 	}
// }

// // input 2D Array
// let arr = [ 
//       [1, 2, 3,12],
// 	[4, 5, 6,16],
//       [7, 8, 9,91],
// 	[10, 11, 12,112]
// ];
// let r = arr.length;
// let c = arr[0].length;

// //execute logic
// spiralPrint(r, c, arr);











// let aP = 10;
// let bP = 12;
// let aAvg = 20;
// let bAvg = 15;

// let akm = aP*aAvg;
// let bkm = bP*bAvg;
// let halta, haltb;
// let arr = [40, 98, 134, 179, 211, 248]

// for(let i = 0; i<arr.length; i++){
//       if(arr[i]>=akm){
//             halta = i;
//             break;
//       }
      
// }

// for(let i = 0; i<arr.length; i++){
//       if(arr[i]>=bkm){
//             haltb = i;
//             break;
//       }
// }

// console.log(halta,haltb)






// let arr = [2,3,4,5,6,7,8]

// let a = arr.reduce((acc,curr) => {
//       return acc*curr;
// })

// console.log(a)








// function binarySearch(arr, first, last, f){
//     let mid = parseInt((first+last)/2);
//     let n = arr.length;
//       if(last >= first){
//         if(f>arr[mid]){
//             binarySearch(arr, mid+1, last, f)
//         }
//         else if(f<arr[mid]){
//             binarySearch(arr, first, mid-1, f)
//         }
//         else{
//             console.log("Found!!");
//             return 0;
//         }
//     }
//     else {
//         console.log('Not Found!!');
//         return 0;
//     }
// }



// // binarySearch(arr, first, last, f);


// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [9,10,16]
// ];
// let m = arr.length;
// let n = arr[0].length;
// let first = 0;
// let last = n-1;
// let f = 9;

// for(let i = 0; i<m; i++){
//     // for(let j = 0; j<n; j++) {
//         if(arr[i][last] >= f ){//&& arr[i][last] <= f){
//             binarySearch(arr[i], first, last, f);
//             break;
//         }
//         // else{
//         //     break;
//         // }
//     // }
// }







// function binarySearch(arr, first, last, f){
//     let n = arr.length;
//     let mid = parseInt((first + last)/2);
//     while (1) {
//         if(last >= first){
//             if(f>arr[mid]){
//                 first = mid+1;
//                 mid = parseInt((first+last)/2);
//             }
//             else if(f<arr[mid]){
//                 last = mid-1;
//                 mid = parseInt((first+last)/2);
//             }
//             else{
//                 console.log(`Found!! ${f} is found in ${mid} Index`);
//                 break;
//             }
//         }
//         else{
//             console.log("Not Found!!");
//             break;
//         }
//     }
// }











// let matrix = [
    // [1,0,0],
    // [0,2,0],
    // [0,0,3]
    // ];

    // let count = 0;

    // function diagonal(arr){
    //     for(let i = 0; i<arr.length; i++){
    //         // for(let j = 0; j<arr[0].length; j++){
    //             if(arr[i][i] !== 0 || arr[i][arr[i].length-1] !== 0){
    //                 count++;
    //             }
    //         // }
    //     }
    // }
    // diagonal(matrix).0