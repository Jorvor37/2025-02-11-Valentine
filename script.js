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