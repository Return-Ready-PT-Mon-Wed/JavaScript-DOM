//// Change text of p1, p2 ////
const paraBothMessage = "We are coders!";
const paraOneMessage = "Developers for life!";

var bothPara = document.querySelectorAll(".para");

for (let i = 0; i < bothPara.length; i++) {
  const thisPara = bothPara[i];
  thisPara.innerText = paraBothMessage;
}

var paraOne = document.getElementById("paraOne");
paraOne.innerText = paraOneMessage;
paraOne.style.fontSize = "40px";

//
let imageHtml = 
`
<h3>This is a laptop!</h3>
<img class="image" id="laptopImg" src="lib/images/laptop.svg" alt="Granville Woods"/>
`;

let bodyElem = document.querySelector('body');
bodyElem.innerHTML += imageHtml;

// Change all text to red
bodyElem.style.color = "red";

//hide button
function hideImage() {
    const laptopImg = document.querySelector(".image");
    const status = laptopImg.style.visibility;

    if(status == "hidden"){
        laptopImg.style.visibility = "visible";
    } 
    else {
        laptopImg.style.visibility = "hidden";
    }
    
}
