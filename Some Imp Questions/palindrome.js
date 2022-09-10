function palindrome(myString) { // function to find palindrome
      myString = myString.toLowerCase();
      let checkPalindrome = myString.split('').reverse().join(''); // using split, reverse and join to reverse the string
      if (myString === checkPalindrome) // checking whether its same or not
            console.log(myString + " is a Palindrome"); // if same then this
      else
            console.log(myString + " is not a Palindrome"); //otherwise this...         

}


palindrome('Madam')

palindrome('Star Wars')

palindrome('2,3,4,3,2')

palindrome('7,10,7,8,9')          
