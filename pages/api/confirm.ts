import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { getEnv } from "../../utils/getEnv";
import getErrorMessage from "../../utils/getErrorMessage";
import { ResponseData } from "./subscribe";
const env = getEnv();

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    email: string;
    conf_num: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ResponseData | string>
) {
  try {
    if (!env) {
      res.status(500).json({
        error: "Something went wrong",
      });
    }
    const { email, conf_num } = req.body;

    const {
      data: { message },
    } = await axios.post<ResponseData>(
      `${env.BASE_URL}/${env.CONFIRMATION_URL}`,
      {
        email,
        conf_num,
      }
    );

    res.status(200).json({
      message,
    });
  } catch (error) {
    res.status(500).json({
      error: getErrorMessage(error),
    });
  }
}
