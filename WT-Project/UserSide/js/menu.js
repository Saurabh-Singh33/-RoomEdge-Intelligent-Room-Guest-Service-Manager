const filterBtns = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    menuCards.forEach((card) => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = "block";
        setTimeout(() => (card.style.opacity = "1"), 50);
      } else {
        card.style.opacity = "0";
        setTimeout(() => (card.style.display = "none"), 300);
      }
    });
  });
});

const orderBtns = document.querySelectorAll(".order-btn");

orderBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".menu-card");
    const itemName = card.querySelector("h3").innerText;
    const qty = card.querySelector(".qty-input").value;

    if (qty < 1) {
      alert("Please enter a valid quantity!");
      return;
    }

    alert(`You ordered ${qty} × ${itemName}`);
  });
});
let cart = [];

const addBtns = document.querySelectorAll(".add-btn");

addBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".menu-card");
    const itemName = card.querySelector("h3").innerText;
    const price = card.querySelector("p").innerText.replace("₹", "");
    const qty = card.querySelector(".qty-input").value;

    if (qty < 1) {
      alert("Please enter a valid quantity!");
      return;
    }

    cart.push({ itemName, price, qty });

    alert(`${qty} × ${itemName} added to cart`);
  });
});

document.getElementById("orderAllBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let msg = "Your Order:\n\n";

  cart.forEach((item) => {
    msg += `${item.qty} × ${item.itemName} — ₹${item.price}\n`;
  });

  alert(msg);
});

