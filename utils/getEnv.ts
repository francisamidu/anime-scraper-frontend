import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
export const getEnv = () => {
  return publicRuntimeConfig.OPENAI_API_KEY;
};
