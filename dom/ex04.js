window.onload = function() {
const headers = document.querySelectorAll('h1');

for(let i = 0; i< headers.length; i++) {

    const header = headers[i];

    header.style.color = 'tomato';
    header.style.backgroundColor = 'green';
    header.innerHTML = '변경후: ' + 'From JavaScript'; ;
}
};