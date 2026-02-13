// Script para el widget de Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'es', includedLanguages: 'en,fr,de,it,pt,ja,zh-CN,ru', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
    );
}

// Mostrar el selector de idiomas al hacer clic en el logo
document.addEventListener('DOMContentLoaded', function () {
    const googleLogo = document.querySelector('.goog-te-gadget img');
    if (googleLogo) {
        googleLogo.addEventListener('click', function () {
            const translateElement = document.querySelector('.goog-te-combo');
            if (translateElement) {
                translateElement.style.display = 'block';
            }
        });
    }
});

// Slider automático
let currentSlide = 0;
const slides = document.querySelectorAll("#slider li");
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? 1 : 0;
        slide.style.zIndex = i === index ? 1 : 0;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Cambiar automáticamente cada 5 segundos
setInterval(nextSlide, 5000);

// Funciones para los botones de navegación
window.fntExecuteSlide = function (direction) {
    if (direction === 'next') {
        nextSlide();
    } else if (direction === 'prev') {
        prevSlide();
    }
};

// Mostrar el primer slide al cargar la página
showSlide(currentSlide);