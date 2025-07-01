import {
  type FieldError,
  type UseFormRegister,
  type Path,
} from "react-hook-form";

interface CheckboxFieldProps<T extends Record<string, any>> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: FieldError;
  required?: boolean;
}

export function CheckboxField<T extends Record<string, any>>({
  label,
  name,
  register,
  error,
  required = false,
}: CheckboxFieldProps<T>) {
  return (
    <div className="mb-4">
      <div className="flex items-start">
        <input
          {...register(name)}
          type="checkbox"
          id={name}
          className={`mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
            error ? "border-red-500" : ""
          }`}
        />
        <label htmlFor={name} className="ml-2 block text-sm text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}
