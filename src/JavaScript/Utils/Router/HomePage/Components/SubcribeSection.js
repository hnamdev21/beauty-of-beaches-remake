const subcribeSection = document.createElement("section");
subcribeSection.className = "subcribe-section";

subcribeSection.innerHTML = `<div class="inner flex flex-align-center flex-space-between">
                                <div class="wrapper-content relative">
                                    <h2 class="title">Subcribe us now<br />to get news<br />fastest</h2>
                                    <form action="" class="subcribe-form" method="POST">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email-input"
                                        placeholder="Enter your email..."
                                    />
                                    <input type="submit" value="Subcribe" class="subcribe-btn" />
                                    </form>
                                </div>

                                <div class="wrapper-image">
                                    <img src="res/Images/Sliders/cancun-1.jpg" alt="" />
                                </div>
                            </div>`;

export default subcribeSection;
