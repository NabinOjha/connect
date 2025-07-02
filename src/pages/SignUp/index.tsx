import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegistrationSchema, type UserRegistrationForm } from "./schema";
import { InputField } from "@/components/Form/InputField/Index";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

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

  const onSubmit = async (data: UserRegistrationForm) => {
    try {
      console.log(data)
      reset();
    } catch (error) {
      console.error("Registration failed:", error);
    }
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
          // disabled
          className="primary-gradient w-full py-6 font-bold text-md hover:bg-green-700 text-white mt-2"
        >
          Sign Up
        </Button>
      </form>
      <div className="mt-6 flex items-center justify-center space-x-4">
        <span>Already have an account? </span>
        <Link to="/auth/signin" className="underline">
          {" "}
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
