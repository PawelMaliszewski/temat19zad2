let password = document.getElementById(`password`);
let confirmPassword = document.getElementById(`confirm-password`);
let message = document.getElementById(`message`);
let messageTwo = document.getElementById(`messageTwo`);

function checkPassword() {
  password.addEventListener("keyup", checkIfCorrect);
  confirmPassword.addEventListener("keyup", checkIfCorrect);
}

function checkIfCorrect() {
  message.innerHTML = returnMissingElementsInfo();
  messageTwo.innerHTML = returnPasswordsComparison();
  
}
   function returnMissingElementsInfo() {
       if(password.value.length < 8) {
         return "Za krótkie hasło. Min 8 znaków<br>" + checkAndReturnMissingElements();
       }
       return checkAndReturnMissingElements();
     }

  function checkAndReturnMissingElements() {
    let info = "";
      if (!containsUpperCase(password.value)) {
        info += "Min 1 duża litera<br>"
      }
      if (!containsLowerCase(password.value)) {
        info += "Min 1 mała litera<br>"
      }
      if (!containsSpecialCharter(password.value)) {
        info += "Min 1 znak specjalny<br>"
      }
      return info;
   }

   function returnPasswordsComparison() {
    if (password.value != confirmPassword.value) {
      return  "Hasła różnią się od siebie!";
    } else {
      return  "";
    }
   }

  function containsLowerCase(str) {
    return Boolean(str.match(/[a ą b c ć d e ę f g h i j k l ł m n ń o ó p r s ś t u w y z ź ż]/));
  }

  function containsUpperCase(str) {
    return Boolean(
      str.match(/[A Ą B C Ć D E Ę F G H I J K L Ł M N Ń O Ó P R S Ś T U W Y Z Ź Ż]/));
  }

  function containsSpecialCharter(str) {
    return Boolean(str.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/));
  }

checkPassword();
