import { get, post, put } from "../../utils/axiosAdapter";

const URL_API = process.env.NEXT_PUBLIC_URL_API as string;

export const getAllStudentsServices = async (): Promise<string> => {
  const uri = `${URL_API}/student/by-parent`;
  const response = await get({ url: uri });
  return response
};

export const getAllStudentIfTeacher = async (): Promise<string> => {
  const uri = `${URL_API}/student/all-if-teacher`;
  const response = await get({ url: uri });
  return response
}

export const createStudentServices = async (data: any): Promise<string> => {
  const uri = `${URL_API}/student`;
  const response = await post({ url: uri, data });
  return response
}

export const updateStudentServices = async (data: any, id: string): Promise<string> => {
  const uri = `${URL_API}/student/${id}`;
  const response = await put({ url: uri, data });
  return response
}
