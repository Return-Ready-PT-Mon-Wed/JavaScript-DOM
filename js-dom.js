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


let imageHtml = 
`<div class="tech">
<div class="techie">
  <h3>This is a laptop!</h3>
  <img
    class="image"
    src="lib/images/laptop.svg"
    alt="Granville Woods"
  />
</div> */
`;

let bodyElem = document.querySelector('body');
bodyElem.innerHTML += imageHtml;