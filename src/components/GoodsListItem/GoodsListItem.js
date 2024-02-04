import React from "react";
import { Link } from "react-router-dom";
import styles from "./GoodsListItem.module.scss";
import { useDispatch } from "react-redux";
import { addGoodsActionCreator } from "../../store/reducers/cart.reducer";

function GoodsListItem({ products }) {
  const dispatch = useDispatch();

  const handleClickAddGoods = (e) => {
    e.preventDefault(); // 페이지 이동 방지

    const id = products.goodsno;
    const amount = 1;
    const item = { id, amount };
    const action = addGoodsActionCreator(item);

    dispatch(action);
  };

  return (
    <>
      <Link to={`/detail-page/${products.goodsno}`} className={styles.wrapper}>
        <img src={products.img_i} alt={products.goodsnm} />
        <h6>{products.brandnm}</h6>
        <div className={styles.name}>{products.origin}</div>
        <div className={styles.priceWrapper}>
          <div className={styles.price}>
            {products.goods_price.toLocaleString()}원
          </div>
          <div className={styles.discount}>{products.sale_percent}%</div>
        </div>
        <div className={styles.cartWrapper}>
          <button onClick={handleClickAddGoods}>
            <img src="/cart1.png" alt="cart1" />
          </button>
        </div>
      </Link>
    </>
  );
}

export default GoodsListItem;
