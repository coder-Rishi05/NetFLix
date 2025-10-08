import React from "react";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <nav className="w-full absolute ">
      <div className="w-full flex items-center py-4 lg:px-20 px-6 justify-between max-sm:gap-6 gap-12 bg-[#0e010153]  ">
        <div className="left">
          <h2 className=" uppercase text-2xl lg:text-5xl text-red-500 font-bold  ">
            netflix
          </h2>
        </div>
        <div className="right flex max-sm:gap-2  items-center justify-center  gap-4">
          <Searchbar />
        </div>
      </div>
    </nav>
  );
};

export default Header;
