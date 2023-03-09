import React from "react";
import { MainBtn } from ".";
import shared from "../shared.json";

const SubscriptionForm = () => {
  return (
    <form className="my-4">
      <h1 className="my-2 text-midnight-500 text-5xl font-bold text-center">
        {shared.name}
      </h1>
      <div className="flex flex-col items-center my-4">
        <input
          placeholder="Enter first Name"
          className="w-[90%] p-2 rounded-lg border-blue-gray-50 border-[1px] mb-2 outline-none px-3"
        />
        <input
          placeholder="Enter your email address"
          className="w-[90%] p-2 rounded-lg border-blue-gray-50 border-[1px] mb-2 outline-none px-3"
        />
        <MainBtn text="Subscribe Now" />
      </div>
      <span className="text-blue-gray-600 md:text-left text-center w-full">
        Get weekly updates in your inbox. Don{`'`}t worry we don{`'`}t spam!!
      </span>
    </form>
  );
};

export default SubscriptionForm;
