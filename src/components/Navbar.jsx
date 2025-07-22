import React from "react";

const Navbar = () => {
  return (
    <section id="navbar" className=" py-8 px-2 ">
      <div className="container">
        <div className="containerRow flex items-center justify-between">
          <div className="logo">
            <h2 className="text-white text-[20px] font-poppins font-bold">
              Ro <span>Bi</span>
            </h2>
          </div>
          <div className="navOptions ">
            <ul className="flex items-center justify-center gap-5 font-funnel text-[20px] text-white font-semibold">
              <li>
                <button>Home</button>
              </li>
              <li>
                <button>About</button>
              </li>
              <li>
                <button>Skills</button>
              </li>
              <li>
                <button>PortFolio</button>
              </li>
              <li>
                <button>Footer</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
