// components/ImageSlider.tsx

import React, { useState } from 'react';
import styled from 'styled-components';

// 스타일드 컴포넌트
const SliderContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; // 스크롤바 숨기기
`;

const Slide = styled.div`
  flex: none;
  width: 200px; // 슬라이드의 넓이, 필요에 따라 조정
  scroll-snap-align: start;
  margin-right: 15px; // 슬라이드 간 간격
`;

// 이미지 데이터 타입
interface ImageData {
  img_src: string;
  alt: string;
  path: string;
}

// 슬라이더 프롭스 타입
interface SliderProps {
  images: ImageData[];
}

// 슬라이더 컴포넌트
const ImageSlider: React.FC<SliderProps> = ({ images }) => {
  // 상태 관리가 필요한 경우 사용
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide key={index}>
          <img src={image.img_src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
        </Slide>
      ))}
    </SliderContainer>
  );
};

export default ImageSlider;
