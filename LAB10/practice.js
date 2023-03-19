//synchronous example
//synchroous meams something that occurs after an fixed interval of time
console.log(" I ");
console.log(" eat ");
console.log(" Ice Cream ");

//example of asynchronous
console.log("I");
// This will be shown after 2 seconds
setTimeout(() => {
  console.log("eat");
}, 2000);
console.log("Ice Cream");

//When you nest a function inside another function as an argument, that's called a callback.
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};
let order = (call_production) =>{

  call_production(
// 1st Function

let order = (fruit_name, call_production) =>{

  setTimeout(function(){

    console.log(`${stocks.Fruits[fruit_name]} was selected`)

// Order placed. Call production to start
   call_production();
  },2000)
};

// 2nd Function

let production = () =>{
  // blank for now
};

// Trigger 👇
order(0, production);
