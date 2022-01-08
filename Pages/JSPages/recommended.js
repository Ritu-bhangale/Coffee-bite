var navLinks = document.querySelectorAll("header a");
var logoImg = document.querySelector(".logo-nav");
var infoCard = document.querySelectorAll(".sectionHero .sectionDrink .infocard");
var image = document.querySelectorAll(".sectionHero .sectionDrink .sectionImage img");

window.addEventListener('load',revealAnim)

function revealAnim(){

    const TLFADE = gsap.timeline();

    TLFADE
    .from(navLinks, {autoAlpha:0, y:-100, duration: 1, stagger: 0.1, ease: "power4.out"}, '-=0.2')
    .from(logoImg, {autoAlpha:0, y: -10, duration: 0.4, ease: "power4.out"}, '-=0.2')
}

let info = gsap.utils.toArray(infoCard);
let imge = gsap.utils.toArray(image);
let imgc = gsap.utils.toArray(".sectionImage")
console.log(imgc)
