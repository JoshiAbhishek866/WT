syntax of object 
var objname ={
 "key":"name2"
};
*/
/*about arrow function in js 
1) var magic = function(){            //this "function()" is anonymous fun , means it doesnt have name 
   return new Date();
}
or 2) var magic = ()=>{
return new Date();                 // another syntax of 1) , as function is anonyomous , it is nameless temporary function
}
or 3) var magic = () => new Date();                //thus it is syntax of arrow function 
*/
//for parameterized arrow function
var concat = (arr1, arr2) => arr1.concat(arr2);
console.log(concat([1, 2], [3, 4, 5]));
//  SPREAD OPERATOR
const arr11 = ["JAN", "FEB", "MAR"];
let arr12;
(function () {
  // arr12=arr11;           // by making arr12 is equal to arr11
  arr12 = [...arr11]; // here it will display authentic  arr1    as it will spread out content of arr11 into arr12
  arr11[0] = "potato";
})();
console.log(arr12);
// destructuring in js
var vo = {
  a: "INDIA",
  b: { min: 5, max: 8 },
  c: 3
};
const { a: x, b: y, c: z } = vo;
console.log(y); //thus by the concept of destructering we can use object 's data members as a variable for further operations
// usage of backtick as substitute of string
const greeting = `Hello, Welcome to ${vo.a}, and in 2023 G20 is hosted by ${vo.a}`; //major usage of backtick is that we can directly use any object data member easily
console.log(greeting);
// and this type of string using backtick is called template string
// one of the FEATURE of ES6
const adhar = (name, age, sex) => {
  return {
    name: name,
    age: age,
    sex: sex
  };
};
console.log(adhar("joshi abhishek", 18, "male")); //here variables becomes data members and it finally returns an object
// or another method is
const adhar1 = (name, age, sex) => ({ name, age, sex });
console.log(adhar1("joshi abhishek", 18, "male"));
//shortcut to write member fun in object is
const cycle = {
  gear: 2,
  setgear: function (g) {
    this.gear = g;
  }
};
cycle.setgear(3);
console.log(cycle.gear);
// or another way to write is
cycles = {
  gears: 2,
  setgears(g) {
    this.gears = g;
  }
};
cycles.setgears(1);
console.log(cycles.gears);

//class syntax in js
function myfun(){
  class vege{
    constructor(name){
      this.name=name;
    }
  }
  return vege;
}
const vegetable=myfun();
const carrot=new vegetable('carrot');
console.log(carrot.name);
