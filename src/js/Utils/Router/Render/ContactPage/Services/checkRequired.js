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
const requiredErrorMsg = "This field is required";

const checkRequiredOnBlur = (contactSection, idFields) => {
  idFields.forEach((id) => {
    const element = contactSection.querySelector(`#${id}`);

    element.addEventListener("blur", () => {
      const value = element.value.trim();
      const parentElement = element.parentElement;
      const errorMsgElement = parentElement.querySelector(".error-msg");

      // Check required
      if (value === "") {
        errorMsgElement.innerText = requiredErrorMsg;
        element.classList.add("invalid");
      } else {
        errorMsgElement.innerText = "";
        element.classList.remove("invalid");

        // Check valid
        if (id === "firstname" || id === "lastname") {
          if (!regexName.test(value)) {
            errorMsgElement.innerText = invalidErrorMsg;
            element.classList.add("invalid");
          } else {
            errorMsgElement.innerText = "";
            element.classList.remove("invalid");
          }
        }

        if (id === "email") {
          if (!regexEmail.test(value)) {
            errorMsgElement.innerText = invalidErrorMsg;
            element.classList.add("invalid");
          } else {
            errorMsgElement.innerText = "";
            element.classList.remove("invalid");
          }
        }

        if (id === "feedback") {
          const words = value.split(" ");
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
      }
    });
  });
};

const checkRequiredOnSubmit = (contactSection, idFields) => {
  let countNotFilled = 0;

  idFields.forEach((id) => {
    const element = contactSection.querySelector(`#${id}`);
    const value = element.value;
    const parentElement = element.parentElement;
    const errorMsgElement = parentElement.querySelector(".error-msg");

    if (value === "") {
      errorMsgElement.innerText = requiredErrorMsg;
      element.classList.add("invalid");

      return false;
    } else {
      errorMsgElement.innerText = "";
      element.classList.remove("invalid");

      if (id === "firstname" || id === "lastname") {
        if (!regexName.test(value)) {
          errorMsgElement.innerText = invalidErrorMsg;
          element.classList.add("invalid");
          countNotFilled++;
        } else {
          errorMsgElement.innerText = "";
          element.classList.remove("invalid");
        }
      }

      if (id === "email") {
        if (!regexEmail.test(value)) {
          errorMsgElement.innerText = invalidErrorMsg;
          element.classList.add("invalid");
          countNotFilled++;
        } else {
          errorMsgElement.innerText = "";
          element.classList.remove("invalid");
        }
      }

      if (id === "feedback") {
        const words = value.split(" ");
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
          countNotFilled++;
        } else {
          errorMsgElement.innerText = "";
          element.classList.remove("invalid");
        }
      }
    }
  });

  if (countNotFilled > 0) {
    return false;
  } else {
    return true;
  }
};

export { checkRequiredOnBlur, checkRequiredOnSubmit };
