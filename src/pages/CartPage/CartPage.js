import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeGoods, updateCount } from "../../store/reducers/cart.reducer";
import styles from "./CartPage.module.scss";
import api from "./../../api/api";

function CartPage() {
  const dispatch = useDispatch();
  const cartGoods = useSelector((state) => state.cart.goods);
  const [cartProducts, setCartProducts] = useState([]);
  const [productCounts, setProductCounts] = useState({});

  useEffect(() => {
    const fetchCartProducts = async () => {
      const products = await Promise.all(
        cartGoods.map((item) => api.products.getProduct(item.id))
      );
      setCartProducts(products);

      // 장바구니에 있는 각 상품의 수량을 설정
      const counts = {};
      cartGoods.forEach((item) => {
        counts[item.id] = item.count;
      });
      setProductCounts(counts);
    };
    fetchCartProducts();
  }, [cartGoods]);

  const handleRemoveGoods = (goodsId) => {
    dispatch(removeGoods(goodsId));
  };

  const handleUpdateCount = (goodsId, newCount) => {
    dispatch(updateCount({ id: goodsId, count: newCount }));
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [goodsId]: newCount,
    }));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>장바구니 목록</h2>
      <ul className={styles.cartList}>
        {cartProducts.map((product, index) => (
          <li key={product.id} className={styles.cartItem}>
            <img
              src={product.img_i}
              alt={product.goodsnm}
              className={styles.productImage}
            />
            <h6>{product.brandnm}</h6>
            <div className={styles.productInfo}>
              <div className={styles.name}>{product.origin}</div>
              <div className={styles.productPrice}>
                {product.goods_price.toLocaleString()}원
                <div className={styles.discount}>{product.sale_percent}%</div>
              </div>
              <div className={styles.productCount}>
                <strong>수량:</strong>
                <input
                  type="number"
                  value={productCounts[product.id] || 0}
                  min={1}
                  onChange={(e) =>
                    handleUpdateCount(product.id, parseInt(e.target.value))
                  }
                />
              </div>
              <button className={styles.btn}>구매하기</button>
              <button
                className={styles.btn}
                onClick={() => handleRemoveGoods(product.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPage;
