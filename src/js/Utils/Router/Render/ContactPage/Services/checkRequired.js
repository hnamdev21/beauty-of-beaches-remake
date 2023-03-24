const checkRequiredOnBlur = (contactSection, idFields) => {
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
  const invalidErrorMsg = "Invalid field";

  idFields.forEach((id) => {
    const element = contactSection.querySelector(`#${id}`);

    element.addEventListener("blur", () => {
      const value = element.value.trim();
      const parentElement = element.parentElement;
      const errorMsgElement = parentElement.querySelector(".error-msg");

      // Check required
      if (value === "") {
        errorMsgElement.innerText = "This field is required";
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
  idFields.forEach((id) => {
    const element = contactSection.querySelector(`#${id}`);
    const value = element.value;
    const parentElement = element.parentElement;
    const errorMsgElement = parentElement.querySelector(".error-msg");

    if (value === "") {
      errorMsgElement.innerText = requiredErrorMsg;
      element.classList.add("invalid");
    } else {
      console.log(`222`);
      errorMsgElement.innerText = "";
      element.classList.remove("invalid");
    }
  });
};

export { checkRequiredOnBlur, checkRequiredOnSubmit };
