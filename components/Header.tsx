import { Button } from "@material-tailwind/react";
import React from "react";
import shared from "../shared.json";
import { SubscriptionForm } from ".";

const tags = ["animes", "reviews", "videos", "new releases"];
const Header = () => {
  return (
    <main className="main">
      <section className="min-h-screen flex flex-col justify-center items-center bg-[#00000066]">
        <div className="md:max-w-screen-xl md:mx-auto flex flex-col md:flex-row md:items-start justify-center items-center p-5 bg-white rounded-md text-center">
          <div className="md:w-1/2 ml-5 flex flex-col">
            <div className="flex flex-row items-center justify-center ">
              {tags.map((tag, index) =>
                tags.length - index !== 1 ? (
                  <div key={index}>
                    <span className="uppercase text-xs font-bold text-midnight-500">
                      {tag}
                    </span>
                    <span className="mx-3 text-midnight-500">-</span>
                  </div>
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
            <SubscriptionForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Header;
