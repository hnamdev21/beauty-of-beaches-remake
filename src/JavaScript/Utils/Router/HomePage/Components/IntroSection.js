const introSection = document.createElement("section");
introSection.className = "intro-section";

introSection.innerHTML = `<div class="inner">
                                <div class="wrapper-title relative">
                                    <h1 class="title--large text-center">
                                    You have more than 60 places to choose
                                    <br />
                                    Let's choose your peace
                                    </h1>
                                    <a href="#" class="view-btn">VIEW</a>
                                </div>

                                <div class="wrapper-cards flex">
                                    <div class="card"></div>
                                    <div class="card"></div>
                                    <div class="card"></div>
                                </div>
                            </div>`;

export default introSection;
