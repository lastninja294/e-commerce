import React from "react";
import { Badge } from "antd";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const CartCount = () => {
  const count = useSelector((state) => state.cart.count);

  return (
    <Badge size="small" count={count}>
      <AiOutlineShoppingCart color="white" size={20} />
    </Badge>
  );
};

export default CartCount;
