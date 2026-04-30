import React from "react";
import img from "../assets/hero.png";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={img} alt="" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally .
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
            dolorum eligendi doloremque, recusandae suscipit odio accusamus id
            maiores cumque itaque ipsa incidunt nesciunt voluptatem alias, error
            vel quod, tenetur commodi!
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0  hover:cursor-pointer ">
            Get Started
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
