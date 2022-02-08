const sales = document.getElementById("onSale");

function onSale() {
  for (let i = 0; i < 4; i++) {
    let idx = Math.floor(Math.random() * products.length);
    const productRandom = products[idx];
    products.splice(idx, 1);

    const item = document.createElement("div");

    item.classList.add("item");
    item.innerHTML = `<img src=${productRandom.img} class="imgProduct"/>
                       <div class="itemName">${productRandom.mark}</div>
                       <div class="itemPrice">$${productRandom.price}</div>
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
    button.classList.add("addBtn");

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
    sales.appendChild(item);

    $(button).click(function () {
      addProduct(productRandom, countProduct);
    });

    button.innerHTML = "AGREGAR";
  }
}

onSale();
