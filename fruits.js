const bodyElem = document.querySelector('body');
const divHeader = document.querySelector('#headerDiv');



// insert a div element above current body content
let tocElem = document.createElement('div');
tocElem.id = 'toc';
bodyElem.insertBefore(tocElem, divHeader);


// jquery function on document ready to get child elem of #contents and iterate
//console.log(divList[i].innerText);
$(document).ready(function toc_builder(){
    
    const divList = $('#contents').children();

    for (let i = 0; i < divList.length; i++) {
        if(divList[i].nodeName == "H1"){
            $('#toc').append(`<h1>${divList[i].innerText}</h1>`);
            
        } 
        else if(divList[i].nodeName == "H2"){
            $('#toc').append(`<ul><u>${divList[i].innerText}</u></ul>`);
        }
        else {
            $('#toc').append(`<li>${divList[i].innerText}</li>`);
        }
    }
    $('#toc').append(`</br>`);
    $('#toc').append(`</br>`);

});

