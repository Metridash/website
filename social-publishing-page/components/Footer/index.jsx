import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-16 my-10">
      <div className="flex gap-28 justify-center border-b border-gray-700 border-opacity-25 pb-16">
        <div className="flex flex-col gap-10 font-archivo items-start">
          <span className="font-bold">Metridash</span>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Agencies
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Marketer
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Journalist
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Executives
          </button>
        </div>
        <div className="flex flex-col gap-10 font-archivo items-start">
          <span className="font-bold">Product</span>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Track Analytics
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Real-Time Monitoring
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Competitor Research
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Social Media Optimization
          </button>
        </div>
        <div className="flex flex-col gap-10 font-archivo items-start">
          <span className="font-bold">Platforms</span>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Twitter Analytics
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Instagram Analytics
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Facebook Analytics
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            LinkedIn Analytics
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Youtube Analytics
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Media Monitoring
          </button>
        </div>
        <div className="flex flex-col gap-10 font-archivo items-start">
          <span className="font-bold">Features</span>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Hashtag Tracking
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Social Media Reporting
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Social Media Account Monitoring
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Publishing & Scheduling
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Social Media Analytics API
          </button>
        </div>
        <div className="flex flex-col gap-10 font-archivo items-start">
          <span className="font-bold">Company</span>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Features
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Resources
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Pricing
          </button>
          <button className="text-sm text-gray-700 opacity-70 cursor-pointer">
            Enterprise
          </button>
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <div className="flex items-baseline gap-6 font-archivo">
          <h1 className="font-semibold text-gray-700 text-3xl">Metridash</h1>
          <small className="text-gray-700 opacity-70">
            Copyright © Medridash 2020. All rights reserved.
          </small>
        </div>
        <div className="flex gap-5">
          <button>
            <BsTwitter />
          </button>
          <button>
            <FaLinkedinIn />
          </button>
          <button>
            <FaFacebookF />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
