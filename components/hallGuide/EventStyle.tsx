import { FlexDiv, FontDiv, FlexN } from "@/common/style/FlexBox";
import Image from "next/image";
import styled from "styled-components";

export default function EventNotice() {
    return (
        <>
            <FlexDiv justifyContent="center" marginTop={20}>
                <FlexDiv width={352}>
                    <FlexN flex={1}>
                        <FlexDiv justifyContent="flex-start">
                            <FontDiv fontSize={18} color="#22201f">∙ 진행중인 이벤트</FontDiv>   
                        </FlexDiv>
                    </FlexN>
                    <FlexN flex={1}>
                        <FlexDiv justifyContent="flex-end">
                            <div style={{ width: "18px", height:"18px", display:"flex", justifyContent:"center", alignItems:"center", border:"1px solid #dcdcdc", borderRadius:"50%", cursor:"pointer" }}>
                                <StyledCheckbox />
                            </div>
                        </FlexDiv>
                    </FlexN>
                </FlexDiv>
                
            </FlexDiv>
            <EventListContainer>
                <FlexDiv flexDirection="column" alignItems="center" justifyContent="center" marginTop={20}>
                    <Image src={"/image/img-sub-quick-event-01.webp"} alt="Img" height={220} width={352}/>
                    <FontDiv fontSize={16} color="#22201f" marginTop={12}>크리스마스 케이크 기간한정 예약안내</FontDiv>
                    <FontDiv marginTop={4} fontSize={13} color="#707070">성원아뜰리에 | 23.12.19 ~ 23.12.20</FontDiv>
                </FlexDiv>
                <FlexDiv flexDirection="column" alignItems="center" justifyContent="center" marginTop={20}>
                    <Image src={"/image/img-sub-quick-event-01.webp"} alt="Img" height={220} width={352}/>
                    <FontDiv fontSize={16} color="#22201f" marginTop={12}>크리스마스 케이크 기간한정 예약안내</FontDiv>
                    <FontDiv marginTop={4} fontSize={13} color="#707070">성원아뜰리에 | 23.12.19 ~ 23.12.20</FontDiv>
                </FlexDiv>
                <FlexDiv flexDirection="column" alignItems="center" justifyContent="center" marginTop={20}>
                    <Image src={"/image/img-sub-quick-event-01.webp"} alt="Img" height={220} width={352} />
                    <FontDiv fontSize={16} color="#22201f" marginTop={12}>크리스마스 케이크 기간한정 예약안내</FontDiv>
                    <FontDiv marginTop={4} fontSize={13} color="#707070">성원아뜰리에 | 23.12.19 ~ 23.12.20</FontDiv>
                </FlexDiv>
                <FlexDiv flexDirection="column" alignItems="center" justifyContent="center" marginTop={20}>
                    <Image src={"/image/img-sub-quick-event-01.webp"} alt="Img" height={220} width={352}/>
                    <FontDiv fontSize={16} color="#22201f" marginTop={12}>크리스마스 케이크 기간한정 예약안내</FontDiv>
                    <FontDiv marginTop={4} fontSize={13} color="#707070">성원아뜰리에 | 23.12.19 ~ 23.12.20</FontDiv>
                </FlexDiv>
                <FlexDiv flexDirection="column" alignItems="center" justifyContent="center" marginTop={20}>
                    <Image src={"/image/img-sub-quick-event-01.webp"} alt="Img" height={220} width={352}/>
                    <FontDiv fontSize={16} color="#22201f" marginTop={12}>크리스마스 케이크 기간한정 예약안내</FontDiv>
                    <FontDiv marginTop={4} fontSize={13} color="#707070">성원아뜰리에 | 23.12.19 ~ 23.12.20</FontDiv>
                </FlexDiv>
                <FlexDiv flexDirection="column" alignItems="center" justifyContent="center" marginTop={20}>
                    <Image src={"/image/img-sub-quick-event-01.webp"} alt="Img" height={220} width={352}/>
                    <FontDiv fontSize={16} color="#22201f" marginTop={12}>크리스마스 케이크 기간한정 예약안내</FontDiv>
                    <FontDiv marginTop={4} fontSize={13} color="#707070">성원아뜰리에 | 23.12.19 ~ 23.12.20</FontDiv>
                </FlexDiv>
                <FlexDiv flexDirection="column" alignItems="center" justifyContent="center" marginTop={20}>
                    <Image src={"/image/img-sub-quick-event-01.webp"} alt="Img" height={220} width={352}/>
                    <FontDiv fontSize={16} color="#22201f" marginTop={12}>크리스마스 케이크 기간한정 예약안내</FontDiv>
                    <FontDiv marginTop={4} fontSize={13} color="#707070">성원아뜰리에 | 23.12.19 ~ 23.12.20</FontDiv>
                </FlexDiv>
                <FlexDiv flexDirection="column" alignItems="center" justifyContent="center" marginTop={20}>
                    <Image src={"/image/img-sub-quick-event-01.webp"} alt="Img" height={220} width={352}/>
                    <FontDiv fontSize={16} color="#22201f" marginTop={12}>크리스마스 케이크 기간한정 예약안내</FontDiv>
                    <FontDiv marginTop={4} fontSize={13} color="#707070">성원아뜰리에 | 23.12.19 ~ 23.12.20</FontDiv>
                </FlexDiv>
            </EventListContainer>
            {/* <FlexDiv flexDirection="column" alignItems="center" marginTop={20} justifyContent="center">
                
            </FlexDiv>
            <FlexDiv flexDirection="column" alignItems="center" marginTop={20} justifyContent="center">
                
            </FlexDiv> */}
        </>
        
    )
}

const StyledCheckbox = styled.div`
  transition: all 150ms;
  border: '1px solid #dcdcdc';
  background: '#dcdcdc';
  display: flex;
  margin-left: 2px;
  justify-content: center;
  align-items: center;
  
  &:after {
    content: '>';
    font-size: 12px;
    color: black;
  }
`;

const EventListContainer = styled.div`
    overflow-y: auto;
    max-height: 780px;
    margin-top: 5px;
`;