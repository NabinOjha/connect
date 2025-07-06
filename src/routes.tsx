import { createBrowserRouter } from "react-router";

import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import ForgotPassword from "@/pages/ForgotPassword";
import Verification from "@/pages/Verification";
import Main from "@/components/layouts/Main";
import Dashboard from "@/pages/Dashboard";
import ContractorDashboard from "@/pages/Dashboard/Contractor";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "auth",
        children: [
          { path: "signin", element: <SignIn /> },
          { path: "verify/:token", element: <Verification /> },
          { path: "signup", element: <SignUp /> },
          { path: "forgot-password", element: <ForgotPassword /> },
          { path: "contractor/signin", element: <SignIn /> },
          { path: "contractor/signup", element: <SignUp /> },
        ],
      },
      {
        element: <PrivateRoute allowedRoles={["USER"]} />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "contractor",
        element: <PrivateRoute allowedRoles={["CONTRACTOR"]} />,
        children: [
          {
            path: "dashboard",
            element: <ContractorDashboard />,
          },
        ],
      },
    ],
  },
]);

export default router;
