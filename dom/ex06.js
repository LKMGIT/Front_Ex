window.onload = function() {
    const headers = this.document.getElementById('header');

    const originalText = headers.innerHTML;

    headers.innerHTML = '<i> i 태그입니다. </i><br/>';
    headers.innerHTML += '&lt;i&gt;i 태그입니다. &lt;/i&gt;'
};