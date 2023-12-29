import { recoilHallInfo } from "@/store/stores/modalState";
import Image from "next/image";
import { useRecoilState } from "recoil";
import styled from "styled-components"

export default function HallInfoPopup() {
    const [hallInfoPopup, setHallInfoPopup] = useRecoilState<boolean>(recoilHallInfo);
    
    const handleCloseClick = () => {
        setHallInfoPopup(false);
        document.body.style.overflow = "auto";
    }
    
    return(
        <ModalBackground>
            <Container>
                <div style={{ width:"1330px", height:"87px", display:"flex", justifyContent:"center", alignItems:"center", borderBottom:"1px solid #dcdcdc" }}>
                    <div style={{ fontSize:"28px", fontWeight:"bold" }}>연회장</div>
                    <ModalCancel onClick={handleCloseClick}><Image src={"icon/icon-popup-close.svg"} height={18} width={18} alt="popupclose"/></ModalCancel>
                </div>
                <div style={{ display:"flex" }}>
                    <div style={{ flex:1, marginTop:"30px" }}>
                        <div style={{ display:"flex", justifyContent:"center", marginBottom:"10px"}}>
                            <div style={{ height:"52px", width:"280px", background:"#f6f5f5", borderRadius:"25px", display:"flex", justifyContent:"center", alignItems:"center", gap:"50px" }}>
                                <div style={{ fontSize:"18px", fontWeight:"bold" }}>12F</div>
                                <div style={{ fontSize:"18px", fontWeight:"bold" }}>중규모 연회장</div>
                            </div>
                            
                        </div>
                        <div style={{ display:"flex", justifyContent:"center", marginBottom:"10px"}}>
                            <div style={{ height:"52px", width:"280px", background:"#f6f5f5", borderRadius:"25px", display:"flex", justifyContent:"center", alignItems:"center", gap:"50px" }}>
                                <div style={{ fontSize:"18px", fontWeight:"bold" }}>11F</div>
                                <div style={{ fontSize:"18px", fontWeight:"bold" }}>소규모 연회장</div>
                            </div>
                            
                        </div>
                        <div style={{ display:"flex", justifyContent:"center", marginBottom:"10px"}}>
                            <div style={{ height:"52px", width:"280px", background:"#f6f5f5", borderRadius:"25px", display:"flex", justifyContent:"center", alignItems:"center", gap:"50px" }}>
                                <div style={{ fontSize:"18px", fontWeight:"bold" }}>3F</div>
                                <div style={{ fontSize:"18px", fontWeight:"bold" }}>소규모 연회장</div>
                            </div>
                            
                        </div>
                        <div style={{ display:"flex", justifyContent:"center", marginTop:"350px", paddingBottom:"30px", cursor:"pointer" }}>
                            <div style={{ display:"flex", justifyContent:"center", alignItems:"center", background:"#f84040", width:"230px", height:"77px", gap:"10px", borderRadius:"50px" }}>
                                <Image  src={"/icon/icon-main-quick-reservation-on.svg"} alt="reservation" width={30} height={34} />
                                <div style={{ color:"#fff", fontSize:"26px" }} >F&B 예약</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ height:"100%", borderLeft:"1px solid #dcdcdc" }}></div>
                    </div>
                    <div style={{ flex:3 }}>
                        <div style={{ display:"flex", justifyContent:"center" }}>
                            <Image src={"/image/Fnb popup img.webp"} alt="중규모 연회장" width={1020} height={440} />
                        </div>
                        <div style={{ display:"flex" }}>
                            <div style={{ fontSize:"38px", fontWeight:"bold", margin:"40px"}}>중규모 연회장</div>
                        </div>
                        <div style={{ display:"flex" }}>
                            <div style={{ flex:2, marginTop:"9px" }}>
                                <div style={{ display:"flex", gap:"60px", alignItems:"center"}}>
                                    <div style={{ display:"flex", gap:"3px", marginLeft:"40px", alignItems:"center" }}>
                                        <Image src={"/icon/icon-sub-quick-map.svg"} alt="네비" width={16} height={16}  />
                                        <div style={{ color:"#474747", fontSize:"14px", fontWeight:"500" }}>위치</div>
                                    </div>
                                    <div style={{ fontSize:"16px", fontWeight:"bold" }}>스테이락 호텔 12층</div>
                                </div>
                                <div style={{ margin:"15px" }}></div>
                                <div style={{ display:"flex", gap:"35px", alignItems:"center"}}>
                                    <div style={{ display:"flex", gap:"3px", marginLeft:"40px", alignItems:"center" }}>
                                        <Image src={"/icon/icon-sub-quick-bubble.svg"} alt="인원" width={16} height={16}/>
                                        <div style={{ color:"#474747", fontSize:"14px", fontWeight:"500" }}>수용인원</div>
                                    </div>
                                    <div style={{ fontSize:"16px", fontWeight:"bold" }}>최대 120명</div>
                                </div>
                            </div>
                            <div style={{position:"absolute", borderLeft:"1px solid #dcdcdc", right:"710px", bottom:"35px",height:"70px"}}></div>
                            <div style={{ flex:4 }}>
                                <div style={{ width:"594px", height:"73px" }}>
                                    <div style={{color:"#585858",fontSize:"14px", fontWeight:"500", lineHeight:"1.63", letterSpacing:"2px"}}>
                                        120명 규모의 파티, 세미나, 리셉션 등 목적에 따라 다양한 스타일의 행사가 가능합니다.
                                        또한 다양한 면적으로 공간 가변이 가능하고 원활한 행사 진행을 위한 대형스크린 및 각종 최신 장비가 구비되어 있습니다.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </ModalBackground>
    )
}

const ModalBackground = styled.div`
    position: fixed;
    top: 0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2000;
    overflow: hidden;
`;

const Container = styled.div`
    position: absolute;
    top: calc(50vh - 400px);
    left: calc(50vw - 655px);
    background-color: white;
    border-radius: 25px;
    width: 1330px;
    height: 750px;
`;

const ModalCancel = styled.div`
    position:absolute; 
    right:40px;
    cursor: pointer;
    &:hover {
        border: 1px solid #f84040;
    }
`;