window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    // On cache le loader quand la page est prête
    loader.classList.add("loader-hidden");
});

// Animation au clic sur les liens
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // On ne déclenche l'animation que pour les liens internes
        if (this.hostname === window.location.hostname) {
            e.preventDefault(); // On stop le clic immédiat
            const target = this.href;
            
            const loader = document.getElementById("loader");
            loader.classList.remove("loader-hidden"); // On remontre le rideau noir
            
            // On attend 600ms (le temps de l'animation) avant de changer de page
            setTimeout(() => {
                window.location.href = target;
            }, 600);
        }
    });
});