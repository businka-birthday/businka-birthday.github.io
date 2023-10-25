document.addEventListener("DOMContentLoaded", function() {
    const numberOfBeads = 100; // Количество бусинок
    const beadContainer = document.body;

    for (let i = 0; i < numberOfBeads; i++) {
        const bead = document.createElement("div");
        bead.classList.add("bead");

        // Добавьте случайные координаты для позиционирования бусинок
        bead.style.left = `${Math.random() * 100}vw`;
        bead.style.top = `${Math.random() * 100}vh`;

        // Добавьте классы для различных размеров бусинок
        const randomSize = Math.random();
        if (randomSize < 0.3) {
            bead.classList.add("small");
        } else if (randomSize < 0.6) {
            bead.classList.add("medium");
        }

        beadContainer.appendChild(bead);
    }
});
