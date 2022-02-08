const mainContainer = document.getElementById("mainContainer");
const cartNode = document.getElementById("cart");
const countContainer = document.getElementById("countContainer");
const carouselContainer = document.getElementById("carouselContainer");
const productsNode = document.getElementById("products");
const input = document.getElementById("input");
const cart = document.createElement("div");
cart.classList.add("cartSticky");

const button = document.createElement("button");
cart.appendChild(button);

button.classList.add("checkoutButton");
button.innerHTML = "FINALIZAR COMPRA";

const cartSummary = document.createElement("div");
cartSummary.classList.add("cartSummary");
cart.appendChild(cartSummary);
cartSummary.innerHTML = "RESUMEN DEL CARRITO";

let newCart = [];
let array = JSON.parse(localStorage.getItem("myArray"));
const cartClass = new ShoppingCart([], {});

button.addEventListener("click", () => {
  if (!newCart.length) return alert("Compra algo primero");
  window.location.href = "./checkout.html";
});

function init() {
  listCategories();
}

function listCategories() {
  const categoriesNode = document.getElementById("categories");

  const allCategories = document.getElementById("allCategories");

  for (var i = 0; i < categories.length; i++) {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("categoryContainer");
    categoryContainer.innerHTML = `<div class="category" onclick="listProducts(${categories[i].id})"><div>${categories[i].name}</div></div>`;
    categoryContainer.setAttribute("id", "cat-" + categories[i].id);
    allCategories.append(categoryContainer);
    categoriesNode.appendChild(allCategories);
  }

  const btnAllProduct = document.createElement("div");
  btnAllProduct.classList.add("btnAllProduct");
  btnAllProduct.innerHTML = "Todos los productos";
  categoriesNode.appendChild(btnAllProduct);
  btnAllProduct.addEventListener("click", () => {
    listAllProducts();
  });
}

function listProducts(idCategory) {
  const productsNode = document.getElementById("products");

  productsNode.innerHTML = "";
  let lista = document.createElement("div");
  const productsCategories = products.filter(
    (element) => element.category === idCategory
  );
  for (var i = 0; i < productsCategories.length; i++) {
    let product = productsCategories[i];
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `<img src=${product.img} class="imgProduct"/>
                     <div class="itemName">${product.mark}</div>
                     <div class="itemPrice">$${product.price}</div>
                     `;
    const subtractButton = document.createElement("button");
    const addButton = document.createElement("button");
    subtractButton.classList.add("btnAddSubtract");
    addButton.classList.add("btnAddSubtract");

    let countProduct = 0;
    let count = document.createElement("div");
    count.classList.add("count");
    count.textContent = countProduct;

    const containerBtnCount = document.createElement("div");
    containerBtnCount.classList.add("containerBtnCount");

    let button = document.createElement("button");
    button.classList.add("addButton");

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");

    addButton.innerHTML = "+";
    subtractButton.innerHTML = "-";

    addButton.addEventListener("click", () => {
      countProduct = ++countProduct;
      count.textContent = countProduct;
    });

    subtractButton.addEventListener("click", () => {
      if (countProduct > 0) {
        countProduct = --countProduct;
        count.textContent = countProduct;
      }
    });

    item.append(buttonContainer);
    containerBtnCount.appendChild(subtractButton);
    containerBtnCount.appendChild(count);
    containerBtnCount.appendChild(addButton);
    buttonContainer.appendChild(containerBtnCount);
    buttonContainer.appendChild(button);
    productsNode.appendChild(item);

    $(button).click(function () {
      console.log(countProduct + 3);
      addProduct(product, countProduct);
    });

    button.innerHTML = "AGREGAR";
  }
}

function updateCart() {
  cartNode.innerHTML = "";
  const total = cartClass.total();

  if (array !== "") {
    countContainer.textContent = newCart.length;
    countContainer.classList.add("countContainer");
  } else {
    countContainer.textContent = "";
    countContainer.classList.remove("countContainer");
  }

  let accountant = 0;
  while (accountant < newCart.length) {
    let product = newCart[accountant];

    const item = document.createElement("div");

    item.classList.add("cartItem");
    mainContainer.append(cart);
    cart.append(cartNode);
    cartNode.append(item);

    item.innerHTML = `<div class="cartImage"><img src=${product.img} /></div>
                     <div class="cartProductInformation">
                      <div class="nameProduct">${product.mark}</div>
                      <div class="productTitleInCart">${product.name}</div>
                      <div class="productQuantity">Cantidad: ${
                        product.amount
                      }</div>
                      <div class="totalPrice">$${
                        product.price * product.amount
                      }</div></div>
                      `;

    const removeButton = document.createElement("div");
    removeButton.classList.add("removeButton");
    removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

    $(removeButton).click(function () {
      cartClass.removeProduct(product);
      updateCart();
    });

    item.append(removeButton);

    accountant++;
  }

  const fullContainerNode = document.createElement("div");
  fullContainerNode.classList.add("totalCartValue");
  cart.appendChild(fullContainerNode);

  const nodoTotal = document.createElement("div");
  nodoTotal.classList.add("nodoTotal");
  nodoTotal.innerHTML = `Valor total: $${total}`;

  fullContainerNode.append(nodoTotal);

  cartNode.append(fullContainerNode);
}

const containerCartIcon = document.getElementById("cartIcon");

containerCartIcon.addEventListener("click", () => {
  cart.classList.toggle("hidden");
  cart.classList.toggle("cartSticky");
});
