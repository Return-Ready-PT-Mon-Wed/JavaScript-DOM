// Add "We are coders!" to the `<p>` element
document.getElementById("para-1").innerHTML = "We are coders!";
document.getElementById("para-2").innerHTML = "We are coders!";

//Change text in first `<p>` element to "Developers for life!"
document.getElementById("para-1").innerHTML = "Developers for life!";

//Add image to HTML document using DOM methods
var img = document.createElement('img');
img.src = "diversetech.jpeg";
var body = document.querySelector("body");
body.appendChild(img);

