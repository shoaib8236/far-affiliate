import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useRoutes,
} from "react-router-dom";
import Layout from "../layout/layout";
import Login from "../screens/login/login";
import Signup from "../screens/signup/signup";
import Step1 from "../screens/signup/steps/step1";
import Step2 from "../screens/signup/steps/step2";
import Step3 from "../screens/signup/steps/step3";
import Setting from "../screens/setting/setting";
import Chat from "../screens/chat/chat";
import Dashboard from "../screens/dashboard/dashboard";
import Earnings from "../screens/earnings/earnings";

const AppRoutes = () => {
  const routes = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
      children: [
        {
          path: "/signup/step-1",
          element: <Step1 />,
        },
        {
          path: "/signup/step-2",
          element: <Step2 />,
        },
        {
          path: "/signup/step-3",
          element: <Step3 />,
        },
      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "earnings",
          element: <Earnings />,
        },
        {
          path: "support-chat",
          element: <Chat />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
      ],
    },
  ];

  const routing = useRoutes(routes);

  return routing;
};

export default AppRoutes;
