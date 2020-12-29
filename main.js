// Change font of body
const bodyElem = document.querySelector('body');
bodyElem.style.fontFamily = "Arial, sans-serif";

const liElem = document.querySelectorAll('li');

for (let i = 0; i < liElem.length; i++) {
    const thisLi = liElem[i];
    thisLi.style.color = "red";
}
