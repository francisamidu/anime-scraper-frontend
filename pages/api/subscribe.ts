import { NextApiRequest, NextApiResponse } from "next";
import fetcher from "../../utils/fetcher";
import { getEnv } from "../../utils/getEnv";
const env = getEnv();

export type ResponseData = {
  result: string;
};
export interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    email: string;
    firstName: string;
  };
}
export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ResponseData | string>
) {
  const { email, firstName } = req.body;
  if (!email) {
    res.status(429).json({
      result: "Please provide your email",
    });
  }

  if (!firstName) {
    res.status(429).json({
      result: "Please provide your first name",
    });
  }

  const response = await fetcher<ResponseData>(env.SUBSCRIPTION_URL, {
    method: "POST",
    body: JSON.stringify({
      email,
      firstName,
    }),
  });
  res.status(200).json({
    result: response.result,
  });
}
