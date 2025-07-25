import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import router from "@/routes";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
};

export default App;
