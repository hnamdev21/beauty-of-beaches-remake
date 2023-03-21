import { getFestivals } from "../../../../Modules/GetData.js";

const festivalsSection = document.createElement("section");
festivalsSection.className = "festivals-section";

festivalsSection.innerHTML = `<div class="inner relative">
                                <div class="wrapper-title">
                                    <h2 class="title--md">Upcoming festivals</h2>
                                </div>

                                <div class="wrapper-cards flex">
                                    
                                </div>

                                <a href="#" class="view-btn">VIEW MORE</a>
                              </div>`;

const wrapperCards = festivalsSection.querySelector(".wrapper-cards");
const maxItem = 4;

getFestivals().then((data) => {
  for (let i = 0; i < maxItem; i++) {
    const card = document.createElement("div");
    card.classList = "card flex";
    card.innerHTML = `
            <div class="left-card">
              <div class="card-image">
                  <a href="#">
                    <img
                      src="${data[i].img}"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="right-card flex flex-col">
                <h4 class="festival__name">${data[i].name}</h4>
                <div class="festival__detail">
                  <div class="detail__location">Loaction: ${data[i].location}</div>
                  <p class="detail__desc">
                    ${data[i].description}
                  </p>
                </div>
                <div
                  class="festival__countdown flex flex-align-center flex-space-between"
                >
                  <div class="countdown__day">
                    Day <span class="day">1</span>
                  </div>
                  <div class="countdown__hour">
                    Hour <span class="hour">1</span>
                  </div>
                  <div class="countdown__minutes">
                    Minute <span class="minutes">1</span>
                  </div>
                  <div class="countdown__second">
                    Second <span class="second">1</span>
                  </div>
                </div>
            </div>`;

    wrapperCards.appendChild(card);
  }
});

export default festivalsSection;
