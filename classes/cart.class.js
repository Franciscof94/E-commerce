class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  removeProduct(product) {
    const index = newCart.findIndex((element) => element === product);
    newCart.splice(index, 1);
  }

  total() {
    let sum = 0;

    for (let i = 0; i < newCart.length; i++) {
      let product = newCart[i];
      sum += parseFloat(product.price) * product.amount;
    }
    return sum;
  }
}
