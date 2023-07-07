function checkPassword() {
  const timeLoop = setInterval(checkIfCorrect, 250);
}

function checkIfCorrect() {
  let password = document.getElementById(`password`).value;
  let confirmPassword = document.getElementById(`confirm-password`).value;
  let message = document.getElementById(`message`);
  let messageTwo = document.getElementById(`messageTwo`);
  let stop = false;

  if (password.length == 0) {
    message.innerHTML = "Wprowadź hasło";
  } else if (password.length < 8) {
    if (
      !containsUpperCase(password) &&
      !containsLowerCase(password) &&
      !containsSpecialCharter(password)
    ) {
      message.innerHTML =
        "Za krótkie hasło. Min 8 znaków<br>Min 1 duża litera<br>Min 1 mała litera<br>Min 1 znak specjalny";
    } else if (
      containsUpperCase(password) &&
      !containsLowerCase(password) &&
      !containsSpecialCharter(password)
    ) {
      message.innerHTML =
        "Za krótkie hasło. Min 8 znaków<br>Min 1 mała litera<br>Min 1 znak specjalny";
    } else if (
      containsUpperCase(password) &&
      containsLowerCase(password) &&
      !containsSpecialCharter(password)
    ) {
      message.innerHTML =
        "Za krótkie hasło. Min 8 znaków<br>Min 1 znak specjalny";
    } else if (
      containsUpperCase(password) &&
      !containsLowerCase(password) &&
      containsSpecialCharter(password)
    ) {
      message.innerHTML = "Za krótkie hasło. Min 8 znaków<br>Min 1 mała litera";
    } else if (
      !containsUpperCase(password) &&
      containsLowerCase(password) &&
      !containsSpecialCharter(password)
    ) {
      message.innerHTML =
        "Za krótkie hasło. Min 8 znaków<br>Min 1 duża litera<br>Min 1 znak specjalny";
    } else if (
      !containsUpperCase(password) &&
      containsLowerCase(password) &&
      containsSpecialCharter(password)
    ) {
      message.innerHTML = "Za krótkie hasło. Min 8 znaków<br>Min 1 duża litera";
    } else if (
      !containsUpperCase(password) &&
      !containsLowerCase(password) &&
      containsSpecialCharter(password)
    ) {
      message.innerHTML =
        "Za krótkie hasło. Min 8 znaków<br>Min 1 duża litera<br>Min 1 mała litera";
    } else if (password.length < 8) {
      message.innerHTML = "Za krótkie hasło. Min 8 znaków";
    }
  } else if (password.length >= 8) {
    if (
      !containsUpperCase(password) &&
      !containsLowerCase(password) &&
      !containsSpecialCharter(password)
    ) {
      message.innerHTML =
        "Min 1 duża litera<br>Min 1 mała litera<br>Min 1 znak specjalny";
    } else if (
      password.length < 8 &&
      containsUpperCase(password) &&
      !containsLowerCase(password) &&
      !containsSpecialCharter(password)
    ) {
      message.innerHTML =
        "Za krótkie hasło. Min 8 znaków<br>Min 1 mała litera<br>Min 1 znak specjalny";
    } else if (
      containsUpperCase(password) &&
      containsLowerCase(password) &&
      !containsSpecialCharter(password)
    ) {
      message.innerHTML = "Min 1 znak specjalny";
    } else if (
      containsUpperCase(password) &&
      !containsLowerCase(password) &&
      containsSpecialCharter(password)
    ) {
      message.innerHTML = "Min 1 mała litera";
    } else if (
      !containsUpperCase(password) &&
      containsLowerCase(password) &&
      !containsSpecialCharter(password)
    ) {
      message.innerHTML = "Min 1 duża litera<br>Min 1 znak specjalny";
    } else if (
      !containsUpperCase(password) &&
      containsLowerCase(password) &&
      containsSpecialCharter(password)
    ) {
      message.innerHTML = "Min 1 duża litera";
    } else if (
      !containsUpperCase(password) &&
      !containsLowerCase(password) &&
      containsSpecialCharter(password)
    ) {
      message.innerHTML = "Min 1 duża litera<br>Min 1 mała litera";
    } else {
      message.innerHTML = "";
    }
  }
  if (password != confirmPassword) {
    messageTwo.innerHTML = "Hasła różnią się od siebie!";
  } else {
    messageTwo.innerHTML = "";
  }

  if (stop) {
    clearInterval(checkIfCorrect);
  }

  function containsLowerCase(str) {
    return Boolean(str.match(/[aąbcćdeęfghijklłmnńoóprsśtuwyzźż]/));
  }
  function containsUpperCase(str) {
    return Boolean(
      str.match(
        /[A Ą B C Ć D E Ę F G H I J K L Ł M N Ń O Ó P R S Ś T U W Y Z Ź Ż]/
      )
    );
  }
  function containsSpecialCharter(str) {
    return Boolean(str.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/));
  }
}

checkPassword();
