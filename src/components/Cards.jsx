import React from "react";
import hero from "../assets/hero.png";
import cards from "../servieces/cards";

const Cards = () => {
  return (
    <div className="bg-white w-full py-[10rem] px-4 ">
      <div className="grid md:grid-cols-3 gap-8 max-w-[1240px] mx-auto">
        {cards.map((card, index) => (
          <Card
            key={index}
            allowedUser={card.allowedUser}
            type={card.type}
            price={card.price}
            space={card.space}
            spaceType={card.spaceType}
            sendingUpSpace={card.sendingUpSpace}
          />
        ))}
      </div>
    </div>
  );
};
function Card({
  type,
  price,
  space,
  allowedUser,
  sendingUpSpace,
  isGray = false,
  spaceType = "GB",
  isDarkBtn = false,
}) {
  return (
    <>
      <div
        className={
          isGray
            ? "w-full bg-gray-100  shadow-2xl p-4 my-4 flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300"
            : "w-full  shadow-2xl p-4 my-4 flex flex-col justify-center items-center rounded-lg hover:scale-105 duration-300"
        }
      >
        <img className="w-20 mx-auto mt-[-3rem] bg-white" src={hero} alt="" />
        <h2 className="text-2xl font-bold py-8 text-center ">{type}</h2>
        <p className="font-bold text-4xl text-center">{price} $</p>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-center font-medium mt-8 border border-gray-200">
            {space} {spaceType} Storage
          </p>
          <p className="py-2 border-b border-gray-200 mx-8">
            {allowedUser} User Allowed
          </p>
          <p className="py-2 border-b border-gray-200 mx-8">
            send up to {sendingUpSpace} GB
          </p>

          <button
            className={
              isDarkBtn
                ? "bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3   hover:cursor-pointer "
                : "bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-gray-900  hover:cursor-pointer "
            }
          >
            Start trial
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
