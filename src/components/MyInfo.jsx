import React from "react";
import { MdOutlineCancel } from "react-icons/md";

const MyInfo = ({ setInfoDiv }) => {
  return (
    <section className="">
      <div
        onClick={() => setInfoDiv(false)}
        className="fixed z-20 top-0 left-0 right-0 h-screen bg-[#000000b6]"
      ></div>
      <div className="rounded-xl fixed top-12 left-[450px] z-30 w-[600px] bg-bgFive px-6 pt-8 pb-14">
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-roboto font-bold text-[30px] text-gray-700">
            Personal Information
          </h2>
          <MdOutlineCancel
            onClick={() => setInfoDiv(false)}
            className="text-red-800 absolute top-4 right-4 text-4xl cursor-pointer"
          />
          <div className="flex flex-col gap-3">
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
                  Bachelor of Science in Computer Science and Engineering (CSE)
                  (2018-2023)
                </h3>

                <h3 className="mt-4">
                  University of Information Technology and Sciences(UITS)
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyInfo;
