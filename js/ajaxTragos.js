const cocktailContainer = document.getElementById("cocktailContainer");
const mainItem = document.getElementById("mainItem");
$(() => {
  cocktail();
});

function cocktail() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

  $.get(url, function (respuesta, estado) {
    if (estado === "success") {
      showCocktail(respuesta.drinks);
    } else {
      alert("Algo salió mal. Intenta más tarde");
    }
  });
}

function showCocktail(cocktail) {
  for (var i = 0; i < cocktail.length; i++) {
    const item = document.createElement("div");
    item.classList.add("cocktailItem");

    cocktailContainer.appendChild(item);

    item.innerHTML = `<div class="instructionHover"><h3 class="instructionTitle">Instrucciones</h3><p class="instruction">${
      cocktail[i].strInstructions
    }</p></div>
                            <div class="cocktailTitle">${
                              cocktail[i].strDrink
                            }</div>
                            <img class="cocktailImg"src="${
                              cocktail[i].strDrinkThumb
                            }">
                            <div class="ingredientsTitle">Ingredientes</div>
                            <div>
                            <div class="ingredients">${
                              cocktail[i].strIngredient1
                                ? cocktail[i].strIngredient1
                                : ""
                            }</div>
                            <div class="ingredients">${
                              cocktail[i].strIngredient2
                                ? cocktail[i].strIngredient2
                                : ""
                            }</div>
                            <div class="ingredients">${
                              cocktail[i].strIngredient3
                                ? cocktail[i].strIngredient3
                                : ""
                            }</div>
                            <div class="ingredients">${
                              cocktail[i].strIngredient4
                                ? cocktail[i].strIngredient4
                                : ""
                            }</div>
                            <div class="ingredients">${
                              cocktail[i].strIngredient5
                                ? cocktail[i].strIngredient5
                                : ""
                            }</div>
                            </div>`;
  }
}
