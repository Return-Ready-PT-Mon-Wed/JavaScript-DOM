//Style body element with 'Arial, sans-serif' font family
const bodyTag = document.querySelector('body');
bodyTag.style.fontFamily = "Arial, sans-serif";

//Create variable for list items
const listItems = document.querySelectorAll('li');

//Iterate through each list item and change color to purple!
for (let i = 0; i < listItems.length; i++) {
    const thisLi = listItems[i];
    thisLi.style.color = "purple";
}






