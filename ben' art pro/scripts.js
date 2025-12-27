document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const ctaHeader = document.querySelector('.cta-button-header');
    
    // Implémentation du Menu Hamburger (UX Pro sur Mobile)
    menuToggle.addEventListener('click', () => {
        // Crée un conteneur modal ou slide-out pour les liens sur mobile
        // Pour cet exemple simple, nous allons le toggler :
        
        // C'est ici que l'on utiliserait une classe CSS pour afficher/masquer
        // un menu en plein écran ou un menu latéral (slide-out)
        
        alert("Le menu mobile doit être implémenté ici avec JavaScript. Il assurerait l'accessibilité sur les petits écrans.");

        // Exemple simplifié d'ajout/suppression d'une classe CSS (à définir dans styles.css)
        // navLinks.classList.toggle('active');
        // ctaHeader.classList.toggle('active');
    });

    // JavaScript pour le SCROLL SMOOTH (UX Pro)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Ajout d'une classe au Header lors du scroll (Effet Pro)
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Classe à définir en CSS pour un fond plus solide/ombre
        } else {
            header.classList.remove('scrolled');
        }
    });
});
// ... (Code existant pour Menu/Scroll) ...

document.addEventListener('DOMContentLoaded', () => {
    // ... (Logique Menu/Header existante) ...
    
    // --- LOGIQUE DU CARROUSEL DE PROJETS (JavaScript Pur) ---
    const track = document.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');
    
    // Calculer la largeur d'une carte (en incluant le padding/gap)
    let cardWidth = cards[0].offsetWidth; // Obtient la largeur initiale
    let currentIndex = 0;

    // Fonction pour déterminer le nombre d'éléments à afficher
    const getCardsToShow = () => {
        if (window.innerWidth <= 650) return 1; // Mobile
        if (window.innerWidth <= 1100) return 2; // Tablette
        return 3; // Desktop
    };

    // Mise à jour de la largeur de la carte et du transform
    const updateCarousel = () => {
        const cardsToShow = getCardsToShow();
        
        // Recalculer la largeur de la carte à chaque redimensionnement (très important pour le responsive)
        cardWidth = track.clientWidth / cardsToShow;
        cards.forEach(card => {
            card.style.width = cardWidth + 'px';
            card.style.flexBasis = cardWidth + 'px';
        });

        // Appliquer la translation
        const translateAmount = -currentIndex * cardWidth;
        track.style.transform = 'translateX(' + translateAmount + 'px)';
        
        // Gérer l'état des boutons (ne pas aller au-delà des limites)
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= (cards.length - cardsToShow);
        
        // Mettre à jour l'opacité (Micro-interaction)
        prevButton.style.opacity = prevButton.disabled ? 0.5 : 1;
        nextButton.style.opacity = nextButton.disabled ? 0.5 : 1;
    };

    // Événements de navigation
    nextButton.addEventListener('click', () => {
        const cardsToShow = getCardsToShow();
        if (currentIndex < cards.length - cardsToShow) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Événement de redimensionnement de fenêtre (très important pour le responsive)
    window.addEventListener('resize', () => {
        // Réinitialiser l'index pour éviter les problèmes de débordement après redimensionnement
        currentIndex = 0; 
        updateCarousel();
    });

    // Initialisation
    updateCarousel();
    
    // ... (Fin du code DOMContentLoaded)
});
document.addEventListener('DOMContentLoaded', () => {

    // ==============================================
    // 1. GESTION DU MENU MOBILE (Responsive)
    // ==============================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Ajoute/retire la classe 'active' pour afficher ou masquer le menu
            navLinks.classList.toggle('active');
            
            // Mise à jour de l'accessibilité
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }


    // ==============================================
    // 2. VALIDATION DES FORMULAIRES (Contact et Soutien)
    // ==============================================
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            // Empêche la soumission par défaut pour faire la validation
            event.preventDefault();

            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            // Réinitialisation des styles d'erreur précédents
            requiredFields.forEach(field => {
                field.style.borderColor = '#E2E8F0'; // Couleur par défaut
                field.nextElementSibling?.remove(); // Supprime le message d'erreur si existant
            });

            // Validation de chaque champ requis
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    
                    // Style d'erreur pour indiquer le champ manquant
                    field.style.borderColor = 'var(--color-secondary)'; 

                    // Ajout d'un message d'erreur (simple pour le prototype)
                    const errorMsg = document.createElement('p');
                    errorMsg.className = 'error-message';
                    errorMsg.style.color = 'var(--color-secondary)';
                    errorMsg.style.fontSize = '0.85rem';
                    errorMsg.textContent = 'Ce champ est obligatoire.';
                    field.parentNode.insertBefore(errorMsg, field.nextSibling);
                }
            });

            // Si le formulaire est valide, simuler la soumission
            if (isValid) {
                alert('Formulaire soumis avec succès ! (Simulé en frontend)');
                this.reset(); // Réinitialise les champs
                // En production, le code pour 'submit_contact.php' ou l'envoi réel irait ici.
            }
        });
    });


    // ==============================================
    // 3. LOGIQUE D'ANIMATION (Exemple simple d'apparition)
    // ==============================================
    // (Non requis, mais montre comment ajouter d'autres interactions)
    
});