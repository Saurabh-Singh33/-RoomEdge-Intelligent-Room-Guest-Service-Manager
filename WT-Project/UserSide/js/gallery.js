let modal = document.getElementById("imgModal");
let modalImg = document.getElementById("modalImage");
let closeBtn = document.querySelector(".close");

document.querySelectorAll(".g-img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// close when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
