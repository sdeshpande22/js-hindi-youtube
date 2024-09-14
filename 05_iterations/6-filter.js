//Notes : foreach doesnt return any values

console.log("************************************************1**************************************************")

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values); // returns undefined

console.log("************************************************2**************************************************")
//filter function also expects callback function, and it needs a condition for filteration
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newnum1 = myNums.filter((num)=> {
  num > 4
}) 
console.log(newnum1) //curly braces if wrapped around function will return empty array because with curly braces scope comes into picture.

// to resolve above scenario use return if curly braces used
const newnum2 = myNums.filter((num) => {
    return num > 6
})
console.log(newnum2)

const newnum3 = myNums.filter( (num) => num > 5 )   // (num) => (num > 5) will also work
console.log(newnum3);

console.log("************************************************3**************************************************")
// using foreach incase of filter
const newnum4 = []
myNums.forEach((num)=>{
  if (num > 6)
  {
    newnum4.push(num)
  }
})
console.log(newnum4)

console.log("************************************************4**************************************************")
//filter examples

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userbooks = books.filter((book)=>(book.genre === 'History')) // filter books whose genre is History
console.log(userbooks)

userbooks = books.filter((book) => {
  return book.publish >= 2000
}) 
console.log(userbooks) //filter books whose publish year is after 2000

userbooks = books.filter((book) => {
  return book.publish >=2000 && book.genre === "Science"
})
console.log("****")
console.log(userbooks) //filter books whose publish year is after 2000 and genre is science