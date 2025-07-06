import { useForm, type UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useLocation } from "react-router";
import { useMutation } from "@tanstack/react-query";

import { userRegistrationSchema, type UserRegistrationForm } from "./schema";
import { InputField } from "@/components/Form/InputField/Index";
import { Button } from "@/components/ui/button";
import { signUp } from "@/services/api/auth";
import { CONTRACTOR, USER } from "@/lib/utils";
import { toast } from "react-toastify";
import { useError } from "@/hooks/useError";

const CONTRACTOR_SIGNUP_PATH = "/auth/contracter/signup";

const useFormConfig: UseFormProps<UserRegistrationForm> = {
  resolver: zodResolver(userRegistrationSchema),
  mode: "onBlur",
  defaultValues: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "USER",
  },
};

const SignUp = () => {
  const { pathname } = useLocation();
  const { getMessage } = useError();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserRegistrationForm>(useFormConfig);

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("Please check your email to verify your account.");
      reset();
    },
    onError: (error) => {
      const message = getMessage(error);
      toast.error(message);
    },
  });

  const onSubmit = async (data: UserRegistrationForm) => {
    mutation.mutate({
      ...data,
      role: pathname === CONTRACTOR_SIGNUP_PATH ? CONTRACTOR : USER,
    });
  };

  return (
    <div className="dark w-lg mx-auto mt-8 p-6 rounded-lg bg-white shadow-all">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputField
          label="Name"
          name="name"
          register={register}
          error={errors.name}
          placeholder="Name"
          required
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
          placeholder="Email"
          required
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password}
          placeholder="Password"
          required
        />

        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword}
          placeholder="Confirm Password"
          required
        />

        <Button
          type="submit"
          disabled={isSubmitting || mutation.isPending}
          className="primary-gradient w-full py-6 font-bold text-md hover:bg-green-700 text-white mt-2 disabled:opacity-50 cursor-pointer"
        >
          Sign Up
        </Button>
      </form>

      <div className="mt-6 flex items-center justify-center space-x-4">
        <span>Already have an account? </span>
        <Link to="/auth/signin" className="underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
