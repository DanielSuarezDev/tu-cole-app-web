import axios, { AxiosResponse, Method } from "axios";

interface RequestParams {
  method: Method;
  url: string;
  data?: any;
  headers?: Record<string, string>;
}

const defaultHeaders: Record<string, string> = {
  "Content-Type": "application/json",
};

// Suponiendo que tienes un archivo separate para las funciones de localStorage
import { getItem } from "../services/local/localStorage.service";

const getToken = (): string | null => {
  const tokenObject = getItem("auth-storage");
  console.log("tokenObject", tokenObject.state);
  return tokenObject ? tokenObject?.state?.user?.accessToken : null;
};

const setAuthorizationHeader = async (
  headers: Record<string, string>
): Promise<Record<string, string>> => {
  const accessToken = getToken();
  return {
    ...headers,
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };
};

const request = async ({
  method,
  url,
  data,
  headers = {},
}: RequestParams): Promise<any> => {
  const authHeaders = await setAuthorizationHeader(headers);
  const response: AxiosResponse = await axios({
    method,
    url,
    data,
    headers: {
      ...defaultHeaders,
      ...authHeaders,
    },
  });
  return response.data;
};

export const get = (params: Omit<RequestParams, "method">): Promise<any> =>
  request({ ...params, method: "get" });
export const post = (params: Omit<RequestParams, "method">): Promise<any> =>
  request({ ...params, method: "post" });
export const put = (params: Omit<RequestParams, "method">): Promise<any> =>
  request({ ...params, method: "put" });
export const patch = (params: Omit<RequestParams, "method">): Promise<any> =>
  request({ ...params, method: "patch" });
export const remove = (params: Omit<RequestParams, "method">): Promise<any> =>
  request({ ...params, method: "delete" });
