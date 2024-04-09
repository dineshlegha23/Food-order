import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-black/80" id="contact">
      <div className="max-w-[1200px] mx-auto p-5 text-white  mt-10 pt-16">
        <div className="grid grid-cols-4 md:grid-cols-3 pb-10 border-b-[1px] border-gray-400">
          <div className="max-w-[400px] col-span-2 xs:col-span-4">
            <div className="mb-5">
              <img src={assets.logo} alt="tomato logo" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              odit totam quaerat itaque reiciendis distinctio dolor neque
              repellendus perferendis voluptatum id, ab ut rem dignissimos
              temporibus illo officiis accusamus? Reprehenderit.
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src={assets.facebook_icon}
                className="cursor-pointer"
                alt="facebook"
              />
              <img
                src={assets.twitter_icon}
                className="cursor-pointer"
                alt="twitter"
              />
              <img
                src={assets.linkedin_icon}
                className="cursor-pointer"
                alt="linkedin"
              />
            </div>
          </div>
          <div className="justify-self-end md:justify-self-center xs:mt-10 xxs:col-span-4">
            <p className="text-xl font-semibold mb-5">COMPANY</p>
            <ul className="text-gray-300">
              <li className="cursor-pointer hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-white">About Us</li>
              <li className="cursor-pointer hover:text-white">Delivery</li>
              <li className="cursor-pointer hover:text-white">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="justify-self-end md:justify-self-start mt-10 xs:ml-10">
            <p className="text-xl font-semibold mb-5">GET IN TOUCH</p>
            <ul className="text-gray-300">
              <li className="cursor-pointer hover:text-white">
                +1-123-456-7890
              </li>
              <li className="cursor-pointer hover:text-white">
                contact@tomato.com
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-5">
          Copyright 2024 &copy; Tomato.com-All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
