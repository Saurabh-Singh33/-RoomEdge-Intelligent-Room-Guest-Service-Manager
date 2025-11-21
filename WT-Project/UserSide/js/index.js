// index.js - site-wide small features: scroll-top button
document.addEventListener("DOMContentLoaded", () => {
  const scrollTop = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) scrollTop.style.display = "block";
    else scrollTop.style.display = "none";
  });
  scrollTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
});
