//string
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();

//date
new Date(year, month, day, hours, minutes, seconds, milliseconds);
new Date(dateString);
new Date(milliseconds);
new Date();

//dom html form 
<!DOCTYPE html>
<html>
<head>
<script>
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
</script>
</head>
<body>

<h2>JavaScript Validation</h2>

<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
  Name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>

</body>
</html>

//dom collections
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript HTML DOM</h2>

<p>Hello World!</p>

<p>Hello Norway!</p>

<p>Click the button to change the color of all p elements.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  const myCollection = document.getElementsByTagName("p");
  for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = "red";
  }
}
</script>

</body>
</html>

//dom methods
<!DOCTYPE html>
<html>
<body>

<h2>My First Page</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

</body>
</html>


 //math
 <!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math Constants</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 
"<p><b>Math.E:</b> " + Math.E + "</p>" +
"<p><b>Math.PI:</b> " + Math.PI + "</p>" +
"<p><b>Math.SQRT2:</b> " + Math.SQRT2 + "</p>" +
"<p><b>Math.SQRT1_2:</b> " + Math.SQRT1_2 + "</p>" +
"<p><b>Math.LN2:</b> " + Math.LN2 + "</p>" +
"<p><b>Math.LN10:</b> " + Math.LN10 + "</p>" +
"<p><b>Math.LOG2E:</b> " + Math.LOG2E + "</p>" +
"<p><b>Math.Log10E:</b> " + Math.LOG10E + "</p>";
</script>

</body>
</html>

//hoisting
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;           // Display x in the element
</script>

</body>
</html> 
