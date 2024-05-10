// footer.js
window.addEventListener('DOMContentLoaded', function () {
    const navPlaceholder = document.getElementById('footer-placeholder');
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            navPlaceholder.innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'footer.html', true);
    xhr.send();
});
