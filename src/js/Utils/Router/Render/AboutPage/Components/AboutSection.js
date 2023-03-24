const aboutSection = document.createElement("section");
aboutSection.className = "about-section";
aboutSection.innerHTML = `<div class="inner">
                            <h1 class="title--md">My team</h1>
                            <div class="flex flex-space-evenly">
                                <div class="card relative"></div>
                                <div class="card relative">
                                <div class="top-card flex flex-center">
                                    <div class="wrapper-image circle">
                                    <img src="res/Images/Members/tran-hoang-nam.png" alt="">
                                    </div>
                                </div>
                                <div class="bot-card">
                                    <h4 class="member__name">Tran Hoang Nam</h4>
                                    <h5 class="member__position">Leader</h5>
                                    <ul class="member__tasks">
                                    <li class="task">1</li>
                                    <li class="task">2</li>
                                    <li class="task">3</li>
                                    </ul>
                                </div>
                                </div>
                                <div class="card relative"></div>
                            </div>
                         </div>`;

export default aboutSection;
