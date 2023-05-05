import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { TbMoodEmpty } from "react-icons/tb";

import styles from "@/Pages/WishList/WishList.module.scss";

import ProductCard from "@/Components/ProductCard";
import { removeAll } from "@/Redux/features/wishlist/WishListSlice";

function WishList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.wishlist.wishList);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>My WishList</h1>
      <div className={styles.wishlist}>
        {products.length > 0 ? (
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <div>
            <TbMoodEmpty size={32} />
            <p>Your Wishlist is Empty</p>
          </div>
        )}
      </div>
      {products.length > 0 && (
        <div style={{ textAlign: "center" }}>
          <Button
            type="primary"
            size="middle"
            onClick={() => {
              dispatch(removeAll());
            }}
          >
            Clear wishlist
          </Button>
        </div>
      )}
    </div>
  );
}

export default WishList;
