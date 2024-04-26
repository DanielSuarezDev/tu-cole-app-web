import { get } from "../../utils/axiosAdapter";

const URL_API = process.env.NEXT_PUBLIC_URL_API as string;

export const getUserService = async (token: string): Promise<string> => {
  const uri = `${URL_API}/profile`;
  console.log('llegal al service', token)
  const response = await get({ url: uri, headers: {
    Authorization: `Bearer ${token}`
  } });
  return response
};
