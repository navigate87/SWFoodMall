import { formatNumberWithCommas } from "@/common/func/function"
import { FlexDiv, FontDiv, HallPriceBox } from "@/common/style/FlexBox"
import { AmenitiesProps } from "@/data/Amenties"
import { MenuTypeProps } from "@/data/MenuType"
import { TableTypeData } from "@/data/TableType"
import Image from "next/image"
import styled from "styled-components"

export default function SwjGuideNotice() {
    
    return (
        <>
            <SalesGuideBox>
                <FlexDiv width={408} justifyContent="flex-start">
                    <FontDiv color="#cc4c42" fontSize={14}>영업시간 안내</FontDiv>
                </FlexDiv> 
                <FlexDiv justifyContent="flex-start" width={408} marginTop={8}>
                    <FontDiv color="#242424" fontSize={30}>11:00 - 21:00</FontDiv>
                </FlexDiv> 
                <FlexDiv justifyContent="flex-start" width={408} marginTop={15} alignItems="center">
                    <div style={{ marginRight: "6px"}}>
                        <Image src={"/icon/icon-sub-quick-day.svg"} alt="휴무일" width={18} height={18} />
                    </div>
                    <div style={{ width:"74px" }}>
                        <FontDiv fontSize={16} marginRight={18} color="#474747">휴무일</FontDiv>
                    </div>
                    <FontDiv width={160} fontWeight="bold" fontSize={16} color="#474747">정기휴점 (매주 일요일)</FontDiv>
                </FlexDiv> 
                <FlexDiv justifyContent="flex-start" width={408} marginTop={15} alignItems="center">
                    <div style={{ marginRight: "6px"}}>
                        <Image src={"/icon/icon-sub-quick-call.svg"} alt="연락처" width={18} height={18} />
                    </div>
                    <div style={{ width:"74px" }}>
                        <FontDiv fontSize={16} marginRight={18} color="#474747">연락처</FontDiv>
                    </div>
                    <FontDiv fontSize={16} width={160} fontWeight="bold" color="#474747">02-1811-1811</FontDiv>
                </FlexDiv> 
                <FlexDiv justifyContent="flex-start" width={408} marginTop={15} alignItems="center">
                    <div style={{ marginRight: "6px"}}>
                        <Image src={"/icon/icon-sub-quick-map_small.svg"} alt="위치" width={18} height={18} />
                    </div>
                    <div style={{ width:"74px" }}>
                        <FontDiv fontSize={16} marginRight={18} color="#474747">위치</FontDiv>
                    </div>
                    <FontDiv fontSize={16} width={160} fontWeight="bold" color="#474747">성원푸드몰 3층, 4층</FontDiv>
                </FlexDiv> 
                <FlexDiv justifyContent="flex-start" width={408} marginTop={15} alignItems="center">
                    <div style={{ marginRight: "6px"}}>
                        <Image src={"/icon/icon-sub-quick-day.svg"} alt="수용인원" width={18} height={18} />
                    </div>
                    <div style={{ width:"74px" }}>
                        <FontDiv fontSize={16} marginRight={18} color="#474747">수용인원</FontDiv>
                    </div>
                    <FontDiv fontSize={16} width={160} fontWeight="bold" color="#474747">최대 120명</FontDiv>
                </FlexDiv>  
            </SalesGuideBox> 

            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", marginTop:"30px" }}>
                <div style={{ display: "flex", width:"408px", justifyContent:"flex-start"  }}>
                    <div style={{ marginRight:"12px" }}>
                        <div style={{ display:"flex", width:"96px", height:"34px", justifyContent:"center", alignItems:"center", border:"1px solid #c8c8c8", borderRadius:"17px"  }}>
                            <div style={{ fontSize:"14px", fontWeight:"500", color:"#22201f" }}>메뉴 전체</div>
                        </div>
                    </div>
                    <div style={{ marginRight:"12px" }}>
                        <div style={{ display:"flex", width:"96px", height:"34px", justifyContent:"center", alignItems:"center", border:"1px solid #c8c8c8", borderRadius:"17px"  }}>
                            <div style={{ fontSize:"14px", fontWeight:"500", color:"#22201f" }}>한식</div>
                        </div>
                    </div>
                    <div style={{ marginRight:"12px" }}>
                        <div style={{ display:"flex", width:"96px", height:"34px", justifyContent:"center", alignItems:"center", border:"1px solid #c8c8c8", borderRadius:"17px"  }}>
                            <div style={{ fontSize:"14px", fontWeight:"500", color:"#22201f" }}>정육</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ overflowY: "auto", maxHeight: "530px", marginTop:"20px"}}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center"  }}>
                <div style={{ display:"flex", width:"408px", justifyContent:"space-between", flexWrap:"wrap",  }}>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_1.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-new.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_2.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-hot.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_1.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-new.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_1.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-hot.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_1.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-new.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_1.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-new.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_1.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-hot.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_2.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-new.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_1.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-hot.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_2.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-new.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_2.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-hot.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_2.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-new.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    <div style={{ width:"190px", height:"252px", marginBottom:"24px" }}>
                        <div style={{ position:"relative", display:"flex", width:"190px", height:"190px", objectFit:"contain", background:"#f7f7f7", borderRadius:"10px" }}>
                            <Image src={"/image/menu-img_2.webp"} alt="menu_1" width={190} height={190} />
                            <div style={{ position:"absolute" }}>
                                <Image src={"/icon/icon-badge-hot.svg"} width={44} height={44} alt="new" />
                            </div>
                        </div>
                        <div style={{ fontSize:"16px", fontWeight:"bold", color:"#22201f", marginTop:"10px"  }}>한우-갈비살 1+</div>
                        <div style={{ fontSize:"16px", color:"#22201f", fontWeight:"200", marginTop:"4px" }}>30,000원</div>
                    </div>
                    
                </div>
            </div>
            </div>
            
        </>
        
    )
}

const SalesGuideBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column; 
    height:262px; 
    border-bottom:1px solid #e5e5e5;
`;



