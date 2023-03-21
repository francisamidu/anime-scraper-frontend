import axios from "axios";
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
    const {
      data: { result },
    } = await axios.post<ResponseData>(env.SUBSCRIPTION_URL, {
      data: JSON.stringify({
        email,
        firstName,
      }),
    });

    res.status(200).json({
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
}
