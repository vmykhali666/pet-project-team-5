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
  if (email.value === "" || password.value === "") {
    alert("Введите корректные данные. Все поля должны быть заполнены");
  } else if (email.value === "admin" && password.value === "admin") {
    location.href = "./content-page.html";
  } else {
    alert("Такого юзера не существует");
  }
}

email.forEach(() => {
  if (email.keyCode === "13") {
    requireFields();
  }
});

password.forEach(() => {
  if (password.keyCode === "13") {
    requireFields();
  }
});

btn.forEach(el => el.addEventListener("click", requireFields));

module.exports = {};
