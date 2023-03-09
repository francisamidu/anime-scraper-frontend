import Head from "next/head";
import React, { PropsWithChildren } from "react";
import shared from "../shared.json";
import Footer from "./Footer";
const { name, description } = shared;

const Layout = ({ children }: Partial<PropsWithChildren>) => {
  return (
    <>
      <Head>
        <title>{`${name}-${description}`}</title>
        <meta name="title" content={`${name}-${description}`}></meta>
        <meta name="description" content={description}></meta>
      </Head>
      <main className="flex flex-col justify-between min-h-[90vh]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
