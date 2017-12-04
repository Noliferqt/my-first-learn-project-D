var popup         = document.querySelector(".modal-window"),
    reserve       = document.querySelector(".open"),
    form          = popup.querySelector(".form"),
    openClose     = document.querySelector(".open-form"),
    showButton    = popup.querySelector(".button-show"),
    comingDate    = popup.querySelector("[name= coming]"),
    leaveDate     = popup.querySelector("[name= leave]"),
    growned       = popup.querySelector("[name= growned]"),
    children      = popup.querySelector("[name= children]");

reserve.removeAttribute("checked");

openClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("show");
  popup.classList.remove("error");
});

showButton.addEventListener("click", function (evt) {
  if (!comingDate.value || !leaveDate.value || !growned.value || !children.value ) {
    evt.preventDefault();
    popup.classList.remove("error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("error");
    comingDate.focus();
    console.log("Нужно полностью заполнить форму");
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("show")) {
        popup.classList.remove("show");
        popup.classList.remove("error");
    }
  }
});




