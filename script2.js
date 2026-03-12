// script2.js

window.addEventListener("load", () => {
  var hero = document.querySelector(".hero");
  if (!hero) return;

  // Split into chars/words using SplitType
  var split = new SplitType(hero, {
    types: "words, chars",
    tagName: "span"
  });

  gsap.set(split.chars, {
    opacity: 0.64,
    letterSpacing: "0.64rem",
    rotationX: 90,
  });

  gsap.to(split.chars, {
    opacity: 1,
    letterSpacing: "-0.16rem",
    rotationX: 0,
    duration: 0.96,
    ease: "power3.out",
    stagger: 0.08,
  });

  var hero = document.querySelector(".subhero");
  if (!hero) return;

  // Split into chars/words using SplitType
  var split = new SplitType(hero, {
    types: "words, chars",
    tagName: "span"
  });

  gsap.set(split.chars, {
    opacity: 0.32,
    letterSpacing: "0.32rem",
    rotationX: 90,
  });

  gsap.to(split.chars, {
    opacity: 1,
    letterSpacing: "0.08rem",
    rotationX: 0,
    duration: 0.96,
    ease: "power3.out",
    stagger: 0.04
  });

});
