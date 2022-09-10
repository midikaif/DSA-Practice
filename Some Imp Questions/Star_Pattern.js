// Star Patterns

// -------------------------------------------------------

// 1) Square Star Pattern

// function squareStar(n) {
//     let str = '';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             str += '*'
//         }
//         // str += '\n'
//     }
//     console.log(str)
// }

// squareStar(5)

// ------------------------------------------------------

// 2) Hollow Square Pattern

// function hollowSquare(n) {
//     let string = '';
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i === 0 || i === n - 1)
//                 string += '*'
//             else {
//                 if (j === 0 || j === n - 1)
//                     string += '*'
//                 else {
//                     string += ' '
//                 }
//             }
//         }
//         string += '\n'
//     }
//     console.log(string);
// }

// hollowSquare(5)

// ------------------------------------------------------

// 3) Right Triangle Pattern

// function rightTriangle(n) {
//     let str = ''
//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             str += ' '
//         }
//         for (let k = 0; k <= i; k++) {
//             str += '*'
//         }
//         str += '\n'
//     }
//     console.log(str)
// }

// rightTriangle(5)

// ----------------------------------------------------------

// 4) Left Triangle Pattern

    // function leftTriangle(n) {
    //     let str = '';
    //     for (let i = 0; i < n; i++) {
    //         for (let j = 0; j <= i; j++) {
    //             str += '*'
    //         }
    //         str += '\n'
    //     }
    //     console.log(str)
    // }

    // leftTriangle(5)

// ----------------------------------------------------

