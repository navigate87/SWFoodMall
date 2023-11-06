import { useRecoilState } from "recoil";
import styled from "styled-components"
import { modalShowState, recoilSelectedStore, recoilStoreState } from "@/store/stores/modalState";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faUserPlus, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { StoreData } from "@/data/StoreType";
import SelectedStore from "@/components/SelectedStore";

export default function Reservation() {
    const [showModal, setShowModal] = useRecoilState<boolean>(modalShowState);
    const [selectedStoreName, setSelectedStoreName] = useRecoilState<string>(recoilSelectedStore);
    const [storeState, setStoreState] = useRecoilState<boolean>(recoilStoreState);

    const handleClick = (event:any) => {
        setShowModal(false);
        setStoreState(false);
        document.body.style.overflow = "auto";
    }
    return (
        <ModalBackground>
            <Container>
                <HeaderBox>
                    <DiningSelectBox>
                        <TextBoxBorderBot>DINING 예약</TextBoxBorderBot> 
                    </DiningSelectBox>
                    <FNBSelectBox>
                        <TextBoxBorderBot>F&B 단체예약</TextBoxBorderBot>
                    </FNBSelectBox>
                    <CloseBox>
                        <ImageBox 
                            onClick={handleClick} 
                            src={"/icon/close.svg"} 
                            width={28} 
                            height={28} 
                            alt="Close" />
                    </CloseBox>
                </HeaderBox>
                
                <div style={{display: "flex", justifyContent:"center", margin:"1.5%"}}>
                    <div style={{flex:1}}>
                        <div style={{ display: "flex" }}>
                            <div style={{ border: "3px solid green", borderRadius: "5px", fontSize:"1vw", textAlign: "center", width:"15%", lineHeight:"20px" }}>step 1</div>
                            <div>&nbsp;∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙&nbsp;</div>
                        </div>
                    </div>
                    <div style={{flex:1}}>
                        <div style={{ display: "flex", alignItems:"center" }}>
                            <div style={{ background: "#C8C8C8", color:"#FFFFFF", borderRadius: "5px", fontSize:"1vw", textAlign:"center", width:"15%", lineHeight:"25px" }}>step 2</div>
                            <div>&nbsp;∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙&nbsp;</div>
                        </div>
                    </div>
                    <div style={{flex:1}}>
                        <div style={{ display: "flex", alignItems:"center" }}>
                            <div style={{ background: "#C8C8C8", color:"#FFFFFF", borderRadius: "5px", fontSize:"1vw", textAlign:"center", width:"15%", lineHeight:"25px" }}>step 3</div>
                            <div>&nbsp;∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙&nbsp;</div>
                        </div>
                    </div>
                    <div style={{flex:1}}>
                        <div style={{ display: "flex", alignItems:"center" }}>
                            <div style={{ background: "#C8C8C8", color:"#FFFFFF", borderRadius: "5px", fontSize:"1vw", textAlign:"center", width:"15%", lineHeight:"25px" }}>step 4</div>
                            <div>&nbsp;&nbsp;</div>   
                        </div>
                    </div>
                </div>
                
                <div style={{display: "flex", margin: "1.5%"}}>
                    <div style={{flex:1}}>
                        <div style={{ display:"flex", alignItems:"center" }}>
                            <FontAwesomeIcon icon={faUtensils}/>
                            <h3 style={{marginLeft:"2%", marginRight:"3%"}}>다이닝</h3>
                            <div style={{color:"#A2A2A2", borderBottom: "2px solid red"}}>
                                {  storeState ? selectedStoreName : "식당을 선택해주세요" }
                            </div>
                        </div>
                        <Stores>
                            {
                              StoreData.map(store => (
                                <SelectedStore key={store.alt} store={store}  />
                              ))
                            }
                            {/* <div style={{ width:"30%", background:"#00498C", borderRadius:"15px", textAlign: "center", lineHeight: "100px", margin:"1%", color:"#fff" }}>성원정</div>
                            <div style={{ width:"30%", background:"#00498C", borderRadius:"15px", textAlign: "center", lineHeight: "100px", margin:"1%", color:"#fff" }}>아뜰리에</div>
                            <div style={{ width:"30%", background:"#00498C", borderRadius:"15px", textAlign: "center", lineHeight: "100px", margin:"1%", color:"#fff" }}>레스토랑</div>
                            <div style={{ width:"30%", background:"#00498C", borderRadius:"15px", textAlign: "center", lineHeight: "100px", margin:"1%", color:"#fff" }}>뷔페</div>
                            <div style={{ width:"30%", background:"#00498C", borderRadius:"15px", textAlign: "center", lineHeight: "100px", margin:"1%", color:"#fff" }}>스시노칸도</div> */}
                        </Stores>
                        {/* <div style={{display: "flex", marginTop: "6%", alignContent:"space-between", flexWrap:"wrap", }}>
                            
                        </div> */}
                    </div>
                    <div style={{ display:"flex", borderLeft: "1px solid #EBEBEB", height:"300px", marginTop: "3%" }}></div>
                    <div style={{flex:1}}>
                        <div style={{ display:"flex", alignItems:"center", marginLeft:"1.5%"  }}>
                            <FontAwesomeIcon icon={faCalendar}/>
                            <h3 style={{marginLeft:"2%", marginRight:"3%"}}>날짜</h3>   
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div style={{ display:"flex", borderLeft: "1px solid #EBEBEB", height:"300px", marginTop: "3%" }}></div>
                    <div style={{flex:1}}>
                        <div style={{ display:"flex", alignItems:"center", marginLeft:"1.5%" }}>
                            <FontAwesomeIcon icon={faClock}/>
                            <h3 style={{marginLeft:"2%", marginRight:"3%"}}>시간</h3>   
                        </div>
                    </div>
                    <div style={{ display:"flex", borderLeft: "1px solid #EBEBEB", height:"300px", marginTop: "3%" }}></div>
                    <div style={{flex:1}}>
                        <div style={{ display:"flex", alignItems:"center", marginLeft:"1%" }}>
                            <FontAwesomeIcon icon={faUserPlus}/>
                            <h3 style={{marginLeft:"2%", marginRight:"3%"}}>인원</h3>   
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
    top: calc(50vh - 390px);
    left: calc(50vw - 850px);
    background-color: white;
    border-radius: 25px;
    width: 1700px;
    height: 700px;
`;

const HeaderBox = styled.div`
    width: 100%;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom: 1px solid #CCCCCC;
    height: 12%;
    justify-content: center;
    display: flex;
    align-items: center;
    background: #ECECEC;
`;

const DiningSelectBox = styled.div`
    flex: 1;
    text-align: center;
    margin-left: 30%;
`;

const FNBSelectBox = styled.div`
    flex: 1;
    text-align: center;
    margin-right: 30%;
`;

const CloseBox = styled.div`
    display: flex;
    margin-right: 1%;
`;

const ImageBox = styled(Image)`
    cursor: pointer;
    &:hover {
        border: 2px solid red;
    }
`;

const TextBoxBorderBot = styled.div`
    display: inline;
    cursor: pointer;
    &:hover{
        border-bottom: 3px solid red;
    }
`;

const Stores = styled.div`
    display: flex;
    margin-top: 6%; 
    align-content: space-between; 
    flex-wrap: wrap
`;

