document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "☰ Menü";
    toggleBtn.classList.add("sidebar-toggle");
    document.body.insertBefore(toggleBtn, sidebar);
    
    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
});