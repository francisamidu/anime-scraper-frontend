import { NextApiRequest, NextApiResponse } from "next";
import fetcher from "../../utils/fetcher";
import { getEnv } from "../../utils/getEnv";
const env = getEnv();

export type ResponseData = {
  result?: string;
  error?: string;
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
  try {
    const { email, firstName } = req.body;

    if (!env) {
      res.status(500).json({
        error: "Something went wrong",
      });
    }

    const response = await fetcher<ResponseData>(env.SUBSCRIPTION_URL, {
      method: "POST",
      body: JSON.stringify({
        email,
        firstName,
      }),
    });
    console.log(response.result);

    res.status(200).json({
      result: response.result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
}
