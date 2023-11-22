import React from 'react';
import './Main.css'; // CSS 파일을 추가해야 합니다.
import { Link } from 'react-router-dom';

import mainCoffeeImage from '../assets/images/main-coffee.png';

function Main() {
    return (
        <div className="main-container">
            <div className='main-text'>
                커피메뉴로 알아보는 <br></br>나의 MBTI
            </div>
            <div className='main-container-image'>
             <img src={mainCoffeeImage} alt="Main Coffee" />
            </div>
            <div className="buttons-container">
                <Link to="/test">
                    <button>시작하기</button>
                </Link>
                <Link to="/AllTheMenu">
                    <button>전체 메뉴 보기</button>
                </Link>
                <Link to="/KakaoShare">
                    <button>카카오톡 공유하기</button>
                </Link>
            </div>
        </div>
    );
}

export default Main;