import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12">
      <ul className="flex text-gray-500 gap-6 font-lato">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instgram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </ul>
      <div className="flex gap-2">
        <img src="./assets/Help-Avatar.svg" alt="" />
        <div>
          <p className="font-playfair font-thin">Have any questions?</p>
          <a href="#" className="font-lato font-medium">
            Talk to specialist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
