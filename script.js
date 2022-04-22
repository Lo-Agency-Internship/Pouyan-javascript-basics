let question = prompt("whats will show up next?");

if (question) {
  alert(`Your answer: ${question} `);
} else {
  alert(`you didn't answer! WHY? WHYYYYY????`);
}

let namee = prompt("What is your name?");
let lastName = prompt("What is your last name?");
let age = prompt("What is your age?");
let sex = prompt("and lastly, what is your sex?");
if ((namee, lastName, age, sex)) {
  alert(
    `Your full name is ${
      namee + lastName
    }.\nYour are ${age} years old\nAnd you are ${sex}`
  );
}
if ((!namee, !lastName)) {
  alert(`you didn't answer your full name`);
}
if (!age) {
  alert(`you didn't answer  your age`);
}
if (!sex) {
  alert(`you didn't answer  your sex`);
}

let number1 = prompt("ok, here is a little magic for you, give us a numberOne");
let number2 = prompt("ok, give us numberTwo");
if ((number1, number2)) {
  alert(`your choice of numbers were, numberOne=${number1} and numberTwo=${number2}, respectively, right? now wait for it!`);
} else {
  alert("you didn't answer again! WHY WHY WHY?");
}

let temp;
temp = number1;
number1 = number2;
number2 = temp;

alert(`AND NOW YOU WITNESS MAGIC, numberOne is now=${number1} and numberTwo is now=${number2}`)
