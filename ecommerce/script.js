document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", prices: 29.99 },
    { id: 2, name: "Product 2", prices: 19.99 },
    { id: 3, name: "Product 3", prices: 59.99 },
  ];
  const cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<span>${product.name} - ${product.prices.toFixed(
      2
    )}</span>
    <button data-id="${product.id}"> add to cart </button>`;
    productList.appendChild(productDiv);
  });
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const selectedProduct = products.find((p) => p.id === productId);
      addToCart(selectedProduct);
    }
  });
  function addToCart(product) {
    cart.push(product);
    renderCart();
  }
  //removing ka hai yeh also study about hidden class
  function renderCart() {
    cartItems.innerText = "";
    let totalprice = 0;
    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalprice += item.prices;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `${item.name} - ${item.prices.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalprice.toFixed(2)}`;
      });
    } else {
      totalPriceDisplay.textContent = "$0.00";
      emptyCartMessage.classList.remove("hidden");
    }
  }
  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;

    alert("Checkedout successfully");
    renderCart();
  });
});
