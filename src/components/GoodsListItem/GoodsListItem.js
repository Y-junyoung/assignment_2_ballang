import React from "react";
import { Link } from "react-router-dom";
import styles from "./GoodsListItem.module.scss";
import { useDispatch } from "react-redux";
import { addGoods } from "../../store/reducers/cart.reducer";
import { useAuth } from "../../contexts/auth.context";

function GoodsListItem({ products }) {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const handleClickAddGoods = (e) => {
    e.preventDefault(); // 페이지 이동 방지

    const id = products.id;
    const count = 1;
    const item = { id, count };
    dispatch(addGoods(item));

    alert("해당 상품이 장바구니에 추가 되었습니다.");
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
          {isLoggedIn ? (
            <button className={styles.cartBtn} onClick={handleClickAddGoods}>
              <img src="/cart1.png" alt="cart1" />
            </button>
          ) : (
            <Link to="/sign-in" className={styles.cartBtn}>
              <img src="/cart1.png" alt="cart" />
            </Link>
          )}
        </div>
      </Link>
    </>
  );
}

export default GoodsListItem;
