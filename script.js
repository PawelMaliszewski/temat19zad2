function checkPassword() {
  const timeLoop = setInterval(checkIfCorrect, 500);
}

function checkIfCorrect() {
  let password = document.getElementById(`password`).value;
  let confirmPassword = document.getElementById(`confirm-password`).value;
  let message = document.getElementById(`message`);
  let messageTwo = document.getElementById(`messageTwo`);
  let stop = false;

  if (password.length == 0) {
    message.innerHTML = "Wprowadź hasło";
  } else if (
    password.length < 8 &&
    !containsUpperCase(password) &&
    !containsSpecialCharter(password)
  ) {
    message.innerHTML =
      "Za krótkie hasło. Min 8 znaków<br>Min 1 duża liter<br>Min 1 znak specjalny";
  } else if (
    password.length < 8 &&
    containsUpperCase(password) &&
    !containsSpecialCharter(password)
  ) {
    message.innerHTML =
      "Za krótkie hasło. Min 8 znaków<br>Min 1 znak specjalny";
  } else if (
    password.length < 8 &&
    !containsUpperCase(password) &&
    containsSpecialCharter(password)
  ) {
    message.innerHTML =
      "Za krótkie hasło. Min 8 znaków<br>Min 1 duża liter<br>";
  } else if (
    password.length < 8 &&
    containsUpperCase(password) &&
    containsSpecialCharter(password)
  ) {
    message.innerHTML = "Za krótkie hasło. Min 8 znaków";
  } else {
    message.innerHTML = "";
  }

  if (password != confirmPassword) {
    messageTwo.innerHTML = "Hasła różnią się od siebie!";
  } else {
    messageTwo.innerHTML = "";
  }

  if (stop) {
    clearInterval(checkIfCorrect);
  }
}

function containsUpperCase(str) {
  return Boolean(str.match(/[A-Z]/));
}
function containsSpecialCharter(str) {
  return Boolean(str.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/));
}

checkPassword();
