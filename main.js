// Change font of body
const bodyElem = document.querySelector('body');
bodyElem.style.fontFamily = "Arial, sans-serif";

const liElem = document.querySelectorAll('li');

for (let i = 0; i < liElem.length; i++) {
    const thisLi = liElem[i];
    thisLi.style.color = "red";
}

//Add image
let imageHtml = 
`
<h3>This is a picture of me!</h3>
<img class="image" id="laptopImg" src="lib/images/Headshot Photo.JPG" alt="Granville Woods"/>
`;

bodyElem.innerHTML += imageHtml;

let imgElem = document.querySelector('.image');
imgElem.width = "100";

