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
        <CustomTextH1 weight="lighter" fontSize="25" color="#F84040" style={{margin: "2% auto"}}>NOW SNS</CustomTextH1>
        <CustomTextH1 weight="bold" fontSize="35" >인스타그램에 놀러오세요!</CustomTextH1>
        <CustomTextH2 weight="lighter" fontSize="14" color="#B2B2B2" style={{margin: "1% auto"}}>@sungwon_foodmall</CustomTextH2>    
        <div style={{ margin: "50px auto", paddingBottom: "130px"}}>
          <SlideShow />
        </div>
        </div>
        <div style={{display:"flex", justifyContent: "center", marginTop: "80px"}}>
          <div style={{flex: 1}}>
            <div style={{display:"flex", justifyContent: "flex-end", width: "100%", flexDirection: "column" }}>
              <CustomTextH1 weight="bold" fontSize="20" color="black"><span style={{fontSize: "25px"}}>🌐&nbsp;&nbsp;</span>알려드려요&nbsp;&nbsp;✚</CustomTextH1>
              <div style={{width:"100%", display: "flex", justifyContent:"flex-start", alignItems:"center", flexDirection: "column", marginTop: "5px"}}>
                <span style={{fontSize: "12px", fontWeight: "light", margin: "1% auto"}}>•&nbsp;&nbsp;2023 현충일 운영안내</span> 
                <span style={{fontSize: "12px", fontWeight: "light", margin: "1% auto"}}>•&nbsp;&nbsp;부처님 오신날 대체 휴일 영업 안내</span> 
                <span style={{fontSize: "12px", fontWeight: "light", margin: "1% auto"}}>•&nbsp;&nbsp;2023 어린이날 영업 안내</span> 
              </div>
              
            </div>
          </div>
          <div style={{flex: 1}}>
            <div style={{display:"flex", justifyContent: "center",width: "70%", alignItems:"center", flexDirection: "column"}}>
              <div style={{display: "flex", justifyContent: "flex-start", fontWeight:"bold", width: "100%"}}><p style={{fontSize: "25px"}}>🤣&nbsp;&nbsp;</p> 고객서비스</div>
              <div style={{marginTop: "15px", alignItems:"center", display: "flex", justifyContent:"space-around", width:"100%", height:"70px", border: "1px solid #CCCCCC", borderRadius:"20px" ,background:"#F1F1F1"}}>
                <div><span style={{fontSize: "15px"}}>💬&nbsp;&nbsp;</span>자주묻는질문</div>
                <div><span style={{fontSize: "15px"}}>🚌&nbsp;&nbsp;</span>오시는길</div>
                <div><span style={{fontSize: "15px"}}>☎️&nbsp;&nbsp;</span>연락처</div>
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





