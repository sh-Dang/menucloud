import React, { useState } from 'react';
import './Table.css';
import PaymentModal from '../../components/PaymentModal'; // Modal 컴포넌트 임포트
import OrderModal from '../../components/OrderModal'; // 주문용 모달 컴포넌트
import Clock from '../../components/Clock'; // Clock 컴포넌트 임포트

function Table() {
  // 테이블 목록 데이터
  const tables = ['홀1', '홀2', '홀3', '홀4', '홀5'];
  const [addOrderModalTable, setAddOrderModalTable] = useState(null);
  const [paymentModalTable, setPaymentModalTable] = useState(null);

  const handleAddOrderClick = (tableName) => {
    setAddOrderModalTable(tableName);
  };

  const handleCloseAddOrderModal = () => {
    setAddOrderModalTable(null);
  };

  const handlePaymentClick = (tableName) => {
    setPaymentModalTable(tableName);
  };

  const handleClosePaymentModal = () => {
    setPaymentModalTable(null);
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
              <button className="add-order-button" onClick={() => handleAddOrderClick(tableName)}>주문추가</button>
            </div>
            
            {/* 테이블의 현재 주문 내역 등 다른 내용을 이 곳에 추가할 수 있습니다. */}

            <button className="payment-button" onClick={() => handlePaymentClick(tableName)}>결제완료</button>
          </div>
        ))}
        {/* 시계 컴포넌트 렌더링 */}
        <Clock className="clock-grid-item" />
      </div>

      {/* 주문추가 모달 컴포넌트 렌더링 */}
      <OrderModal isOpen={addOrderModalTable !== null} onClose={handleCloseAddOrderModal}>
        <h2 style={{color:'black'}}>{addOrderModalTable} - 새 주문 추가</h2>
        <p style={{color:'black'}}>여기에 주문 추가 폼이나 내용을 넣으세요.</p>
      </OrderModal>

      {/* 결제완료 확인 모달 컴포넌트 렌더링 */}
      <PaymentModal isOpen={paymentModalTable !== null} onClose={handleClosePaymentModal}>
        <h2 style={{color:'black'}}>{paymentModalTable} - 결제 확인</h2>
        <p style={{color:'black'}}>결제를 완료하시겠습니까?</p>
        <button onClick={handleConfirmPayment} style={{ marginRight: '10px' }}>예</button>
        <button onClick={handleClosePaymentModal} style={{ marginLeft: '10px' }}>아니오</button>
      </PaymentModal>
    </div>
  );
}

export default Table;