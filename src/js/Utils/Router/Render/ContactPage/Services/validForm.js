import { checkRequiredOnSubmit } from "./checkRequired.js";

const validFromOnKeyup = (contactSection, idFields) => {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
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

  idFields.forEach((id) => {
    const element = contactSection.querySelector(`#${id}`);

    element.addEventListener("keyup", (e) => {
      const valueEle = e.target.value.trim();
      const parentEle = e.target.parentElement;
      const errorMsgElement = parentEle.querySelector(".error-msg");
      let invalidErrorMsg = `Invalid ${id}`;

      if (id === "firstname" || id === "lastname") {
        if (!regexName.test(valueEle)) {
          errorMsgElement.innerText = invalidErrorMsg;
        } else {
          errorMsgElement.innerText = "";
        }
      } else if (id === "email") {
        if (!regexEmail.test(valueEle)) {
          errorMsgElement.innerText = invalidErrorMsg;
        } else {
          errorMsgElement.innerText = "";
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
        }
      }
    });
  });
};

export { validFromOnKeyup };
