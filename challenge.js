// Exercise 1
var myTimeout;

function delayCb({ ms, cb }) {
  clearTimeout(myTimeout);
  myTimeout = setTimeout(() => {
    cb();
  }, ms);
}

// Exercise 2
/* 
  tThe function erif will loop through the cont array and if the cbMatch function
  returns true then it will remove the element in the array cont at index i

  The problem is we are modifying/mutating the array as it been loop through

*/

//Exercise 3

/*
  Depending on the hardware of the client, the function execution might happen faster
  than desired so we might see images fly by very fast. There might also be a concern with
  how the readFileSync function is use in NodeJS env, depending on the OS there might be an error 
  on permission to access on system memory to access data. 
*/

//Exercise 4

/* 
  The function will always throw an error because i will always be equal to WORDS.length (6)
*/
