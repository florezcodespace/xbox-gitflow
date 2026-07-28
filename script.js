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
        <article class="card">
            <img class="card__image" src="${game.image}" alt="Portada de ${game.title}">
            <h3>${game.title}</h3>
            <p>Disponible para Xbox Series X|S.</p>
            <span class="price">${game.price}</span>
        </article>
    `
        )
        .join("");
}

function setupNavToggle() {
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
        links.classList.toggle("is-open");
    });
}

function setupCtaButtons() {
    const explorar = document.getElementById("ctaExplorar");
    const gamepass = document.getElementById("ctaGamepass");
    const suscribir = document.getElementById("ctaSuscribir");

    explorar?.addEventListener("click", () => {
        document.getElementById("consolas")?.scrollIntoView({ behavior: "smooth" });
    });

    gamepass?.addEventListener("click", () => {
        document.getElementById("gamepass")?.scrollIntoView({ behavior: "smooth" });
    });

    suscribir?.addEventListener("click", () => {
        alert("Gracias por tu interes en Xbox Game Pass!");
    });
}

function setupFooterYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderGames();
    setupNavToggle();
    setupCtaButtons();
    setupFooterYear();
});
