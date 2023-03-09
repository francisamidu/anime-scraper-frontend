import { MailCheck, UserMinus } from "lucide-react";
import React from "react";
import { MainBtn } from "../components";

const Unsubscribe = () => {
  const unsubscribeToNewsletter = async () => {};
  return (
    <main className="bg-white flex flex-row items-center justify-center min-h-screen">
      <form className="w-[600px] shadow-md rounded flex flex-col items-center p-8">
        <UserMinus color="#0b5563" size={45} />
        <h1 className="text-4xl text-midnight-500 font-bold text-center my-4">
          Sorry to see you go
        </h1>
        <p className="text-slate-700 text-center my-2">
          If you unsubscribe you won't be getting any of our emails. Say goodbye
          to all the anime news and releases.
        </p>
        <div className="my-4 w-fit">
          <MainBtn text="Unsubscribe" onClick={unsubscribeToNewsletter} />
        </div>
      </form>
    </main>
  );
};

export default Unsubscribe;
