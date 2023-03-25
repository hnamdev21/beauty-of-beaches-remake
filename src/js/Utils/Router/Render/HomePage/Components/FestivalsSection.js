import { getFestivals } from "../../../../../Modules/GetData.js";

const festivalsSection = document.createElement("section");
festivalsSection.className = "festivals-section";

festivalsSection.innerHTML = `<div class="inner relative">
                                <div class="wrapper-title">
                                    <h2 class="title--md">Upcoming festivals</h2>
                                </div>

                                <div class="wrapper-cards flex">
                                    
                                </div>

                                <a href="#festivals" class="view-btn">VIEW MORE</a>
                              </div>`;

const wrapperCards = festivalsSection.querySelector(".wrapper-cards");
const maxItem = 4;

getFestivals().then((data) => {
  for (let i = 0; i < maxItem; i++) {
    const card = document.createElement("div");
    card.classList = "card flex";

    const startingTime = new Date(data[i].startingTime);
    const currentTime = new Date();
    let distance = startingTime - currentTime;

    let days = Math.floor(distance / (24 * 60 * 60 * 1000));
    let hours = Math.floor(distance / (60 * 60 * 1000)) % 24;
    let minutes = Math.floor(distance / (60 * 1000)) % 60;
    let seconds = Math.floor(distance / 1000) % 60;

    const nameFes = data[i].name.toLowerCase();
    const nameLink = nameFes.replaceAll(" ", "-");

    card.innerHTML = `
            <div class="left-card">
            <div class="card-image">
                  <a href="#festivals/${nameLink}">
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
                    <div class="festival__countdown flex flex-align-center flex-space-between"></div>
                </div>`;

    setInterval(() => {
      const currentTime = new Date();
      distance = startingTime - currentTime;

      days = Math.floor(distance / (24 * 60 * 60 * 1000));
      hours = Math.floor(distance / (60 * 60 * 1000)) % 24;
      minutes = Math.floor(distance / (60 * 1000)) % 60;
      seconds = Math.floor(distance / 1000) % 60;

      const wrapperCountdown = card.querySelector(".festival__countdown");
      wrapperCountdown.innerHTML = `<div class="countdown__day">
                                      Day <span class="day">${days}</span>
                                    </div>
                                    <div class="countdown__hour">
                                      Hour <span class="hour">${hours}</span>
                                    </div>
                                    <div class="countdown__minutes">
                                      Minute <span class="minutes">${minutes}</span>
                                    </div>
                                    <div class="countdown__second">
                                      Second <span class="second">${seconds}</span>
                                    </div>`;
    }, 1000);

    wrapperCards.appendChild(card);
  }
});

export default festivalsSection;
