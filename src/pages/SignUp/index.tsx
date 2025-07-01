import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegistrationSchema, type UserRegistrationForm } from "./schema";
import { InputField } from "@/components/common/Form/InputField/Index";

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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: UserRegistrationForm) => {
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
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputField
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
          placeholder="Enter your first name"
          required
        />

        <InputField
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
          placeholder="Enter your last name"
          required
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
          placeholder="Enter your email"
          required
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password}
          placeholder="Enter your password"
          required
        />

        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword}
          placeholder="Confirm your password"
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
          } text-white transition-colors`}
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
