import { createBrowserRouter } from "react-router";

import Home from "@/pages/Home";
import AuthLayout from "@/components/layouts/Auth";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import ForgotPassword from "@/pages/ForgotPassword";
import Verification from "@/pages/Verification";

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
          { path: "verify/:token", Component: Verification },
          { path: "signup", Component: SignUp },
          { path: "forgot-password", Component: ForgotPassword },
          { path: "contracter/signin", Component: SignIn },
          { path: "contracter/signup", Component: SignUp },
        ],
      },
    ],
  },
]);

export default router;
