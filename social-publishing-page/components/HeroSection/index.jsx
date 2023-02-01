import React from "react";
import Navbar from "../Navbar";
import { AiOutlineCheck } from "react-icons/ai";

// components
import Trial from "../Buttons/Trial";

const HeroSection = () => {
  return (
    <div className="mx-16 my-14  ">
      <Navbar />
      <div className="my-24 flex items-center justify-between mx-7">
        <div className="flex flex-col gap-5">
          <div className="font-archivo font-bold">
            <h1 className="text-xl">SOCIAL PUBLISHING & SCHEDULING</h1>
            <br />
            <h1 className="text-4xl">
              Strategize & Execute <br /> Your Social Media Game with Ease
            </h1>
          </div>
          <p className="font-medium text-lg">
            Schedule, publish and optimize all of your social media posts in one
            place with Keyhole’s Social Publishing. <br />
            Be sure to take advantage of social media analytics to maximize each
            post’s impact on your marketing goals.
          </p>
          <div>
            <Trial />
            <p className="flex gap-1 items-center mt-3">
              <AiOutlineCheck /> <span>No credit card required</span>
            </p>
          </div>
        </div>
        <img src="\images\image2.png" alt="twitter" className="w-1/2" />
      </div>
    </div>
  );
};

export default HeroSection;
