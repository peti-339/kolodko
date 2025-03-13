function navigate(value) {
    if (value) {
        window.location.href = value;
    }
}
function navigate(url) {
    if (url) window.location.href = url;
}
function animateText() {
    setTimeout(() => {
        document.querySelector('.text-content').style.opacity = '1';
        document.querySelector('.text-content').style.transform = 'translateX(0)';
    }, 500);
}