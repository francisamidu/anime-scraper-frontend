import React from "react";
import shared from "../shared.json";
import { MailCheck } from "lucide-react";

const Confirm = () => {
  return (
    <main className="bg-white flex flex-row items-center justify-center min-h-screen">
      <form className="w-[600px] shadow flex flex-col items-center p-8">
        <MailCheck color="#0b5563" size={35} />
        <h1 className="text-4xl text-midnight-500 font-bold text-center my-4">
          Become part of the {shared.name}
        </h1>
        <p className="text-slate-700 text-center">
          We have sent a confirmation email to you inbox. Confirm your email to
          complete subscription.{" "}
          <span className="font-bold">
            Check your spam folder if you can't find your email
          </span>
        </p>
      </form>
    </main>
  );
};

export default Confirm;
