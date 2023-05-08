import React from "react";
import { Card, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";

import styles from "./ProductCard.module.scss";

import { addToCart, removeFromCart } from "@/Redux/features/Cart/CartSlice";
import {
  addToWishList,
  removeFromWishList,
} from "@/Redux/features/wishlist/WishListSlice";

const { Meta } = Card;

function ProductCard({ product }) {
  const { id, image, title, price, isLoading } = product;
  const dispatch = useDispatch();

  const isLiked = useSelector((state) => state.wishlist.wishList).some(
    (p) => p?.id === id
  );

  const inCart = useSelector((state) => state.cart.cart).some(
    (p) => p?.id === id
  );

  return (
    <Card
      loading={isLoading}
      style={{
        width: 300,
      }}
      cover={
        <div className={styles.imageWrapper}>
          <img alt="example" src={image} className={styles.image} />
        </div>
      }
      actions={[
        <AiFillHeart
          key="like"
          color={isLiked ? "red" : "inherit"}
          type="fill"
          size={20}
          onClick={() => {
            if (!isLiked) {
              dispatch(addToWishList(product));
            } else {
              dispatch(removeFromWishList(product));
            }
          }}
        />,
        <BsFillCartPlusFill
          key="cart"
          size={20}
          onClick={() => {
            if (!inCart) {
              dispatch(addToCart(product));
              message.success("Product successfully added to cart", 2);
            } else {
              dispatch(removeFromCart(product));
              message.success("Product successfully removed from cart", 2);
            }
          }}
        />,
      ]}
    >
      <Meta title={title} description={`This product's price is : ${price}$`} />
    </Card>
  );
}

export default ProductCard;
