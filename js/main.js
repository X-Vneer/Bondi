// start our work filter
let ourWork = document.querySelector(".our-work");
let ourWrokA = false;
let selector = ourWork.querySelectorAll("ul li");
let work = ourWork.querySelectorAll(".row > div");

selector.forEach(function (e) {
  e.addEventListener("click", function () {
    let selectedWork = e.dataset.target;
    selector.forEach(function (e) {
      e.classList.remove("active");
    });
    e.classList.add("active");
    work.forEach((w) => {
      w.classList.remove("show");
      if (w.dataset.work === e.dataset.target) {
        w.classList.add("show");
      }
      if (e.dataset.target === "all") {
        w.classList.add("show");
      }
    });
  });
});
// start blog Animation
let blogSection = document.querySelector(".blog");
let blogAni = false;
let blogs = blogSection.querySelectorAll(".row > div");

window.addEventListener("scroll", function () {
  // our work section Animation
  if (window.scrollY >= ourWork.offsetTop + 100 && !ourWrokA) {
    ourWork = true;
    for (let i = 0; i < work.length; i++) {
      setTimeout(() => {
        work[i].classList.remove("scrolled");
      }, 100 * i);
    }
  }
  // blog section animation
  if (window.scrollY >= blogSection.offsetTop + 100 && !blogAni) {
    blogAni = true;
    for (let i = 0; i < blogs.length; i++) {
      setTimeout(() => {
        blogs[i].classList.remove("scrolled");
      }, 100 * i);
    }
  }
});
