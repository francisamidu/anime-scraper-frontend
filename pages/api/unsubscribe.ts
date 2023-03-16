import { NextApiRequest, NextApiResponse } from "next";
import fetcher from "../../utils/fetcher";
import shared from "../../shared.json";
import { ResponseData } from "./subscribe";

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
  const { email, conf_num } = req.body;
  if (!email) {
    res.status(429).json({
      result: "Please provide your email",
    });
  }

  if (!conf_num) {
    res.status(429).json({
      result: "Please provide your confirmation number",
    });
  }

  const response = await fetcher<ResponseData>(
    `${shared.api}/newsletter/unsubscribe`,
    {
      method: "POST",
      body: JSON.stringify({
        conf_num,
        email,
      }),
    }
  );
  res.status(200).json({
    result: response.result,
  });
}
