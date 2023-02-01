import React from "react";

// components
import BlackButton from "../Buttons/BlackButton";

const Section = ({ heading, para, button, image,classname }) => {
  return (
    <div className={classname}>
      <div className="w-1/2">
        <h3 className="font-bold text-3xl">{heading}</h3>
        <p className="font-light italic text-xl text-gray-300 my-8">{para}</p>
        <BlackButton text={button} />
      </div>
      <img src={`Images/${image}`} alt="dashboard" className="w-1/2" />
    </div>
  );
};

export default Section;
