import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const MyInfo = ({ infoDIv, setInfoDiv }) => {
  return (
    <section className="">
      <div
        onClick={() => setInfoDiv(false)}
        className={`fixed inset-0 z-20 bg-[#000000b6] transition-opacity duration-300
  ${
    infoDIv
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  }`}
      ></div>
      <div
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-30 w-[600px] rounded-xl bg-bgFive px-6 pt-8 pb-14 
  transition-all duration-300 ease-in-out
  ${
    infoDIv
      ? "translate-y-0 opacity-100 pointer-events-auto"
      : "-translate-y-10 opacity-0 pointer-events-none"
  }`}
      >
        <div class="myinfo_card">
          <div className="myinfo_head">Robi Mankhin</div>
          <div className="myinfo_content">
            <div className="flex flex-col items-center">
              <h2 className="font-roboto font-bold text-[30px] text-gray-700">
                Personal Information
              </h2>

              <div className="flex flex-col gap-1">
                <div>
                  <p className="text-[20px] font-funnel font-semibold">
                    <span>Name</span> : Robi Mankhin
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-funnel font-semibold">
                    <span>Age</span> : 26
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-funnel font-semibold">
                    <span>Father's Name</span> : Shuvro Dango
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-funnel font-semibold">
                    <span>Mother's Name</span> : Nilotpola Mankhin
                  </p>
                </div>
                <div>
                  <p className="text-[20px] font-funnel font-semibold">
                    <span>Gender</span> : male
                  </p>
                </div>
                <div>
                  <div className="text-[20px] font-funnel font-semibold">
                    <span>Present Address</span> : Vatara, Badda, Notun
                    Bazar,Dhaka-1212
                  </div>
                </div>
                <div className="flex flex-col items-center ">
                  <h2 className="font-roboto font-bold text-[30px] text-gray-700">
                    Education
                  </h2>
                  <div className="text-[20px] font-funnel font-semibold shadow-lg  p-2 rounded-lg">
                    <h3>
                      Bachelor of Science in Computer Science and Engineering
                      (CSE) (2018-2023)
                    </h3>

                    <h3 className="mt-4">
                      University of Information Technology and Sciences(UITS)
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <button onClick={() => setInfoDiv(false)} className="myinfo_button">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyInfo;
