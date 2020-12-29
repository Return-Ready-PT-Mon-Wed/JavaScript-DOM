var head = document.querySelector('head');
var title = head.innerHTML = "<title>About me </title>";
var body = document.querySelector('body');
var ul = document.createElement('ul');
body.appendChild(ul);

ul.innerHTML = "<li>Nickname: booboo</li><li>Favorites: music, pizza, The Office</li><li>Hometown: Wilmington </li><li>Random Fact: Black is my favorite color.</li>";
// "<ul>
//     <li>Nickname: booboo</li>
//     <li>Favorites: music, pizza, The Office</li>
//     <li>Hometown: Wilmington </li>
//     <li>Random Fact: Black is my favorite color.</li>
// </ul>";