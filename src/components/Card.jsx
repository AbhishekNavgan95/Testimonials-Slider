import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/Fa";

const Card = (props) => {
  let review = props.review;
  let name = props.name;

  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-6rem] z-[10] mx-auto ">
        <img
          src={review.image}
          alt="image"
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
        />
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute right-[-5px] top-[-5px] z-[-1]"></div>
      </div>

      <div className="text-center mt-7">
        <p className="tracking-wider font-bold text-2xl capitalize">{review.name}</p>
      </div>

      <div className="text-center mt-2">
        <p className="text-violet-500 uppercase">{review.job}</p>
      </div>

      <div className="mx-auto text-violet-400 mt-4">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500">
        <p>{review.text}</p>
      </div>

      <div className="mx-auto text-violet-400 mt-4">
        <FaQuoteRight />
      </div>

    </div>
  );
};

export default Card;
