function listAllProducts() {
  productsNode.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const item = document.createElement("div");

    item.classList.add("item");
    item.innerHTML = `<img src=${products[i].img} class="imgProduct"/>
                       <div class="itemName">${products[i].mark}</div>
                       <div class="itemPrice">$${products[i].price}</div>
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

    item.appendChild(buttonContainer);
    containerBtnCount.appendChild(subtractButton);
    containerBtnCount.appendChild(count);
    containerBtnCount.appendChild(addButton);
    buttonContainer.appendChild(containerBtnCount);
    buttonContainer.appendChild(button);
    productsNode.appendChild(item);

    $(button).click(function () {
      addProduct(products[i], countProduct);
    });

    button.innerHTML = "AGREGAR";
  }
}
