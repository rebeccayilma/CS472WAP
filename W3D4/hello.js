const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
 });
 readline.question('What is your name? ', name => {
  // console.log(`Welcome ${name}`);
  readline.question(`Welcome ${name}, How old are you?`, age=>{
    if (age<16) {
      console.log('Youre not allowed to drive in Iowa');
    } else {
     console.log(`You’re allowed to get a drivers license in 
     Iowa`);
    }
  });
 });