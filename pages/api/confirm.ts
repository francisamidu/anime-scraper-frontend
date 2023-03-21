import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import fetcher from "../../utils/fetcher";
import { getEnv } from "../../utils/getEnv";
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
      data: { result },
    } = await axios.post<ResponseData>(env.CONFIRMATION_URL, {
      data: JSON.stringify({
        email,
        conf_num,
      }),
    });

    res.status(200).json({
      result,
    });
  } catch {
    res.status(500).json({
      error: "Something went wrong",
    });
  }
}
