document.addEventListener("DOMContentLoaded", function () {

    const openButton = document.getElementById("openCard");
    const card = document.getElementById("card");
    const intro = document.getElementById("intro");
    const musicButton = document.getElementById("musicButton");
    const music = document.getElementById("weddingMusic");

    // Open invitation
    if (openButton && card && intro) {
        openButton.addEventListener("click", function () {
            intro.classList.add("hidden");
            card.classList.remove("hidden");
            createPetals();
        });
    }

    // Music control
    if (musicButton && music) {
        musicButton.addEventListener("click", function () {
            if (music.paused) {
                music.play().then(() => {
                    musicButton.textContent = "موسیقی بند کریں";
                }).catch(() => {
                    musicButton.textContent = "موسیقی شروع نہیں ہو سکی";
                });
            } else {
                music.pause();
                musicButton.textContent = "موسیقی چلائیں";
            }
        });
    }

    // Falling flower petals
    function createPetals() {
        const flowers = ["🌸", "🌹", "🌺", "🌼", "💮"];

        setInterval(function () {
            const petal = document.createElement("span");

            petal.className = "petal";
            petal.textContent =
                flowers[Math.floor(Math.random() * flowers.length)];

            petal.style.left = Math.random() * 100 + "vw";
            petal.style.fontSize = (15 + Math.random() * 20) + "px";
            petal.style.animationDuration = (4 + Math.random() * 5) + "s";

            document.body.appendChild(petal);

            setTimeout(() => petal.remove(), 9000);
        }, 400);
    }

});
