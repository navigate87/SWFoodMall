import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/Button.module.scss";
import SlideShow from "@/components/slideShow";
import Image from "next/image";
import Banner from "@/components/detailPage/Banner";
import styled from "styled-components";
import KeyFeature from "@/components/detailPage/KeyFeature";
/* eslint-disable prettier/prettier */
export default function List() { 
    const router = useRouter();
    // console.log(router)
    return (
        <Layout>
            <MainContainer>
                <Banner 
                    title="중규모 연회장"
                    description="스테이락 호텔 12층에 위치한 중규모 연회장으로 120명 규모의 파티, 세미나, 리셉션 등 목적에 따라 다양한 스타일의 행사가 가능합니다."
                    imageUrl="/image/sub-fullbanner-img.webp"
                />

                <KeyFeatureContainer>
                    <KeyFeatureBox>
                        <KeyFeature 
                            imageUrl="/image/sub-fullbanner-key-img_middle.webp"
                            label="중규모 연회장"
                            detail="12F"
                            position="150"
                        />
                        <KeyFeature 
                            imageUrl="/image/sub-fullbanner-key-img_middle.webp"
                            label="소규모 연회장"
                            detail="12F"
                            position="580"
                        />
                        <KeyFeature 
                            imageUrl="/image/sub-fullbanner-key-img_middle.webp"
                            label="소규모 연회장"
                            detail="12F"
                            position="1000"
                        />
                    </KeyFeatureBox>
                </KeyFeatureContainer>
                
                {/* <Image 
                    src={"/image/sub-fullbanner-img.webp"}
                    height={936}
                    width={1920}
                    alt="hall"
                />
                <div style={{ position: "absolute", width: "700px" }}>
                    <div style={{ marginBottom:"400px", textAlign: "center" }}>
                        <div style={{ color:"#fff", fontSize: "40px" }}>
                            중규모 연회장
                        </div>
                        <div style={{ marginTop:"40px", color:"#fff", fontSize: "23.5px", lineHeight:"30px" }}>
                            스테이락 호텔 12층에 위치한 중규모 연회장으로 120명 규모의 파티, 세미나, 리셉션 등 목적에 따라 다양한 스타일의 행사가 가능합니다.
                        </div>
                    </div>
                </div> */}
                
                {/* <div style={{ position: "absolute", width:"1500px" }}>
                    <div style={{marginTop: "750px" , textAlign: "center" }}>
                        <span style={{ margin:"30px" }}>
                            <span style={{ width: "365px", height:"80px",  }}>
                                <Image style={{ opacity:"0.5", background:"rgba(0, 0, 0, 0.5)", borderRadius:"10px", cursor:"pointer" }} src={"/image/sub-fullbanner-key-img_middle.webp"} width={360} height={120} alt="middle" />
                                <div style={{ position:"absolute", bottom:"15px", left:"150px", width:"360px", height:"80px", cursor:"pointer",  }}>
                                    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column" }}>
                                        <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                            <div style={{ fontSize:"24px", color:"#fff" }}>중규모 연회장</div>
                                            <div style={{ marginLeft:"17px",borderLeft:"1px solid #fff", height:"15px" }}></div>
                                            <div style={{ marginLeft:"10px", color:"#FFF", fontSize:"24px" }}>12F</div>
                                            <div style={{ marginLeft:"20px", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column" }}>
                                                <div>
                                                    <Image src={"/icon/icon-sub-fullbanner-key-group.svg"} alt="groupkey" height={16} width={24} />
                                                </div>
                                                <div style={{ margin:"2px" }}></div>
                                                <div style={{ color:"#fff" }}>
                                                    333명 규모
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", border:"1px solid #fff", borderRadius:"15px", height: "30px", width:"100px", margin:"15px" }}>
                                            <div style={{ color:"#fff", fontSize:"14px", marginRight:"5px" }}>더보기</div>
                                            <Image color={"#fff"} src={"/icon/icon_plus.png"} alt="plus" width={10} height={10} />
                                        </div>
                                    </div>
                                </div> 
                            </span>
                            
                        </span>
                        <span style={{ margin:"30px" }}>
                            <span style={{ width: "365px" }}>
                                <Image style={{ opacity:"0.5", background:"rgba(0, 0, 0, 0.5)", borderRadius:"10px", cursor:"pointer" }} src={"/image/sub-fullbanner-key-img_small.webp"} width={360} height={80} alt="middle"/>
                                <div style={{ position:"absolute", bottom:"-25px", left:"580px", width:"360px", height:"80px", cursor:"pointer" }}>
                                    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column" }}>
                                        <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                            <div style={{ fontSize:"24px", color:"#fff" }}>소규모 연회장</div>
                                            <div style={{ marginLeft:"17px",borderLeft:"1px solid #fff", height:"15px" }}></div>
                                            <div style={{ marginLeft:"10px", color:"#FFF", fontSize:"24px" }}>12F</div>
                                            <div style={{ marginLeft:"20px", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column" }}>
                                                <div>
                                                    <Image src={"/icon/icon-sub-fullbanner-key-group.svg"} alt="groupkey" height={16} width={24} />
                                                </div>
                                                <div style={{ margin:"2px" }}></div>
                                                <div style={{ color:"#fff" }}>
                                                    333명 규모
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </span>
                        </span>
                        <span style={{ margin:"30px" }}>
                            <span style={{ width: "365px" }}>
                                <Image style={{ opacity:"0.5", background:"rgba(0, 0, 0, 0.5)", borderRadius:"10px", cursor:"pointer" }} src={"/image/sub-fullbanner-key-img_small_2.webp"} width={360} height={80} alt="middle"/>
                                <div style={{ position:"absolute", bottom:"-25px", left:"1000px", width:"360px", height:"80px", cursor:"pointer" }}>
                                    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column",  }}>
                                        <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                            <div style={{ fontSize:"24px", color:"#fff" }}>소규모 연회장</div>
                                            <div style={{ marginLeft:"17px",borderLeft:"1px solid #fff", height:"15px" }}></div>
                                            <div style={{ marginLeft:"10px", color:"#FFF", fontSize:"24px" }}>12F</div>
                                            <div style={{ marginLeft:"20px", display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column" }}>
                                                <div>
                                                    <Image src={"/icon/icon-sub-fullbanner-key-group.svg"} alt="groupkey" height={16} width={24} />
                                                </div>
                                                <div style={{ margin:"2px" }}></div>
                                                <div style={{ color:"#fff" }}>
                                                    333명 규모
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </span>
                        </span>
                    </div>
                    
                </div> */}
            </MainContainer>
            
        </Layout>
    )
}

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60px;
    position: relative;
`;

const KeyFeatureContainer = styled.div`
  position: absolute;
  width: 1500px;
`;

const KeyFeatureBox = styled.div`
  margin-top: 750px;
  text-align: center;
`;