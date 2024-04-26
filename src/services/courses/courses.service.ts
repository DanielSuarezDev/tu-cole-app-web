import { get, post } from "../../utils/axiosAdapter";

const URL_API = process.env.NEXT_PUBLIC_URL_API as string;
const URI = "course";

export const getAllCourses = async (): Promise<string> => {
  const uri = `${URL_API}/${URI}`;
  const response = await get({ url: uri });
  return response;
};

export const createCourseService = async (data: {
  name: string;
  description: string;
  idTeacher: string;
  students: string[];
} ): Promise<string> => {
  const uri = `${URL_API}/${URI}`;

  const response = await post({ url: uri, data });
  return response;
};
