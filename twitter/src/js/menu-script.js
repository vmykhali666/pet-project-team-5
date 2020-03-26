/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-const */
/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */

let email = document.querySelectorAll(".form-input_email");
let password = document.querySelectorAll(".form-input_psw");
let btn = document.querySelectorAll(".form-button");

function requireFields() {
  debugger
  if (email[0].value === "" || password[0].value === "") {
    alert("Введите корректные данные. Все поля должны быть заполнены");
  } else if (email[0].value == "admin" && password[0].value == "admin") {
    location.href = "./content-page.html";
  } else {
    alert("Такого юзера не существует");
  }
}

email.forEach(el => el.addEventListener("keydown", e => {
  if (e.keyCode == 13) {
    password[0].focus()
  }
}))

password.forEach(el => el.addEventListener("keydown", e => {
    if (e.keyCode == 13) {
      requireFields()
    }

}))

btn.forEach(el => el.addEventListener("click", requireFields));

module.exports = {};
