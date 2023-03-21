import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { MainBtn } from ".";
import { ResponseData } from "../pages/api/subscribe";
import shared from "../shared.json";
import fetcher from "../utils/fetcher";

const SubscriptionForm = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    firstName: "",
  });
  const subscribeToNewsletter = async () => {
    try {
      const response = await fetcher<ResponseData>("api/subscribe", {
        method: "POST",
        body: JSON.stringify(user),
      });
      toast.success(response.result);
      setTimeout(() => {
        router.push("/");
      }, 5000);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <form className="my-4">
      <h1 className="my-2 text-midnight-500 text-5xl font-bold text-center">
        {shared.name}
      </h1>
      <div className="flex flex-col items-center my-4">
        <input
          placeholder="Enter first Name"
          className="w-[90%] p-2 rounded-lg border-blue-gray-50 border-[1px] mb-2 outline-none px-3"
          value={user.firstName}
          onChange={(event) =>
            setUser({
              ...user,
              firstName: event.target.value,
            })
          }
        />
        <input
          placeholder="Enter your email address"
          className="w-[90%] p-2 rounded-lg border-blue-gray-50 border-[1px] mb-2 outline-none px-3"
          value={user.email}
          onChange={(event) =>
            setUser({
              ...user,
              email: event.target.value,
            })
          }
        />
        <MainBtn text="Subscribe Now" onClick={subscribeToNewsletter} />
      </div>
      <span className="text-blue-gray-600 md:text-left text-center w-full">
        Get weekly updates in your inbox. Don{`'`}t worry we don{`'`}t spam!!
      </span>
    </form>
  );
};

export default SubscriptionForm;
