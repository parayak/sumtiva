// Animación suave al hacer scroll (extra UX tipo material)
document.addEventListener("DOMContentLoaded", () => {
    
    const cards = document.querySelectorAll(".poem-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.classList.add("hidden");
        observer.observe(card);
    });

});