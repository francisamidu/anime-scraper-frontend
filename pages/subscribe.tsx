import React, { ReactNode } from "react";
import { Layout, SubscriptionForm } from "../components";

const Subscribed = () => {
  return (
    <main className="bg-white flex flex-row items-center justify-center min-h-screen">
      <SubscriptionForm />
    </main>
  );
};

Subscribed.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Subscribed;
