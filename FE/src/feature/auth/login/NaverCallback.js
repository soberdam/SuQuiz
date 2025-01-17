import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  useAuthStore,
  useUserNicknameStore,
  useUserEmailStore,
  useProviderStore,
  useTokenStore,
} from "../../../app/store";
import { oauthNaver, checkIsMember } from "../../../apis/usersApi";
import backgroundVideo from "../../../assets/backgroundVideo.mp4";
import styles from "./Callback.module.css";
import ModalSignup from "../signup/ModalSignup";

const NaverCallback = () => {
  const { userId, setUserId } = useAuthStore();
  const { userNickname, setUserNickname } = useUserNicknameStore();
  const { userEmail, setUserEmail } = useUserEmailStore();
  const { provider, setProvider } = useProviderStore();
  const { accessToken, setAccessToken } = useTokenStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // 함수를 전달하여 모달 닫기
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const fetchNickname = async (email, provider) => {
    try {
      const data = await checkIsMember(email, provider); // API 경로
      // 만약 응답이 성공이고, data.data가 존재한다면 그 값을 사용
      if (data.data) {
        setUserNickname(data.data.nickname);
        setUserEmail(null);
        navigate("/");
      } else {
        // 회원가입 모달 띄우자
        handleOpenModal();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleOAuthNaver = async (code, state) => {
    try {
      // 네이버로부터 받아온 code, state를 서버에 전달하여 네이버로 회원가입 & 로그인한다
      const response = await oauthNaver(code, state);
      setUserId(response.data.data.userId);
      setUserEmail(response.data.data.email);
      setProvider(response.data.data.oauthProvider);
      setAccessToken(response.data.data.authTokens.accessToken);
      await fetchNickname(response.data.data.email, response.data.data.oauthProvider);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    if (code && state) {
      handleOAuthNaver(code, state);
    }
  }, [location]);

  return (
    <>
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>

      {/* modalOpen이 true일 때만 모달 렌더링 */}
      {openModal && <ModalSignup onClose={handleCloseModal} email={userEmail} />}
    </>
  );
};

export default NaverCallback;
