const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("show");

    menu.classList.toggle("fa-bars");
    menu.classList.toggle("fa-xmark");
});

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        menu.classList.add("fa-bars");
        menu.classList.remove("fa-xmark");

    });

});

// ================= TYPING ANIMATION =================

const words = [
    "Student",
    "Web Developer",
    "Programmer",
    "Creative Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    const typing = document.getElementById("typing");

    typing.textContent = current.substring(0, charIndex);

    if (!deleting && charIndex < current.length) {

        charIndex++;

        setTimeout(typeEffect, 100);

    }

    else if (deleting && charIndex > 0) {

        charIndex--;

        setTimeout(typeEffect, 50);

    }

    else {

        deleting = !deleting;

        if (!deleting) {

            wordIndex = (wordIndex + 1) % words.length;

        }

        setTimeout(typeEffect, 800);

    }

}

typeEffect();

// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(section => {

    observer.observe(section);

});
