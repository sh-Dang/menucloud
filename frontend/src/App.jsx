import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 공통 네비게이션 바나 푸터가 있다면 여기에 위치시킵니다. */}
      <main>
        <Outlet /> {/* 페이지 컴포넌트가 이 자리에 렌더링됩니다. */}
      </main>
    </div>
  );
}

export default App;
