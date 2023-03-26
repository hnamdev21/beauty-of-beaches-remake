import { newData } from "../../ContactPage/Services/getInfoFeedback.js";

const updateNewData = (wrapperCards) => {
  newData.forEach((feedback) => {
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
};

export default updateNewData;
