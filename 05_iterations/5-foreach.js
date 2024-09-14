console.log("***********************1*****************")
const coding = ["js", "ruby", "java", "python", "cpp"]

//foreach expects a callback function. Callback function doesnt have name.
//1
coding.forEach(function (item) {
    console.log(item);
    
})
console.log("***********************2*****************")
//2
coding.forEach((val) => {
    console.log(val);
    
})
console.log("***********************3*****************")
//3
function myfunction(item) {
    console.log(item)
}
coding.forEach(myfunction) // here only function reference should be called, not execution ()

console.log("***********************4*****************")
//4
coding.forEach((item,index,arr) => {
    console.log(item,index,arr) //js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
})
console.log("***********************5*****************")
// 5 - array of objects(key,value pair)
const myCoding = [
    {
        languageName: "javascript",
        extension: "js"
    },
    {
        languageName: "java",
        extension: "java"
    },
    {
        languageName: "python",
        extension: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item);
    console.log(item.languageName)
    console.log(item.extension)
    
})


// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )
