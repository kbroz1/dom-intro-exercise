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




