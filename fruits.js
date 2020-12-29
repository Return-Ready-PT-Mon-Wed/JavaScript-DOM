const bodyElem = document.querySelector('body');
const divHeader = document.querySelector('#headerDiv');



// insert a div element above current body content
let tocElem = document.createElement('ol');
tocElem.id = 'toc';
bodyElem.insertBefore(tocElem, divHeader);


// jquery function on document ready to get chile elem of #contents and interate
$(document).ready(function toc_builder(){
    const divList = $('#contents').children();

    for (let i = 0; i < divList.length; i++) {
        $('#toc').append(`<li>${divList[i].innerText}</li>`);
        console.log(divList[i].innerText);
    }

});

