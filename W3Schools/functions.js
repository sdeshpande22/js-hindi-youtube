function myfunction(a,b){
    return a*b
}

let mult = myfunction(2,3)
console.log(mult)


// myfunction refers to the function object, and myfunction() refers to the function result.


function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let x = toCelsius(77);
  let text = "The temperature is " + x + " Celsius";
  //You can use the function directly, as a variable value:
  
  let text1 = "The temperature is " + toCelsius(77) + " Celsius";
  console.log(x,text,text1)


  // code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName