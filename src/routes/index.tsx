import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "../dashboard/index";
import Courses from "../dashboard/courses";
import Activity from "../dashboard/activity";
import Resources from "../dashboard/resources";
import Schedule from "../dashboard/schedule";
import Messages from "../dashboard/messages";
import Peer from "../dashboard/peer";
import LiveClass from "../dashboard/liveclass";
import Account from "../dashboard/account";
import Settings from "../dashboard/settings";
import ProtectedRoutes from "./protecteddRoutes";

const Routes = () => {
  const dashboardRoutes = [
    {
      path: "/",
      element: <Navigate to="/dashboard" replace={true} />,
    },
    {
      path: "dashboard",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "activity",
          element: <Activity />,
        },
        {
          path: "resources",
          element: <Resources />,
        },
        {
          path: "schedule",
          element: <Schedule />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "peer/*",
          element: <Peer />,
        },
        {
          path: "account",
          element: <Account />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "liveclass",
          element: <LiveClass />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...dashboardRoutes]);
  return <RouterProvider router={router} />;
};

export default Routes;
