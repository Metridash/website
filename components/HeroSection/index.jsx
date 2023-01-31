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
            <h1 className="text-xl">TWITTER ANALYTICS</h1>
            <br />
            <h1 className="text-4xl">
              Twitter Analytics & <br /> Custom Reporting
            </h1>
          </div>
          <p className="font-medium text-lg">
            Track any Hashtag or Account on Twitter with real-time data, and
            create presentation-ready reports for clients in seconds.
          </p>
          <div>
            <Trial />
            <p className="flex gap-1 items-center mt-3">
              <AiOutlineCheck /> <span>No credit card required</span>
            </p>
          </div>
        </div>
        <img
          src="\images\Screenshot 2023-01-31 at 12.23.51 PM.png"
          alt="twitter"
          className="w-1/2"
        />
      </div>
    </div>
  );
};

export default HeroSection;
