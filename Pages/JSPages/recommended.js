var navLinks = document.querySelectorAll("header a");
var logoImg = document.querySelector(".logo-nav");
var infoCard = document.querySelectorAll(".sectionHero .sectionDrink");
var image = document.querySelectorAll(".sectionHero .sectionDrink .sectionImage img");

window.addEventListener('load',revealAnim)

function revealAnim(){

    const TLFADE = gsap.timeline();

    TLFADE
    .from(navLinks, {autoAlpha:0, y:-100, duration: 1, stagger: 0.1, ease: "power4.out"}, '-=0.2')
    .from(logoImg, {autoAlpha:0, y: -10, duration: 0.4, ease: "power4.out"}, '-=0.2')
}

let info = gsap.utils.toArray(infoCard);
let imge = gsap.utils.toArray(image)

gsap.to(info[0], {
    duration: 10,
    autoAlpha: 0,
    scale: 0.8,
    ease: "power3.out",
  scrollTrigger: {
    trigger: ".sectionDrink1",
    // markers: true,
    start: "top 10%",
    pin: true,
    end: "+=30%",
    scrub: 2,
  }
});

gsap.to(info[1], {
    duration: 10,
    autoAlpha: 0,
    scale: 0.8,
    ease: "power3.out",
  scrollTrigger: {
    trigger: ".sectionDrink2",
    // markers: true,
    start: "top 10%",
    pin: true,
    end: "+=30%",
    scrub: 2,
  }
});

gsap.to(info[2], {
    duration: 0.1,
    autoAlpha: 0,
    scale: 0.8,
    ease: "power3.out",
  scrollTrigger: {
    trigger: ".sectionDrink3",
    // markers: true,
    start: "top 10%",
    pin: true,
    end: "+=30%",
    scrub: 1
  }
});

gsap.to(info[3], {
    duration: 0.1,
    autoAlpha: 0,
    scale: 0.8,
    ease: "power3.out",
  scrollTrigger: {
    trigger: ".sectionDrink4",
    // markers: true,
    start: "top 10%",
    pin: true,
    end: "+=30%",
    scrub: 1
  }
});