
var navLinks = document.querySelectorAll("header a");
var logoImg = document.querySelector(".logo-nav");
var sectionNav = document.querySelectorAll(".sectionNav ul li")
window.addEventListener('load', revealAnim);

function revealAnim(){

    const TLFADE = gsap.timeline();

    TLFADE
    .from(navLinks, {autoAlpha:0, y:-100, duration: 0.4, stagger: 0.1, ease: "power4.out"}, '-=0.2')
    .from(logoImg, {autoAlpha:0, y: -10, duration: 0.4, ease: "power4.out"}, '-=0.2')
}

// gsap.from('.section4',{
//     duration: 1,
//     autoAlpha: 0,
//     y: 100,
//     scale: 0.5,
//     scrolTrigger: {
//         trigger: ".section4",
//         markers: true,
//         start: "top 20%",
//         pin: true,
//     }
// })

gsap.registerPlugin(ScrollTrigger);

let masks = gsap.utils.toArray(".section");

gsap.to(masks[0], {
    duration: 0.4,
    autoAlpha: 0,
    scale: 0.5,
    ease: "power4.out",
  scrollTrigger: {
    trigger: ".section1",
    // markers: true,
    start: "top 20%",
    pin: true,
    end: "+=10%",
    scrub: 1
  }
});

gsap.to(masks[1], {
    duration: 1,
    autoAlpha: 0,
    scale: 0.5,
    ease: "power4.out",
  scrollTrigger: {
    trigger: ".section2",
    // markers: true,
    start: "top 20%",
    pin: true,
    end: "+=10%",
    scrub: 1
  }
});

gsap.to(masks[2], {
    duration: 1,
    autoAlpha: 0,
    scale: 0.5,
    ease: "power4.out",
  scrollTrigger: {
    trigger: ".section3",
    // markers: true,
    start: "top 20%",
    pin: true,
    end: "+=10%",
    scrub: 0.5
  }
});

gsap.to(masks[3], {
    duration: 1,
    autoAlpha: 0,
    scale: 0.5,
    ease: "power4.out",
  scrollTrigger: {
    trigger: ".section4",
    // markers: true,
    start: "top 20%",
    pin: true,
    end: "+=10%",
    scrub: 1
  }
});

let numbers = gsap.utils.toArray(sectionNav);

gsap.to(".navLine", {
    duration: 1,
    y : 28,
    ease: "power4.out",
  scrollTrigger: {
    trigger: ".section1",
    // markers: true,
    start: "top 20%",
    pin: true,
    end: "+=10%",
    scrub: 1
  }
});

gsap.to(numbers[0], {
    duration: 1,
    y : -40,
    ease: "power4.out",
  scrollTrigger: {
    trigger: ".section1",
    // markers: true,
    start: "top 20%",
    pin: true,
    end: "+=10%",
    scrub: 1
  }
});

