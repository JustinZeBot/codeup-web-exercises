"use.strict";
//console.log('Hello from External JS!')
//var userinput =prompt('please enter your name.');
//console.log('the users name is: ' +userinput);



var price=3
confirm('you will be charged $'+ (price) +'for every day you rent one movie. Confirm?');
var bear=parseFloat(prompt('how many days will you be renting Brother Bear for?'));
var mermaid=parseFloat(prompt('how many days will you be renting The Little Mermaid?'));
var hercules=parseFloat(prompt('how many days will you be renting Hercules?' ));

alert('you will be charged for ' + (bear+mermaid+hercules)*price);


