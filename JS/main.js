let nav = document.getElementById("nav")
window.onscroll = function () {
    if (window.scrollY > 75) {
        nav.classList.remove("custom-bg")
        nav.classList.add("headerFixed")
    }
    else {
        nav.classList.remove("headerFixed")
        nav.classList.add("custom-bg")
    }
}