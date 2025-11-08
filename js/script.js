document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los elementos necesarios del DOM
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentSlide = 0;

    // Función para mostrar una diapositiva específica
    function showSlide(index) {
        // Quitar la clase 'active' de la diapositiva actual
        slides[currentSlide].classList.remove('active');
        
        // Actualizar el índice de la diapositiva actual
        currentSlide = index;

        // Añadir la clase 'active' a la nueva diapositiva
        slides[currentSlide].classList.add('active');
    }

    // Función para ir a la diapositiva siguiente
    function goToNextSlide() {
        // Si no es la última diapositiva, avanza. Si es la última, ve a la primera (loop).
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Función para ir a la diapositiva anterior
    function goToPrevSlide() {
        // Si no es la primera, retrocede. Si es la primera, ve a la última (loop).
        let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }

    // Asignar eventos a los botones
    nextBtn.addEventListener('click', goToNextSlide);
    prevBtn.addEventListener('click', goToPrevSlide);

    // Asignar eventos a las teclas del teclado para una mejor experiencia
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === ' ') { // Barra espaciadora también avanza
            goToNextSlide();
        } else if (event.key === 'ArrowLeft') {
            goToPrevSlide();
        }
    });

    // Inicializar la presentación mostrando la primera diapositiva
    showSlide(0);
});