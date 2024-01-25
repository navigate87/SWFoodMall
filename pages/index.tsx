/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import Layout from "@/components/Layout";
import Head from "next/head";

import { useRouter } from "next/router";
import styled from "styled-components";
import SlideShow from "@/components/slideShow"
import Image from "next/image";

import { SlideData } from "@/data/ImgDataType";
import { GuideDataProps } from "@/data/GuideType";
import GuideItem from "@/components/GuideItem";
import { useEffect, useState } from "react";
import { StoreInfoDataProps, StoreInfoProps } from "@/data/StoreInfoType";
import StoreInfoCard from "@/components/StoreInfoCard";
import { CSSTransition } from "react-transition-group";
import { Slideshow } from "@mui/icons-material";
import SlideShow2 from "@/components/slideShow/swipe";

export default function Home() {
  // eslint-disable-next-line prettier/prettier
  const router = useRouter();
  const [selectedStoreInfo, setSelectedStoreInfo] = useState<StoreInfoDataProps>();
  const [storeInfoCardVisible, setStoreInfoCardVisible] = useState<boolean>(false);
  const [overlayStatus, setOverlayStatus] = useState<{[key: string]: boolean}>(
    GuideDataProps.reduce((acc, item) => ({ ...acc, [item.alt]: false }), {})
  );
  type ShimmerStatueType = {
    [key:string]:boolean
  }
  const initialShimmerStatus:ShimmerStatueType = GuideDataProps.reduce((acc, item) => {
    acc[item.alt] = false;
    return acc;
  }, {} as ShimmerStatueType);
  const [shimmerStatus, setShimmerStatus] = useState<{[key: string]: boolean}>(initialShimmerStatus);
  const isAnyOverlayActive = Object.values(overlayStatus).some(status => status);
  const handleGuideClick = (alt:string) => {
    setOverlayStatus(GuideDataProps.reduce((acc, item) => ({ ...acc, [item.alt]: false }), {}));
    setOverlayStatus(prev => ({ ...prev, [alt]: !prev[alt] }));
    const findStoreInfo = StoreInfoProps.find(storeInfo => storeInfo.alt === alt);
    setSelectedStoreInfo(findStoreInfo);
    setStoreInfoCardVisible(true); 
   
  }

 
  const closeAllOverlays = () => {
    setOverlayStatus(GuideDataProps.reduce((acc, item) => ({ ...acc, [item.alt]: false }), {}));
  };

  const getAnimationClass = (storeName:string) => {
    if (['레스토랑', '뷔페', '객실', '연회장'].includes(storeName)) {
      return 'reverse-slide-fade';
    } else {
      return 'slide-fade';
    }
  }

  useEffect(() => {
    let current = 0;
    let timerId: ReturnType<typeof setTimeout>;

    const activateShimmer = () => {
      const currentItem = GuideDataProps[current];
      setShimmerStatus(prev => ({ ...prev, [currentItem.alt]: true }));

      timerId = setTimeout(() => {
        setShimmerStatus(prev => ({ ...prev, [currentItem.alt]: false }));
        current = (current + 1) % GuideDataProps.length;
        activateShimmer();
      }, 2000); // 5초 후에 다음 아이템으로 변경
    };

    activateShimmer();

    return () => clearTimeout(timerId); // useEffect 정리 함수에서 타이머 정리
  }, []);

  // ... 기존의 JSX 반환

  return (
    <Layout>
      <Head>
        <title>성원 푸드몰</title>
        <meta name="description" content="성원푸드" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ display: "flex", marginTop: "-60px", justifyContent:"center", position:"relative"  }}>
        <Image style={{ position:"absolute", zIndex:-2, }} src={"/image/sub-fullbanner-img-galbi.webp"} alt="BG" layout="fill"  />
        <Image 
          src={"/image/main-foodmall-img.webp"} 
          width={1330} 
          height={936} 
          alt="main" 
        />
         <GuideBox>  
          {
            GuideDataProps.map((item) => (
              <GuideItem
                key={item.alt}
                data={item}
                isVisible={overlayStatus[item.alt]}
                onClick={() => handleGuideClick(item.alt)}
                isShimmering={shimmerStatus[item.alt]}
              />
            ))
          }
        </GuideBox>
        
        <CSSTransition
          key={selectedStoreInfo ? selectedStoreInfo.alt : 'default-key'}
          in={isAnyOverlayActive}
          timeout={300}
          classNames={getAnimationClass(selectedStoreInfo?.alt ?? '')}
          unmountOnExit
        >
          <StoreInfoCard 
            storeInfo={selectedStoreInfo}
            isVisible={storeInfoCardVisible}
          />
        </CSSTransition>
        
        {isAnyOverlayActive && <GuideBackground onClick={closeAllOverlays}/>}
      </div>

      <div style={{ display:"flex", justifyContent:"center", marginTop:"-3.5%", position:"relative" }}>
        <div style={{ width:"83%", height:"204px", maxWidth:"auto", borderRadius:"102px", backgroundColor:"#f7f7f7", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column" }}>
          <div style={{ display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"30px" }}>
            <div style={{height:"41px", fontSize:"30px", fontWeight:"500", color:"#22201f", fontFamily:"Manrope", textAlign:"center", lineHeight:"44px" }}>EVENT NOTICE</div>
            <div style={{ cursor:"pointer"}}>
              <Image  src={"/icon/btn_more.svg"} alt="+" width={36} height={36} /> 
            </div>
          </div>
          <div style={{ display:"flex", justifyContent:"center", marginBottom:"30px", gap:"24px"}}>
            <div style={{ marginRight:"20px" }}>
              <div style={{ width:"442px", height:"72px", display:"flex", alignItems:"center", borderRadius:"36px", border:"1px solid #dcdcdc", backgroundColor:"#ececec" }}>
                  <div style={{ width:"60px", height:"60px", borderRadius:"36px", backgroundColor:"#343434", marginLeft:"6px", marginRight:"22px", display:"flex", alignItems:"center", justifyContent:"center"  }}>
                    <div style={{ width:"46px", height:"27px", fontFamily:"Manrope", fontSize:"20px", fontWeight:"bold", color:"#FFF", textAlign:"center", lineHeight:"30px" }}>NEW</div>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", }}>
                    <div style={{ display:"flex", alignItems:"center" }}>
                      <div style={{ fontFamily:"SourceHanSans", width:"61px", height:"24px", color:"#888", letterSpacing:"-0.32px", fontSize:"16px",  lineHeight:"31px" }}>[성원정]</div>
                      <div style={{ fontFamily:"SourceHanSans", width:"174px", height:"24px", color:"#888", letterSpacing:"-0.32px", fontSize:"16px",  lineHeight:"31px" }}>2023.06.16 ~ 2023.08.31</div>
                    </div>
                    <div style={{ display:"flex", justifyContent:"flex-start" }}>
                      <div style={{ fontFamily:"SourceHanSans", fontSize:"20px", fontWeight:"500", width:"100%", height:"29px", letterSpacing:"-0.4px", lineHeight:"33px" }}>전복삼계탕 시즌메뉴 예약</div>
                    </div>
                  </div>
              </div>
            </div>
            
            <div style={{ marginRight:"20px" }}>
              <div style={{ width:"442px", height:"72px", display:"flex", alignItems:"center", borderRadius:"36px", border:"1px solid #dcdcdc", backgroundColor:"#ececec" }}>
                  <div style={{ width:"60px", height:"60px", borderRadius:"36px", backgroundColor:"#343434", marginLeft:"6px", marginRight:"22px", display:"flex", alignItems:"center", justifyContent:"center"  }}>
                    <div style={{ width:"56px", height:"22px", fontFamily:"Manrope", fontSize:"16px", fontWeight:"bold", color:"#FFF", textAlign:"center", lineHeight:"28px" }}>EVENT</div>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", }}>
                    <div style={{ display:"flex", alignItems:"center" }}>
                      <div style={{ fontFamily:"SourceHanSans", width:"61px", height:"24px", color:"#888", letterSpacing:"-0.32px", fontSize:"16px",  lineHeight:"31px" }}>[성원정]</div>
                      <div style={{ fontFamily:"SourceHanSans", width:"174px", height:"24px", color:"#888", letterSpacing:"-0.32px", fontSize:"16px",  lineHeight:"31px" }}>2023.06.16 ~ 2023.08.31</div>
                    </div>
                    <div style={{ display:"flex", justifyContent:"flex-start" }}>
                      <div style={{ fontFamily:"SourceHanSans", fontSize:"20px", fontWeight:"500", width:"100%", height:"29px", letterSpacing:"-0.4px", lineHeight:"33px" }}>전복삼계탕 시즌메뉴 예약</div>
                    </div>
                  </div>
              </div>
            </div>
            <div style={{ marginRight:"20px" }}>
              <div style={{ width:"442px", height:"72px", display:"flex", alignItems:"center", borderRadius:"36px", border:"1px solid #dcdcdc", backgroundColor:"#ececec" }}>
                  <div style={{ width:"60px", height:"60px", borderRadius:"36px", backgroundColor:"#343434", marginLeft:"6px", marginRight:"22px", display:"flex", alignItems:"center", justifyContent:"center"  }}>
                    <div style={{ width:"56px", height:"21px", fontFamily:"Manrope", fontSize:"16px", fontWeight:"bold", color:"#FFF", textAlign:"center", lineHeight:"24px" }}>신제품</div>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", }}>
                    <div style={{ display:"flex", alignItems:"center" }}>
                      <div style={{ fontFamily:"SourceHanSans", width:"61px", height:"24px", color:"#888", letterSpacing:"-0.32px", fontSize:"16px",  lineHeight:"31px" }}>[성원정]</div>
                      <div style={{ fontFamily:"SourceHanSans", width:"200px", height:"24px", color:"#888", letterSpacing:"-0.32px", fontSize:"16px",  lineHeight:"31px" }}>2023.06.16 ~ 2023.08.31</div>
                    </div>
                    <div style={{ display:"flex", justifyContent:"flex-start" }}>
                      <div style={{ fontFamily:"SourceHanSans", fontSize:"20px", fontWeight:"500", width:"100%", height:"29px", letterSpacing:"-0.4px", lineHeight:"33px" }}>전복삼계탕 시즌메뉴 예약</div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          
      <Main>  
        <div>
          <div style={{ marginTop:"37px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column" }}>
            <div style={{ fontWeight:"300", fontSize:"28px", fontFamily:"SourceHanSans", letterSpacing:"-0.56px", color:"#F84040", height:"40px", lineHeight:"45px", textAlign:"center"  }}>NOW SNS</div>
            <div style={{ height:"66px", letterSpacing:"-1.44px", color:"#22201f", fontFamily:"Manrope", fontSize:"48px", lineHeight:"74px", textAlign:"center" }}>인스타그램에 놀러오세요!</div>
            <div style={{ height:"27px", fontFamily:"Manrope", fontSize:"20px", fontWeight:"500", letterSpacing:"-0.6px", color:"#b2b2b2", lineHeight:"30px", textAlign:"center" }}>@sungwon_foodmall</div>   
          </div>
          <div style={{ marginTop:"40px"}}>
            <SlideShow images={SlideData} />
            {/* <SlideShow2 images={SlideData} /> */}
          </div>
        </div>
      
        
        <div style={{ display:"flex", justifyContent:"center", marginTop:"50px" }}>
          <div style={{ width: "1260px", display:"flex" }}>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", justifyContent:"flex-start" }}>
                <div>
                  <div style={{ width:"350px", height:"62px", display:"flex", alignItems:"center" }}>
                    <Image src={"/icon/tit-icon_bell.svg"} alt="종" width={62} height={62} />
                    <div style={{ textAlign:"left", height:"40px", lineHeight:"44px", fontSize:"28px", marginLeft:"8px",  fontWeight:"bold", letterSpacing:"-0.56px", color:"#22201f", fontFamily:"SourceHanSans" }}>알려드려요</div>
                    <div style={{ cursor:"pointer" }}>
                    <Image src={"/icon/btn_more.svg"} alt="+" width={54} height={54} />
                  </div>
                </div>
                
                <div style={{ marginTop:"12px" }}>
                  <div style={{ display:"flex", alignItems:"flex-start", flexDirection:"column" }}>
                    <div>
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <div style={{ marginRight:"3%" }}>
                          <Image  src={"/icon/point_59.svg"} alt="point" width={5} height={5} />
                        </div>
                        <div style={{ width:"400px", height:"24px",lineHeight:"30.5px", fontSize:"16px", textAlign:"left", letterSpacing:"-0.32px" ,color:"#22201f", fontFamily:"SourceHanSans" }}>2023 현충일 운영안내</div>
                      </div>
                    </div>
                    <div style={{ margin:"10px" }}></div>
                    <div>
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <div style={{ marginRight:"3%" }}>
                          <Image  src={"/icon/point_59.svg"} alt="point" width={5} height={5} />
                        </div>
                        <div style={{ width:"400px", height:"24px",lineHeight:"30.5px", fontSize:"16px", textAlign:"left", letterSpacing:"-0.32px" ,color:"#22201f", fontFamily:"SourceHanSans" }}>2023 부처님오신날 대체휴일 영업안내</div>
                      </div>
                    </div>
                    <div style={{ margin:"10px" }}></div>
                    <div>
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <div style={{ marginRight:"3%" }}>
                          <Image  src={"/icon/point_59.svg"} alt="point" width={5} height={5} />
                        </div>
                        <div style={{ width:"400px", height:"24px",lineHeight:"30.5px", fontSize:"16px", textAlign:"left", letterSpacing:"-0.32px" ,color:"#22201f", fontFamily:"SourceHanSans" }}>2023년 어린이날 영업안내 </div>
                      </div>
                    </div>
                  </div>
                </div>  
                </div>
              </div>
              
            </div>
            <div style={{ flex:1 }}>
            <div style={{display:"flex", justifyContent: "center", alignItems:"center", flexDirection: "column"}}>
              <div style={{display: "flex", justifyContent: "flex-start", alignItems:"center", fontWeight:"bold", width: "100%"}}>
                <Image src={"/icon/tit-icon_service.svg"} alt="서비스" width={62} height={62} />
                <div style={{ textAlign:"left", height:"40px", fontSize: "28px", marginLeft:"4px", fontWeight:"bold", lineHeight:"40px", fontFamily:"SourceHanSans" }}>고객서비스</div>
              </div>
              <div style={{marginTop: "22px", alignItems:"center", display: "flex", justifyContent:"space-evenly", width:"617px", height:"92px", border: "1px solid #CCCCCC", borderRadius:"18px" ,background:"#f7f7f7"}}>
                <div style={{ display:"flex", alignItems:"center"}}>
                  <Image src={"/icon/group_490.svg"} width={56} height={56} alt="icon490" />
                  <div style={{fontSize: "19px", marginLeft:"10px", fontWeight:"bold", color:"#22201f", fontFamily:"SourceHanSans"}}>자주묻는질문</div>
                </div>
                <div style={{ display:"flex", alignItems:"center"}}>
                  <Image src={"/icon/group_491.svg"} width={56} height={56} alt="icon491" />
                  <div style={{fontSize: "19px", marginLeft:"10px", fontWeight:"bold", color:"#22201f", fontFamily:"SourceHanSans"}}>오시는길</div>
                </div>
                <div style={{ display:"flex", alignItems:"center"}}>
                  <Image src={"/icon/group_492.svg"} width={56} height={56} alt="icon492" />
                  <div style={{fontSize: "19px", marginLeft:"10px", fontWeight:"bold", color:"#22201f", fontFamily:"SourceHanSans"}}>연락처</div>
                </div>
              </div>
            </div>
              
            </div>
          </div>
        </div>  

        <div style={{ marginTop: "100px" }}></div>
      </Main>
      
    </Layout>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
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


const GuideBox = styled.div`
  height: 91.3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GuideBackground = styled.div`
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 300;
`;


const EventFlexBox_1 = styled.div`
  display:flex;
  justify-content:center;
  margin-top:-3.5%;
  position:relative;
`;

const EventBox_1 = styled.div`
  width:80%;
  height:204px;
  max-width:auto;
  border-radius:102px; 
  background-color:"#ededed"

`;




