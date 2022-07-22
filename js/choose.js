// Preloader
(function ($) {
    jQuery(window).on('load', function () {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(10).fadeOut("slow");
    })
})()

//  rá kell tenni a div-re
//  amin a click esemény történik: onclick="myNavbar(this)">
function myNavbar(e) {
    e.classList.toggle("change")
    nav_list.classList.toggle("nav_active")
}

/* kép div */
var ImgD1 = "imgChange_1";
var ImgD2 = "imgChange_2";
var ImgT1 = "imgCh_1";
var ImgT2 = "imgCh_2";
/* style opacity=1 ráteszi a megjelenő képre
   style poacity_0 ráteszi az  eltűnő képre */
function imgChange(src) {
    if (document.getElementById(ImgD1).style.opacity == 1) {
        document.getElementById(ImgT2).src = src;
        document.getElementById(ImgD1).style.opacity = 0;
        document.getElementById(ImgD2).style.opacity = 1;
    }
    else {
        document.getElementById(ImgT1).src = src;
        document.getElementById(ImgD1).style.opacity = 1;
        document.getElementById(ImgD2).style.opacity = 0;
    }
}

/* img tag altját írja ki */
var ProductColor = document.getElementsByTagName("img")
var productName = document.getElementById("product_name")
var productName2 = document.getElementById("product_name2")

for (var i = 0; i < ProductColor.length; i++) {
    ProductColor[i].addEventListener('click', show)
}

function show() {
    var productAlt = this.alt
    productName.innerHTML = productAlt
    productName2.innerHTML = productAlt
}