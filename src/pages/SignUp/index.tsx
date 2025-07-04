import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import { useMutation } from "@tanstack/react-query";

import { userRegistrationSchema, type UserRegistrationForm } from "./schema";
import { InputField } from "@/components/Form/InputField/Index";
import { Button } from "@/components/ui/button";
import { signUp } from "@/services/api/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserRegistrationForm>({
    resolver: zodResolver(userRegistrationSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      reset();
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });

  const onSubmit = async (data: UserRegistrationForm) => {
    mutation.mutate(data);
  };

  if (mutation.isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="dark w-lg mx-auto mt-8 p-6 rounded-lg bg-white shadow-all">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

      {mutation.isError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {mutation.error?.message || "Registration failed. Please try again."}
        </div>
      )}

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
          {mutation.isPending ? "Signing Up..." : "Sign Up"}
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
