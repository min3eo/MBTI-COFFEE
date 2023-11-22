// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Test from './components/Test'; 
import AllTheMenu from './components/AllTheMenu';
import KakaoShare from './components/KakaoShare'; // KakaoLogin 컴포넌트를 임포트합니다.


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/allTheMenu" element={<AllTheMenu />} />
        <Route path="/kakaoSahre" element={<KakaoShare />} />

      </Routes>
    </Router>
  );
}

export default App;