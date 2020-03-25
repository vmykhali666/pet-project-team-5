let email = document.querySelector(".form-input_email");
let password = document.querySelector(".form-input_psw");

let btn = document.querySelector(".form-button");

btn.addEventListener("click", function(el) {
  if (email.value === "" || password.value === "") {
    return alert("Введите корректные данные. Все поля должны быть заполнены");
  } else if (email.value === "admin" && password.value === "admin") {
    return (location.href = "../html/twitter-main-page-left-column.html");
  } else {
    return alert("Такого юзера не существует");
  }
});
