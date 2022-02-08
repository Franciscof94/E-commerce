function addProduct(product, inputValue) {
  console.log(product)
  const selectedQuantity = inputValue;

  const selectedProduct = products.find(
    (prod) => prod.mark === product.mark
  );

  const inCart = newCart.some((prod) => prod.mark === product.mark);

  if (inCart) {
    newCart.forEach((prod) => {
      if (prod.mark === product.mark) {
        prod.amount = Number(prod.amount) + Number(selectedQuantity);
        updateCart(prod.amount);
      }
    });
  } else {
    if (!selectedQuantity) {
      console.log("agregar cantidad");
    } else {
      newCart.push(product);
      Number(selectedProduct).amount = selectedQuantity;
      product.amount = Number(selectedQuantity);

      localStorage.setItem("myArray", JSON.stringify(newCart));

      JSON.parse(localStorage.getItem("myArray"));
      updateCart();
    }
  }
}
