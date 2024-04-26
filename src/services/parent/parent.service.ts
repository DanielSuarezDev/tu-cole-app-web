import { post } from "../../utils/axiosAdapter";

const URL_API = process.env.NEXT_PUBLIC_URL_API as string;


export const vinculateStudentService = async (data: any): Promise<string> => {
  const uri = `${URL_API}/parent`;
  console.log("uri", uri)
console.log("data ----", data)
  const response = await post({ url: uri, data });
  return response
}
