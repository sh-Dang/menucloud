import React, { useState } from 'react';
import './Table.css';
import Modal from '../../components/Modal'; // Modal 컴포넌트 임포트
import Clock from '../../components/Clock'; // Clock 컴포넌트 임포트

function Table() {
  // 테이블 목록 데이터
  const tables = ['홀1', '홀2', '홀3', '홀4', '홀5'];
  const [isAddOrderModalOpen, setIsAddOrderModalOpen] = useState(false); // 주문추가 모달 상태 관리
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false); // 결제완료 모달 상태 관리

  const handleAddOrderClick = () => {
    setIsAddOrderModalOpen(true); // 주문추가 버튼 클릭 시 모달 열기
  };

  const handleCloseAddOrderModal = () => {
    setIsAddOrderModalOpen(false); // 주문추가 모달 닫기
  };

  const handlePaymentClick = () => {
    setIsPaymentModalOpen(true); // 결제완료 버튼 클릭 시 모달 열기
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false); // 결제완료 모달 닫기
  };

  const handleConfirmPayment = () => {
    // 여기에 박스안의 내용을 초기화 하는 로직을 넣을 것임.
    handleClosePaymentModal();
  }; 

  return (
    <div className="table-page-container">
      <div className="table-grid">
        {tables.map((tableName) => (
          <div key={tableName} className="table-box">
            <div className="table-header">
              <h2 className="table-title">{tableName}</h2>
              <button className="add-order-button" onClick={handleAddOrderClick}>주문추가</button>
            </div>
            
            {/* 테이블의 현재 주문 내역 등 다른 내용을 이 곳에 추가할 수 있습니다. */}

            <button className="payment-button" onClick={handlePaymentClick}>결제완료</button>
          </div>
        ))}
              {/* 시계 컴포넌트 렌더링 */}      <Clock className="clock-grid-item" />      </div>

      {/* 주문추가 모달 컴포넌트 렌더링 */}
      <Modal isOpen={isAddOrderModalOpen} onClose={handleCloseAddOrderModal}>
        <h2 style={{color:'black'}}>새 주문 추가</h2>
        <p style={{color:'black'}}>여기에 주문 추가 폼이나 내용을 넣으세요.</p>
      </Modal>

      {/* 결제완료 확인 모달 컴포넌트 렌더링 */}
      <Modal isOpen={isPaymentModalOpen} onClose={handleClosePaymentModal}>
        <h2 style={{color:'black'}}>결제 확인</h2>
        <p style={{color:'black'}}>결제를 완료하시겠습니까?</p>
        <button onClick={handleConfirmPayment} style={{ marginRight : '10px' }}>예</button>
        <button onClick={handleClosePaymentModal} style={{ marginLeft :'10px'}}>아니오</button>
      </Modal>
    </div>
  );
}

export default Table;