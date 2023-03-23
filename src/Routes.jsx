import React from "react";
import { useRoutes } from "react-router-dom";

export default function Routes() {
  const RouteList = useRoutes([
    {
      path: "/",
      element: <div>Home</div>,
    },
    {
      path: "/users",
      element: <div>users</div>,
      children: [
        {
          path: ":id",
          element: <div>User profile</div>,
        },
      ],
    },
    {
      path: "*",
      element: <div>404</div>,
    },
  ]);
  return RouteList;
}
