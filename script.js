const games = [
    { title: "Halo Infinite", price: "$59.99", image: "img/game-halo.svg" },
    { title: "Forza Horizon 5", price: "$59.99", image: "img/game-forza.svg" },
    { title: "Starfield", price: "$69.99", image: "img/game-starfield.svg" },
    { title: "Gears 5", price: "$39.99", image: "img/game-gears.svg" }
];

function renderGames() {
    const grid = document.getElementById("gamesGrid");
    if (!grid) return;

    grid.innerHTML = games
        .map(
            (game) => `
        <li>
            <a href="tienda.html">
                <img src="${game.image}" alt="${game.title}">
            </a>
            <div class="high-contrast">
                <h2>${game.title}</h2>
                <p>Disponible para Xbox Series X|S &middot; ${game.price}</p>
                <a href="tienda.html" class="c-call-to-action cta1">COMPRAR AHORA</a>
            </div>
        </li>
    `
        )
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderGames();

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
        if (!e.target.closest(".uhf-nav-item-wrapper")) {
            document.querySelectorAll(".uhf-dropdown-menu").forEach(menu => {
                menu.classList.add("hidden");
            });
        }
    });

});