import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function prevSlideHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function nextSlideHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function supriseHandler() {
    setIndex(Math.floor(Math.random() * reviews.length));
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-300 rounded-lg shadow-md hover:shadow-2xl mx-auto">
      <Card review={reviews[index]} />

      <div className="text-4xl text-violet-400 flex mt-5 gap-5  font-bold justify-center items-center">
        <button
          onClick={prevSlideHandler}
          className="cursor-pointer hover:text-violet-500 transition-all duration-300"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={nextSlideHandler}
          className="cursor-pointer hover:text-violet-500 transition-all duration-300 "
        >
          <FiChevronRight />
        </button>
      </div>

      <div>
        <button
          onClick={supriseHandler}
          className="bg-violet-400 mt-4 hover:bg-violet-500 transition-all duration-300 cursor-pointer px-10 py-2 rounded font-bold text-white text-lg"
        >
          Surprise me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
