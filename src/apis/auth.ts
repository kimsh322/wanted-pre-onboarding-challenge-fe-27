import axios from "axios";
import { currentServerUrl } from ".";

export const signup = async ({ email, password }: SignupParams) => {
  const response = await axios.post<SignupResponseType>(`${currentServerUrl}/users/create`, {
    email,
    password,
  });
  return response.data;
};

export const signin = async ({ email, password }: SignupParams) => {
  const response = await axios.post<SignupResponseType>(`${currentServerUrl}/users/login`, {
    email,
    password,
  });
  return response.data;
};

export interface SignupParams {
  email: string;
  password: string;
}

export interface SignupResponseType {
  message: string;
  token: string;
}
