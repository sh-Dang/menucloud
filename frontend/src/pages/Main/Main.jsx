import React from 'react';
import './Main.css';
import poslogo from '/poslogo.png';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate(); // 이동용 훅
  const handleStart = () => {
    // 시작하기 버튼 클릭 시 동작 (추후 구현)
  // /table로 이동
    navigate("/table");
    console.log("시작하기");
  };

  const handleExit = () => {
    // 나가기 버튼 클릭 시 동작
    // window.close(); // 일부 브라우저에서는 스크립트로 창을 닫는 것이 제한될 수 있습니다.
    alert("애플리케이션을 종료합니다.");
  };

  return (
    <div className="main-container">
      <img src={poslogo} alt="POS Logo" className="logo" />
      <div className="button-container">
        <button onClick={handleStart} className="main-button">시작하기</button>
        <button onClick={handleExit} className="main-button">나가기</button>
      </div>
    </div>
  );
}

export default Main;