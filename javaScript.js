// const paragraph1 = document.getElementById('para1');
// const paragraph2 = document.getElementById('para2');
// var paragraph1 = para1.textContent('We are coders!');
// var node1 = document.createTextNode("We are coders!");
// var node2 = document.createTextNode("We are coders!");
// para1.appendChild(node1);
// para2.appendChild(node2);
 

var html = "";

document.getElementById("para1").innerHTML = "We are coders";
document.getElementById("para2").innerHTML = "We are coders";
document.getElementById("para1").innerHTML = "Developers for life!";

html = document.getElementById("para1").innerHTML = "Developers for life!";

var img = document.createElement('img');
img.src = "lib/images/Kimberly Bryant.jpg";
var src = document.querySelector("body");
 src.appendChild(img);
console.log(html);

 
 

