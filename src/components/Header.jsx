import React from "react";

const Header = () => {
  return (
    <nav className="w-full bg-red-300">
      <div className="w-full flex items-center py-4 lg:px-20 px-6 justify-between max-sm:gap-6 gap-12 bg-zinc-900  ">
        <div className="left">
          <h2 className=" uppercase text-2xl lg:text-5xl text-red-500 font-bold  ">
            netflix
          </h2>
        </div>
        <div className="right flex max-sm:gap-2   gap-4">
          <div className="language  ">
            <select
              className="px-1 lg:px-4  rounded border-1 font-semibold  border-white text-white  py-1"
              name=""
              id=""
            >
              <option className="text-black max-sm:text-xs "  value="English">
                English
              </option>
              <option className="text-black" value="Hindi">
                Hindi
              </option>
            </select>
          </div>
          <button className="px-3 py-1 max-sm:px-2  lg:px-4 rounded-md font-bold  max-sm:text-sm capitalize text-white bg-[#E50914] ">
            sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
