const button = document.querySelector(".site-preview__form-button");
const emailInput = document.querySelector(".site-preview__form-input");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form = document.querySelector(".site-preview__form");
let check = false;

function showError(value) {
  if (value === true) {
    return true;
  } else if ((value === false) & (check === false)) {
    //wyswietlenie komunikatu
    const errorMessage = document.createElement("div");
    const newContent = document.createTextNode(
      "Please provide correct email Address"
    );
    errorMessage.appendChild(newContent);
    errorMessage.classList.add("site-preview__input-message");
    emailInput.after(errorMessage);
    //wyswietlenie czerwonego bordera dla inputa
    emailInput.classList.add("site-preview__form-input--invalid");
    check = true;
    return false;
  } else return false;
}

function isCorrectEmail(email, reg) {
  if (reg.test(email.value) === true) {
    // alert("You have entered an valid email address :)");
    return true;
  } else if (reg.test(email.value) === false) {
    // alert("You have entered an invalid email address!");
    return false;
  } else return false;
}

function resetMessage() {
  if (check === true) {
    const message = document.querySelector(".site-preview__input-message");
    message.remove();
    emailInput.classList.remove("site-preview__form-input--invalid");
    check = false;
  } else return null;
}

button.addEventListener("click", () =>
  showError(isCorrectEmail(emailInput, regex))
);

emailInput.addEventListener("click", () => resetMessage());
emailInput.addEventListener("input", () => resetMessage());
form.addEventListener("submit", (e) => {
  if (isCorrectEmail(emailInput, regex) === false) {
    e.preventDefault();
  } else if (isCorrectEmail(emailInput, regex) === true) {
    return true;
  }
});
