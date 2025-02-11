// Change navbar background on scroll
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Toggle mobile menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
