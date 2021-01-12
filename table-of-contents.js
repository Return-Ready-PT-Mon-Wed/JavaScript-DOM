const toc = document.querySelectorAll("h1, h2, h3");
        let ul = document.createElement('ul');
        ul.setAttribute("class", "main");
        document.querySelector('div').appendChild(ul);
        let li;
        let text;
        let oldLi;
        for (let i=1; i<toc.length; i++) {
            if (toc[i].nodeName == 'H2') { 
                ul = document.createElement('ul');
                ul.setAttribute("class", "sub1");
                document.querySelector('ul').appendChild(ul);
                li = document.createElement('li');
                text = document.createTextNode(toc[i].textContent);
                li.appendChild(text);
                ul.appendChild(li);
            } else if (toc[i].nodeName == 'H3' && toc[i-1].nodeName == 'H2') {
                ul = document.createElement('ul');
                ul.setAttribute("class", "sub2");
                li.appendChild(ul);
                li = document.createElement('li');
                text = document.createTextNode(toc[i].textContent);
                li.appendChild(text);
                ul.appendChild(li);
            } else if (toc[i].nodeName == 'H3' && toc[i-1].nodeName == 'H3') {
                oldLi = li;
                li = document.createElement('li');
                text = document.createTextNode(toc[i].textContent);
                li.appendChild(text);
                oldLi.appendChild(li);
            } else {
                li = document.createElement('li');
                text = document.createTextNode(toc[i].textContent);
                li.appendChild(text);
                document.querySelector('ul').appendChild(li);
            }
            
        } 