body.style.fontFamily = 'Arial, sans-serif';

var li = document.querySelectorAll('li');
for (let i=0 ; i < li.length; i +=1){
    li[i].style.color = 'red';  
}

var img = document.createElement('img');
img.src = "nkenna.jpg";
body.appendChild(img);
img.style.width = '30%';

var name = document.querySelector('li').innerHTML = "Nickname: UgoJr.";