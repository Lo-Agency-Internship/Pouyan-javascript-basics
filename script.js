// ----------HELLO WORLD----------------------------------------
// ---------------------------------------------------------------
// let question = prompt("whats will show up next?");

// if (question) {
//   alert(`Your answer: ${question} `);
// } else {
//   alert(`you didn't answer! WHY? WHYYYYY????`);
// }

// -----------VARIABLES-------------------------------------------
// ---------------------------------------------------------------
// let namee = prompt("What is your name?");
// let lastName = prompt("What is your last name?");
// let age = prompt("What is your age?");
// let sex = prompt("and lastly, what is your sex?");

// if ((!namee && !lastName)) {
//   alert(`you didn't answer your full name`);
// }
// if (!age) {
//   alert(`you didn't answer  your age`);
// }
// if (!sex) {
//   alert(`you didn't answer  your sex`);
// }
// if (namee && lastName && age && sex) {
//   alert(`Your full name is ${namee} ${lastName} \nYour are ${age} years old\nAnd you are ${sex}`);
// }

// --------------------------------------------------------
// let number1 = prompt("ok, here is a little magic for you, give us a numberOne");
// let number2 = prompt("ok, give us numberTwo");
// if ((number1 && number2)) {
//   alert(`your choice of numbers were, numberOne=${number1} and numberTwo=${number2}, respectively, right? now wait for it!`);
// } else {
//   alert("you didn't answer again! WHY WHY WHY?");
// }

// let temp;
// temp = number1;
// number1 = number2;
// number2 = temp;

// alert(`AND NOW YOU WITNESS MAGIC, numberOne is now=${number1} and numberTwo is now=${number2}`)

// ------------------Data Types Part------------------------------
// ---------------------------------------------------------------
// let firstName = prompt("What is your name?");
// let lastName2 = prompt("What is your last name?");
// let age2 = prompt("What is your age?");
// let gender = prompt("and lastly, what is your sex?");

// let message = `Your full name is ${firstName + lastName2}.\nYour are ${age2} years old\nAnd you are ${gender}`

// if ((!firstName & !lastName2)) {
//   alert(`you didn't answer your full name`);
// }
// if (!age2) {
//   alert(`you didn't answer  your age`);
// }
// if (!gender) {
//   alert(`you didn't answer  your sex`);
// }
// if ((firstName & lastName2 & age2 & gender)) {
//   alert(message);
// }
// -----------------------------------------------------
// document.getElementById("name").innerHTML = firstName +" "+lastName2;

// document.getElementById("age").innerHTML = age2;

// document.getElementById("gender").innerHTML = gender;

// ---MAIN task----Basic operators, maths-------------------------
// ---------------------------------------------------------------
// --SUB task-----Random number task------------------------------
// ---------------------------------------------------------------
// let num1 = prompt("give us an number");
// num1=Number(num1);
// let num2 = prompt("give us annother number to give you a random number between this and the last number you gave us");
// num2=Number(num2);
// function rand(num1, num2){
//  return Math.floor(Math.random() * (num2-num1))+num1;
// }

// // --SUB task---- convert a binary number to a decimal number ---
// // ---------------------------------------------------------------
// let binary = prompt("give an binary number like 1101000 to be converted to decimal?");

// function bin2dec(binary){
//   return (parseInt(binary, 2));
// }

// ---MAIN task---- Comparisons-----------------------------------
// ---------------------------------------------------------------
let num3 = parseInt(prompt('please enter the first number '));
let num4 = parseInt(prompt('and the second number '));

function sum(num3, num4){
  if (num3===num4) {
    let sum = num3 + num4;
    return sum*3;
  } else{
    return (num3 + num4);
  }
}

console.log(sum(num3, num4));

// ------------------------------------------------
let num5 = 19;
let num6 = parseInt(prompt('please enter a number '));

function absoluteDifference(num5, num6){
  if (num6>19){
    return(Math.abs(num6-num5)*3);
  }
  else{
    return (Math.abs(num6-num5));
  }
}
console.log(absoluteDifference(num5, num6));

// ------------------------------------------------
let string1= "LO";
let string2= String(prompt("please enter a text"));

function stringAddition(string1, string2){
  if (string2.startsWith('Lo')){
    return string2;
  }
  else {
    return (`${string1}${string2}`)
  }
}

console.log(stringAddition(string1, string2));

// ---MAIN task---- Logical operators-----------------------------------
// ---------------------------------------------------------------

function logicalGateBuffer(input){
  if (input===true){
    return true;
  }
    else if(input===false){return false}
}
// ------------------------------------------------
function logicalGateNot(input){
  if (input===true){
    return false;
  }
    else if(input===false){return true}
  }
// ------------------------------------------------
function logicalGateAnd(input1, input2){
if (input1===true && input2===true){
  return true;
}
  else{ return false;}
}
// ------------------------------------------------
function logicalGateOr(input1, input2){
  if (input1===false && input2===false){
    return false;
  }
    else{ return true;}
}

// ------------------------------------------------
function logicalGateNand(input1, input2){
  if (input1===true && input2===true){
    return false;
  }
    else{ return true;}
}

// ------------------------------------------------
function logicalGateNor(input1, input2){
  if (input1===false && input2===false){
    return true;
  }
  else{return false;}
}

// ------------------------------------------------
function logicalGateXor(input1, input2){
  if (input1===false && input2===false){
    return false;
  }
  else if(input1===true && input2===true){
    return false;
  }
  else{return true;}
}

// ------------------------------------------------
function logicalGateXnor(input1, input2){
  if (input1===false && input2===false){
    return true;
  }
  else if(input1===true && input2===true){
    return true;
  }
  else{return false;}
}


// ---MAIN task----Loops: while and for-----------------------------------
// ---------------------------------------------------------------
function factorialIterative(x) {
  let y = x;
  if (x===0 || x === 1){return 1}
  else if (x>1){
    for (i=1; i<x; i++){
      y = y*(i);
    }
    return y
  }
  
}

console.log(factorialIterative(6));

// ==================================================================
function factorialRecursive(x) {
  if(x===0 || x === 1){
     return 1;
   }
   else if (x > 1) {
     return (x * factorialRecursive(x - 1));
     
   }
 }
 
 console.log(factorialRecursive(6));