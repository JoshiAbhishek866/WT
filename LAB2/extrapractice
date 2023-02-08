var r = "Catherine, empress of "; //global
let k = 10; //local var
const pi = 3.14; //const
k = r; //any local or global var can be change
console.log(r, k, pi);
//pi=0//thus const is unchanged
//console.log(r,k,pi);
var l = "ussr";
console.log(r + " " + l);
let m = 10; //local var
m *= 41;
console.log(m);
let a = `earth is \" located \" near \' mars`;
console.log(a);
a = "first";
let b = r + "the great " + a + " " + l;
console.log(b.length);
let a11 = "mother";
let a12 = "india";
a11 += a12;
console.log(a11 + " hola " + l);
let m1 = "jello world";
console.log(m1[0]);
m1[0] = "k";
console.log(m1[0]); //thus string are immutable it cant be changed , so changing an index is not option any more
//function calling
function fun(a1, a2, a3) {
  let var1 = a1 + a2 + a3;
  return var1;
}
console.log(fun("kem", "cho ? ", "majama....."));
//nested array
let arr1 = [
  ["bulls", 12],
  ["is white", 10100]
];
console.log(arr1);
var arr2 = [12, 13, 14];
arr2[0] = 56;
console.log(arr2); //thus arrays can be changed and are mutable
let m13 = arr2.shift();
console.log(arr2); //thus 1st array element can be removed
var m12 = arr2.pop();
console.log(arr2); //thus array elemrnts can poped up
let m14 = arr2.unshift("o hello");
console.log(arr2); // to pop 1st element is unshift
let m15 = [1, 234, "o hello"];
m15.push(["arunachal", "pradesh"]);
console.log(m15); //
let m16 = [12, 15, [13, 24, [14, 25, [15, 16]]]];
let m17 = m16[2][2][2][0];
console.log(m17); //
//function
function f1() {
  console.log("ocean");
}
for (let i = 0; i < 2; i++) {
  f1(); //fun call
}
var a1 = 12;
function f2() {
  let a2 = 19; //by let keyword the var becomes global
}
function f3() {
  a1++;
  console.log(a1);
  //a2++;  thus a2 is local var
  //console.log(a2); thus let is for local and var is fpr global
}
f3();
// local over global
let q = 12;
function myfun() {
  var q = 4;
  return q;
}
console.log(myfun());
console.log(q);                  //NOTE- if we dont specify return of function undefined is returned

function i(arr,item)
{
  return arr.push(item);
}
var k11=[1,2,3,4,5];
i(k11,8);
console.log(k11);
function comp(a, b) {
  if (a === b) return "equal";
  return "unequal";
}
console.log(comp(2, "2"));

/*if 3==3 it is true
if 3=='3' then true                   by using strict equality operator
BUT
if 3===3 then its true
if 3==='3' is false statement         by using strict equality operator
*/
const obj1234 = {
  a: "apple",
  b: 52,
  c: "cat"
};
delete obj1234.a;
/*thus an object format canbe represented as 
         {
              "key":"value",
               "key":"value",
              "alpha" : ["pearl","harbour"], // in js we use [ ]notation for array 
                               
             "beta" :                                                    //for array of object 
             [
                {
                   "a1":1,
                   "b1":"abcd",
                   "c1":["a","b","c"],
                }
                {
                   "a2":2,
                   "b2":"efgh",
                   "c1":["e","f","g"],
                }
             ]
             //and if we make whole js object into string json.parse() function is used to make whole string into 
             object the object back.
             
             //A common use of JSON is to exchange data to/from a web server. When receiving data from a web server, the data is always a string. Parse the data with JSON.parse() , 
             and the data becomes a JavaScript object.
             for example
             `[
                {
                   "a1":1,
                   "b1":"abcd",
                   "c1":["a","b","c"],
                }
                {
                   "a2":2,
                   "b2":"efgh",
                   "c1":["e","f","g"],
                }
             ]`   this bentick symbol makes whole obj in array 
             

         }
 */
//for nested obj
var mystor = {
  cycle: {
    seat: 1,
    wheel: "two"
  },
  car: {
    "passenger seat": "six"
  }
};
var box = mystor.car["passenger seat"];
console.log(box);

var myplant = [
  {
    type: "flower",
    list: ["marigold", "jasmine", "lotus"]
  },
  {
    type: "tree",
    list: ["juniper", "oak", "banyan"]
  }
];
var sectree = myplant[1].list[1];
console.log(sectree); //accesing nested array

var copymyplant = JSON.parse(JSON.stringify(myplant)); //to keep copy of the object myplant this syntax is used in js
var arr = [];
for (var i = 0; i < 10; i++) {
  //loop in js
  arr.push(i);
}
console.log(arr);

function mul(arr1) {
  var p = 1;
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1[i].length; j++) {
      p *= arr1[i][j];
    }
  }
  return p;
}
var p1 = mul([
  [1, 2],
  [3, 4],
  [5, 6, 7]
]);
console.log(p1);

function fun1(str) {
  return parseInt(str);
}
console.log(fun1("52")); //parseInt converts string to integer
function check(n) {
  return n > 0 ? "positive" : n < 0 ? "negative" : "zero";
} // in js too ternary is condition ? true : false;
console.log(check(52));
/* with var keyword we can have 2 variable with same name but its not possible with let keyword 
thus var k="a";
     var k="b";    is true
 But 
 let k="a";
     k="b";  is absolutely WRONG
*/
let k1234 = "hello";
k1234 = "key"; //still if a variable is declared with let than it can be updated this way

/*2) var vs let is
  var can be global or local both 
  but let can only have scope under curely braces,{}, so it can be only local variable
*/
/*
const has all properties like let but can only be "read" , not modified once assigned;
*/
const s = [2, 3, 4];
function edit() {
  s[0] = 1; // it is ILLEGAL to reassign const array like s=[1,2,3]
  s[1] = 5; //as it is not allowed to reassign in array but it is LEGAL to update array using indexs or bracket notation , [],
  s[2] = 6;
}
edit();
console.log(s);
function freezefun() {
  const mathobj = {
    PI: 3.14
  };
  Object.freeze(mathobj); //for preventing object mutation in simple words to make whole obj constant and make object intact and unchanged
  // eg this statement is not gonna work  mathobj.PI = 52;  as console only display the pi valve as 3.14
  return mathobj.PI;
}
PI = freezefun();
console.log(PI);
/*
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
