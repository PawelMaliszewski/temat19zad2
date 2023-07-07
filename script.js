function checkPassword() {
  const timeLoop = setInterval(checkIfCorrect, 250);
}

function checkIfCorrect() {
  let password = document.getElementById(`password`).value;
  let confirmPassword = document.getElementById(`confirm-password`).value;
  let message = document.getElementById(`message`);
  let messageTwo = document.getElementById(`messageTwo`);
  let info = "";
  if (password.length == 0) {
    message.innerHTML = "Wprowadź hasło";
  } else if (password.length < 8) {
    info += "Za krótkie hasło. Min. 8 znaków<br>";
    if (!containsUpperCase(password)) {
      info += "Min 1 duża litera<br>";
    }
    if (!containsLowerCase(password)) {
      info += "Min 1 mała litera<br>";
    }
    if (!containsSpecialCharter(password)) {
      info += "Min 1 znak specjalny<br>";
    }
    message.innerHTML = info;
  } else if (password.length >= 8) {
    if (!containsUpperCase(password)) {
      info += "Min 1 duża litera<br>";
    }
    if (!containsLowerCase(password)) {
      info += "Min 1 mała litera<br>";
    }
    if (!containsSpecialCharter(password)) {
      info += "Min 1 znak specjalny<br>";
    }
    message.innerHTML = info;
  }

  if (password != confirmPassword) {
    messageTwo.innerHTML = "Hasła różnią się od siebie!";
  } else {
    messageTwo.innerHTML = "";
  }

  function containsLowerCase(str) {
    return Boolean(str.match(/[aąbcćdeęfghijklłmnńoóprsśtuwyzźż]/));
  }
  function containsUpperCase(str) {
    return Boolean(str.match(/[AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ]/));
  }
  function containsSpecialCharter(str) {
    return Boolean(str.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/));
  }
}

checkPassword();
