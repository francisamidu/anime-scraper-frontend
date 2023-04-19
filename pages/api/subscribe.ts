import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import fetcher from "../../utils/fetcher";
import { getEnv } from "../../utils/getEnv";
import getErrorMessage from "../../utils/getErrorMessage";
const env = getEnv();

export type ResponseData = {
  message?: string;
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

    if (!email || !firstName) {
      res.status(500).json({
        error: "Please provide email and first name",
      });
    }
    const {
      data: { message },
    } = await axios.post<ResponseData>(
      `${env.BASE_URL}/${env.SUBSCRIPTION_URL}`,
      JSON.stringify({
        email,
        firstName,
      })
    );

    res.status(200).json({
      message,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: getErrorMessage(error),
    });
  }
}
