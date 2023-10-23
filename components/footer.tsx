import Image from "next/image";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrap>
      <LeftSection>
        <LeftFlexBox>
          <ImgBox>
            <Image alt="Swfood" src={"/image/bi.png"} width={80} height={80} />
          </ImgBox>
          <CsInfoBox>
            <CsFontStyleP1>CS CENTER</CsFontStyleP1>
            <CsFontStyleH3>1811-1811</CsFontStyleH3>
            <CsFontStyleP2>
              CS 운영시간 : 
            </CsFontStyleP2>
            <CsFontStyleP3> 오전10시~오후6시</CsFontStyleP3>
          </CsInfoBox>
        </LeftFlexBox>
      </LeftSection>
      <RightSection>
        <ul>

        </ul>
        <span>이용약관  | </span>
        <span>개인정보처리방침  | </span>
        <span>이용안내  | </span>
        <span>입점문의</span>
        <div>대표이사 : 정대원</div>
      </RightSection>
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
`;

const LeftSection = styled.div`
  flex: 8;
`;

const RightSection = styled.div`
  flex: 10;
`;

const LeftFlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ImgBox = styled.div`
  flex: 8;
`;

const CsInfoBox = styled.div`
  flex: 5;
`;

const CsFontStyleP1 = styled.p`
  padding-right: 50px;
  font-size: 15px;

`;

const CsFontStyleH3 = styled.h3`
  padding-top: 18px;
  font-weight: bold;
  font-size: 30px;
`;

const CsFontStyleP2 = styled.span`
  font-size: 10px;
  font-weight: bold;
`;

const CsFontStyleP3 = styled.span`
  font-size: 10px;
`;

const RightFlexBox = styled.div`

`;













