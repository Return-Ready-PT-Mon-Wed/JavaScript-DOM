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



var img = document.createElement('img');
img.src = "lib/images/Kimberly Bryant.jpg";
var src = document.querySelector("body");
 src.appendChild(img);


 document.getElementById("para1").style.color = "blue";
 document.getElementById("para1").style.fontSize = "40px";

 var button = document.createElement('button');
button.innerHTML = 'click me';
src.appendChild(button);

 button.addEventListener('click', () => {
    if(img.style.display == 'none'){
                img.style.display = 'block';
              
       }else {
                         
            img.style.display = 'none';
          }
     }); 





 
 

