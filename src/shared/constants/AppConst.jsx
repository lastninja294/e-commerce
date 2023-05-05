import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "antd";

import cat1 from "@/assests/cat1.webp";
import cat2 from "@/assests/cat2.webp";
import cat3 from "@/assests/cat3.webp";
import cat4 from "@/assests/cat4.webp";

export const categories = [
  {
    img: cat1,
    name: "electronics",
    id: 1,
  },
  {
    img: cat2,
    name: "jewelery",
    id: 2,
  },
  {
    img: cat3,
    name: "men's clothing",
    id: 3,
  },
  {
    img: cat4,
    name: "women's clothing",
    id: 4,
  },
];

export const menus = [
  {
    name: "Home",
    id: 1,
    path: "/",
  },

  {
    name: "WishList",
    id: 3,
    path: "/wishlist",
  },
  {
    id: 4,
    path: "/cart",
    icon: (
      <Badge size="small" count={1}>
        <AiOutlineShoppingCart size={20} />
      </Badge>
    ),
  },
];

export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

export const sliderItems = [
  {
    key: 1,
    caption: "All the Lastest Product In One Place",
  },
  {
    key: 2,
    caption: "Grab the Lastest Product",
  },
  {
    key: 3,
    caption: "Find All Your Needs In One Place",
  },
];
