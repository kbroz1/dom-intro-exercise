console.log("Javascript is alive!");

//changes h1 with id "greeting" to different text (from Hello There to Hello World)
document.getElementById("hello").textContent = "Hello, World!";


// document.getElementsByTagName("li").style.backgroundColor = "yellow";
var list_items = document.querySelectorAll("li");
  for (var i = list_items.length - 1; i >= 0; i--) {
    list_items[i].style.backgroundColor = "yellow";
    // list_items[i].addEventListener("click", selectItem);
  }


// // Create an image tag, set its src attribute to http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, 
// and append the to the #greeting div.

var img1 = document.createElement('img')
//provides source for img
img1.src= "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
//adds picture to the page
document.body.appendChild(img1);

// Create and add a ul element to the end of the body with a class of "todo-items"
// var toDoItems = document.createElement('ul')
// toDoItems.className = "todo-items"

//first create the new ul
var newLi = document.createElement('ul')
//this creates a class name
newLi.class = "todo-items"

document.body.appendChild(newLi);
var li = document.createElement('li')
var li1 = document.createElement('li')
var li2 = document.createElement('li')
var li3 = document.createElement('li')

newLi.appendChild(li);
//needs a parantheses after appendChild because it is a method and you are passing data/info within the
li.appendChild(document.createTextNode('make coffee'));

newLi.appendChild(li1);
li1.appendChild(document.createTextNode('eat donut'));


newLi.appendChild(li2);
li2.appendChild(document.createTextNode('change diapers'));

newLi.appendChild(li3);
li3.appendChild(document.createTextNode('drive to work'));

//how to remove something by hovering over it: 
var removeDiv = document.getElementById("ghosting");
removeDiv.onmouseover = function (){
  removeDiv.remove();
}

//makes width bigger when you mouse over

var resizeDiv = document.getElementById("resize");
resizeDiv.onmouseover = function (){
  resizeDiv.style.width = "400px" ;
}

//remove a class from an element
//change photo on click:
function myFunction() {
  var element = document.getElementById("essentials");
  element.classList.remove("selected");
  var changeSrc = document.querySelector("img")
  changeSrc.src = "panic.jpeg";
}

//alert a message when any number key on the keyboard is pressed:
window.onkeydown = function(event) {
  if (event.keyCode = 0-9) {
     alert("I HATE NUMBERZZZ!");
  }
};

// const log = document.getElementById("keyEvent");
// document.addEventListener('keypress', logKey);

// function logKey (e) {
//   log.textContent += `${e.code}`
// }




// Add the class of selected to an <li> when it is clicked. Remove it from any other lis as well.



// Change the image to be the most recently clicked food item.

// When the gray div is moused over, it's removed from the DOM.

// When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.

// When the reset button is clicked - remove the selected class from each <li> and change the image to panic.jpeg.

// When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"



// //create array:
// var toDoArray = [
//     'make coffee',
//     'eat donut',
//     'change diapers',
//     'drive to work'];

// for (let i=0; i < toDoArray.length; i++){
//   //creates new ul element
//   var toDoElement = document.createElement('ul');
// }
// //adds content for ul element 
// var toDoDescription = document.createTextNode(toDoArray[i]);
// //puts ul element with arrray in it on the page
// toDoElement.appendChild(toDoDescription);




