import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import Context from "./Components/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="antialiased text-gray-800 selection:bg-indigo-500 selection:text-white">
      <Context>
        <RouterProvider router={router}></RouterProvider>
      </Context>
    </div>
  </React.StrictMode>
);
