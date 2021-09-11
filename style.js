const header = document.getElementById("header");
const scrollup = document.getElementById("scrollup");

// Behavior of elements at scroll-y 0.
window.addEventListener("scroll", () => {
  const scrolledDown = this.scrollY > 0;

  header.className = scrolledDown ? "header--scroll" : "";
  scrollup.style.visibility = scrolledDown ? 'visible' : 'hidden';
});

// Scroll back to top.
scrollup.addEventListener('click', () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})
