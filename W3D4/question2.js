const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
 });
 var getNumber =function(){
 readline.question('Please Enter a Number ', number => {
   if(number == 'stop'){
     readline.close();
   }else{
     getNumber();
   }
 });
}
getNumber();