input.addEventListener("input", (e) => {
  const searchedProduct = document.getElementById("searchedProduct");

  if (e.target.value === "") {
    searchedProduct.innerHTML = "";
    return;
  }

  const searchResults = products.filter((product) => {
    return product.mark.toLowerCase().includes(e.target.value.toLowerCase());
  });

  searchedProduct.innerHTML = "";

  searchResults.forEach((product) => {
    const item = document.createElement("div");
    item.classList.add("itemSearch");
    item.classList.add("item");
    item.innerHTML = `<img src=${product.img} class="imgProduct"/>
                       <div>${product.mark}</div>
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
    searchedProduct.appendChild(item);

    $(button).click(function () {
      console.log(countProduct + 3);
      addProduct(product, countProduct);
    });

    button.innerHTML = "AGREGAR";
  });
});
