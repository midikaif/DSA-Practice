const readline = require("readline");
const r1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
});

r1.question("How are you? ", function(answer){
      console.log('Good!');
      r1.close();
})