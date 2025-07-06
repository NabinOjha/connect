import axios from "axios";
import { type UserRegistrationForm } from "@/pages/SignUp/schema";
import { type UserSignInForm } from "@/pages/SignIn/schema";
import { User } from "@/store/auth";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

export const signUp = async (data: UserRegistrationForm) => {
  const response = await axiosInstance.post('auth/signup', data);
  return response.data;
};

export const verifySignUp = async (token: string) => {
  const response = await axiosInstance.post('auth/verify', { token });
  return response.data;
};

export const signIn = async (data: UserSignInForm) => {
  const response = await axiosInstance.post('auth/signin', data);
  return response.data;
};

export const currentUser = async (): Promise<User> => {
  const response = await axiosInstance.get('auth/current-user');
  return response.data;
};

export const signOut = async () => {
  const response = await axiosInstance.post('auth/signout');
  return response.data;
};

export const sendResetPasswordLink = async (data: { email: string }) => {
  const response = await axiosInstance.post('auth/reset-password-link', data);
  return response.data;
};

export const resetPassword = async (
  data: Pick<UserRegistrationForm, "confirmPassword" | "password">
) => {
  const response = await axiosInstance.put('auth/reset-password', data);
  return response.data;
};
