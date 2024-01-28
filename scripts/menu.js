document.getElementById("menu-btn").addEventListener("click", function () {
    var sliderHeader = document.querySelector(".slider-header");
    sliderHeader.style.display =
        sliderHeader.style.display === "block" ? "none" : "block";
    document.body.style.overflow = sliderHeader.style.display === "block" ? "hidden" : "auto";

});

document.getElementById("menu-close-btn").addEventListener("click", function () {
    var sliderHeader = document.querySelector(".slider-header");
    sliderHeader.style.display =
        sliderHeader.style.display === "block" ? "none" : "block";
    document.body.style.overflow = sliderHeader.style.display === "block" ? "hidden" : "auto";

});

window.addEventListener("scroll", () => {
    var headerContainer = document.getElementsByClassName("header-container")[0];

    if (window.scrollY > 1) {
        headerContainer.style.opacity = "0.90";
    } else {
        headerContainer.style.opacity = "1";
    }
});