import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import Naver from "../../feature/login/Naver";
import Kakao from "../../feature/login/Kakao";

export default function ModalContent({ setModalOpen }) {
  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  const closeModal = () => {
    setModalOpen(false);
  };
  //테스트 게릿

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={styles.container}>
      <div>I'm a modal dialog</div>
      <Naver />
      <Kakao />
      <button className={styles.close} onClick={closeModal}>
        X
      </button>
    </div>
  );
}
