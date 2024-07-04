import React from "react";

const Body = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center">
        <img
          src="./assets/Blue-Shape.svg"
          alt="1st"
          className="-rotate-[45deg] h-64"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt="1st"
          className="absolute -rotate-[30deg] h-64"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt="1st"
          className="absolute -rotate-[15deg] h-64"
        />
        <img
          src="./assets/Hero-Model.png"
          alt="1st"
          className="absolute h-64"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold font-playfair leading-tight">
          Host your wesite less than 5 minutes
        </h1>
        <p className="font-lato text-gray-400">
          With Hotster,get your website up and running in no less than 5minutes
          with most competitive price package
        </p>
        <form action="" className="flex flex-col gap-4">
          <input
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="enter email address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-800 text-white">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2">
          <img src="./assets/Checkmark.svg" alt="" />
          <p className="font-lato text-gray-400">
            No spam,ever .Unsubcribe anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
