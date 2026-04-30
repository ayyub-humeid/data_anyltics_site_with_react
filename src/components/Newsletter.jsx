import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl md:text-4xl sm:text-3xl font-bold py-2">
            Wants trip & tricks to optamize your flow?
          </h1>
          <p>Sign up to our Newsletter and stay up to data. </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row w-full justify-between items-center">
            <input
              className="bg-white text-black p-3 rounded-md flex w-full"
              type="email"
              placeholder="Enter Email"
            />
            <button className="text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6    py-3 sm:mx-1  hover:cursor-pointer ">
              Notify me
            </button>
          </div>
          <p>
            we care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">privacy policy.</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
