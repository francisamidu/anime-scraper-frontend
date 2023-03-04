import { Button } from "@material-tailwind/react";
import React from "react";
import shared from "../shared.json";
import Image from "next/image";

const tags = ["animes", "reviews", "videos", "new releases"];
const Header = () => {
  return (
    <header className="min-h-screen flex flex-col justify-center items-center bg-[#00000066]">
      <div className="md:max-w-screen-xl md:mx-auto flex flex-col md:flex-row md:items-start justify-center items-center p-5 bg-white rounded-md text-center">
        <div className="md:w-1/2 ml-5 flex flex-col">
          <div className="flex flex-row items-center justify-center ">
            {tags.map((tag, index) =>
              tags.length - index !== 1 ? (
                <>
                  <span
                    className="uppercase text-xs font-bold text-midnight-500"
                    key={index}
                  >
                    {tag}
                  </span>
                  <span className="mx-3 text-midnight-500">-</span>
                </>
              ) : (
                <span
                  className="uppercase text-xs font-bold text-midnight-500"
                  key={index}
                >
                  {tag}
                </span>
              )
            )}
          </div>
          <h1 className="my-2 text-midnight-500 text-5xl font-bold text-center">
            {shared.name}
          </h1>
          <h2 className="my-3 text-blue-gray-600 text-center">
            {shared.description}
          </h2>
          <form className="my-4">
            <div className="flex flex-col items-center mb-2">
              <input
                placeholder="Enter full Name"
                className="w-[90%] p-2 rounded-lg border-blue-gray-50 border-[1px] mb-2 outline-none px-3"
              />
              <input
                placeholder="Enter your email address"
                className="w-[90%] p-2 rounded-lg border-blue-gray-50 border-[1px] mb-2 outline-none px-3"
              />
              <Button
                color="green"
                className="!w-max !bg-midnight-500 md:mt-0 mt-2"
              >
                Subscribe Now
              </Button>
            </div>
            {/* <span className="text-midnight-500 md:text-left text-center">
              You have subscribed! Check your email for the confirmation
            </span> */}
            <span className="text-blue-gray-600 md:text-left text-center w-full">
              Get weekly updates in your inbox. Don't worry we don't spam!!
            </span>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
