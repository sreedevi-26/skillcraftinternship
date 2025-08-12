window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {   // Capital Y here
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
