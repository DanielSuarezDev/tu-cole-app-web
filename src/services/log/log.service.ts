import { ILog } from "@/common/interface/log";
import { get, post } from "../../utils/axiosAdapter";

const URL_API = process.env.NEXT_PUBLIC_URL_API as string;
const URI = "vitacore";

export const getAllLogsServices = async (): Promise<string> => {
  const uri = `${URL_API}/${URI}`;
  const response = await get({ url: uri });
  return response
};

// export const getAllStudentIfTeacher = async (): Promise<string> => {
//   const uri = `${URL_API}/student/all-if-teacher`;
//   const response = await get({ url: uri });
//   return response
// }

export const createLogServices = async (data: ILog): Promise<string> => {
  const uri = `${URL_API}/${URI}`;
  const response = await post({ url: uri, data });
  return response
}
