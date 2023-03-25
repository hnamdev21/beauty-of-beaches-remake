import { getBeachesById } from "../../../../../Modules/GetDataById.js";

const beachDetailSection = document.createElement("section");
beachDetailSection.className = "beach-detail-section";

const setBeachDetail = (queryId) => {
  getBeachesById(queryId).then((beach) => {
    beachDetailSection.innerHTML = `<div class="inner">
        <h1 class="title--md">${beach.name}</h1>
        <div class="wrapper-main-image">
            <img src="${beach.image1}" alt="Image of ${beach.name}"/>
        </div>
        <div class="wrapper-info flex flex-space-between">
            ${
              beach.image2
                ? `<div class='wrapper-sub-image'><img src='${beach.image2}' alt='Image of ${beach.name}'/></div>`
                : ""
            }

            <div class="wrapper-description">
                <p>${beach.description}</p>
                
                ${
                  beach.description2
                    ? `<br><p>${beach.description2}</p><br>`
                    : ""
                }
                
                ${beach.description3 ? `<p>${beach.description3}</p>` : ""}
            </div>
        </div>
    </div>`;
  });

  return beachDetailSection;
};

export default setBeachDetail;
