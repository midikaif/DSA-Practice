/**
 * Problem -> Ice Cream Purchase
 * given a queue of N persons in the form of array. Each element denotes the currency of notes that a person has.
 * these persons are waiting to purchase an ice cream from person X which cost rs 5.
 * Possible of currency notes can be 5, 10, and 20.
 * Initially X has 0 amount, Your task is wheather X can provide change to each person or not.
 * 
 * [5,5,10,20]
 * -> True
 * 
 * Explaination => When third person will come, X will have two notes of 5. Then the fourth person will come.
 * Now X can provide one note of 5 and and one note of 10 which total is 15.
 * 
 */

function iceCream(arr) {
    let count5 = 0, count10 = 0, count20 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            count5++;
        }
        else if (arr[i] === 10) {
            if (count5 > 0) {
                count5--;
                count10++;
            }
            else return false;
        }
        else {
            if (count5 > 0 && count10 > 0) {
                count5--;
                count10--;
                count20++;
            }
            else if (count5 >= 3) {
                count5 -= 3;
                count20++;
            }
            else return false;
        }
    }
    return true;
}

let arr = [5, 5, 10, 20, 5, 10, 10];
console.log(iceCream(arr));
