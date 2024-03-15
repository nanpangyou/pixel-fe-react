import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>
  },
  {
    path: "/a",
    element: <div>a</div>
  }
]);

const div = document.getElementById("root");

const root = ReactDOM.createRoot(div!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
