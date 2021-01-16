
//selects elements h1, h2 & h3 and saves them to a variable 'toc'
let toc = document.querySelectorAll('h1, h2, h3');

//creates an unordered list
let ul = document.createElement('ul');
ul.setAttribute("class", "main");

//places the list inside the div element
document.querySelector('div').appendChild(ul);

let tocItem;
let content;
let oldList;
        
//iterate through the elements on the page
for (let i = 1; i < toc.length; i++) {
    if (toc[i].nodeName == 'H2') { 
        ul = document.createElement('ul');
        ul.setAttribute("class", "sub1");
        document.querySelector('ul').appendChild(ul);
        tocItem = document.createElement('li');  // creates a list item element
        content = document.createTextNode(toc[i].textContent); // creates a text node w content
        tocItem.appendChild(content); //appends the content to the list item
        ul.appendChild(tocItem); //appends the list item to the unordered list
    } else if (toc[i].nodeName == 'H3' && toc[i-1].nodeName == 'H2') {
        ul = document.createElement('ul');
        ul.setAttribute("class", "sub2");
        tocItem.appendChild(ul);
        tocItem = document.createElement('li');
        content = document.createTextNode(toc[i].textContent);
        tocItem.appendChild(content);
        ul.appendChild(tocItem);
    } else if (toc[i].nodeName == 'H3' && toc[i-1].nodeName == 'H3') {
        oldList = tocItem;
        tocItem = document.createElement('li');
        content = document.createTextNode(toc[i].textContent);
        tocItem.appendChild(content);
        oldList.appendChild(tocItem);
    } else {
        li = document.createElement('li');
        content = document.createTextNode(toc[i].textContent);
        li.appendChild(content);
        document.querySelector('ul').appendChild(li);
    }
}  

//referenced: https://www.w3schools.com/jsref/met_document_createtextnode.asp
