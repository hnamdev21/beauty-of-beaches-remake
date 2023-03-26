import { checkRequiredOnSubmit } from "./checkRequired.js";

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexName =
  /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
const regexFeedback = [
  "fool",
  "dump",
  "asshole",
  "fuck",
  "fck",
  "piss off",
  "bugger off",
  "hell",
  "motherfucker",
];
const badWordError = "Please use beautiful words";
const invalidErrorMsg = "Invalid field";

const validFromOnKeyup = (contactSection, idFields) => {
  idFields.forEach((id) => {
    const element = contactSection.querySelector(`#${id}`);

    element.addEventListener("keyup", (e) => {
      const valueEle = e.target.value.trim();
      const parentEle = e.target.parentElement;
      const errorMsgElement = parentEle.querySelector(".error-msg");

      if (id === "firstname" || id === "lastname") {
        if (!regexName.test(valueEle)) {
          errorMsgElement.innerText = invalidErrorMsg;
          element.classList.add("invalid");
        } else {
          errorMsgElement.innerText = "";
          element.classList.remove("invalid");
        }
      } else if (id === "email") {
        if (!regexEmail.test(valueEle)) {
          errorMsgElement.innerText = invalidErrorMsg;
          element.classList.add("invalid");
        } else {
          errorMsgElement.innerText = "";
          element.classList.remove("invalid");
        }
      } else if (id === "feedback") {
        const words = valueEle.split(" ");
        let countBadWord = 0;

        words.forEach((word) => {
          regexFeedback.forEach((badWord) => {
            if (word == badWord) {
              countBadWord++;
            }
          });
        });

        if (countBadWord > 0) {
          errorMsgElement.innerText = badWordError;
          element.classList.add("invalid");
        } else {
          errorMsgElement.innerText = "";
          element.classList.remove("invalid");
        }
      }
    });
  });
};

const validFormOnSubmit = (contactSection, idFields) => {
  let countInvalid = 0;

  idFields.forEach((id) => {
    const element = contactSection.querySelector(`#${id}`);

    const valueEle = element.value.trim();
    const parentEle = element.parentElement;
    const errorMsgElement = parentEle.querySelector(".error-msg");

    if (id === "firstname" || id === "lastname") {
      if (!regexName.test(valueEle)) {
        errorMsgElement.innerText = invalidErrorMsg;
        element.classList.add("invalid");
        countInvalid++;
      } else {
        errorMsgElement.innerText = "";
        element.classList.remove("invalid");
      }
    } else if (id === "email") {
      if (!regexEmail.test(valueEle)) {
        errorMsgElement.innerText = invalidErrorMsg;
        element.classList.add("invalid");
        countInvalid++;
      } else {
        errorMsgElement.innerText = "";
        element.classList.remove("invalid");
      }
    } else if (id === "feedback") {
      const words = valueEle.split(" ");
      let countBadWord = 0;

      words.forEach((word) => {
        regexFeedback.forEach((badWord) => {
          if (word == badWord) {
            countBadWord++;
          }
        });
      });

      if (countBadWord > 0) {
        errorMsgElement.innerText = badWordError;
        element.classList.add("invalid");
        countInvalid++;
      } else {
        errorMsgElement.innerText = "";
        element.classList.remove("invalid");
      }
    }
  });

  if (countInvalid > 0) {
    return false;
  } else {
    return true;
  }
};

export { validFromOnKeyup, validFormOnSubmit };
