function navigate(value) {
    if (value) {
        window.location.href = value;
    }
}
function navigate(url) {
    if (url) {
        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = url;
        }, 500);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "1";
});
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "☰ Menü";
    toggleBtn.classList.add("sidebar-toggle");
    document.body.insertBefore(toggleBtn, sidebar);
    
    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
    const text = document.querySelector(".container p");
    text.style.opacity = 0;
    text.style.transition = "opacity 2s ease-in-out";
    setTimeout(() => text.style.opacity = 1, 500);
});