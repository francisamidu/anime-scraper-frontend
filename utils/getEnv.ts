import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
type ENV = {
  CONFIRMATION_URL: string;
  SUBSCRIPTION_URL: string;
  UNSUBSCRIPTION_URL: string;
};
export const getEnv: () => ENV = () => {
  return publicRuntimeConfig;
};
