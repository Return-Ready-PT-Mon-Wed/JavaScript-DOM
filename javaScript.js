
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





 
 

