import { NextApiRequest, NextApiResponse } from "next";

export type ResponseData = {
  result: string;
};
interface ExtendedNextApiRequest extends NextApiRequest {
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
}
