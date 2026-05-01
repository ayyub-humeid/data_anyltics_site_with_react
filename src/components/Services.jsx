import React from "react";
import hero from "../assets/hero.png";
import services from "../servieces/service";

const Services = () => {
  return (
    <div className="text-white w-full py-[6rem] px-4">
      <h1 className="text-4xl text-center mb-4">Our Services</h1>
      <div className="grid  md:grid-cols-3 gap-4 max-w-[1240px] mx-auto">
        {services.map((service, index) => (
          <OneService
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};
function OneService({ title = "service ", description = "-" }) {
  return (
    <>
      <div
        className={
          "w-full bg-gray-100 shadow-4xl p-6 my-4 flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300"
        }
      >
        <h2 className="text-2xl text-gray-950 font-bold py-8 text-center ">
          {title}
        </h2>

        <img
          className="w-[90%] h-[70%] mx-auto mb-[10px] bg-white"
          src={hero}
          alt=""
        />
        <p className=" text-gray-500 font-semibold text-lg text-center">
          {description}
        </p>
      </div>
    </>
  );
}

export default Services;
