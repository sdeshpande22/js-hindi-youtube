// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map() //hold key value pairs
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

for (const k of map) {
    console.log(k); // comes as array eg: [ 'IN', 'India' ]
}
for (const [k] of map) {
    console.log(k); // prints only keys with square brackets around
}
for (const [k,v] of map) {
    console.log(k,v); // print key and values both
}
for (const [k,v] of map) {
    console.log(v); // if v selected then prints only values
}

// Objects

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); //Error : obj is not iterable
    
// }

// Note - For of won't work for objects(key value pairs)