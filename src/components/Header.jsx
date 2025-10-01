import React from "react";

const Header = () => {
  return (
    <nav className=" ">
      <div className="flex items-center px-20 justify-between">
        <div className="left">
          <div className="w-32 scale-[1.2] ">
            <img
              className="w-full h-[5rem]  object-cover object-center "
              src="./images/netflix-svg-logo_logoshape.com.png"
              alt=""
            />
          </div>
        </div>
        <div className="right flex px-20 gap-4">
          <div className="language  ">
            <select
              className="px-4  rounded border-1 font-semibold  border-white text-white py-1"
              name=""
              id=""
            >
              <option className="text-black  " value="English">
                English
              </option>
              <option className="text-black" value="Hindi">
                Hindi
              </option>
            </select>
          </div>
          <button className="px-4 rounded-md font-semibold  capitalize text-white bg-[#E50914] ">
            sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
