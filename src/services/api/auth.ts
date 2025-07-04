import axios from "axios";
import { type UserRegistrationForm } from "@/pages/SignUp/schema";
import { type UserSignInForm } from "@/pages/SignIn/schema";

export const signUp = async (data: UserRegistrationForm) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/signup`,
    data
  );
  return response.data;
};

export const verifySignUp = async (token: string) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/verify`,
    { token }
  );
  return response.data;
};

export const signIn = async (data: UserSignInForm) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/signin`,
    data
  );
  return response.data;
};

export const signOut = async () => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/signout`
  );
  return response.data;
};

export const sendResetPasswordLink = async (data: { email: string }) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/reset-password-link`,
    data
  );
  return response.data;
};

export const resetPassword = async (
  data: Pick<UserRegistrationForm, "confirmPassword" | "password">
) => {
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/auth/reset-password`,
    data
  );
  return response.data;
};
