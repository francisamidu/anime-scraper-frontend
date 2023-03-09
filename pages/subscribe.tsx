import React, { ReactNode } from "react";
import { Layout, SubscriptionForm } from "../components";

const Subscribed = () => {
  return (
    <main className="bg-white flex flex-row items-center justify-center">
      <div className="shadow-md p-6">
        <SubscriptionForm />
      </div>
    </main>
  );
};

Subscribed.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Subscribed;
