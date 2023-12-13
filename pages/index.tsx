/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import Layout from "@/components/Layout";
import Head from "next/head";
import styles from "@/styles/Button.module.scss"
import { useRouter } from "next/router";
import styled from "styled-components";
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import { Html } from "next/document";
import SlideShow from "@/components/slideShow"
import Image from "next/image";
export default function Home() {
  // eslint-disable-next-line prettier/prettier
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>성원 푸드몰</title>
        <meta name="description" content="성원푸드" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Main>
        <div>
          <CustomTextH1 weight="lighter" fontSize="25" color="#F84040" style={{margin: "20px"}}>NOW SNS</CustomTextH1>
          <CustomTextH1 weight="bold" fontSize="35">인스타그램에 놀러오세요!</CustomTextH1>
          <CustomTextH2 weight="lighter" fontSize="14" color="#B2B2B2" style={{margin: "10px"}}>@sungwon_foodmall</CustomTextH2>    
          <div style={{ margin: "50px auto", paddingBottom: "130px"}}>
            <SlideShow />
          </div>
        </div>
        <div style={{display:"flex", marginTop: "120px"}}>
          <div style={{flex: 1}}>
            <div style={{ width:"100%" }}>
              <div style={{ display:"flex", paddingLeft:"410px", height: "40px", alignItems:"center" }}>
                <Image src={"/image/tit-icon_Bell.webp"} alt="종" width={36} height={36} />
                <div style={{ fontSize:"22px", marginLeft:"10px", fontWeight:"bold" }}>알려드려요</div>
                <div style={{ marginLeft: "15px", cursor:"pointer" }}>
                  <Image src={"/icon/btn-더보기.svg"} alt="+" width={36} height={36} />
                </div>  
              </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", margin:"10px" }}>
              <div style={{ flex:1 }}>
                <div style={{ paddingLeft: "390px" }}>
                  <div style={{margin:"5px", textAlign:"left", height:"20px", fontSize:"13px" }}>∙ 2023 현충일 운영안내</div>
                </div>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ paddingLeft: "390px" }}>
                  <div style={{margin:"5px", textAlign:"left", height:"20px", fontSize:"13px" }}>∙ 2023 부처님오신날 대체휴일 영업안내</div>
                </div>
              </div>
              <div style={{ flex:1 }}>
                <div style={{ paddingLeft: "390px" }}>
                  <div style={{margin:"5px", textAlign:"left", height:"20px", fontSize:"13px" }}>∙ 2023 어린이날 영업안내</div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{flex: 1}}>
            <div style={{display:"flex", justifyContent: "center",width: "57%", alignItems:"center", flexDirection: "column", margin:"3px"}}>
              <div style={{display: "flex", justifyContent: "flex-start",alignItems:"center", fontWeight:"bold", width: "100%"}}>
                <Image src={"/image/tit-icon_service.webp"} alt="서비스" width={36} height={36} />
                <div style={{ fontSize: "22px", marginLeft:"10px", fontWeight:"bold" }}>고객서비스</div>
              </div>
              <div style={{marginTop: "20px", alignItems:"center", display: "flex", justifyContent:"space-around", width:"100%", height:"70px", border: "1px solid #CCCCCC", borderRadius:"20px" ,background:"#F1F1F1"}}>
                <div style={{ display:"flex", alignItems:"center"}}>
                  <Image src={"/icon/그룹 490.svg"} width={40} height={40} alt="icon490" />
                  <div style={{fontSize: "14px", marginLeft:"10px", fontWeight:"bold"}}>자주묻는질문</div>
                </div>
                <div style={{ display:"flex", alignItems:"center"}}>
                  <Image src={"/icon/그룹 491.svg"} width={40} height={40} alt="icon491" />
                  <div style={{fontSize: "14px", marginLeft:"10px", fontWeight:"bold"}}>오시는길</div>
                </div>
                <div style={{ display:"flex", alignItems:"center"}}>
                  <Image src={"/icon/그룹 492.svg"} width={40} height={40} alt="icon492" />
                  <div style={{fontSize: "14px", marginLeft:"10px", fontWeight:"bold"}}>연락처</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </Layout>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const CustomTextH1 = styled.h1<{
  fontSize?: string;
  weight?: string;
  color?: string
}>`
  font-size: ${(props) => (props.fontSize)}px;
  font-weight: ${(props) => (props.weight)};
  color: ${(props) => (props.color)};
  margin: 0 auto;
`;

const CustomTextH2 = styled.h2<{
  fontSize?: string;
  weight?: string;
  color?: string;
}>`
  font-size: ${(props) => (props.fontSize)}px;
  font-weight: ${(props) => (props.weight)};
  color: ${(props) => (props.color)};
`;

const CustomText = styled.div<{
  fontSize?: string;
  weight?: string;
  color?: string;
}>`
  font-size: ${(props) => (props.fontSize)}px;
  font-weight: ${(props) => (props.weight)};
  color: ${(props) => (props.color)};
  line-height: 30px;
`;





