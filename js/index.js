var botton = document.getElementsByClassName("botton");
var slider = document.getElementById("slider");
var urls = [
    "./images/lance-anderson-QdAAasrZhdk-unsplash.jpg",
    "./images/mahdi-soheili-m-jJ4wLjoIc-unsplash.jpg",
    "./images/verne-ho-0LAJfSNa-xQ-unsplash.jpg",
    "./images/redd-vUwJ8uu_C1M-unsplash.jpg",
    "./images/maarten-deckers-T5nXYXCf50I-unsplash.jpg"
];
var count = 1,
    max = urls.length,
    slideSize = -500;

function reset(obj) {
    for (var i = 0; obj[i]; i++) {
        obj[i].className = "botton";
    }
}



var slide = document.getElementById("main");

botton[0].className += " btn-selsected";

slide.style.backgroundImage = "url(" + urls[0] + ")";

slider.style.left = 0;

setInterval(() => {
    reset(botton);
    botton[count].className += " btn-selsected";

    slide.style.opacity = 0.5;

    slide.style.backgroundImage = "url(" + urls[count] + ")";

    slide.style.opacity = 1;

    slider.style.left = slideSize + "px";

    // change(slide, urls[count])
    count++;
    slideSize -= 500;
    if (count > max - 1) {
        count = 0;
        slideSize = 0;
    }

}, 4000);