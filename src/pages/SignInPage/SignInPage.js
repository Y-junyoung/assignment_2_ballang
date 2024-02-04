import React from "react";
import styles from "./SignInPage.module.scss";
import { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const { signin } = useAuth();
  const navigate = useNavigate(); //루트페이지로 돌아가기 위함

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleClickSignIn = (e) => {
    e.preventDefault();
    if (!userName || !password)
      return alert("아이디 또는 비밀번호를 입력해 주세요");

    if (userName === "udemy" && password === "udemy") {
      signin(true);
      navigate("/"); // 루트 페이지로 이동
    } else {
      return alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <h2>Login</h2>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={styles.input}
            placeholder="아이디를 입력해 주세요"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            placeholder="비밀번호를 입력해 주세요"
          />
          <label htmlFor="remember">
            <input className={styles.checkbox} type="checkbox" id="remember" />
            아이디 저장하기
          </label>

          <input
            type="submit"
            className={styles.button}
            onClick={handleClickSignIn}
            value={"로그인하기"}
          />
        </form>
      </div>
    </div>
  );
}

export default SignInPage;
