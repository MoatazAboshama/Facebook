let inputEmail = document.querySelector(".inputEmail");
let inputPassword = document.querySelector(".inputPassword");
let char = document.querySelector(".hide");
let log = document.querySelector(".sub");
let check = document.querySelector(".check");
let invalid = document.querySelector(".invalid");
let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function valid() {
  if (inputEmail.value == "") {
    invalid.style.display = "block";
    return false;
  }

  if (!isNaN(inputEmail.value)) {
    invalid.style.display = "block";
    return false;
  }

  if (!checkEmail.test(inputEmail.value)) {
    invalid.style.display = "block";
    return false;
  }

  if (inputPassword.value == "") {
    invalid.style.display = "block";
    return false;
  }

  if (inputPassword.value.length <= 5) {
    return false;
  }

  return true;
}

function charac() {
  char.style.display = "block";
}

function out() {
  char.style.display = "none";
}

function num() {
  if (inputPassword.value.length >= 5) {
    char.style.color = "green";
  } else {
    char.style.color = "red";
  }
}

function showNum() {
  if (inputPassword.type == "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
}
