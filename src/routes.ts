import { createBrowserRouter } from "react-router";

import Home from "@/pages/Home";
import AuthLayout from "@/components/layouts/AuthLayout";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

const router = createBrowserRouter([
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
          { path: "contracter/signin", Component: SignIn },
          { path: "contracter/signup", Component: SignUp },
        ],
      },
    ],
  },
]);

export default router;
