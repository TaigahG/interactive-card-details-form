const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card-num");
const nameInp = document.getElementById("name");
const cardName = document.getElementById("user-name");
const cardMonth = document.getElementById("card-month");
const cardYear = document.getElementById("card-year");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");
const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card-cvc");
const submitBtn = document.getElementById("submit");
const compeleted = document.querySelector(".thankyou");
const form = document.querySelector("form");

function inpCardnum(e) {
  cardNumber.innerText = format(e.target.value);
}
function inpCardNm(e) {
  cardName.innerText = format(e.target.value);
}
function inpCardM(e) {
  cardMonth.innerText = format(e.target.value);
}
function inpCardY(e) {
  cardYear.innerText = format(e.target.value);
}
function inpCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  if (!nameInp.value) {
    nameInp.classList.add("error");
    nameInp.parentElement.classList.add("error_message");
  } else {
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error_message");
  }
  if (!numberInp.value) {
    numberInp.classList.add("error");
    numberInp.parentElement.classList.add("error_message");
  } else if (numberInp.value.length < 16) {
    numberInp.classList.add("error");
  } else {
    numberInp.classList.remove("error");
    numberInp.parentElement.classList.remove("error_message");
  }
  if (!monthInp.value) {
    monthInp.classList.add("error");
    monthInp.parentElement.classList.add("error_message");
  } else {
    monthInp.classList.remove("error");
    monthInp.parentElement.classList.remove("error_message");
  }
  if (!yearInp.value) {
    yearInp.classList.add("error");
    yearInp.parentElement.classList.add("error_message");
  } else {
    yearInp.classList.remove("error");
    yearInp.parentElement.classList.remove("error_message");
  }
  if (!cvcInp.value) {
    cvcInp.classList.add("error");
    cvcInp.parentElement.classList.add("error_message");
  } else {
    cvcInp.classList.remove("error");
    cvcInp.parentElement.classList.remove("error_message");
  }
  if (nameInp.value && numberInp.value && monthInp.value && yearInp.value && cvcInp.value && numberInp.value.length == 16) {
    compeleted.classList.remove("hidden");
    form.classList.add("hidden");
  }
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

numberInp.addEventListener("keyup", inpCardnum);
nameInp.addEventListener("keyup", inpCardNm);
monthInp.addEventListener("keyup", inpCardM);
yearInp.addEventListener("keyup", inpCardY);
cvcInp.addEventListener("keyup", inpCardCvc);
submitBtn.addEventListener("click", handleSubmit);
