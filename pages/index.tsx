import Head from "next/head";
import { ReactNode } from "react";
import { Header, Layout } from "../components";
import shared from "../shared.json";
const { description, name } = shared;

const pageDesc =
  "Simplify your anime watching experience - Let our scraper track new releases and notify you when updates are available";
const Index = () => {
  return (
    <>
      <Head>
        <title>{`${name} - ${pageDesc}`}</title>
        <meta name="name" content={name} />
        <meta name="content" content={description} />
        <meta name="description" content={pageDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
};

Index.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default Index;
