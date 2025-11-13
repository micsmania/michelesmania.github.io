const navbar = document.getElementById('navbar');
const scrollTrigger = 50;

document.addEventListener('DOMContentLoaded', function() {
    if (!navbar) {
        console.error("Elemento con ID '#navbar' non trovato.");
        return;
    }

    function handleScroll() {
        // window.scrollY indica la posizione verticale dello scroll
        if (window.scrollY >= scrollTrigger) {
            // Se si supera il trigger, aggiunge l'ombra (la classe .scrolled)
            navbar.classList.add('scrolled');
        } else {
            // Se si è vicino all'inizio della pagina, rimuove l'ombra
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
    }
);