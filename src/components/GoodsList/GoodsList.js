import React from "react";
import styles from "./GoodsList.module.scss";
import GoodsListItem from "../GoodsListItem";

function GoodsList({ products }) {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.listTitle}>WOMEN</h2>

      <ul>
        {products.map((products) => (
          <li key={products.goodsno}>
            <GoodsListItem products={products} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GoodsList;
