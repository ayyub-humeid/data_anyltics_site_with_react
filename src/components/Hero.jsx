import React from "react";
import { ReactTyped } from "react-typed";
const Hero = () => {
  //   const [word, setWord] = useState("BTB");

  return (
    <div className="text-white">
      <div className=" flex flex-col max-w-[800px] mt-[-96px] mx-auto w-full h-screen text-center justify-center">
        <p className="text-[#00df9a]  p-2 font-bold ">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl md:py-4 font-bold">
          Grow With Data
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-xl sm:text-4xl md:text-5xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="text-xl sm:text-4xl md:text-5xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl md:text-2xl  text-gray-500 font-bold">
          Monitor your data analytics to incress revenue for BTB, BTC, & SASS
          plattforms .
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-gray-900  hover:cursor-pointer ">
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Hero;