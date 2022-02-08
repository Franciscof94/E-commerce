const hamburgerMenu = document.getElementById("hamburgerMenu");
const ulMenu = document.getElementById("ulMenu");
const li = document.getElementsByClassName("allCategories");

hamburgerMenu.addEventListener("click", () => {
  ulMenu.classList.toggle("showUlMenu");
});

for (let i = 0; i < li.length; i++) {
  hamburgerMenu.addEventListener("click", () => {
    li[i].classList.toggle("showLi");
  });
}
