import Image from "next/image";
import styled from "styled-components";

export default function Footer() {
  return (
    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"219px", backgroundColor:"#f7f7f7" }}>
      <div style={{ width:"1290px", display:"flex",  }}>
        <div style={{ width:"374px", height:"114px", display:"flex"  }}>
          <div style={{ width:"118px", height:"72px" }}>
            <Image src={"/image/bi-color.svg"} alt="swfood" width={118} height={72} />
          </div>
          <div style={{ marginLeft:"42px" }}></div>
          <div style={{ display:"flex", alignItems:"flex-start", flexDirection:"column" }}>
            <div style={{ width:"111px", height:"27px", textAlign:"left", color:"#22201f", fontWeight:"600", fontSize:"20px", fontFamily:"Manrope" }}>CS CENTER</div>
            
            <div style={{ width:"166px", height:"55px", fontFamily:"Manrope", fontSize:"40px", lineHeight:"70px", fontWeight:"600", color:"#22201f", textAlign:"left" }}>1811-1811</div>
            <div style={{ display:"flex", marginTop:"5px", height:"24px", lineHeight:"28px"}}>
              <div style={{ fontFamily:"SourceHanSans", fontSize:"16px", fontWeight:"bold", letterSpacing:"-0.32px", textAlign:"left",color:"#22201f" }}>CS 운영시간 :</div>
              <div style={{ margin:"2px" }}></div>
              <div style={{ fontFamily:"SourceHanSans", fontSize:"16px", letterSpacing:"-0.32px", textAlign:"left", color:"22201f" }}>오전10시~오후6시</div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft:"160px" }}></div>
        <div style={{ width:"780px", height:"119px" }}>
          <div style={{ display:"flex", alignItems:"center", height:"20px"  }}>
            
            <div style={{ width:"51px", height:"20px", fontSize:"14px", lineHeight:"22px", letterSpacing:"-0.28px", fontFamily:"SourceHanSans", fontWeight:"500", color:"#a1a1a1", textAlign:"left" }}>이용약관</div>
            <div style={{ height:"13px", width:"1px", lineHeight:"10px", backgroundColor:"#d9d9d9", marginLeft:"20px", marginRight:"20px" }}></div>
            
            <div style={{ width:"101px", height:"20px", fontSize:"14px", lineHeight:"22px", letterSpacing:"-0.28px", fontFamily:"SourceHanSans", fontWeight:"500", color:"#a1a1a1", textAlign:"left" }}>개인정보처리방침</div>
            <div style={{ height:"13px", width:"1px", lineHeight:"10px", backgroundColor:"#d9d9d9", marginLeft:"20px", marginRight:"20px" }}></div>
            
            <div style={{ width:"51px", height:"20px", fontSize:"14px", lineHeight:"22px", letterSpacing:"-0.28px", fontFamily:"SourceHanSans", fontWeight:"500", color:"#a1a1a1", textAlign:"left" }}>이용안내</div>
            <div style={{ height:"13px", width:"1px", lineHeight:"10px", backgroundColor:"#d9d9d9", marginLeft:"20px", marginRight:"20px" }}></div>
            
            <div style={{ width:"51px", height:"20px", fontSize:"14px", lineHeight:"22px", letterSpacing:"-0.28px", fontFamily:"SourceHanSans", fontWeight:"500", color:"#a1a1a1", textAlign:"left" }}>입점문의</div>
          
          </div>
          <div style={{ display:"flex", marginTop:"20px", alignItems:"center" }}>
              <div style={{ width:"94px", height:"20px", fontSize:"14px", lineHeight:"22px", letterSpacing:"-0.28px", fontFamily:"SourceHanSans", fontWeight:"500", color:"#a1a1a1", textAlign:"left" }}>대표이사: 정대원</div>
              <div style={{ height:"13px", width:"1px",   backgroundColor:"#d9d9d9", marginLeft:"20px", marginRight:"20px" }}></div>
              <div style={{ width:"182px", height:"20px", lineHeight:"22px", fontSize:"14px", textAlign:"left", color:"#a1a1a1", fontWeight:"500", letterSpacing:"-0.28px", fontFamily:"SourceHanSans" }}>사업자등록번호 : 01-85-39823</div>
              <div style={{ width:"83px", height:"20px", lineHeight:"22px", fontSize:"14px", textAlign:"left", color:"#a1a1a1", fontWeight:"500", letterSpacing:"-0.28px", fontFamily:"SourceHanSans", borderBottom:"1px solid #a1a1a1", cursor:"pointer" }}>사업자정보확인</div>
              <div style={{ marginLeft:"10px" }}></div>
              <div style={{ width:"72px", height:"20px", lineHeight:"22px", fontSize:"14px", textAlign:"left", color:"#a1a1a1", fontWeight:"500", letterSpacing:"-0.28px", fontFamily:"SourceHanSans", borderBottom:"1px solid #a1a1a1", cursor:"pointer" }}>사업자등록증</div>
              <div style={{ height:"13px", width:"1px", lineHeight:"10px", backgroundColor:"#d9d9d9", marginLeft:"20px", marginRight:"20px" }}></div>
              <div style={{ width:"234px",height:"20px", lineHeight:"22px", fontSize:"14px", textAlign:"left", color:"#a1a1a1", fontWeight:"500", letterSpacing:"-0.28px", fontFamily:"SourceHanSans", borderBottom:"1px solid #a1a1a1", cursor:"pointer" }}>통신판매업 신고 : 제 2018-서울중구-1731호</div>
          </div>
          <div style={{ display:"flex", marginTop:"2px", alignItems:"center" }}>
            <div style={{ width:"252px", height:"20px", fontSize:"14px", lineHeight:"22px", letterSpacing:"-0.28px", fontFamily:"SourceHanSans", fontWeight:"500", color:"#a1a1a1", textAlign:"left" }}>주소: 서울특별시 중구 퇴계로 211-5 성원푸드몰</div>
            <div style={{ height:"13px", width:"1px", backgroundColor:"#d9d9d9", marginLeft:"20px", marginRight:"20px" }}></div>
            <div style={{ width:"84px", height:"20px", fontSize:"14px", lineHeight:"22px", letterSpacing:"-0.28px", fontFamily:"SourceHanSans", fontWeight:"500", color:"#a1a1a1", textAlign:"left" }}>팩스: 1811-1819</div>
            <div style={{ height:"13px", width:"1px", backgroundColor:"#d9d9d9", marginLeft:"20px", marginRight:"20px" }}></div>
            <div style={{ width:"272px", height:"20px", fontSize:"14px", lineHeight:"22px", letterSpacing:"-0.28px", fontFamily:"SourceHanSans", fontWeight:"500", color:"#a1a1a1", textAlign:"left" }}>문의메일: reservation@swfoodmall.com</div>
          </div>
          <div style={{ display:"flex", marginTop:"20px", alignItems:"center" }}>
            <div style={{ width:"265px", height:"17px", fontSize:"12px", lineHeight:"10px", letterSpacing:"-0.24px", fontFamily:"SourceHanSans", fontWeight:"500", color:"#cbcbcb", textAlign:"left" }}>
              COPYRIGHT ⓒ 2024. FoodMall. all rights reserved.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const Wrap = styled.div`
  min-height: 30vh;
  position: relative;
  width: 100vw;
  background-color: #F1F1F1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 10px; */
`;

const FLEX1 = styled.div`
  flex: 2;
`;
const LeftSection = styled.div`
  flex: 3;
  margin-bottom: 40px;
`;

const CsInfoUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const CsInfoUlLi = styled.li`
  margin: 5px 20px;
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
  margin-bottom: 60px;
  margin-right: 20px;
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
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const InfoBox = styled.div`
  flex: 6;
`;

const InfoBoxUl = styled.ul`
  display: flex;
  margin-bottom: 8px;
`;

const InfoBoxUlLi = styled.li`
  font-size: 10px;
  margin: 8px 5px;
  color: #A4A4A4;
  
`;

const CopyBox = styled.div`
  font-size: 10px;
  color: #A1A1A1;
  margin: 0 7px;
  padding-top: 17px;
`;














