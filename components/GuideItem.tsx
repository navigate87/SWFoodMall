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
              {/* <GuideStore onClick={onClick}> */}
                <ShimmerButton isVisible={isVisible} onClick={onClick} className={isShimmering ? 'active' : ''}>
                  <FloorText>{data.floor}</FloorText>
                  <StoreNameText>{data.alt}</StoreNameText>
                  <span className='shimmer'></span>
                </ShimmerButton>
                  
              {/* </GuideStore> */}
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
  border-radius: 10px;
  
  /* background: ${({ isVisible }) => (isVisible ? "#ff0000" : 'rgba(0,0,0, 0.5)')}; */
  bottom: ${({ box_bottom }) => box_bottom}px;
  left: ${({ box_left }) => box_left}px;
  height: 68px;
  width: 72px;
  cursor: pointer;
  z-index: 500; 
  /* z-index: ${({ isVisible }) => (isVisible ? "400" : "300")}; */

  /* &:hover{
    background: #f84040;
  } */
`;


const GuideStore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  flex-direction: column;
  position: relative;
  z-index: 400;
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

  //z-index: ${({ isVisible }) => (isVisible ? "101" : "none")};
`;

const MixBlendModeBox =styled.div<{isVisible:boolean}>`
    position: absolute;
    z-index: 50;
`;

const FloorText = styled.p`
    font-size: 10px;
    color: #fff;
    margin: 3px;
`;

const StoreNameText = styled.p`
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    margin: 3px;
`;