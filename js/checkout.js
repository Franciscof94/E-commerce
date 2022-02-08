const divOrder = document.getElementById("divOrder");
const totalPurchase = document.getElementById("total");

function checkout() {
  function total() {
    let sum = 0;

    for (var i = 0; i < array.length; i++) {
      let product = array[i];
      sum += parseFloat(product.price) * product.amount;
    }
    return sum;
  }

  let totalAmount = total();

  for (var i = 0; i < array.length; i++) {
    const item = document.createElement("div");
    divOrder.appendChild(item);

    item.innerHTML = `<table class='order-table' id="order-table">
    <tbody>
      <tr>
        <td><img src='${array[i].img}' class='full-width'></img>
        </td>
        <td>
          <br> <span class='thin'>${array[i].mark}</span>
          <br><span class='thin small'>Cantidad: ${array[i].amount}<br></span>
        </td>

      </tr>
      <tr>
        <td>
          <div class='price'>$${array[i].price * array[i].amount}</div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class='line'></div>`;

    totalPurchase.textContent = `$${totalAmount}`;
  }
}
