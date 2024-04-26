import { vinculateStudentService } from "@/services/parent/parent.service";

export const useParent = () => {
  const vinculateStudent = async (data: string) => {
    const response = await vinculateStudentService({
      studentCode: data,
    });
    return response;
  };
  return { vinculateStudent };
};
