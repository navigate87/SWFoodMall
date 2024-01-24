import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { StoreInfoProps, StoreInfoDataProps } from '@/data/StoreInfoType';
import Link from 'next/link';

interface StoreInfoCardProps {
    storeInfo?: StoreInfoDataProps
    isVisible?: boolean
}

const StoreInfoCard: React.FC<StoreInfoCardProps> = ({ storeInfo, isVisible }) => {
  if (!storeInfo) {
    return <div>정보가 없습니다.</div>;
  }
  useEffect(() => {
    console.log("storeInfo과 isVisible", storeInfo, )

  })
  const isPosChange = () => {
    return ['아뜰리에', '스시노', '성원정', '루프가든'].includes(storeInfo.alt);
  }

  const isRoomOrHall = () => {
    if(storeInfo.alt === "연회장" 
    ) {
      return "모든 연회장 보기"
    } else if(storeInfo.alt === "객실"){
      return "모든 객실 보기"
    } else {
      return "자세히 보기"
    }
  }

  const linkTarget = () => {
    if(!storeInfo) {
      return "/"
    }

    if(storeInfo.alt === "연회장") {
      return {
        pathname: "/hall",
        query: { storeName: storeInfo.title }
      } 
      
    } else if(storeInfo.alt === "성원정") {
      return {
        pathname: "/swjung",
        query: { storeName: storeInfo.title }
      } 
    } else {
      return "/"
    }
  }

  const isOperationHour = () => {
    if(storeInfo.operationHours === "없음") {
      return false;
    }

    return true;
  }

  return (
    <InfoCardContainer isLeft={isPosChange()} isVisible={isVisible}>
      <ImageContainer>
        <Image src={storeInfo.imgSrc} width={432} height={340} alt={storeInfo.alt} />
      </ImageContainer>
      <DetailsContainer>
        <TitleRow>
          <Title>{storeInfo.title}</Title>
          <LocationIconContainer>
            <Image src={"/icon/icon-location.svg"} width={14} height={18} alt="Location" />
          </LocationIconContainer>
        </TitleRow>
        <SubtitleRow>{storeInfo.subtitle}</SubtitleRow>
        <Description>{storeInfo.description}</Description>
        <InfoRow>
          {
            isOperationHour() && <InfoText>영업시간<DetailText> | {storeInfo.operationHours}</DetailText></InfoText>
          }
          <InfoText>위치<DetailText> | {storeInfo.location}</DetailText></InfoText>
        </InfoRow>
        <ButtonRow>
          <Link href={linkTarget()}>
            
              <DetailedViewButton>
                { isRoomOrHall() }
                <div style={{ margin: "7px" }}>
                  <Image src={"/icon/icon_plus.svg"} width={12} height={12} alt="plus" />
                </div>
              </DetailedViewButton>
            
          </Link>
          
        </ButtonRow>
      </DetailsContainer>
    </InfoCardContainer>
  );
}

export default StoreInfoCard;


const slideInLeftToRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRightToLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const InfoCardContainer = styled.div<{isLeft:boolean, isVisible?: boolean}>`
  z-index: 350;
  position: absolute;
  left: ${({ isLeft }) => (isLeft? "30" : "1450")}px;
  bottom: 88px;
  width: 432px;
  height: 636px;
  animation: ${({ isLeft }) => (isLeft ? slideInLeftToRight : slideInRightToLeft)} 0.5s ease-out;
`;

const ImageContainer = styled.div``;

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fefefe;
  height: 298px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 65px;
  margin-top: 18px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-right: 5px;
  height: 44px;
  color: #22201f;
  letter-spacing: -0.6px;
  font-family: SourceHanSans;
  line-height: 48px;
`;

const LocationIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ededed;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const SubtitleRow = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 24px;
  font-size: 16px;
  letter-spacing: -0.32px;
  color: #707070;
  font-weight: bold;
  font-family: SourceHanSans;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 40px;
  /* word-wrap: break-word; */
  line-height: 16px;
  letter-spacing: -0.28px;
  color: #707070;
  font-family: 'SourceHanSans';
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 20px;
  margin-top: 14px;
`;

const InfoText = styled.div`
  flex: 1;
  font-weight: bold;
  color: #707070;
  font-size: 14px;
  letter-spacing: -0.28px;
  font-family: SourceHanSans;
`;

const DetailText = styled.span`
  font-weight: 500;
  color: #9b9b9b;
  font-size: 14px;
  letter-spacing: -0.28px;
  font-family: SourceHanSans;
`;

const ButtonRow = styled.div`
  flex: 1;
  margin-top: 43px;
`;

const DetailedViewButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #ededed;
  border-radius: 10px;
  width: 176px;
  height: 50px;
  font-weight: bold;
  color: #707070;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
  font-size: 18px;
  cursor: pointer;
  font-family: SourceHanSans;
  &:hover {
    border: 2px solid #f84040;
  }
`;