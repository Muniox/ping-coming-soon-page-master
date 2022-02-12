const button = document.querySelector(".site-preview__form-button");
const emailInput = document.querySelector(".site-preview__form-input");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const el = document.querySelector(".site-preview__input-message");

function showError(value) {
  if (value === true) {
    return true;
  } else if (value === false) {
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
  }
}

function isCorrectEmail(email, reg) {
  if (reg.test(email.value)) {
    // alert("You have entered an valid email address :)");
    return true;
  } else {
    // alert("You have entered an invalid email address!");
    return false;
  }
}

function resetMessage() {
  const message = document.querySelector(".site-preview__input-message");
  message.remove();
  emailInput.classList.remove("site-preview__form-input--invalid");
}

button.addEventListener("click", () =>
  showError(isCorrectEmail(emailInput, regex))
);

emailInput.addEventListener("click", () => resetMessage());
