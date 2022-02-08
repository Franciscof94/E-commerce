const username = document.getElementById("name");
const email = document.getElementById("mail");
const password = document.getElementById("password");
const userContainer = document.getElementById("userContainer");
const login = document.getElementById("login");

function defineEvents() {
  const btnCreateUser = $("#btnCreateUser");

  $(btnCreateUser).click(function (e) {
    e.preventDefault();

    const newUser = new Username(username.value, email.value, password.value);
    const answer = newUser.registerUser();

    if (answer === "OK") {
      alert("Se registró!");
      login.textContent = email.value;
    } else {
      alert("Ha ocurrido un error, (Rellene todos los campos)");
    }
  });
}

defineEvents();
