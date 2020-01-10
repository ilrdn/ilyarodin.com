
var night = localStorage.getItem('night');

var theme = document.getElementById("theme");
var main = document.getElementById("main");
var navbar = document.getElementById("navbar");
var email = document.getElementById("email");
var navbarBrand = document.getElementById("navbar-brand");

if (night === null) {
    night = false;
} else{
    night = JSON.parse(night);
};

if (night==true){
    night = false;
    mode();
    night = true;
}

function mode()
{
    if (night === false) {
        theme.style.backgroundImage = "url(/img/icons/sun.svg)";
        main.style.backgroundColor = "#1e1e1e";
        main.style.color = "white";
        navbar.style.backgroundColor = "#2d2d2d";
        email.style.color = "white";
        navbarBrand.style.color = "white";
    }
    else {
        theme.style.backgroundImage = "url(/img/icons/moon.svg)";
        main.style.backgroundColor = "white";
        main.style.color = "black";
        navbar.style.backgroundColor = "white";
        email.style.color = "black";
        navbarBrand.style.color = "black";
    }
    night = ! night;
    localStorage.setItem("night", night);
}