import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import { StoreInfoProps, StoreInfoDataProps } from '@/data/StoreInfoType';

interface StoreInfoCardProps {
    storeInfo?: StoreInfoDataProps
}

const StoreInfoCard: React.FC<StoreInfoCardProps> = ({ storeInfo }) => {
  if (!storeInfo) {
    return <div>정보가 없습니다.</div>;
  }

  const isPosChange = () => {
    if(storeInfo.alt === "카페" || 
      storeInfo.alt === "일식" ||
      storeInfo.alt === "한식∙정육" ||
      storeInfo.alt === "루프가든"
    ) {
      return true;
    } else {
      return false;
    }
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

  const isOperationHour = () => {
    if(storeInfo.operationHours === "없음") {
      return false;
    }

    return true;
  }

  return (
    <InfoCardContainer isLeft={isPosChange()}>
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
          <DetailedViewButton>
            { isRoomOrHall() }
            <div style={{ margin: "7px" }}>
              <Image src={"/icon/icon_plus.svg"} width={12} height={12} alt="plus" />
            </div>
          </DetailedViewButton>
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

 

const InfoCardContainer = styled.div<{isLeft:boolean}>`
  z-index: 350;
  position: absolute;
  left: ${({ isLeft }) => (isLeft? "50" : "1450")}px;
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
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-right: 5px;
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
  height: 30px;
  font-size: 12px;
  color: #707070;
  font-weight: bold;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 50px;
  word-wrap: break-word;
  line-height: 15px;
  color: #707070;
  font-family: 'SourceHanSans';
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 50px;
`;

const InfoText = styled.div`
  flex: 1;
  font-weight: bold;
  color: #707070;
`;

const DetailText = styled.span`
  color: #9b9b9b;
`;

const ButtonRow = styled.div`
  flex: 1;
  margin: 27px;
`;

const DetailedViewButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #ededed;
  border-radius: 15px;
  width: 176px;
  height: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  color: #707070;
  cursor: pointer;
`;