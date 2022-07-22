(function ($) {

    // Preloader 
    jQuery(window).on('load', function () {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(10).fadeOut("slow");
    });

})();

/* const nav_bar = document.getElementById("nav_bar")
const nav_list = document.getElementById("nav_list")

// klikkre css osztályt cserélünk 
nav_bar.addEventListener("click", function () {
    nav_bar.classList.toggle("change");
    nav_list.classList.toggle("nav_active")
}) */
// így kevesebb sor igaz, ezt rá kell tenni a div-re
//  amin a click esemény történik: onclick="myNavbar(this)">
function myNavbar(e) {
    e.classList.toggle("change")
    nav_list.classList.toggle("nav_active")
}

window.onload = function () {
    let lastScrollTop = 0
    window.addEventListener("scroll", function () {
        let st = window.pageYOffset //|| document.documentElement.scrollTop
        // mxDiv elem magasságból kivonom a mxDiv2 mert akkor a hamarabb teszi rá a black classt a
        //const distanceY = $("#myDiv").height() - $("#myDiv2").height()
        // oldal toptól számítva mikor tegye rá az opacityt? 
        // pixelben kell megadni
        const distanceY = 1
        const distanceY2 = $("#myDiv").height() / 3
        const distanceY21 = $("#myDiv").height() / 2
        //window.alert(distanceY2)
        if (st > lastScrollTop) {
            // görgetés lefelé distanceY után ráteszi a class-t id="myNav"-ra
            if (distanceY < window.pageYOffset) {
                $("#myNav").addClass("nav_op")
            }
        } else {
            // görgetés felfelé azonnal leveszi a class-t id="myNav"-ról
            $("#myNav").removeClass("nav_op")
        }
        if (st > lastScrollTop) {

            // scroll down leveszi a class-t a id="myDiv2"-ről
            if (distanceY2 < window.pageYOffset) {
                $("#myDiv2").removeClass("div_lighter")
            }
        } else {
            if (distanceY21 > window.pageYOffset) {
                // scroll top ráteszi a class-t az id="myDiv2"-re
                $("#myDiv2").addClass("div_lighter")
            }
        }
        lastScrollTop = st
    }, false)

    /*           let pixelben = 1
              let distanceY2 = $("#myDiv").height() + pixelben
              let distanceY21 = $("#myDiv").height() / 10
              let magas = window.innerHeight
              let divtop = myDiv.offsetTop
              document.getElementById("demo").innerHTML =
                  ". ablak magassága: " + magas + "px<br>" +
                  ". div magassága: " + distanceY2 + "px<br>" +
                  ". div2 magassága: " + distanceY21 + "px<br>" +
                  ". div2 magassága: " + magas + "px<br>";
              if (magas < distanceY2) {
                  document.getElementById("demo3").innerHTML = "kisebb"
              } else {
                  document.getElementById("demo3").innerHTML = ". valami: " + divtop + "px<br>"
              } */

}

let widthNow = window.screen.width
if (widthNow > 768) {
    document.getElementById("mySlider").innerHTML =
        `   <img src="img/slider_1.webp" class="mia_img" alt="Hajpánt">
                <img src="img/slider_2.webp" class="mia_img" alt="Panna hajcsat">
                <img src="img/slider_3.webp" class="mia_img" alt="Hajpánt">
                <img src="img/slider_4.webp" class="mia_img" alt="Panna hajpánt">
                <img src="img/slider_5.webp" class="mia_img" alt="Hajcsat"> `
} else {
    document.getElementById("mySlider").innerHTML =
        `   <img src="img/mobile/mobile_slider_1.jpg" class="mia_768_img" alt="Hajpánt">
                <img src="img/mobile/mobile_slider_2.jpg" class="mia_768_img" alt="Panna hajcsat">
                <img src="img/mobile/mobile_slider_3.jpg" class="mia_768_img" alt="Hajpánt">
                <img src="img/mobile/mobile_slider_4.jpg" class="mia_768_img" alt="Panna hajpánt">
                <img src="img/mobile/mobile_slider_5.jpg" class="mia_768_img" alt="Hajcsat">    `
}
// user beállíthatja az idő változókat
let timeOnSlide = 4, // másodpercben meddig látható
    timeBetweenSlides = 2.5, // másodpercben a képváltás ideje

    // test if the browser supports animation, and if it needs a vendor prefix to do so
    animationstring = 'animation',
    animation = false,
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O Khtml'.split(' '), // array of possible vendor prefixes
    pfx = '',
    slider = document.getElementById("mySlider")
if (slider.style.animationName !== undefined) { animation = true; } // browser supports keyframe animation w/o prefixes

if (animation === false) {
    for (let i = 0; i < domPrefixes.length; i++) {
        if (slider.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i]
            animationstring = pfx + 'Animation'
            keyframeprefix = '-' + pfx.toLowerCase() + '-'
            animation = true
            break
        }
    }
}

if (animation === false) {
    // animate in JavaScript fallback
} else {
    let images = slider.getElementsByTagName("img"),
        firstImg = images[0],
        // get the first image inside the "slider" element.
        imgWrap = firstImg.cloneNode(false);  // copy it.
    slider.appendChild(imgWrap); // add the clone to the end of the images
    let imgCount = images.length, // count the number of images in the slide, including the new cloned element
        totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
        slideRatio = (timeOnSlide / totalTime) * 100, // determine the percentage of time an induvidual image is held static during the animation
        moveRatio = (timeBetweenSlides / totalTime) * 100, // determine the percentage of time for an individual movement
        basePercentage = 100 / imgCount, // work out how wide each image should be in the slider, as a percentage.
        position = 0, // set the initial position of the slider element
        css = document.createElement("style") // start marking a new style sheet
    css.type = "text/css"
    css.innerHTML += "#mySlider { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n" // set the width for the slider container
    css.innerHTML += "#mySlider img { float: left; width: " + basePercentage + "%; }\n"
    css.innerHTML += "@" + keyframeprefix + "keyframes slider {\n"
    for (i = 0; i < (imgCount - 1); i++) { // 
        position += slideRatio // make the keyframe the position of the image
        css.innerHTML += position + "% { left: -" + (i * 100) + "%; }\n"
        position += moveRatio // make the postion for the _next_ slide
        css.innerHTML += position + "% { left: -" + ((i + 1) * 100) + "%; }\n"
    }
    css.innerHTML += "}\n"
    css.innerHTML += "#mySlider { left: 0%; " + keyframeprefix + "transform: translate3d(0,0,0); " + keyframeprefix + "animation: " + totalTime + "s slider infinite; }\n" // call on the completed keyframe animation sequence
    document.body.appendChild(css) // add the new stylesheet to the end of the document
}

$(document).on('ready', function () {
    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        fade: false,
    });

});