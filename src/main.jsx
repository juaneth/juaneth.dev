import React from "react";
import ReactDOM from "react-dom/client";

import Flow from "./Flow.jsx";
import Article from "./Pages/Article.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/:projectId?/",
        element: <Flow />,
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
