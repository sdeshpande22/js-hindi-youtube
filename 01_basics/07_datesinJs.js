// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

let date = new Date(); // Current date
date.setDate(date.getDate() + 5); // Adds 5 days
console.log(date);

date.setMonth(date.getMonth() + 2); // Adds 2 months
console.log(date);

date.setFullYear(date.getFullYear() + 1); // Adds 1 year
console.log(date);

date.setHours(date.getHours() + 4); // Adds 4 hours
console.log(date);

date.setMinutes(date.getMinutes() + 30); // Adds 30 minutes
console.log(date);

date.setSeconds(date.getSeconds() + 45); // Adds 45 seconds
console.log(date);

date.setMilliseconds(date.getMilliseconds() + 500); // Adds 500 milliseconds
console.log(date);

// To add 1 day and 6 hours to the current time in JavaScript

// Add 1 day
date.setDate(date.getDate() + 1);
// Add 6 hours
date.setHours(date.getHours() + 6);
console.log(date);

date.setDate(date.getDate() + 2) + date.setHours(date.getHours() + 36);
console.log(date);


