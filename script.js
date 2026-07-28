document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================
       1. FUNCIONALIDAD DEL CARRUSEL (HERO)
       ========================================== */
    const slides = document.querySelectorAll(".heroList li");
    const indicators = document.querySelectorAll(".c-sequence-indicator button");
    let currentSlide = 3; // En tu HTML, el slide activo por defecto es el index 3 (Gears of War)

    // Función para cambiar de slide
    function goToSlide(index) {
        // Remover clase activa de todos los slides y botones
        slides.forEach(slide => slide.classList.remove("f-active"));
        indicators.forEach(ind => ind.classList.remove("f-active"));

        // Añadir clase activa al slide y botón correspondiente
        slides[index].classList.add("f-active");
        if(indicators[index]) {
            indicators[index].classList.add("f-active");
        }
        currentSlide = index;
    }

    // Agregar evento click a los botones indicadores (las rayitas de abajo)
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            goToSlide(index);
        });
    });

    // Auto-play básico del carrusel cada 6 segundos
    setInterval(() => {
        let nextSlide = currentSlide + 1;
        if (nextSlide >= slides.length) {
            nextSlide = 0;
        }
        goToSlide(nextSlide);
    }, 6000);


    /* ==========================================
       2. FUNCIONALIDAD BÁSICA DEL MENÚ (DROPDOWNS)
       ========================================== */
    const dropdownTriggers = document.querySelectorAll(".uhf-dropdown-trigger");
    
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener("click", function(e) {
            e.preventDefault();
            // Buscar el menú popout asociado a este botón
            const popout = this.nextElementSibling;
            
            // Cerrar todos los demás menús
            document.querySelectorAll(".uhf-dropdown-menu").forEach(menu => {
                if(menu !== popout) menu.classList.add("hidden");
            });

            // Alternar la visibilidad del menú actual
            if(popout && popout.classList.contains("uhf-dropdown-menu")) {
                popout.classList.toggle("hidden");
            }
        });
    });

    // Cerrar el menú si se hace clic afuera
    document.addEventListener("click", (e) => {
        if (!e.target.closest("uhf-dropdown")) {
            document.querySelectorAll(".uhf-dropdown-menu").forEach(menu => {
                menu.classList.add("hidden");
            });
        }
    });

});