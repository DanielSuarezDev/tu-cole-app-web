import { createCourseService, getAllCourses } from "@/services/courses/courses.service";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useStudents } from "./useStudents";

interface CourseState {
  courses: string[];
  addCourse: (course: string) => void;
  loadCourses: () => void;
}

export const useCourses = create<CourseState>()(
  persist(
    (set) => ({
      courses: [],
      loadCourses: async () => {
        try {
          const response = await getAllCourses();
          useStudents.getState().loadStudentsIfTeacher()
          //@ts-ignore
          set({ courses: response });
        } catch (error) {
          console.error("Error loading courses", error);
        }
      },

      addCourse: async (course) =>{
        await createCourseService(course as any)
        //load courses again
        useCourses.getState().loadCourses()
        //@ts-ignore
        set({ courses: await getAllCourses() });


      }
    }),
    {
      name: "courses",
    }
  )
);
