// 2.1 task
alert("I'm JavaScript!");

// 2.4.1 task
let name = "John";
let admin = name;
alert(admin);
// 2.4.2 task
let nameOfOurPlanet = "Earth";
let currentVisitor;

// 2.5.1 task
alert(`Hello, ${nameOfOurPlanet}`);

// 2.6.1
let nameAlert = prompt("What is your name?", '');
alert(`Your name is ${nameAlert}`);

// 2.7
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

let a1 = 2;
let x = 1 + (a1 *= 2); // 5

let a2 = prompt("First number?", 1);
let b2 = prompt("Second number?", 2);

alert(+a2 + +b2);

// 2.10
let companyGuess = prompt("What is the official name of JavaScript?", '');
companyGuess == 'ECMAScript' ? alert('Right!') : alert('You do not know? ECMAScript!');

let number = prompt("Write a number:", '');
if(number>0){
    alert(1);
}
else if(number<0){
    alert(-1);
}
else{
    alert(0);
}

/*let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}*/
let result = (a+b<4) ? 'Below': 'Over';

/*let message;
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */
let message = (login=='Employee') ? 'Hello':
(login=='Director') ? 'Greetings':
(login=='') ? 'No login': '';

// 2.11
/*Write an if condition to check that age is between 14 and 90 inclusively.
“Inclusively” means that age can reach the edges 14 or 90. */

let age = prompt("How old are you?", '');
if(age>=14 && age<=90){
    alert('Inclusively');
}

/*Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it. */
let age1 = prompt("How old are you?", '');
if(!(age1>=14 && age<=90)){
    alert('Inclusively');
}

if(age1<14 || age1>90);

let whoIs = prompt("Who's There?",'');
if(!(whoIs)){
    alert('Canceled');
}
else if(whoIs='Admin'){
    let password = prompt('Password?','');
        if(!(password)){
            alert('Canceled');
        }
        else if(password='TheMaster'){
            alert('Welcome!');
        }
        else{
            alert('Wrong Password!');
        }
}
else{
    alert('I do not know you.');
}

// 2.13
let i = 2
for(; i<=10; i++){
    if(i%2!=0) continue;
    alert(i);
}

/*Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/
let i1 = 0;
while(i1<3){
    alert(`number ${i1}`);
    i1++;
}

/*Repeat until the input is correct
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task. */

let num100=prompt('Type a number greater than 100:', '');
while(num100<= 100 || !(num100)){
    num100 = prompt('Type a correct number!');
}

// Write the code which outputs prime numbers in the interval from 2 to n.
nextPrime: for(let i=2; l<max; i++){
    for(j=2; j<i; j++){
        if(i%j==0) continue nextPrime;
    }
    alert(i);
}
/*Write the code using if..else which would correspond to the following switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
} */
let browser;

if (browser == "Edge"){
    alert("You've got the Edge!");
} else if(browser == "Edge" ||
    browser == "Chrome" ||
    browser == "Firefox" ||
    browser == "Safari" ||
    browser == "Opera"){
        alert( 'Okay we support these browsers too' );
}
else{
    alert( 'We hope that this page looks ok!' ); 
}

/*Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
} */
let f = +prompt('a?', '');
switch(f){
    case 0:
        alert(0);
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert(2,3);
        break;
}

//2.15
/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR ||
 */

//1st
function checkAge(age){
    return (age>18) ? true : confirm('Did parents allow you?');
}
//2nd
function checkAge(age){
    return (age>18) || confirm('Did parents allow you?');
}

function min(a,b){
    if(a>b){
        return b;
    } else{
        return a;
    }
}

function pow(a,n){
    let res;
    for(let i = 1; i<n;  i++){
        les *=a;
    }
    return res;
}
let numer, n;
numer = prompt('Type numer:');
n = prompt('Type n:');
pow(numer, n);

/*
 Rewrite with arrow functions
Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
 */

let ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}
ask('Do you agree?',
    () => "You agreed.";
    () => "You canceled the execution.";);  