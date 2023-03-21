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
        result: "Something went wrong",
      });
    }
    const { email, conf_num } = req.body;

    const response = await fetcher<ResponseData>(env.CONFIRMATION_URL, {
      method: "POST",
      body: JSON.stringify({
        conf_num,
        email,
      }),
    });
    res.status(200).json({
      result: response.result,
    });
  } catch {
    res.status(500).json({
      result: "Something went wrong",
    });
  }
}
