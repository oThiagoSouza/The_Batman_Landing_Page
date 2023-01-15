var indiceAtual = 1;
displaySlides(indiceAtual);
const inpt = document.getElementById('email')
const btn = document.querySelector('.hero__form__btn')
const msg = document.getElementById('hero__msgEnvio')
const heroSection = document.querySelector('.hero')
const heroHeight = heroSection.clientHeight

window.addEventListener('scroll', function(){
    const posicaoAtual = window.scrollY
    if(posicaoAtual < heroHeight) {
        ocultaElementosHeader()
    } else {
        exibeElementosHeader()
    }
})

function ocultaElementosHeader(){
    const header = document.querySelector('.header')
    header.classList.add('header--is-hidden')
}

function exibeElementosHeader(){
    const header = document.querySelector('.header')
    header.classList.remove('header--is-hidden')
}

// Exibe mensagem de envio form
btn.addEventListener('click', mostraMsg)

function mostraMsg() {
    if(inpt.value == '') {
        alert('Insira seu e-mail para poder enviar.')
    } else {
        inpt.style.display = 'none'
        msg.innerHTML = 'Seu envio foi concluído!'
    }
}

// Slider Personanges

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