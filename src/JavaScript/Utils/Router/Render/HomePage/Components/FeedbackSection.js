import { getFeedback } from "../../../../../Modules/GetData.js";

const feedbackSection = document.createElement("section");
feedbackSection.className = "latest-feedback-section";

feedbackSection.innerHTML = `<div class="inner">
                              <div class="wrapper-title">
                                <h2 class="title--md">Latest feedback</h2>
                              </div>

                              <div class="mask flex flex-align-center">
                                <div class="wrapper-cards flex">

                              </div>
                            </div>`;

const wrapperCards = feedbackSection.querySelector(".wrapper-cards");

getFeedback().then((data) => {
  data.forEach((feedback) => {
    const card = document.createElement("div");
    card.classList = "card";

    card.innerHTML = `
              <div class="top-card flex flex-align-center flex-space-between">
                  <h4 class="user__name">${feedback.userName}</h4>
                  <span class="user__publish-date">${feedback.publishDate}</span>
                </div>
                <div class="bot-card flex flex-align-center flex-space-between">
                  <div class="user__image-uploaded">
                    <img
                      src="${feedback.imgFeedback}"
                      alt=""
                    />
                  </div>
                  <div class="user__feedback text-justify">
                    ${feedback.userFeedback}
                  </div>
                </div>
              </div>
        `;

    wrapperCards.appendChild(card);
  });
});

export default feedbackSection;
