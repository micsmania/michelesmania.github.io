const navbarEl = document.getElementById('navbar');

//ADD SHADOW EFFECT TO NAVBAR WHEN SCROLLING DOWN

function toggleBoxShadow (){
    if (window.scrollY > 0) {
        navbarEl.classList.add('scrolled')
    } else {
        navbarEl.classList.remove('scrolled')
    }
};

toggleBoxShadow();