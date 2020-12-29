var head = document.querySelector('head');
var title = head.innerHTML = "<title>About me </title>";
var body = document.querySelector('body');
var ul = document.createElement('ul');
body.appendChild(ul);

ul.innerHTML = "<span id = 'span1'><li>Nickname: booboo</li></span > <span id= 'span2'><li>Favorites: music, pizza, The Office</li></span><span id= 'span3'><li>Hometown: Wilmington </li> </span><span id = 'span4'><li>Random Fact: Black is my favorite color.</li></span>";




// "<ul>
//     <li>Nickname: booboo</li>
//     <li>Favorites: music, pizza, The Office</li>
//     <li>Hometown: Wilmington </li>
//     <li>Random Fact: Black is my favorite color.</li>
// </ul>";