import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";

function Header() {
  const { isLoggedIn, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickLoggedOut = (e) => {
    e.preventDefault();
    logout(); // 로그아웃 함수 호출
  };

  return (
    <header className={`${styles.wrapper} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <span>럭셔리 쇼핑이 참 쉽다, 발랑</span>
        <span>Online luxury boutique</span>
        <span>
          {isLoggedIn ? (
            <>
              <span>udemy 님 안녕하세요</span>
              <button className={styles.logout} onClick={handleClickLoggedOut}>
                {"로그아웃 |"}
              </button>
              <Link className={styles.link} to="/my-page">
                {"마이페이지 | "}
              </Link>
            </>
          ) : (
            <>
              <Link className={styles.link} to="/sign-in">
                로그인 |
              </Link>
              <Link className={styles.link} to="/sign-in">
                {" 마이페이지 | "}
              </Link>
            </>
          )}
          <Link className={styles.link} to="/">
            {" 주문배송 | "}
          </Link>
          <Link className={styles.link} to="/">
            {" 고객센터"}
          </Link>
        </span>
      </nav>
      <div className={styles.header}>
        <p>
          <span className={styles.women}>WOMEN</span> | MEN
        </p>
        <Link to="/" className={styles.logo}>
          <img src="/balaan.png" alt="logo" />g
        </Link>
        <span className={styles.rightWrapper}>
          <div className={styles.searchWrapper}>
            <input
              className={styles.fakeSearch}
              type="text"
              placeholder="검색바인척..."
            />
            <button className={styles.fakeSearchBtn}></button>
          </div>
          {isLoggedIn ? (
            <Link to="/cart-page" className={styles.cartBtn}>
              <img src="/cart.png" alt="cart" />
            </Link>
          ) : (
            <Link to="/sign-in" className={styles.cartBtn}>
              <img src="/cart.png" alt="cart" />
            </Link>
          )}
        </span>
      </div>
    </header>
  );
}

export default Header;
