import React, { useEffect } from 'react';

const KakaoShare = () => {
  useEffect(() => {
    window.Kakao.init('YOUR_KAKAO_API_KEY'); // 카카오 API 키
    
    // SDK가 초기화 확인
    if (window.Kakao.isInitialized()) {
      // 공유 버튼 생성
      window.Kakao.Link.createDefaultButton({
        container: '#kakao-share-button',
        objectType: 'feed',
        content: {
          title: '공유할 제목',
          description: '공유할 설명',
          imageUrl: '공유할 이미지 URL',
          link: {
            mobileWebUrl: '공유할 웹 페이지 URL',
            webUrl: '공유할 웹 페이지 URL'
          }
        }
      });
    }
  }, []);

  return (
    <button id="kakao-share-button">카카오톡으로 공유하기</button>
  );
};

export default KakaoShare;