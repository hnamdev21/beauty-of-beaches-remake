import { checkRequiredOnSubmit } from "./checkRequired.js";
import { validFormOnSubmit } from "./validForm.js";
import { getFeedback } from "../../../../../Modules/GetData.js";

const newData = [];

const getInfoFeedback = (contactSection, idFields) => {
  validFormOnSubmit(contactSection, idFields);
  checkRequiredOnSubmit(contactSection, idFields);

  if (
    validFormOnSubmit(contactSection, idFields) &&
    checkRequiredOnSubmit(contactSection, idFields)
  ) {
    const firstname = contactSection.querySelector("#firstname").value;
    const lastname = contactSection.querySelector("#lastname").value;
    const email = contactSection.querySelector("#email").value;
    const feedback = contactSection.querySelector("#feedback").value;
    const imageSrc = contactSection.querySelector(".image-uploaded").src;
    const publishDate = new Date();

    getFeedback().then((data) => {
      const userFeedback = {
        id: data.length + 1,
        userName: firstname + " " + lastname,
        email,
        publishDate:
          publishDate.getDate() +
          "/" +
          publishDate.getMonth() +
          "/" +
          publishDate.getFullYear(),
        userFeedback: feedback,
        imgFeedback: imageSrc,
      };

      newData.push(userFeedback);
    });

    alert("Submited");
  }
};

export default getInfoFeedback;
export { newData };
