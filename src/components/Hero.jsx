import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-[url('./images/bg.jpg')] z-100   relative  flex  justify-center h-screen  ">
      <div className="absolute w-full h-screen bg-black/65 -z-1 "></div>
      <div className="texts mt-40  w-1/2 ">
        <h1 className="text-[3.4rem]  leading-[5rem] text-white font-extrabold px-20 text-center  ">
          Unlimited movies, TV shows and more
        </h1>
        <h2 className="text-center py-3 text-white  text-xl font-bold">
          Starts at ₹149. Cancel at any time. 
        </h2>
        <h3 className="text-center py-3 text-white  font-semibold ">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="form flex items-center justify-center gap-4 ">
          <input
            className="w-[20rem] border-1 bg-zinc-800/60 border-zinc-300 rounded-sm  text-white  px-4 py-3 placeholder:capitalize  "
            type="text"
            placeholder="email address"
          />
          <button className="px-4 py-3 text-white rounded-md bg-[#E50914] font-semibold text-2xl ">
            Get Started{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
