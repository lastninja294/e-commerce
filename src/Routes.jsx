import React from "react";
import { useRoutes, Outlet } from "react-router-dom";

import Home from "@/Pages/Home";
import Cart from "@/Pages/Cart";
import ProductDetails from "@/Components/ProductDetails";
import WishList from "@/Pages/WishList";
import ErrorPage from "@/Pages/ErrorPage";

export default function Routes() {
  const RouteList = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/wishlist",
      element: <WishList />,
    },
    {
      path: "/products",
      element: <Outlet />,
      children: [
        {
          path: ":id",
          element: <ProductDetails />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return RouteList;
}
