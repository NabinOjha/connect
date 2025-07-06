import { AxiosError } from "axios";

export const useError = () => {
  const getMessage = (error: unknown): string => {
    switch (true) {
      case error instanceof AxiosError:
        return (
          error?.response?.data?.message ||
          error.message ||
          "Network error occurred"
        );

      case error instanceof Error:
        return error.message;

      case typeof error === "string":
        return error;

      default:
        return "Something went wrong";
    }
  };

  return { getMessage };
};
