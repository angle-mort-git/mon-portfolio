// ===============================
// MENU MOBILE
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Fermer le menu lorsqu'on clique
// sur un lien

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

});


// ===============================
// ANNÉE AUTOMATIQUE
// ===============================

const annee = document.getElementById("annee");

annee.textContent = new Date().getFullYear();


// ===============================
// FORMULAIRE DE CONTACT
// ===============================

const formulaire = document.getElementById("contact-form");

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    const nom = document.getElementById("nom").value;

    if (nom.trim() === "") {
        alert("Veuillez entrer votre nom.");
        return;
    }

    alert(
        "Merci " + nom +
        " ! Votre message a été pris en compte."
    );

    formulaire.reset();

});


// ===============================
// ANIMATION AU DÉFILEMENT
// ===============================

const elements = document.querySelectorAll(
    ".competence-card, .interet, .formation-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});