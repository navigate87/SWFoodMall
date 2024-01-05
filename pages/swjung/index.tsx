import { useRouter } from "next/router";
// import Layout from "@/components/Layout";
import Layout from "@/components/Layout2";
import Image from "next/image";
import styled from "styled-components";
/* eslint-disable prettier/prettier */
export default function List() { 
    const router = useRouter();
    // console.log(router)
    return (
        <Layout>
            <div style={{ display:"flex", justifyContent: "center", alignItems: "center", marginTop: "-60px" }}>
                <Image 
                    src={"/image/sub-fullbanner-img_swjung.webp"}
                    height={936}
                    width={1920}
                    alt="hall"
                />
                <div style={{ position: "absolute", width: "610px" }}>
                    <div style={{ marginTop:"220px", textAlign: "center" }}>
                        <div style={{ color:"#fff", fontSize: "40px" }}>
                            정육식당 성원정
                        </div>
                        <div style={{ marginTop:"40px", color:"#fff", fontSize: "23.5px", lineHeight:"30px" }}>
                            정육식당 성원정만의 노하우로 14일간 정성스럽게 고기를 숙성시켜 풍부한 육즙과 부드러운 육질을 제공합니다.
                        </div>
                    </div>
                </div>
                <div style={{ position: "absolute", width:"1500px" }}>
                    <div style={{marginTop: "750px" , textAlign: "center" }}>
                        <span style={{ margin:"30px" }}>
                            <span style={{ width: "204px"  }}>
                                <Image style={{ opacity:"0.5", background:"rgba(0, 0, 0, 0.5)", borderRadius:"10px", cursor:"pointer" }} src={"/image/sub-fullbanner-key-img_swjung_1.webp"} width={204} height={56} alt="middle" />
                                <div style={{ position:"absolute", bottom:"-42px", left:"40px", width:"360px", height:"80px", cursor:"pointer" }}>
                                    <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                        <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                            <div style={{ fontSize:"20px", color:"#fff" }}>건강한 밥상</div>
                                        </div>
                                    </div>
                                </div> 
                            </span>
                        </span>
                        <span style={{ margin:"30px" }}>
                            <span style={{ width: "204px"  }}>
                                <Image style={{ opacity:"0.5", background:"rgba(0, 0, 0, 0.5)", borderRadius:"10px", cursor:"pointer" }} src={"/image/sub-fullbanner-key-img_swjung_2.webp"} width={204} height={56} alt="middle" />
                                <div style={{ position:"absolute", bottom:"-42px", left:"305px", width:"360px", height:"80px", cursor:"pointer" }}>
                                    <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                        <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                            <div style={{ fontSize:"20px", color:"#fff" }}>14일간의 속성</div>
                                        </div>
                                    </div>
                                </div> 
                            </span>
                        </span>
                        <span style={{ margin:"30px" }}>
                            <span style={{ width: "204px"  }}>
                                <Image style={{ opacity:"0.5", background:"rgba(0, 0, 0, 0.5)", borderRadius:"10px", cursor:"pointer" }} src={"/image/sub-fullbanner-key-img_swjung_3.webp"} width={204} height={56} alt="middle" />
                                <div style={{ position:"absolute", bottom:"-42px", left:"570px", width:"360px", height:"80px", cursor:"pointer" }}>
                                    <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                        <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                            <div style={{ fontSize:"20px", color:"#fff" }}>매일 새롭게</div>
                                        </div>
                                    </div>
                                </div> 
                            </span>
                        </span>
                        <span style={{ margin:"30px" }}>
                            <span style={{ width: "204px"  }}>
                                <Image style={{ opacity:"0.5", background:"rgba(0, 0, 0, 0.5)", borderRadius:"10px", cursor:"pointer" }} src={"/image/sub-fullbanner-key-img_swjung_4.webp"} width={204} height={56} alt="middle" />
                                <div style={{ position:"absolute", bottom:"-42px", left:"835px", width:"360px", height:"80px", cursor:"pointer" }}>
                                    <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                        <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                            <div style={{ fontSize:"20px", color:"#fff" }}>겨울철 보양식!</div>
                                        </div>
                                    </div>
                                </div> 
                            </span>
                        </span>
                        <span style={{ margin:"30px" }}>
                            <span style={{ width: "204px"  }}>
                                <Image style={{ opacity:"0.5", background:"rgba(0, 0, 0, 0.5)", borderRadius:"10px", cursor:"pointer" }} src={"/image/sub-fullbanner-key-img_swjung_5.webp"} width={204} height={56} alt="middle" />
                                <div style={{ position:"absolute", bottom:"-42px", left:"1100px", width:"360px", height:"80px", cursor:"pointer" }}>
                                    <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                        <div style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                                            <div style={{ fontSize:"20px", color:"#fff" }}>부경한우 신메뉴 출시</div>
                                        </div>
                                    </div>
                                </div> 
                            </span>
                        </span>
                    </div>
                    
                </div>
            </div>
            
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