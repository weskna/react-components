import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./views/Todo";
import Root from "./layouts/root";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "todo",
        element: <Todo />
      }
    ]
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
