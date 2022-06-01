"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//===== use .filter to creat an array of user objects where each
// user has at least 3 languages array
let newuser = users.filter(user => user.languages.length >= 3);
console.log("newUser :", newuser)

//===== use .map to create an array of strings where each
// element is a users email address

const emails = users.map(user => user.email);
console.log("emails :", emails);
//use reduce to get total number of years

// let totalYearsofExp = users.reduce((previousValue, currentvalue) =>{
//     console.log("previous , current: ", totalYearsofExp);
//     return previousValue + currentvalue.yearsOfExperience
//
// },0);



const longestEmail = users.reduce((previousValue, currentValue )=>{
   if(currentValue.email.length > previousValue.length) previousValue = currentValue.email;
   return previousValue

},'');
console.log("longestEmail :", longestEmail)





    const instructString = users.reduce((previousValue, currentValue, currentIndex,array)=>{
        let delimiter = ', ';
        if(currentIndex === (array.length-1)) delimiter = '.';

        return previousValue + currentValue.name + delimiter + '';

},'your instructors are');
console.log('instructorString : ',instructString)