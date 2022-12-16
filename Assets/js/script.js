const toggleButton = document.getElementById("show-menu");
const menuItems = document.getElementById("menu-items");

menuItems.style.left == "-780px";
toggleButton.onclick = function() {
    if(menuItems.style.left == "-780px") {
        menuItems.style.left = "0";
    } else {
        menuItems.style.left = "-780px";
    };
};