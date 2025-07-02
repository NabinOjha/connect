import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type UserSignInForm, userSignInSchema } from "./schema";
import { InputField } from "@/components/Form/InputField/Index";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserSignInForm>({
    resolver: zodResolver(userSignInSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: UserSignInForm) => {
    try {
      console.log("Form data:", data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Registration successful!");
      reset();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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

        <Button
          disabled
          className="bg-green-500 w-full py-6 font-bold text-md hover:bg-green-700 text-white mt-2"
        >
          Sign Up
        </Button>
      </form>
      <div className="mt-6 flex items-center justify-center space-x-4">
        <span>Don't have an account yet? </span>
        <Link to="/auth/signup" className="underline">
          {" "}
          Sign Up
        </Link>
      </div>

      <div className="mt-2 flex items-center justify-center space-x-4">
        <Link to="/auth/forgot-password" className="underline text-primary font-semibold">
          Forgot your password?
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
