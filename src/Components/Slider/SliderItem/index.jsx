import React from "react";

import styles from "./SliderItem.module.scss";

function SliderItem({ img, caption }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={img} alt="" />
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{caption}</h2>
        <p>
          A single place for all your products. Discover more products on our
          products secion
        </p>
      </div>
    </div>
  );
}

export default SliderItem;
