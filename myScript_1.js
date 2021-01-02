
const msgBothPars = "We are coders!";
const msgFirstPar = "Developers for life!";

//Insert text to both paragraphs
let bothPars = document.querySelectorAll(".pars");

for (let i = 0; i < bothPars.length; i++) {
    const thisPars = bothPars[i];
    thisPars.innerText = msgBothPars;
};

//Change text content & font size of first paragraph
let parFirst = document.getElementById("parOne");
parOne.innerText = msgFirstPar;
parOne.style.fontSize = "40px";

//Assign image to variable
let imageHtml = `
<img id="image" class="divTechImg" src="lib/images/diversetech.jpeg" alt="drawing of diverse people in tech"></img>
`;

//Place image in body of HTML
let bodyTag = document.querySelector('body');
bodyTag.innerHTML += imageHtml;

//Change text color in body to purple
bodyTag.style.color = "purple";

//Create functionality to hide/display image with button
function buttonAction() {
    const targetImage = document.querySelector(".divTechImg");
    const curStatus = targetImage.style.visibility;

    if(curStatus == "hidden"){
        targetImage.style.visibility = "visible";
    } else {
        targetImage.style.visibility = "hidden";
    }
}


