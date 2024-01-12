import { formatNumberWithCommas } from "@/common/func/function"
import { FlexDiv, FontDiv, HallPriceBox } from "@/common/style/FlexBox"
import { AmenitiesProps } from "@/data/Amenties"
import { MenuTypeProps } from "@/data/MenuType"
import { TableTypeData } from "@/data/TableType"
import Image from "next/image"
import styled from "styled-components"

export default function HallGuideNotice() {
    
    const priceConvert = (alt:string) => {
        
        if(alt === '노래방 기기') {
            return "(30만원)"
        } else if(alt === '이동식 엠프') {
            return "(10만원)"
        } else if(alt === '이동식 TV'){
            return "(10만원)" 
        } else {
            return "별도처리"
        } 
    }
    return (
        <>
            <HallPriceBox>
                <FontDiv width={110} height={26} fontSize={15}>• 연회장 대관료</FontDiv>
                <FontDiv width={160} height={1} color="#ededed">∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</FontDiv>
                <FontDiv width={123} height={26} fontSize={15} color="red" fontWeight="bold">기본 500,000원</FontDiv>
            </HallPriceBox>
            <FlexDiv width={415} height={20} alignItems="center" justifyContent="flex-end" marginTop={-15}>
                <FontDiv fontSize={12} color="#b2b2b2" fontWeight="500">시간 사용별로 다름</FontDiv>
            </FlexDiv>
            <FlexDiv alignItems="center" marginTop={15} borderBottom="1px solid #dfdfdf"></FlexDiv>
            
            <FlexDiv width={470} height={159} marginTop={20} justifyContent="center" borderBottom="1px solid #dfdfdf">
                <div style={{ width:"393px" }}>
                    <FontDiv fontSize={15}>• 타입별 최대 수용인원</FontDiv>
                    <FlexDiv marginTop={16}>
                    {
                        TableTypeData.map((tableType, index) => (
                            <div key={index} style={{ flex:1 }}>
                                <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px" }}>
                                    <Image src={tableType.src_3} alt={tableType.alt} width={50} height={50} />
                                    <FontDiv fontSize={12} color="#808080" marginTop={6}>{tableType.alt}</FontDiv>
                                    <FontDiv fontSize={14} color="#585858" marginTop={6}>{tableType.seatNum}석</FontDiv>
                                </div>
                            </div>
                        ))
                    }
                    </FlexDiv>
                </div>
            </FlexDiv>

            <FlexDiv width={470} justifyContent="center" marginTop={20}>
                <div style={{ width:"393px" }}>
                    <FontDiv fontSize={15}>• 부대시설</FontDiv>
                    <FlexDiv marginTop={16}>
                    {
                        AmenitiesProps.slice(0, 5).map((amenity, index) => (
                            <div key={index} style={{ flex:"1" }}>
                                <FlexDiv flexDirection="column" justifyContent="center" alignItems="center" margin={10}>
                                    <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={amenity.imgSrc} alt={amenity.alt} width={58} height={58} />
                                    <FontDiv fontSize={12} color="#808080" marginTop={8}>{amenity.alt}</FontDiv>
                                </FlexDiv>
                            </div>
                        ))
                    }
                
                    </FlexDiv>
                    <FlexDiv marginTop={16} style={{ display:"flex", marginTop:"16px" }}>
                    {
                        AmenitiesProps.slice(5, 10).map((amenity, index) => (
                            <div key={index} style={{ flex:"1" }}>
                                <FlexDiv flexDirection="column" justifyContent="center" alignItems="center" margin={5}>
                                    <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={amenity.imgSrc} alt={amenity.alt} width={58} height={58} />
                                    { amenity.alt === "전동 암막 블라인드" ? 
                                        
                                        <>
                                            <FontDiv fontSize={12} color="#808080" marginTop={8}>{AmenitiesProps[7].alt.substring(0, 5)}</FontDiv>
                                            <FontDiv fontSize={12} color="#808080" marginTop={1}>{AmenitiesProps[7].alt.substring(6)}</FontDiv>
                                        </>
                                            
                                        :
                                            
                                        <FontDiv fontSize={12} color="#808080" marginTop={8}>{amenity.alt}</FontDiv>
                                    }
                                </FlexDiv>
                            </div>
                        ))
                    }
                    </FlexDiv>
                </div>
            </FlexDiv>
            <FlexDiv justifyContent="center" marginTop={20} style={{ display:"flex", justifyContent:"center",  marginTop:"20px" }}>
                <FontDiv width={410} fontSize={5} color="#c8c8c8" style={{ width:"410px", fontSize:"5px", color:"#c8c8c8" }}>∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙</FontDiv>
            </FlexDiv>
            <FlexDiv width={470} height={160} justifyContent="center" marginTop={20} borderBottom="1px solid #dfdfdf">
                <div style={{ width:"393px" }}>
                    <FontDiv fontSize={14} color="#707070">추가요청 부대시설(유료)</FontDiv>
                    <FlexDiv marginTop={16} justifyContent="flex-start">
                    {
                        AmenitiesProps.slice(10).map((amenity, index) => (
                            <div key={index} style={{ flex:"1" }}>
                                <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", margin:"10px"  }}>
                                    <Image style={{ background:"#f6f5f5", borderRadius:"10px", width:"58px", height:"58px" }} src={amenity.imgSrc} alt={amenity.alt} width={58} height={58} />
                                    <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{amenity.alt}</div>
                                    <div style={{ fontSize:"12px", color:"#808080",marginTop:"8px" }}>{ priceConvert(amenity.alt) }</div>
                                </div>
                            </div>
                        ))
                    }
                    <div style={{ flex:"1" }}></div>
                    </FlexDiv>
                </div>
            </FlexDiv>
            <FlexDiv width={470} justifyContent="center" marginTop={20}>
                <div style={{ width:"393px" }}>
                    <FontDiv fontSize={14} color="#707070" fontWeight="bold">∙ 메뉴안내</FontDiv>
                    <FlexDiv marginTop={16}>
                    {
                        MenuTypeProps.map((menuType, index) => (
                            <FlexDiv key={index} width={130} height={40} background="#f6f5f5" borderRadius={10} justifyContent="center" alignItems="center" marginRight={10}>
                                <FontDiv fontSize={14} marginRight={10}>타입 {menuType.type}</FontDiv>
                                <FontDiv fontSize={14} color="#f84040">{formatNumberWithCommas(menuType.price)}원</FontDiv>
                            </FlexDiv>
                        ))
                    }
                    </FlexDiv>
                </div>
            </FlexDiv>
        </>
        
    )
} 