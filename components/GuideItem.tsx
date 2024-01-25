import { GuideData } from '@/data/GuideType';
import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import Image from 'next/image';
import { ShimmerButton } from './ShimmerButton';


interface GuideItemProps {
    data: GuideData;
    isVisible: boolean;
    onClick: () => void;
    isShimmering: boolean;
}

const GuideItem: React.FC<GuideItemProps> = ({ data, isVisible, onClick, isShimmering }) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(isVisible);

    useEffect(() => {
    if (!isVisible) {
          // isVisible이 false가 되면 애니메이션 후에 숨김 처리
          const timer = setTimeout(() => {
              setIsOverlayVisible(false);
          }, 900); // 애니메이션 시간과 일치
          return () => clearTimeout(timer);
      } else {
          setIsOverlayVisible(true);
      }
    }, [isVisible]);


    return (
      <>
          <GuideStoreBox box_bottom={data.box_bottom} box_left={data.box_left} isVisible={isVisible}>
                <ShimmerButton isVisible={isVisible} onClick={onClick} className={isShimmering ? 'active' : ''}>
                  <StoreNameText>{data.alt}</StoreNameText>
                  <FloorText>{data.floor}</FloorText>
                  <span className='shimmer'></span>
                </ShimmerButton>
          </GuideStoreBox>

          {
              isOverlayVisible &&
              <GuideOverLayBox 
                  width={data.width} 
                  height={data.height} 
                  bottom={data.bottom} 
                  left={data.left} 
                  isVisible={isVisible}
                  onClick={onClick}
              >
                
                  <MixBlendModeBox isVisible={isVisible}>
                      <Image 
                          style={{ position: "relative", zIndex:"400" }}
                          src={data.overlay_src} 
                          width={data.width} 
                          height={data.height} 
                          alt={data.alt} 
                      />
                  </MixBlendModeBox>
              </GuideOverLayBox>
          } 
      </>
    )
}

export default GuideItem

const GuideStoreBox = styled.div<{ box_bottom: number, box_left: number, isVisible: boolean}>`
  position: absolute;
  border-radius: 32.5px;
  bottom: ${({ box_bottom }) => box_bottom}px;
  left: ${({ box_left }) => box_left}px;
  height: 65px;
  width: 102px;
  cursor: pointer;
  z-index: 500; 
  background: ${({ isVisible }) => (isVisible ? "#f84040" : "none")};
  border: 2px solid rgba(255, 255, 255, 0.6);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  &:hover{
    background: rgba(255, 255, 255, 0.1);
  }
`;

const slideInTopToBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInBottomToTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(10%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GuideOverLayBox = styled.div<{ width:number, height:number, bottom:number, left:number, isVisible:boolean }>`
  position: absolute;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  bottom: ${({ bottom }) => bottom}px;
  left: ${({ left }) => left}px;
  z-index: 350;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  animation: ${({ isVisible }) => (isVisible ? slideInTopToBottom : slideInBottomToTop)} 0.7s ease-out;
`;

const MixBlendModeBox =styled.div<{isVisible:boolean}>`
    position: absolute;
    z-index: 50;
`;

const FloorText = styled.div`
    font-size: 13px;
    color: #fff;
    margin-top: 1px;
    opacity: 0.5;
    font-family: Manrope;
`;

const StoreNameText = styled.div`
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    letter-spacing: -0.36px;
    margin-top: 1px;
    font-family: "SourceHanSans";
`;