import bg from "../assets/images/bgOne-removebg-preview.png";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      id="banner"
      // style={{ backgroundImage: `url(${bg})` }}
      className="h-screen pt-36"
    >
      <div className="container">
        <div className="bannerDiv flex justify-around items-center">
          <div className="leftSide">
            <h2 className="text-white text-[40px] font-semibold font-funnel">
              Hello, I'm Robi,
            </h2>
            <h1 className="flex  text-white text-[60px] font-roboto font-bold">
              FrontEnd <span className="ml-10">Developer</span>
            </h1>
            <div className="gitHub-LinkeDin-cv flex mt-9  gap-7 justify-center">
              <a
                href="https://github.com/RobiMankhinStart"
                target="_blank"
                rel="noopener noreferrer"
                class="group cursor-pointer flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-3 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse"
              >
                <svg
                  class="w-6 h-6 fill-neutral-50"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width="100"
                  x="0"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path
                    class="svg-fill-primary"
                    d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
                  ></path>
                </svg>
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/robi-mankhin-608b7b271/"
                target="_blank"
                rel="noopener noreferrer"
                class="group cursor-pointer hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6"
              >
                <svg
                  class="w-8 h-8 fill-neutral-50"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width="100"
                  x="0"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                </svg>
                <span class="border-l-2 px-1">Robi Mankhin</span>
                <div class="group-hover:opacity-100 opacity-0 top-16 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute">
                  See my profile!
                </div>
              </a>
            </div>
            <div class="flex ml-[160px] mt-6 flex-col bg-[#193f80] w-64 p-2 rounded-lg gap-1">
              <a class="bg-[#225bc3] flex items-center justify-center gap-2 font-roboto hover:bg-[#2564da] hover:scale-[1.065] hover:translate-y-[-7px] hover:rounded-lg hover:rounded-bl-none hover:rounded-br-none px-6 py-2 rounded-2xl rounded-bl-lg rounded-br-lg transition-all text-center text-[#d8e5f9] hover:text-[#a8c1f0] font-medium cursor-pointer">
                <BiLogoGmail />: robileo49@gmail.com
              </a>
              <a class="bg-[#5350c6] flex items-center justify-center gap-2 font-roboto hover:bg-secondary-600 hover:scale-[1.065] hover:translate-y-[7px] hover:rounded-lg hover:rounded-tl-none hover:rounded-tr-none px-6 py-2 rounded-2xl rounded-tl-lg rounded-tr-lg transition-all text-center text-[#d8e5f9] hover:text-[#b3aaee] font-medium cursor-pointer">
                <FaPhoneAlt /> : +8801851228651
              </a>
            </div>
          </div>
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
  );
};

export default Banner;
