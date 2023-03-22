const renderCards = (wrapperElement, data, startIndex, endIndex) => {
  for (let i = startIndex; i < endIndex; i++) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `<div class="top-card relative">
                        <div class="card-image">
                            <img
                            src="${data[i].image1}"
                            alt="${data[i].name}"
                            class="beach__image"
                            />
                        </div>
                        <div class="card-sub-element">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                      </div>
                      <div class="bot-card relative">
                        <h4 class="beach__name">${data[i].name}</h4>
                        <ul class="beach__info">
                            <li class="info__loaction">Location: ${data[i].location}</li>
                            <li class="info__views">Views: ${data[i].views}</li>
                            <li class="info__famous">Famous: ${data[i].famous}</li>
                        </ul>
                        <a href="/beach/id?${data[i].id}" class="beach__link">Learn more</a>
                      </div>`;

    wrapperElement.appendChild(card);
  }
};

export default renderCards;
