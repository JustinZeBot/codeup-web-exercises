"use.strict";
console.log('Hello from External JS!')
var userinput =prompt('please enter your name.');
console.log('the users name is: ' +userinput);
alert('you will be charged $3 for every day you rent one movie. Confirm?');
var price=3
var bear=prompt('how many days will you be renting Brother Bear for?');
var mermaid=prompt('how many days will you be renting The Little Mermaid?');
var hercules=prompt ('how many days will you be renting Hercules?' );

alert('you will be charged for ' + (bear+mermaid+hercules)*price);