import React from 'react';
import './App.css';

//세부컴포넌트 연결
import Headers from './header';
import MainImg from './mainImg';
import Contents from './contents';
import Footer from './footer';

function App() { //무조껀App 대문자
  return (
    <div className="wrap">
      <Headers />
      <MainImg />
      <Contents />
      <Footer />
      {/* js/jsx  사람에 따라 사용하는게 다르다 */}
    </div>
  );
}

export default App; //보내기
