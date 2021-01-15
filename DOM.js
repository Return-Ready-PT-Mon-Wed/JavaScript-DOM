function addText() {
    document.getElementById("para1").textContent = "We are coders!";
}

function changeText() {
    document.getElementById("para1").innerHTML = "Developers for life!";
    }

function addImage() {
    let image = new Image(200, 200);
    image.src = "tech.jpg";
    document.getElementById("para2").appendChild(image);
    }

function changeColor() {
    document.getElementById("para1").style.color = "brown";
}

function fontSize() {
    document.getElementById("para1").style.fontSize = "40px";
}

function hideImage() {
    document.getElementById("para2").textContent = "";
}








