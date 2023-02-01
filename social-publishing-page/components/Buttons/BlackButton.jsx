import React from "react";

const BlackButton = ({ text }) => {
  return (
    <button className="bg-black p-4 rounded-md text-white capitalize">
      {text}{" "}
    </button>
  );
};

export default BlackButton;
