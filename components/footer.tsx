import Image from "next/image";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrap>
      <FLEX1 />
      <ImgContainer>
        <Image alt="Swfood" src="/image/bi-color.svg" width={80} height={80} />
      </ImgContainer>
        
      <LeftSection>
        <CsInfoUl>
          <CsInfoUlLi>
            <CsFontStyleP1>CS CENTER</CsFontStyleP1>
          </CsInfoUlLi>
          <CsInfoUlLi>
            <CsFontStyleH3>1811-1811</CsFontStyleH3>
          </CsInfoUlLi>
          <CsInfoUlLi>
            <CsFontStyleP2>
              CS 운영시간: 
            </CsFontStyleP2>
            <CsFontStyleP3>
              오전10시~오후6시
            </CsFontStyleP3>
          </CsInfoUlLi>
        </CsInfoUl>
      </LeftSection>
      <RightSection>
        <RightFlexBox>
          <InfoBox>
            <InfoBoxUl>
              <InfoBoxUlLi>이용약관</InfoBoxUlLi>
              <InfoBoxUlLi>|</InfoBoxUlLi>
              <InfoBoxUlLi>개인정보처리받침</InfoBoxUlLi>
              <InfoBoxUlLi>|</InfoBoxUlLi>
              <InfoBoxUlLi>이용안내</InfoBoxUlLi>
              <InfoBoxUlLi>|</InfoBoxUlLi>
              <InfoBoxUlLi>입점문의</InfoBoxUlLi>
            </InfoBoxUl>
          </InfoBox>
          <InfoBox>
            <InfoBoxUl>
              <InfoBoxUlLi>대표이사 <span> : </span> 정대원</InfoBoxUlLi>
              <InfoBoxUlLi>|</InfoBoxUlLi>
              <InfoBoxUlLi>사업자등록번호 <span> : </span>01-85-39823</InfoBoxUlLi>
              <InfoBoxUlLi>|</InfoBoxUlLi>
              <InfoBoxUlLi>사업자정보확인 <span> </span>사업자등록증</InfoBoxUlLi>
              <InfoBoxUlLi>|</InfoBoxUlLi>
              <InfoBoxUlLi>통신판매업 신고 <span> : </span> 제 2018-서울중구-1731호</InfoBoxUlLi>
            </InfoBoxUl>
          </InfoBox>
          <InfoBox>
            <InfoBoxUl>
              <InfoBoxUlLi>주소 <span> : </span> 서울특별시 중구 퇴계로 211-5 성원푸드몰</InfoBoxUlLi>
              <InfoBoxUlLi>|</InfoBoxUlLi>
              <InfoBoxUlLi>팩스<span> : </span>1811-1819</InfoBoxUlLi>
              <InfoBoxUlLi>|</InfoBoxUlLi>
              <InfoBoxUlLi>문의메일 <span> : </span>reservation@swfoodmall.com</InfoBoxUlLi>
              <InfoBoxUlLi>|</InfoBoxUlLi>
              <InfoBoxUlLi>통신판매업 신고 <span> : </span> 제 2018-서울중구-1731호</InfoBoxUlLi>
            </InfoBoxUl>
          </InfoBox>
          <CopyBox><p>COPYRIGHT ㉿ 2020. FoodMall. all rights reserved</p> </CopyBox>
        </RightFlexBox>
      </RightSection>
      <FLEX1 />
    </Wrap>
  );
}

const Wrap = styled.div`
  min-height: 30vh;
  position: relative;
  width: 100%;
  background-color: #F1F1F1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const FLEX1 = styled.div`
  flex: 2;
`;
const LeftSection = styled.div`
  flex: 3;
  padding-bottom: 20px;
`;

const CsInfoUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const CsInfoUlLi = styled.li`
  margin: 0 9px;
`;

const RightSection = styled.div`
  flex: 9;
`;

const LeftFlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgContainer = styled.div`
  flex: 1;
  padding-bottom: 20px;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

const CsFontStyleP1 = styled.p`
  padding-right: 50px;
  font-size: 15px;
`;

const CsFontStyleH3 = styled.h3`
  padding-top: 18px;
  font-weight: bold;
  font-size: 25px;
`;

const CsFontStyleP2 = styled.span`
  font-size: 10px;
  font-weight: bold;
`;

const CsFontStyleP3 = styled.span`
  font-size: 10px;
`;

const RightFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
`;

const InfoBox = styled.div`
  flex: 6;
`;

const InfoBoxUl = styled.ul`
  display: flex;
  margin-bottom: 5px;
`;

const InfoBoxUlLi = styled.li`
  font-size: 10px;
  margin: 0 7px;
  color: #A4A4A4;
`;

const CopyBox = styled.div`
  font-size: 10px;
  color: #A1A1A1;
  margin: 0 7px;
  padding-top: 17px;
`;














