import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components"

export default function HallGuidePopup({selected} : {selected: string}) {

    useEffect(() => {
        
    })
    return (
        <Container>
            <div style={{ height:"80px", width:"470px", display:"flex", alignItems:"center", marginTop:"10px",borderBottom:"1px solid #dfdfdf" }}>
                <div style={{ height: "80px", width:"110px", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
                    <Image src={"/icon/icon-sub-quick-info_on_black.svg"} alt="info" width={32} height={32} /> 
                    <div style={{ fontSize:"14px", marginTop:"7px" }}>연회장 안내</div>
                </div>
                <div style={{ height: "80px", width:"110px", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
                    <Image src={"/icon/icon-sub-quick-event_on_black.svg"} alt="info" width={32} height={32} /> 
                    <div style={{ fontSize:"14px", marginTop:"7px" }}>이벤트</div>
                </div>
                <div style={{ height: "80px", width:"110px", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
                    <Image src={"/icon/icon-sub-quick-reservation_on_black.svg"} alt="info" width={32} height={32} /> 
                    <div style={{ fontSize:"14px", marginTop:"7px" }}>바로예약</div>
                </div>
                <div style={{ height: "80px", width:"110px", display:"flex", alignItems:"center", justifyContent:"flex-end" }}>
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"center", width:"48px", height:"48px", borderRadius:"50%", background:"#ededed", cursor:"pointer"}}>
                        <Image src={"/icon/icon-popup-close.svg"} alt="close" width={18} height={18} /> 
                    </div>
                </div>
            </div>
            
            <div style={{ width:"470px", height:"40px", display:"flex", justifyContent:"center", marginTop:"20px" }}>
                <div style={{ width:"110px", height:"26px", fontSize:"15px" }}>• 연회장 대관료</div>
                <div style={{ width:"160px", height:"1px", color:"#ededed" }}>∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</div>
                <div style={{ width:"123px", height:"26px", fontSize:"15px", color:"red", fontWeight:"bold" }}>기본 500,000원</div>
            </div>
            <div style={{ width:"415px", height:"20px", display:"flex", alignItems:"center", justifyContent:"flex-end", marginTop:"-15px" }}>
                <div style={{ fontSize:"12px", color:"#b2b2b2", fontWeight:"500" }}>시간 사용별로 다름</div>
            </div>
            <div style={{ display:"flex", alignItems:"center", marginTop:"15px",borderBottom:"1px solid #dfdfdf" }}></div>
            
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    right: 0;
    width: 470px;
    height: 936px;
    z-index: 200;
    background:#fff;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
`;

