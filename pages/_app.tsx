import "../styles/globals.css";
import "@fontsource/inter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <>
      <ToastContainer />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};
export default App;
