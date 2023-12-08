import { GuideData } from '@/data/GuideType';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface GuideItemProps {
    data: GuideData;
    isVisible: boolean;
    onClick: () => void;
}

const GuideItem: React.FC<GuideItemProps> = ({ data, isVisible, onClick }) => {
    return (
        <GuideStoreBox box_bottom={data.box_bottom} box_left={data.box_left} isVisible={isVisible} >
            <GuideStore isVisible={isVisible} onClick={onClick}>
                <FloorText>{data.floor}</FloorText>
                <StoreNameText>{data.alt}</StoreNameText>
            </GuideStore>
            <GuideOverLayBox 
                width={data.width} 
                height={data.height} 
                bottom={data.bottom} 
                left={data.left} 
                isVisible={isVisible}
                onClick={onClick}
            >
                <Image 
                    src={data.overlay_src} 
                    width={data.width} 
                    height={data.height} 
                    alt={data.alt} 
                />
            </GuideOverLayBox>
        </GuideStoreBox>
        
    )
}

export default GuideItem

const GuideStoreBox = styled.div<{ box_bottom: number, box_left: number, isVisible: boolean}>`
  position: absolute;
  border-radius: 50%;
  background: ${({ isVisible }) => (isVisible ? "#ff0000" : 'rgba(0,0,0, 0.5)')};
  bottom: ${({ box_bottom }) => box_bottom}px;
  left: ${({ box_left }) => box_left}px;
  height: 65px;
  width: 68px;
  cursor: pointer;
  z-index: ${({ isVisible }) => (isVisible ? "104" : "100")};
  &:hover{
    background: #f84040;
  }
`;

const GuideStore = styled.div<{isVisible:boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  flex-direction: column;
  
`;

const GuideOverLayBox = styled.div<{ width:number, height:number, bottom:number, left:number, isVisible:boolean }>`
  position: absolute;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  bottom: ${({ bottom }) => bottom}px;
  left: ${({ left }) => left}px;
  filter:  ${({ isVisible }) => (isVisible ? "opacity(8%) drop-shadow(1px 1px 1px rgba(255, 255, 255, 0.2)) drop-shadow(1px 1px 1px rgba(255, 255, 255, 0.2)) drop-shadow(1px 1px 1px rgba(255, 255, 255, 0.7))" : "none")} ;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  //z-index: ${({ isVisible }) => (isVisible ? "101" : "none")};
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