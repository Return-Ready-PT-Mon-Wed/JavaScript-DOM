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

//Select list items to replace
//Change 1st List Item
const oldNickname = document.querySelector("li:first-child");
//Create new list item element to replace the old one
const newNickname = document.createElement('li');
newNickname.innerHTML = '<li>Stephanie</li>';
//Target parent element of the target child & apply changes to child
oldNickname.parentNode.replaceChild(newNickname, oldNickname);

//Change 2nd List Item
const oldFavorites = document.querySelector("li:nth-of-type(2)");
//Create new list item element to replace the old one
const newFavorites = document.createElement('li');
newFavorites.innerHTML = '<li>Favorites: Jazz music, filet-mignon, Office Space</li>';
//Target parent element of the target child & apply changes to child
oldFavorites.parentNode.replaceChild(newFavorites, oldFavorites);

//Change 3rd List Item
const oldHometown = document.querySelector("li:nth-of-type(3)");
//Create new list item element to replace the old one
const newHometown = document.createElement('li');
newHometown.innerHTML = '<li>Hometown: Middletown</li>';
//Target parent element of the target child & apply changes to child
oldHometown.parentNode.replaceChild(newHometown, oldHometown);

//Change Last List Item
const oldRandom = document.querySelector("li:nth-of-type(4)");
//Create new list item element to replace the old one
const newRandom = document.createElement('li');
newRandom.innerHTML = '<li>Random Fact: I have traveled to Japan!</li>';
//Target parent element of the target child & apply changes to child
oldRandom.parentNode.replaceChild(newRandom, oldRandom);

//Style the <li>'s to a color of my choosing
document.getElementById("aboutList").style.color = "turquoise";
