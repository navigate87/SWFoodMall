import { AmenitiesProps } from "@/data/Amenties";
import { MenuTypeProps } from "@/data/MenuType";
import { TableTypeData } from "@/data/TableType";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components"

export default function HallGuidePopup({selected, closePopup} : {selected: string, closePopup: () => void}) {

    useEffect(() => {
        
    })

    const formatNumberWithCommas = (num: number): string => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
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
                    <CloseBtn onClick={closePopup}>
                        <Image src={"/icon/icon-popup-close.svg"} alt="close" width={18} height={18} /> 
                    </CloseBtn>
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
            
            <div style={{ width:"470px", height:"159px", marginTop:"20px", justifyContent:"center", display:"flex", borderBottom:"1px solid #dfdfdf" }}>
                <div style={{ width:"393px" }}>
                    <div style={{  fontSize:"15px" }}>• 타입별 최대 수용인원</div>
                    <div style={{ display:"flex", marginTop:"16px" }}>
                        <div style={{ flex:1 }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px" }}>
                                <Image src={TableTypeData[0].src_3} alt={TableTypeData[0].alt} width={50} height={50} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"6px" }}>{TableTypeData[0].alt}</div>
                                <div style={{ fontSize:"14px", color:"#585858",marginTop:"6px" }}>{TableTypeData[0].seatNum}석</div>
                            </div>
                        </div>
                        <div style={{ flex:1 }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px" }}>
                                <Image src={TableTypeData[2].src_3} alt={TableTypeData[2].alt} width={50} height={50} />
                                <div style={{ fontSize:"12px", color:"#808080", marginTop:"6px" }}>{TableTypeData[2].alt}</div>
                                <div style={{ fontSize:"14px", color:"#585858", marginTop:"6px" }}>{TableTypeData[2].seatNum}석</div>
                            </div>
                        </div>
                        <div style={{ flex:1 }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px" }}>
                                <Image src={TableTypeData[3].src_3} alt={TableTypeData[3].alt} width={50} height={50} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"6px" }}>{TableTypeData[3].alt}</div>
                                <div style={{ fontSize:"14px", color:"#585858",marginTop:"6px" }}>{TableTypeData[3].seatNum}석</div>
                            </div>
                        </div>
                        <div style={{ flex:1 }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px" }}>
                                <Image src={TableTypeData[1].src_3} alt={TableTypeData[1].alt} width={50} height={50} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"6px" }}>{TableTypeData[1].alt}</div>
                                <div style={{ fontSize:"14px", color:"#585858",marginTop:"6px" }}>{TableTypeData[1].seatNum}석</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display:"flex", width:"470px", justifyContent:"center", marginTop:"20px" }}>
                <div style={{ width:"393px" }}>
                    <div style={{  fontSize:"15px"}}>• 부대시설</div>
                    <div style={{ display:"flex", marginTop:"16px" }}>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[0].imgSrc} alt={AmenitiesProps[0].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[0].alt}</div>
                            </div>
                        </div>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[1].imgSrc} alt={AmenitiesProps[1].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[1].alt}</div>
                            </div>
                        </div>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[2].imgSrc} alt={AmenitiesProps[2].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[2].alt}</div>
                            </div>
                        </div>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[3].imgSrc} alt={AmenitiesProps[3].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[3].alt}</div>
                            </div>
                        </div>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[4].imgSrc} alt={AmenitiesProps[4].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[4].alt}</div>
                            </div>
                        </div>
                       
                    </div>
                    <div style={{ display:"flex", marginTop:"16px" }}>
                    <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"5px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[5].imgSrc} alt={AmenitiesProps[5].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[5].alt}</div>
                            </div>
                        </div>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"5px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[6].imgSrc} alt={AmenitiesProps[6].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[6].alt}</div>
                            </div>
                        </div>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"5px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[7].imgSrc} alt={AmenitiesProps[7].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080", marginTop:"8px" }}>{AmenitiesProps[7].alt.substring(0, 5)}</div>
                                <div style={{ fontSize:"12px", color:"#808080", marginTop:"1px" }}>{AmenitiesProps[7].alt.substring(6)}</div>
                            </div>
                        </div>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"5px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[8].imgSrc} alt={AmenitiesProps[8].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[8].alt}</div>
                            </div>
                        </div>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"5px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[9].imgSrc} alt={AmenitiesProps[9].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[9].alt}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display:"flex", justifyContent:"center",  marginTop:"20px" }}>
                <div style={{ width:"410px", fontSize:"5px", color:"#c8c8c8" }}>∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</div>
            </div>
            <div style={{ display:"flex", width:"470px", height:"160px" ,justifyContent:"center", marginTop:"20px", borderBottom:"1px solid #dfdfdf" }}>
                <div style={{ width:"393px" }}>
                    <div style={{ fontSize:"14px", color:"#707070" }}>추가요청 부대시설(유료)</div>
                    <div style={{ display:"flex", marginTop:"16px", justifyContent:"flex-start" }}>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[10].imgSrc} alt={AmenitiesProps[10].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[10].alt}</div>
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>(30만원)</div>
                            </div>
                        </div>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[11].imgSrc} alt={AmenitiesProps[11].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[11].alt}</div>
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>(10만원)</div>
                            </div>
                        </div>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[12].imgSrc} alt={AmenitiesProps[12].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[12].alt}</div>
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>(10만원)</div>
                            </div>
                        </div>
                        <div style={{ flex:"1" }}>
                            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px"  }}>
                                <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={AmenitiesProps[13].imgSrc} alt={AmenitiesProps[13].alt} width={58} height={58} />
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{AmenitiesProps[13].alt}</div>
                                <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>(별도처리)</div>
                            </div>
                        </div>
                        <div style={{ flex:"1" }}></div>
                    </div>
                </div>
            </div>
            <div style={{ display:"flex", width:"470px", justifyContent:"center", marginTop:"20px" }}>
                <div style={{ width:"393px" }}>
                    <div style={{ fontSize:"14px", color:"#707070", fontWeight:"bold" }}>∙ 메뉴안내</div>
                    <div style={{ display:"flex", marginTop:"16px", justifyContent:"flex-start" }}>
                        <div style={{ width:"130px", height:"40px", background:"#f6f5f5", borderRadius:"10px", display:"flex", justifyContent:"center", alignItems:"center", marginRight:"10px" }}>
                            <div style={{ fontSize:"14px", marginRight:"10px" }}>타입 {MenuTypeProps[0].type}</div>
                            <div style={{ fontSize:"14px", color:"#f84040" }}>{formatNumberWithCommas(MenuTypeProps[0].price)}원</div>
                        </div>
                        <div style={{ width:"130px", height:"40px", background:"#f6f5f5", borderRadius:"10px", display:"flex", justifyContent:"center", alignItems:"center", marginRight:"10px" }}>
                            <div style={{ fontSize:"14px", marginRight:"10px" }}>타입 {MenuTypeProps[1].type}</div>
                            <div style={{ fontSize:"14px", color:"#f84040" }}>{formatNumberWithCommas(MenuTypeProps[1].price)}원</div>
                        </div>
                        <div style={{ width:"130px", height:"40px", background:"#f6f5f5", borderRadius:"10px", display:"flex", justifyContent:"center", alignItems:"center", marginRight:"10px" }}>
                            <div style={{ fontSize:"14px", marginRight:"10px" }}>타입 {MenuTypeProps[2].type}</div>
                            <div style={{ fontSize:"14px", color:"#f84040" }}>{formatNumberWithCommas(MenuTypeProps[2].price)}원</div>
                        </div>
                    </div>
                </div>
            </div>


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

const CloseBtn = styled.div`
    display:flex;
    align-items:center; 
    justify-content:center;
    width:48px;
    height:48px;
    border-radius:50%; 
    
    cursor:pointer;

    &:hover {
        background:#ededed; 
    }
`;

