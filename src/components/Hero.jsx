import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="w-full h-[75%]  overflow-hidden border-b-amber-50 z-100 relative border-2  lg:h-full xl:h-[85%]  ">
       <Header />
      <div className="w-[100%] bg-center h-full bg-no-repeat absolute bg-cover bg-[url('./images/bg.jpg')] -z-10   ">
        <div className="absolute w-full h-screen  bg-black/65 -z-1 "></div>
        <div className="texts flex-col h-full gap-1 lg:px-20   lg:gap-4 flex px-6 items-center justify-center  ">
          <h1 className="text-[2rem] xl:text-[4rem] lg:text-[3rem] xl:leading-16 leading-10 md:px-32 xl:px-70  lg:px-50  lg:font-bold   text-white font-extrabold text-center  ">
            Unlimited movies, TV shows and more
          </h1>
          <h2 className="text-center xl:text-2xl max-sm:text-[1.1rem]  text-white  text- lg font-semibold">
            starts at ₹149. Cancel at any time.
          </h2>
          <h3 className="text-center py-3  text-white md:px-30  lg:px-[24%]  lg:text-lg   px-2 ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="form flex flex-col md:flex-row items-center justify-center gap-4 ">
            <input
              className=" md:py-3  xl:w-[24rem] lg:w-[22rem]  md:w-[16rem] w-[20rem] max-sm:w-[16rem] border-1 bg-zinc-800/60 border-zinc-300 rounded-sm  text-white  px-4 py-2 placeholder:capitalize  "
              type="text"
              placeholder="email address"
            />
            <button className=" cursor-pointer md:py-3  lg:px-8 px-4 flex items-center justify-center gap-2 py-2 text-white rounded-md bg-[#E50914] font-semibold text-xl ">
              Get Started <IoIosArrowForward className="font-bold text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
