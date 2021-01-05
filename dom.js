function addText(){
document.getElementById("para1").textContent="We are Coders!";
}

function changeText(){
    document.getElementById("para1").innerText="Developers for life!"
   
}

function addImg(){
    let image = new Image();
    image.src="img1.jpg";
    document.getElementById("para2").appendChild(image);
}
/*function addImg(){
    let x = document.createElement("img");
    x.setAttribute("src","img1.jpg");
    document.body.appendChild(x);

}*/

function changeColor(){
    document.getElementById("para1").style.color="Blue";
}

function changeFont(){
    document.getElementById("para1").style.fontSize="40px";
}

function hideImage(){
    document.getElementById("para2").textContent="";
}




/*var a;
function show_hide() 
{
if (a===1)
    {
    document.getElementById("image").style.display="inline";
    return a=0;
    }
        else
        {
        document.getElementById("image").style.display="none";
        return a=1;
        }

}
*/




