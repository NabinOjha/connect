import {
  type FieldError,
  type UseFormRegister,
  type Path,
  type FieldValues,
} from "react-hook-form";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  required?: boolean;
}

export function InputField<T extends FieldValues>({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder,
  required = false,
}: InputFieldProps<T>) {
  const [inputValueShown, setInputValueShown] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>

      <div className="relative">
        <input
          {...register(name, { valueAsNumber: type === "number" })}
          type={isPassword && inputValueShown ? "text" : type}
          id={name}
          placeholder={placeholder}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
            error ? "border-red-500" : "border-gray-300"
          } ${isPassword ? "pr-10" : ""}`}
        />

        {isPassword && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={() => setInputValueShown((prev) => !prev)}
            tabIndex={-1}
          >
            {inputValueShown ? (
              <Eye className="h-5 w-5" />
            ) : (
              <EyeClosed className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}
