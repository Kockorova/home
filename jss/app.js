document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const headerMenu = document.querySelector(".header__menu");

    menuIcon.addEventListener("click", function () {
        headerMenu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!headerMenu.contains(event.target) && !menuIcon.contains(event.target)) {
            headerMenu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });
});
