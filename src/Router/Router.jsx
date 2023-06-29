import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import Blog from "../Pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
