import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./MyPage.module.scss";
import {
  changeAddress,
  changeEmail,
  changeNickname,
} from "../../store/reducers/user.reducer";
import { Link } from "react-router-dom";

function MyPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // 입력된 값을 임시로 저장할 상태 추가
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleNicknameChange = (e) => {
    setEditedUser({ ...editedUser, nickname: e.target.value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      address: {
        ...editedUser.address,
        [name]: value,
      },
    });
  };

  const handleEmailChange = (e) => {
    setEditedUser({ ...editedUser, email: e.target.value });
  };

  // 변경된 정보를 스토어에 반영하는 함수
  const handleSaveChanges = () => {
    // 변경된 유저 정보를 디스패치
    dispatch(changeNickname({ nickname: editedUser.nickname }));
    dispatch(changeAddress({ address: editedUser.address }));
    dispatch(changeEmail({ email: editedUser.email }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.myPage}>
        <h2>My Page</h2>
        <div className={styles.inputWrapper}>
          <label>
            <strong>Nickname: </strong>
            {user.nickname}
            <input
              type="text"
              value={editedUser.nickname}
              onChange={handleNicknameChange}
            />
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <label>
            <strong>Address: </strong>
            {user.address.city} {user.address.street}, {user.address.zipCode}
            <input
              type="text"
              name="city"
              value={editedUser.address.city}
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="street"
              value={editedUser.address.street}
              onChange={handleAddressChange}
            />
            <input
              type="text"
              name="zipCode"
              value={editedUser.address.zipCode}
              onChange={handleAddressChange}
            />
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <label>
            <strong>Email: </strong>
            {user.email}
            <input
              type="email"
              value={editedUser.email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <button className={styles.submitButton} onClick={handleSaveChanges}>
          변경
        </button>
        <Link to="/cart-page" className={styles.submitButton}>
          장바구니
        </Link>
      </div>
    </div>
  );
}

export default MyPage;
