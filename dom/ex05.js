window.onload = function() {
    const headers = this.document.getElementById('header');

    const originalText = headers.innerHTML;

    headers.innerHTML = 'From JavaScript <br/>';
    headers.innerHTML += originalText;

}