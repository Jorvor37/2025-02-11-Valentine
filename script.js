document.addEventListener("DOMContentLoaded", function () {
    const roseContainer = document.body;

    function createRose() {
        console.log("Creating a rose..."); // Debugging
        const rose = document.createElement("div");
        rose.classList.add("rose");
        rose.style.left = Math.random() * 100 + "vw";
        rose.style.animationDuration = Math.random() * 3 + 5 + "s";
        rose.style.animationDelay = Math.random() * 2 + "s";
        document.body.appendChild(rose);
    
        setTimeout(() => {
            rose.remove();
        }, 8000);
    }
    

    setInterval(createRose, 500);
});

document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.querySelector("button:nth-of-type(2)");

    noBtn.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = "absolute";
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");

    yesBtn.addEventListener("click", function () {
        window.location.href = "yes.html";
    });
});