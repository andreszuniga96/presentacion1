document.addEventListener('DOMContentLoaded', () => {
    
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentSlide = 0;

    
    function showSlide(index) {
        
        slides[currentSlide].classList.remove('active');
        
        
        currentSlide = index;

        
        slides[currentSlide].classList.add('active');
    }

    
    function goToNextSlide() {
        
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    
    function goToPrevSlide() {
        
        let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }


    nextBtn.addEventListener('click', goToNextSlide);
    prevBtn.addEventListener('click', goToPrevSlide);


    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === ' ') { 
            goToNextSlide();
        } else if (event.key === 'ArrowLeft') {
            goToPrevSlide();
        }
    });

    
    showSlide(0);
});