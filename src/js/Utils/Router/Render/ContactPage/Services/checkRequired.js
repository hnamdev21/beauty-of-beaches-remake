const requiredErrorMsg = "This field is required";

const checkRequiredOnBlur = (contactSection, idFields) => {
  idFields.forEach((id) => {
    const element = contactSection.querySelector(`#${id}`);

    element.addEventListener("blur", () => {
      const value = element.value;
      const parentElement = element.parentElement;
      const errorMsgElement = parentElement.querySelector(".error-msg");

      if (value === "") {
        errorMsgElement.innerText = requiredErrorMsg;
        element.classList.add("invalid");
      } else {
        errorMsgElement.innerText = "";
        element.classList.remove("invalid");
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
