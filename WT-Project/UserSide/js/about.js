// Fade-in animation for chef cards
const chefs = document.querySelectorAll(".chef");

window.addEventListener("scroll", () => {
    chefs.forEach(card => {
        const pos = card.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Initialize animation
chefs.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.7s";
});
