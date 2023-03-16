export type ResponseData = {
  result: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | string>
) {}
