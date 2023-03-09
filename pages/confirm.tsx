import React, { ReactNode } from "react";
import shared from "../shared.json";
import { Layout, MailCheck } from "lucide-react";
import { MainBtn } from "../components";

const Confirm = () => {
  return (
    <main className="bg-white flex flex-row items-center justify-center min-h-screen">
      <form className="w-[600px] shadow-md rounded flex flex-col items-center p-8">
        <MailCheck color="#0b5563" size={45} />
        <h1 className="text-4xl text-midnight-500 font-bold text-center my-4">
          Become part of {shared.name}
        </h1>
        <p className="text-slate-700 text-center my-2">
          We have sent a confirmation email to you inbox. Confirm your email to
          complete subscription.{" "}
          <span className="font-bold">
            Check your spam folder if you can't find your email
          </span>
        </p>
        <div className="my-4 w-fit">
          <MainBtn text="Check your inbox" />
        </div>
      </form>
    </main>
  );
};

Confirm.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Confirm;
