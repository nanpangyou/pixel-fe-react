import { createBrowserRouter } from "react-router-dom"
import { ErrorElement } from "../pages/NotFoundPage"
import { MainLayout } from "../layouts/mainLayout"
import { welcomeRoutes } from "./welcomeRoutes"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: welcomeRoutes,
  },
])
