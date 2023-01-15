var indiceAtual = 1;
displaySlides(indiceAtual);

function setSlides(num) {
    displaySlides(indiceAtual += num);
}

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("slider__imageSlider");
    if (num > slides.length) { indiceAtual = 1 }
    if (num < 1) { indiceAtual = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[indiceAtual - 1].style.display = "block";
}