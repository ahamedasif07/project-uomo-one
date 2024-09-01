import { createBrowserRouter } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "./Pages/Home";
import All from "./components/Home/All";
import AdminLayout from "./admin/adminLayout";
import Page1 from "./admin/APage/Page1";
import Treading from "./admin/APage/Treading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <All></All>,
          },
        ],
      },
    ],
  },
  // --------------admin layout -------------

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Page1 />,
      },
      {
        path: "/admin/trending",
        element: <Treading />,
      },
    ],
  },
]);
