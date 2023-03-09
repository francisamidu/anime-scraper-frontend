import React from "react";
import { MainBtn } from ".";

const SubscriptionForm = () => {
  return (
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
        <MainBtn text="Subscribe Now" />
      </div>
      {/* <span className="text-midnight-500 md:text-left text-center">
              You have subscribed! Check your email for the confirmation
            </span> */}
      <span className="text-blue-gray-600 md:text-left text-center w-full">
        Get weekly updates in your inbox. Don{`'`}t worry we don{`'`}t spam!!
      </span>
    </form>
  );
};

export default SubscriptionForm;
