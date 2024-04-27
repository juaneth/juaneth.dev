import React from "react";
import ReactDOM from "react-dom/client";

import Flow from "./Flow.jsx";
import UniSSH from "./Pages/Projects/UniSSH.jsx";
import Article from "./Pages/Article.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Flow />,
      },
      {
        path: "/unissh",
        element: <UniSSH />,
      },
      {
        path: "/article/:id",
        element: <Article />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
