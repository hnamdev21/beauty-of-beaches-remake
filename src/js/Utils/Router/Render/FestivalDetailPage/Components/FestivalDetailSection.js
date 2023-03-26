import { getFestivalByName } from "../../../../../Modules/GetDataByQuerying.js";

const festivalDetailSection = document.createElement("section");
festivalDetailSection.className = "festival-detail-section";

const setFestivalDetail = (queryName) => {
  const nameFestival = queryName.replaceAll("-", " ").toUpperCase();

  getFestivalByName(nameFestival).then((festival) => {
    const startingTime = new Date(festival.startingTime);
    const currentTime = new Date();
    let distance = startingTime - currentTime;

    let days = Math.floor(distance / (24 * 60 * 60 * 1000));
    let hours = Math.floor(distance / (60 * 60 * 1000)) % 24;
    let minutes = Math.floor(distance / (60 * 1000)) % 60;
    let seconds = Math.floor(distance / 1000) % 60;

    festivalDetailSection.innerHTML = `<div class="inner">
        <h1 class="title--md">${festival.name}</h1>
        <div class="wrapper-info">
            <div class="festival__countdown flex flex-align-center flex-space-evenly"><div class="countdown__day">
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
                                    </div></div>
            <p class="festival__location">Location: ${festival.location}</p>
            <p class="festival__description">${festival.description}</p>
            <div class="wrapper-image">
                <img src="${festival.img}" alt="Image of ${festival.name}"/>
            </div>
        </div>
    </div>`;

    setInterval(() => {
      const currentTime = new Date();
      distance = startingTime - currentTime;

      days = Math.floor(distance / (24 * 60 * 60 * 1000));
      hours = Math.floor(distance / (60 * 60 * 1000)) % 24;
      minutes = Math.floor(distance / (60 * 1000)) % 60;
      seconds = Math.floor(distance / 1000) % 60;

      const wrapperCountdown = festivalDetailSection.querySelector(
        ".festival__countdown"
      );
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
  });

  return festivalDetailSection;
};

export default setFestivalDetail;
