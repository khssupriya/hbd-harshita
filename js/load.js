var loader;
function loadNow(opacity) {
    window.setTimeout(function() {
        loader.style.opacity = 0;
        displayContent();
    }, 3000);
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.getElementById('content').style.display = 'none';
document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});