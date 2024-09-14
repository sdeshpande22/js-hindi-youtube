console.log("************************************************1**************************************************")

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers.map( (num) => { return num + 10}) 
console.log(newNums); //returns the array by adding 10 to each number

console.log("************************************************2**************************************************")
//chaining
const newnum1 = myNumers
                        .map((num)=> (num * 10))
                        .map((num)=> num + 1)
                        .filter((num)=> num>40)
console.log(newnum1)
console.log("************************************************3**************************************************")

