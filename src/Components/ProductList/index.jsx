import React from "react";

import styles from "./ProductList.module.scss";

import ProductCard from "@/Components/ProductCard";

import { useProductsList } from "@/services/hooks/useProductsList";

function ProductList() {
  const { data, isLoading, isSuccess } = useProductsList();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h3>Shop by Collection</h3>
        <p>
          Each season, we collaborate with world class designers to create a
          collection inspired by natural world
        </p>
      </div>
      <div className={styles.products}>
        {isSuccess &&
          data.map((e) => {
            return <ProductCard key={e.id} product={e} />;
          })}
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default ProductList;
