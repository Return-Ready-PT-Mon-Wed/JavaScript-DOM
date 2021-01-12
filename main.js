const lis = document.querySelectorAll("li");
lis[0].textContent = "Nickname: none";
lis[1].textContent = "Favorites: baking, gardening, pottery";
lis[2].textContent = "Hometown: Philadelphia";
lis[3].textContent = "Random fact: Oprah loves bread.";
// change <li> color
for (let i=0; i<lis.length; i++) {
    lis[i].style.color = "darkgreen";
}
// add a picture to the project
const oprah = document.createElement('img');
oprah.src = "https://media.giphy.com/media/3o7ZeFpK0qqSpsWNsA/giphy.gif";
document.body.appendChild(oprah);
// create new img and set src to pic of you
const amatullah = document.createElement('img');
amatullah.src = "https://media-exp1.licdn.com/dms/image/C4D03AQFkl-SiehaSNg/profile-displayphoto-shrink_400_400/0/1597633624970?e=1614816000&v=beta&t=-D_e5ZF_fDAxLAMo0Kb1oJJloPr7pySU8tnt3N9tayE";
document.body.appendChild(amatullah);
document.body.style.fontFamily = "Arial", sans-ServiceUIFrameContext;
