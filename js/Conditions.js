"use strict";

/* ########################################################################## */
console.log('sanity Check')
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


// function analyzeColor(colorInput1) {
//     if(colorInput1 === 'blue'){
//         console.log('wow! blue is my favorite color to!')
//     }else if (colorInput1 === 'red'){
//         console.log('Red is a pretty cool color to!')
//     } else{
//         console.log('sorry i dont like '+ colorInput1)
//     }
//
// }

// analyzeColor('blue')
// analyzeColor('red')
// analyzeColor('green')



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor)


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// var switchColorAnalyzer = prompt('What is your favorite color?')
//
// switch(switchColorAnalyzer) {
//     case "red":
//         alert('red is a very cool color! i like it!')
//         console.log('red was input')
//         break;
//     case "blue":
//         alert('blue! my favorit color!')
//         console.log('blue was input')
//         break;
//     default:
//         alert('sorry '+ switchColorAnalyzer + 'is not a color i like')
//         console.log('another color other than red/blue was input')
//         break;
// }
//



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


//accidentally did this in the last one as well!

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//enter RGN code here

function calculateTotal(TotalBill,DiscountNumber){
    if(DiscountNumber ===0){
        return('Sorry, your number was not lucky. The Total is: '+parseFloat(TotalBill))
    }else if(DiscountNumber ===1){
        return('You got the bottom of the barrel. The discount is 10%, and the total is: '+ parseFloat(TotalBill-(TotalBill*.1)))      //10%
    }else if(DiscountNumber ===2){
        return('You were lucky! the discount is 25%, and the total is: ' + parseFloat(TotalBill-(TotalBill*.25)))               //25
    }else if(DiscountNumber ===3){
        return('You were lucky! the discount is 25%, and the total is: ' + parseFloat(TotalBill-(TotalBill*.35)))          //35
    }else if(DiscountNumber ===4){
        return('You were pretty lucky! the discount is 25%, and the total is: ' + parseFloat(TotalBill-(TotalBill*.5)))     //50
    }else if(DiscountNumber ===5){
        return('Jackpot!!! Your purchase is free for this transaction!')                             //free
    }else {
        console.log('the program did not like that, ensure numbers are 0-5')
    }
}







console.log(calculateTotal(40,0))
console.log(calculateTotal(40,1))
console.log(calculateTotal(40,2))
console.log(calculateTotal(40,3))
console.log(calculateTotal(40,4))
console.log(calculateTotal(40,5))





/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

   console.log(calculateTotal(100,luckyNumber ))
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


function FinalExercise(userConfirm){
      userConfirm = confirm('would you like to enter a number?')

    if (userConfirm){
            console.log('User wanted to add a number')
            FinalExerciseMath()

    }else {
        console.log('User did not want to enter a number')
    }
}



function FinalExerciseMath (userNumber){
    userNumber = prompt('please enter a number')

    if (isNaN (userNumber)){
        console.log('number')
    } else{
        alert('you did not enter a valid number')
    }

}

FinalExercise()


