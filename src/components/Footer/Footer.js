import React from "react";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <a href="/">
            회사소개 | 제휴문의 | 고객센터 | 이용약관 | 개인정보처리지침
          </a>
          <p>
            주식회사 발랑 | 대표:홍길동 | 사업자 등록번호 123-45-6789 |
            통신판매업신고 2024-서울종로-00000 | 재무지급보증안내
          </p>
          <p>서울특별시 중구 청계천로 24, B2층(04521)</p>
        </div>
        <div className={styles.right}>
          <div className={styles.imgWrapper}>
            <a href="/">
              <img src="/facebook.png" alt="facebook" />
            </a>
            <a href="/">
              <img src="/insta.png" alt="instagram" />
            </a>
            <a href="/">
              <img src="/twi.png" alt="twitter" />
            </a>
          </div>
          <div className={styles.imgWrapper}>
            <a href="/">
              <img src="/phone.png" alt="phone" />
            </a>
            <a href="/">
              <img src="/email.png" alt="email" />
            </a>
            <a href="/">
              <img src="/location.png" alt="location" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
