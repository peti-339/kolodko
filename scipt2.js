function navigateToHome() {
    window.location.href = 'index2.html';
}
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn-custom");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#0056b3";
        });
        button.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "#007bff";
        });
    });
    const heroSection = document.querySelector(".hero");
    heroSection.style.opacity = 0;
    heroSection.style.transform = "translateY(-20px)";
    setTimeout(() => {
        heroSection.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
        heroSection.style.opacity = 1;
        heroSection.style.transform = "translateY(0)";
    }, 200);
});
document.addEventListener("DOMContentLoaded", function () {
    const gallerySection = document.getElementById("galeria");

    function handleScroll() {
        const sectionPosition = gallerySection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            gallerySection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});