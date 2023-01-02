const menu = document.querySelector(".menu-block");
const menuMain = menu.querySelector(".site-menu-main");
const submenuAll = menu.querySelectorAll(".sub-menu");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
let subMenuArray = [];
let subMenuTextArray = [];

function last(array) {
    return array[array.length - 1];
}

function last2(array) {
    return array[array.length - 2];
}

menuMain.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) {
        return;
    }
    if (e.target.closest(".nav-item-has-children")) {
        const hasChildren = e.target.closest(".nav-item-has-children");
        // showSubMenu(hasChildren);
    }
});

// sub menu 

$(".nav-item .nav-link-item").click(function() {
    $(this).toggleClass("active-submenu");
    if ($(this).next().is(":visible")) {
        $(this).next().slideUp();
    } else {
        $(".nav-item .nav-link-item .sub-menu").next().slideUp();
        $(this).next().slideDown();
    }
});

$(".sub-menu .sub-menu--item .drop-trigger").click(function() {
    $(this).toggleClass("active-submenu");
    if ($(this).next().is(":visible")) {
        $(this).next().slideUp();
    } else {
        $(".sub-menu .sub-menu--item .sub-menu").next().slideUp();
        $(this).next().slideDown();
    }
});

menuTrigger.addEventListener("click", () => {
    toggleMenu();
});

closeMenu.addEventListener("click", () => {
    toggleMenu();
});

document.querySelector(".menu-overlay").addEventListener("click", () => {
    toggleMenu();
});

function toggleMenu() {
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}

window.onresize = function() {
    if (this.innerWidth > 992) {
        if (menu.classList.contains("active")) {
            toggleMenu();
        }
    }
    if (this.innerWidth < 992) {
        $(function() {
            var node = $(".header-button");
            $(".menu-block").append(node);
        });
    }
    if (this.innerWidth > 992) {
        $(function() {
            var node = $(".header-button");
            $(".menu-block-wrapper").append(node);
        });
    }
};

window.onload = function() {
    if (this.innerWidth < 992) {
        $(function() {
            var node = $(".header-button");
            $(".menu-block").append(node);
            // console.log(node);
        });
    }
    if (this.innerWidth > 992) {
        $(function() {
            var node = $(".header-button");
            $(".menu-block-wrapper").append(node);
            // console.log(node);
        });
    }
};