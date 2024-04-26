import { create } from "zustand";
import { persist } from "zustand/middleware";

import { StatusAuth } from "../common/types/auth";

import {
  auth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../config/firebase";
import { getUserService } from "@/services/users/users.service";

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    accessToken?: string;
    name?: string;
    email?: string;
    role?: string;
    imageUrl?: string;
  } | null;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  resendPassword: (email: string) => Promise<void>;
  getIdToken: () => Promise<string | null>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  status: StatusAuth;
  refreshToken: () => Promise<void>;
}

const useAuth = create(
  persist<AuthState>(
    (set) => ({

      isAuthenticated: false,
      user: null,
      status: StatusAuth.CHECKING,
      refreshToken: async () => {
        try {
          const currentUser = auth.currentUser;
          if (currentUser) {
            await currentUser.getIdToken(true);
            set({
              isAuthenticated: true,
              user: { id: currentUser.uid },
              status: StatusAuth.AUTHENTICATED,
            });
          } else {
            set({ status: StatusAuth.NOT_AUTHENTICATED });
          }

          console.log("currentUser", currentUser?.getIdToken());
        } catch (error) {
          set({ status: StatusAuth.NOT_AUTHENTICATED });
        }
      },
      loginWithEmail: async (email, password): Promise<any> => {
        try {
          const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = response.user;
          set({
            isAuthenticated: true,
            user: { id: user.uid },
          });
          return null;
        } catch (error) {
          console.log(
            "🚀 ~ file: useAuth.ts:65 ~ loginWithEmail: ~ error:",
            error
          );
          throw error;
        }
      },
      signUpWithEmail: async (email, password): Promise<any> => {
        try {
          const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = response.user;
          set({
            isAuthenticated: true,
            user: { id: user.uid },
          });
          return null;
        } catch (error) {
          return error;
        }
      },
      loginWithGoogle: async () => {
        const provider = new GoogleAuthProvider();
        try {
          const response = await signInWithPopup(auth, provider);
          const user = response.user;
          const token = await user?.getIdToken();
          console.log('este es', token)
          const responseUser = await getUserService(token as string);

          set({
            isAuthenticated: true,
            user: {
              id: user.uid,
              accessToken: token,
              //@ts-expect-error
              ...responseUser,
            },
          });

          console.log("user ************", user);
        } catch (error) {
          console.error("Error al iniciar sesión con Google:", error);
        }
      },
      resendPassword: async (email) => {
        try {
          await sendPasswordResetEmail(auth, email);
        } catch (error) {
          console.log(error);
        }
      },
      getIdToken: async () => {
        try {
          const currentUser = auth.currentUser;
          if (currentUser) {
            const idToken = await currentUser.getIdToken();
            return idToken;
          } else {
            console.error("Error: no hay un usuario autenticado");
            return null;
          }
        } catch (error) {
          console.error("Error al obtener el token ID:", error);
          return null;
        }
      },
      logout: () => {
        signOut(auth);
        set({
          isAuthenticated: false,
          user: null,
        });
        localStorage.removeItem("auth-storage");
        localStorage.removeItem("account-storage");
        localStorage.removeItem("userProfileInfo");
        localStorage.removeItem("auth");
        localStorage.removeItem("students");
        localStorage.removeItem("courses");
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuth;
