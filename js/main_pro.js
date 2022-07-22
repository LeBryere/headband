
const Image1 = getElementById("imgChange_1")
const Image2 = getElementById("imgChange_2")
const img1 = getElementById("imgCh_1")
const img2 = getElementById("imgCh_2")
var text2 = document.getElementById("show2")
function valami() {
    var myAlt = ("hello")
    if (Image1.style.opacity = "1") {
        alert("hello")
    }
    if (Image2.style.opacity = "1") {
        alert("hello")
    }
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




var myImage = document.getElementsByTagName("img")
var text = document.getElementById("show")

for (var i = 0; i < myImage.length; i++) {
    myImage[i].addEventListener('click', show)
}

function show() {
    var myAlt = this.alt
    text.innerHTML = myAlt
}





/*< p > <label><input type="checkbox" id="checkbox"> Checked</label></ >
   <p><label><input type="checkbox" id="checkbox"> Checked</label></p>
   <p><button id="button">Click me to send a MouseEvent to the checkbox</button></p>

   <script>
       var dd = document.getElementsByClassName('wow');

       Array.prototype.forEach.call(dd, function (element) {
           element.addEventListener('click', function () {
               document.getElementById("kirat").innerHTML('data-wow value is: ' + element.dataset.wow);
           });
       });
   </script> -->*/


function simulateClick() {
    // Get the element to send a click event
    const cb = document.getElementById("checkbox");

    // Create a synthetic click MouseEvent
    let evt = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
    });

    // Send the event to the checkbox element
    cb.dispatchEvent(evt);
}
document.getElementById("button").addEventListener('click', simulateClick);


