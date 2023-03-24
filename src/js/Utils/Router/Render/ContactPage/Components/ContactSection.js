import { checkRequiredOnBlur } from "../Services/checkRequired.js";
import { validFromOnKeyup } from "../Services/validForm.js";
import autoCapitalizeFirstLetter from "../Services/autoCapitalizeFirstLetter.js";
import covertImage from "../Services/convertImage.js";

const contactSection = document.createElement("section");
contactSection.className = "contact-section";

contactSection.innerHTML = `<div class="inner">
                                <h1 class="title--md">Please leave your feedback</h1>
                                <form action="" id="feedback-form" onsubmit="return false">
                                    <div class="wrapper-input wrapper-name flex">
                                    <div class="wrapper-input">
                                        <input type="text" name="firstname" id="firstname" required>
                                        <label for="firstname">First name</label>
                                        <span class="error-msg"></span>
                                    </div>
                                    <div class="wrapper-input">
                                        <input type="text" name="lastname" id="lastname" required>
                                        <label for="lastname">Last name</label>
                                        <span class="error-msg"></span>
                                    </div>
                                    </div>
                                    <div class="wrapper-input">
                                        <input type="text" name="email" id="email" required>
                                        <label for="email">Email</label>
                                        <span class="error-msg"></span>
                                    </div>
                                    <div class="wrapper-input wrapper-feedback flex">
                                    <div class="wrapper-input wrapper-textarea">
                                        <textarea name="feedback" id="feedback" required></textarea>
                                        <label for="feedback">Feedback</label>
                                        <span class="error-msg"></span>
                                    </div>

                                    <div class="wrapper-image-user relative">
                                        <span class="preview">Preview</span>
                                        <img class="image-uploaded"/>
                                    </div>
                                    </div>
                                    <div class="wrapper-file-input flex flex-center">
                                        <input type="file" name="imageUser" id="imageUser">
                                        <label for="imageUser" class="mask-file-input"><i class="fa-solid fa-file-circle-plus"></i>Choose your image</label>
                                    </div>
                                    <div class="wrapper-submit-input">
                                    <input type="submit" value="Send">
                                    </div>
                                </form>
                            </div>`;
// const submitBtn = contactSection.querySelector(`input[type="submit"]`);
// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   validFormOnSubmit(contactSection);
// });

const idFields = ["firstname", "lastname", "email", "feedback"];
checkRequiredOnBlur(contactSection, idFields);
validFromOnKeyup(contactSection, idFields);
autoCapitalizeFirstLetter(contactSection.querySelector("#firstname"));
autoCapitalizeFirstLetter(contactSection.querySelector("#lastname"));
covertImage(contactSection, contactSection.querySelector(`input[type="file"]`));

export default contactSection;
