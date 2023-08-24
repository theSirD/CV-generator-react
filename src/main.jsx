import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./roots/Root";


// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     children: [
//       <Generator />,
//       <ResultCV />,
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
