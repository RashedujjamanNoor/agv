import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1240px]  absolute top-4 z-50 w-full ">
        <div className="flex justify-between items-center pt-2 md:pt-4 px-4">
          <div>
            <img src="./sitelogo.png" alt="logo" className="w-25 md:w-40" />
          </div>
          <div className="hidden lg:block">
            <nav>
              <ul className="flex gap-4 text-xl text-white">
                <li>
                  <a
                    href="#home"
                    className="hover:text-red-700 duration-300 active:text-red-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-700 duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-700 duration-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-700 duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <a
              href=""
              className="bg-red-700 text-white text-base md:text-2xl px-3 py-1.5 rounded-md hover:bg-white hover:text-red-700 duration-300"
            >
              BOOK A CALL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
