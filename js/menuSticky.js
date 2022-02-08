window.addEventListener("scroll", () => {
  const header = this.document.getElementById("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
