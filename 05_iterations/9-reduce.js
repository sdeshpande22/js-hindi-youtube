console.log("************************************************1**************************************************")
const newarray = [2, 4, 56, 7]
initialValue = 0
const totalvalue = newarray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

//explaination : initialValue will be used only once
//At first accumulator is equal to initialValue
//from next time onwards, initial value is not considered.
//accumulator + currentValue once again goes into accumulator
//(accumulator, currentValue) => accumulator + currentValue ---> (0,1 => 0 + 1); (1,2 => 1+2); (3,3 => 3+3) ; (6,4 => 6+4) 

console.log(totalvalue);

console.log("************************************************2**************************************************")
// using regular function
const myNums = [12, 22, 31]

const total = myNums.reduce(function (acc,cv) {
    console.log(`accumulator:${acc}, currentvalue:${cv}`);
    return acc+cv
 },0) // Here 0 is initial value
console.log(total);

console.log("************************************************3**************************************************")
// using arrow function
const myNums1 = [1, 22, 314]
const arraytotal = myNums1.reduce((acc,cv) => {
    console.log(`accumulator : ${acc},currentvalue:${cv}`);
    return acc + cv
},0)

console.log(arraytotal);

console.log("************************************************4**************************************************")
// for list of array objects(k,v pairs)
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//method1: Regular Function
const totalprice = shoppingCart.reduce(function (acc,currentitem) {
    return acc + currentitem.price
},0)
console.log(totalprice);

//method2 : Arrow Function
const total_arrow = shoppingCart.reduce((acc,item)=>{
    return acc + item.price
},0)
console.log(total_arrow)