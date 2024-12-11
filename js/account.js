let labelFirstName = document.querySelector(".labelFirstName");
let inputFirstName = document.querySelector(".inputFirstName");
let labelLastName = document.querySelector(".labelLastName");
let inputLastName = document.querySelector(".inputLastName");
let labelEmail = document.querySelector(".labelEmail");
let inputEmail = document.querySelector(".inputEmail");
let labelPhoneNumber = document.querySelector(".labelPhoneNumber");
let inputPhoneNumber = document.querySelector(".inputPhoneNumber");
let labelPassword = document.querySelector(".labelPassword");
let inputPassword = document.querySelector(".inputPassword");
let labelConfirmPassword = document.querySelector(".labelConfirmPassword");
let inputConfirmPassword = document.querySelector(".inputConfirmPassword");
let labelGender = document.querySelector(".labelGender");
let inputGender = document.querySelector(".inputGender");
let inputGenderFemale = document.querySelector(".inputGenderFemale");
let labelBirthdate = document.querySelector(".labelBirthdate");
let inputBirthdate = document.querySelector(".inputBirthdate");
let checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let checkPhoneNumber = /^[0-9]{10}$/;
let isSelect = false;

function firstN() {
  if (inputFirstName.value == "") {
    labelFirstName.innerHTML = "Please Enter Your First Name";
    labelFirstName.style.color = "yellow";
  } else if (!isNaN(inputFirstName.value)) {
    labelFirstName.innerHTML = "Wrong typing...";
    labelFirstName.style.color = "red";
  } else {
    labelFirstName.innerHTML = "Right typing...";
    labelFirstName.style.color = "green";
  }
}

function lastN() {
  if (inputLastName.value == "") {
    labelLastName.innerHTML = "Please Enter Your Last Name";
    labelLastName.style.color = "yellow";
  } else if (!isNaN(inputLastName.value)) {
    labelLastName.innerHTML = "Wrong typing...";
    labelLastName.style.color = "red";
  } else {
    labelLastName.innerHTML = "Right typing...";
    labelLastName.style.color = "green";
  }
}

function yourEmail() {
  if (inputEmail.value == "") {
    labelEmail.innerHTML = "Please Enter Your Email";
    labelEmail.style.color = "yellow";
  } else if (!isNaN(inputEmail.value)) {
    labelEmail.innerHTML = "Wrong typing...";
    labelEmail.style.color = "red";
  } else if (!checkEmail.test(inputEmail.value)) {
    labelEmail.innerHTML = "Wrong typing...";
    labelEmail.style.color = "red";
  } else {
    labelEmail.innerHTML = "Right typing...";
    labelEmail.style.color = "green";
  }
}

function yourPhoneNumber() {
  if (inputPhoneNumber.value == "") {
    labelPhoneNumber.innerHTML = "Please Enter Your phoneNumber";
    labelPhoneNumber.style.color = "yellow";
  } else if (!checkPhoneNumber.test(inputPhoneNumber.value)) {
    labelPhoneNumber.innerHTML = "Wrong typing...";
    labelPhoneNumber.style.color = "red";
  } else {
    labelPhoneNumber.innerHTML = "Right typing...";
    labelPhoneNumber.style.color = "green";
  }
}

function yourPassword() {
  if (inputPassword.value == "") {
    labelPassword.innerHTML = "Please Enter Your Password";
    labelPassword.style.color = "yellow";
  } else if (isNaN(inputPassword.value)) {
    labelPassword.innerHTML = "Wrong typing...";
    labelPassword.style.color = "red";
  } else {
    labelPassword.innerHTML = "Right typing...";
    labelPassword.style.color = "green";
  }
}

function yourConfirmPassword() {
  if (inputConfirmPassword.value == "") {
    labelConfirmPassword.innerHTML = "Please Enter Your ConfirmPassword";
    labelConfirmPassword.style.color = "yellow";
  } else if (isNaN(inputConfirmPassword.value)) {
    labelConfirmPassword.innerHTML = "Wrong typing...";
    labelConfirmPassword.style.color = "red";
  } else {
    labelConfirmPassword.innerHTML = "Right typing...";
    labelConfirmPassword.style.color = "green";
  }
}

function yourGender() {
  labelGender.innerHTML = "Right Gender";
  labelGender.style.color = "green";
}

function yourBirthdate() {
  if (inputBirthdate.value == "") {
    labelBirthdate.innerHTML = "Please Enter Your Birthdate";
    labelBirthdate.style.color = "yellow";
  } else {
    labelBirthdate.innerHTML = "Right Birthdate";
    labelBirthdate.style.color = "green";
  }
}

function valid() {
  if (inputFirstName.value == "") {
    labelFirstName.innerHTML = "Please Enter Your First Name";
    labelFirstName.style.color = "yellow";
    return false;
  }
  if (!isNaN(inputLastName.value)) {
    labelLastName.innerHTML = "Please Enter Your Last Name";
    labelLastName.style.color = "yellow";
    return false;
  }
  if (!isNaN(inputEmail.value)) {
    labelEmail.innerHTML = "Please Enter Your Email";
    labelEmail.style.color = "yellow";
    return false;
  }
  if (!checkEmail.test(inputEmail.value)) {
    return false;
  }
  if (inputPhoneNumber.value == "") {
    labelPhoneNumber.innerHTML = "Please Enter Your phoneNumber";
    labelPhoneNumber.style.color = "yellow";
    isSelect;
  }
  if (!checkPhoneNumber.test(inputPhoneNumber.value)) {
    isSelect;
  }
  if (inputPassword.value == "") {
    labelPassword.innerHTML = "Please Enter Your Password";
    labelPassword.style.color = "yellow";
    return false;
  }

  if (isNaN(inputPassword.value)) {
    return false;
  }
  if (inputConfirmPassword.value == "") {
    labelConfirmPassword.innerHTML = "Please Enter Your ConfirmPassword";
    labelConfirmPassword.style.color = "yellow";
    return false;
  }

  if (isNaN(inputConfirmPassword.value)) {
    return false;
  }

  if (inputGender.checked == false && inputGenderFemale.checked == false) {
    labelGender.innerHTML = "Please Enter Your Gender";
    labelGender.style.color = "yellow";
    return false;
  }

  if (inputBirthdate.value == "") {
    labelBirthdate.innerHTML = "Please Enter Your Birthdate";
    labelBirthdate.style.color = "yellow";
    return false;
  }

  return true;
}
