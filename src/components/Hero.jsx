import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[75%] overflow-hidden border-b-amber-50 z-100 relative border-2 lg:h-full  ">
      <div className="w-[100%] bg-center h-full bg-no-repeat absolute bg-cover bg-[url('./images/bg.jpg')] -z-10   ">
        <div className="absolute w-full h-screen  bg-black/65 -z-1 "></div>
        <div className="texts flex-col h-full gap-1 flex px-6 items-center justify-center  ">
          <h1 className="text-[2rem] leading-10 md:px-32   text-white font-extrabold text-center  ">
            Unlimited movies, TV shows and more
          </h1>
          <h2 className="text-center  max-sm:text-[1.1rem]  text-white  text-lg font-semibold">
            Starts at ₹149. Cancel at any time.
          </h2>
          <h3 className="text-center py-3 text-white md:px-30  px-2 ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="form flex flex-col md:flex-row items-center justify-center gap-4 ">
            <input
              className=" md:py-4 md:w-[16rem] w-[20rem] max-sm:w-[16rem] border-1 bg-zinc-800/60 border-zinc-300 rounded-sm  text-white  px-4 py-2 placeholder:capitalize  "
              type="text"
              placeholder="email address"
            />
            <button className=" cursor-pointer md:py-4 px-6 py-2 text-white rounded-md bg-[#E50914] font-semibold text-xl ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
