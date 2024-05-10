// nav.js
window.addEventListener('DOMContentLoaded', function () {
    const navPlaceholder = document.getElementById('nav-placeholder');
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            navPlaceholder.innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'nav-project.html', true);
    xhr.send();
});
