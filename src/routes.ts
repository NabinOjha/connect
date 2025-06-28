import { createBrowserRouter } from "react-router";

import Home from "@/pages/Home";
import AuthLayout from "@/layouts/AuthLayout";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

const router =  createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Home },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          { path: "signin", Component: SignIn },
          { path: "signup", Component: SignUp },
        ],
      },
    ],
  },
]);

export default router;
