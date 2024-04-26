import {
  createStudentServices,
  getAllStudentIfTeacher,
  getAllStudentsServices,
  updateStudentServices,
} from "@/services/student/student.service";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useCourses } from "./useCourses";

interface Student {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  email?: string;
  parents?: string[];
  course?: string[];
  rh?: string;
  eps?: string;
  address?: string;
  neighborhood?: string;
  father?: string;
  mother?: string;
  fatherPhone?: string;
  motherPhone?: string;
  medicines?: string;
  code?: string;
}

interface StudentsState {
  students: string[];
  studentsIfTeacher: string[];
  loadStudents: () => void;
  loadStudentsIfTeacher: () => void;
  createStudent: (data: Student) => void;
  updateStudent: (data: Student , id: string) => void;
}

export const useStudents = create<StudentsState>()(
  persist(
    (set) => ({
      students: [],
      studentsIfTeacher: [],
      loadStudents: async () => {
        try {
          const response = await getAllStudentsServices();
          //@ts-ignore
          set({ students: response });
        } catch (error) {
          console.error("Error loading courses", error);
        }
      },

      loadStudentsIfTeacher: async () => {
        try {
          const response = await getAllStudentIfTeacher();
          console.log("response", response);
          //@ts-ignore
          set({ studentsIfTeacher: response });
        } catch (error) {
          console.error("Error loading courses", error);
        }
      },

      createStudent: async (data: any) => {
        try {
          const response = await createStudentServices(data);
          useStudents.getState().loadStudentsIfTeacher();
          useStudents.getState().loadStudents();
          useCourses.getState().loadCourses();

          console.log("response", response);

          return response;
        } catch (error) {
          console.error("Error loading courses", error);
        }
      },

      updateStudent: async (
        data,
        id,
      ) => {
        try {
          console.log("data ********", data);
          console.log("id *********", id)
          const response = await updateStudentServices(data, id);
          useStudents.getState().loadStudentsIfTeacher();
          useStudents.getState().loadStudents();
          useCourses.getState().loadCourses();

          console.log("response", response);

          return response;
        } catch (error) {
          console.error("Error loading courses", error);
        }
      },
    }),
    {
      name: "students",
    }
  )
);
