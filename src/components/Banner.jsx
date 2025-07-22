import React from "react";
import bg from "../assets/bgOne-removebg-preview.png";

const Banner = () => {
  return (
    <section id="banner">
      <section
        id="banner"
        // style={{ backgroundImage: `url(${bg})` }}
        className="h-screen bg-no-repeat bg-cove bg-right-top py-4"
      >
        <div className="container">
          <div className="bannerDiv">
            <div className="leftSide"></div>
            <div className="rightSide">
              {/* <!-- From Uiverse.io by janisar-hyder -->  */}
              <p class="browser-warning">
                If this looks wonky to you it's because this browser doesn't
                support the CSS property 'aspect-ratio'.
              </p>
              <div class="stack">
                <div class="card">
                  <div class="image flex justify-center">
                    <img
                      className="w-[100%] object-cover h-full"
                      src={bg}
                      alt="banner_Img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;
