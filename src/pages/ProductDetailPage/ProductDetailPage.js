import React, { useEffect, useState } from "react";
import api from "./../../api/api";
import styles from "./ProductDetailPage.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addGoodsActionCreator } from "./../../store/reducers/cart.reducer";

function ProductDetailPage() {
  const { goodsNo } = useParams();
  const [products, setProducts] = useState(null);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const today = new Date(); // 오늘 날짜
  const shipped = new Date(today);
  shipped.setDate(today.getDate() + 2); // 배송완료 날짜

  const handleClickAddGoods = (e) => {
    e.preventDefault(); // 페이지 이동 방지
    const id = products.goodsno;
    const item = { id, amount };
    const action = addGoodsActionCreator(item);

    dispatch(action);
  };

  const handleChangeAmount = (e) => {
    setAmount(parseInt(e.target.value)); // 입력 값을 정수로 변환하여 업데이트
  };

  useEffect(() => {
    api.products.getProduct(goodsNo).then((item) => setProducts(item));
  }, [goodsNo]);

  if (products === null) return null;

  return (
    <div className={styles.wrapper}>
      <h5>
        {products.catnm.map((category, index) => (
          <div className={styles.category} key={index}>
            {" "}
            &gt; {category}
          </div>
        ))}
      </h5>
      <section className={styles.mainInfo}>
        <div>
          <img
            className={styles.arrows}
            src="/icon-arrow-left.png"
            alt="icon-arrow-left"
          />
          <img
            className={styles.posterImg}
            src={products.img_i}
            alt={products.origin}
          />
          <img
            className={styles.arrows}
            src="/icon-arrow-right.png"
            alt="icon-arrow-right"
          />
        </div>

        <div className={styles.mainInfoRight}>
          <h1 className={styles.title}>{products.brandnm}</h1>
          <div className={styles.origin}>
            {products.origin}&nbsp;&nbsp; | 발랑코드&#91;{products.id}&#93;
          </div>

          <div className={styles.detailInfo}>
            <dl>
              <dt>상품 금액</dt>
              <dd className={styles.price}>
                {products.consumer.toLocaleString()}원
              </dd>
            </dl>
            <dl>
              <dt>판매가</dt>
              <dd>{products.standard_price.toLocaleString()}원</dd>
            </dl>
            <dl>
              <dt>최대 혜택가</dt>
              <dd className={styles.max}>
                {products.goods_price.toLocaleString()}원
                <span>{products.sale_percent}%</span>
              </dd>
            </dl>
            <dl>
              <dt>적립금</dt>
              <dd>최대 {(products.consumer * 0.01).toLocaleString()}원</dd>
            </dl>
            <dl>
              <dt>무이자 할부</dt>
              <dd>최대 12개월</dd>
            </dl>
            <dl>
              <dt>배송비</dt>
              <dd>무료</dd>
            </dl>
            <dl>
              <dt>도착예정</dt>
              <dd>{shipped.toLocaleDateString()}도착예정</dd>
            </dl>
          </div>

          <div className={styles.optionWrapper}>
            <form action="/">
              <div>옵션 선택</div>
              <button className={styles.btn1}>size chart</button>
              <select name="options" id="options">
                <option value="option">옵션 (옵션명)</option>
                {products.option.map((option, index) => (
                  <option key={index} value={option.size}>
                    {option.size}(재고 보유중)
                  </option>
                ))}
              </select>
              <button className={styles.btn2}>BUY NOW</button>
              <div className={styles.cartWrapper}>
                <span>수량 : </span>
                <input
                  type="number"
                  value={amount}
                  onChange={handleChangeAmount}
                />
                <button onClick={handleClickAddGoods}>
                  <img src="/cart1.png" alt="cart1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.sectionBt}>
        <h3>상세 정보</h3>
        <div className={styles.infoBottom}>
          <ul className={styles.btWrapper}>
            <li>
              <div className={styles.btName}>브랜드</div>
              <div className={styles.btInfo}>
                {products.brandnm}&#91;바로가기&#93;
              </div>
            </li>
            <li>
              <div className={styles.btName}>상품명 / 모델명</div>
              <div className={styles.btInfo}>{products.origin}</div>
            </li>
            <li>
              <div className={styles.btName}>발랑코드</div>
              <div className={styles.btInfo}>
                {products.id}(상품 문의 시, 꼭 알려주세요!)
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ProductDetailPage;
