import Image from "next/image";
import styled from "styled-components";

export default function Footer() {
  return (
    <Wrap>
      <Section>
        <ImgBox>
          <Image alt="Swfood" src="/image/bi.png" width={80} height={80} />
        </ImgBox>

      </Section>
      
    </Wrap>
  );
}

const Wrap = styled.div`
  min-height: 30vh;
  width: 100%;
  background-color: #F1F1F1;
  display: flex;
  align-items: center;
`;

const Section = styled.div`
  margin: 0 auto;
  position: relative;
  
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

`;

const CsInfoBox = styled.div`
  flex: 10;
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













