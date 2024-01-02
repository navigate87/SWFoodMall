import { recoilHallInfoState, recoilHallInfoData } from "@/store/stores/modalState";
import Image from "next/image";
import { useRecoilState } from "recoil";
import styled from "styled-components"

export default function HallInfoPopup() {
    const [hallInfoPopup, setHallInfoPopup] = useRecoilState<boolean>(recoilHallInfoState);
    const [selectedHallData] = useRecoilState(recoilHallInfoData);
    const handleCloseClick = () => {
        setHallInfoPopup(false);
        document.body.style.overflow = "auto";
    }
    
    return(
        <ModalBackground>
            <Container>
                <InfoTitle>
                    <FontDiv size={28} weight="bold">연회장</FontDiv>
                    <ModalCancel onClick={handleCloseClick}><Image src={"icon/icon-popup-close.svg"} height={18} width={18} alt="popupclose"/></ModalCancel>
                </InfoTitle>
                <FlexDiv>
                    <FlexCount flex={1} marginTop={30}>
                        <FlexDiv justifyContent="center" marginBottom={10}>
                            <FlexDiv width={280} height={52} background="#f6f6f6" borderRadius={25} justifyContent="center" alignItem="center" gap={50} >
                                <FontDiv size={18} weight="bold">12F</FontDiv>
                                <FontDiv size={18} weight="bold">중규모 연회장</FontDiv>
                            </FlexDiv>
                        </FlexDiv>
                        <FlexDiv justifyContent="center" marginBottom={10}>
                            <FlexDiv width={280} height={52} background="#f6f5f5" borderRadius={25} justifyContent="center" alignItem="center" gap={50}>
                                <FontDiv size={18} weight="bold">11F</FontDiv>
                                <FontDiv size={18} weight="bold">소규모 연회장</FontDiv>
                            </FlexDiv>
                        </FlexDiv>
                        <FlexDiv justifyContent="center" marginBottom={10}>
                            <FlexDiv width={280} height={52} background="#f6f5f5" borderRadius={25} justifyContent="center" alignItem="center" gap={50}>
                                <FontDiv size={18} weight="bold">3F</FontDiv>
                                <FontDiv size={18} weight="bold">소규모 연회장</FontDiv>
                            </FlexDiv>
                        </FlexDiv>
                        <FlexDiv justifyContent="center" marginTop={350} cursor="pointer" paddingBottom={30}>
                            <FlexDiv justifyContent="center" alignItem="center" background="#f84040" width={230} height={77} gap={10} borderRadius={50}>
                                <Image  src={"/icon/icon-main-quick-reservation-on.svg"} alt="reservation" width={30} height={34} />
                                <FontDiv color="#fff" size={26}>F&B 예약</FontDiv>
                            </FlexDiv>
                        </FlexDiv>
                    </FlexCount>
                    <div>
                        <VerticalDivider />
                    </div>
                    <FlexCount flex={3}>
                        <FlexDiv justifyContent="center">
                            <Image src={"/image/Fnb popup img.webp"} alt="중규모 연회장" width={1020} height={440} />
                        </FlexDiv>
                        <FlexDiv>
                            <FontDiv size={38} weight="bold" margin={40}>{selectedHallData?.title}</FontDiv>
                        </FlexDiv>
                        <FlexDiv>
                            <FlexCount flex={2} marginTop={9}>
                                <FlexDiv gap={60} alignItem="center">
                                    <FlexDiv gap={3} marginLeft={40} alignItem="center">
                                        <Image src={"/icon/icon-sub-quick-map.svg"} alt="네비" width={16} height={16}  />
                                        <FontDiv color="#474747" size={14} weight="500">위치</FontDiv>
                                    </FlexDiv>
                                    <FontDiv size={16} weight="bold">{selectedHallData?.location}</FontDiv>
                                </FlexDiv>
                                <MarginDiv marginValue={15}></MarginDiv>
                                <FlexDiv gap={35} alignItem="center">
                                    <FlexDiv gap={3} marginLeft={40} alignItem="center">
                                        <Image src={"/icon/icon-sub-quick-bubble.svg"} alt="인원" width={16} height={16}/>
                                        <FontDiv color="#474747" size={14} weight="500">수용인원</FontDiv>
                                    </FlexDiv>
                                    <FontDiv size={16} weight="bold">최대 {selectedHallData?.peopleCount}명</FontDiv>
                                </FlexDiv>
                            </FlexCount>
                            <VerticalCustom></VerticalCustom>
                            <FlexCount flex={4}>
                                <DescBox>
                                    <DescriptionArea>
                                        {selectedHallData?.popupDescription}
                                    </DescriptionArea>
                                </DescBox>
                            </FlexCount>
                        </FlexDiv>
                    </FlexCount>
                </FlexDiv>
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

const InfoTitle = styled.div`
    width:1330px; 
    height:87px;
    display:flex; 
    justify-content:center; 
    align-items:center; 
    border-bottom:1px solid #dcdcdc;
`;

const FontDiv = styled.div<{size?:number, weight?:string, color?:string, margin?:number}>`
    font-size: ${({size})=>(size)}px;
    font-weight: ${({weight}) => weight};
    color: ${({color}) => color};
    margin: ${({ margin }) => margin}px;
`;

const FlexDiv = styled.div<{justifyContent?:string, alignItem?:string, marginTop?:number, marginLeft?:number, marginBottom?:number, gap?:number, borderRadius?:number, width?:number, height?:number, cursor?:string, background?:string, paddingBottom?:number }>`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent};
    align-items: ${({ alignItem }) => alignItem};
    margin-top: ${({ marginTop }) => marginTop}px;
    margin-left: ${({ marginLeft }) => marginLeft}px;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
    padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
    gap: ${({gap}) => gap}px;
    border-radius: ${({ borderRadius }) => borderRadius}px;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    cursor: ${({cursor}) => cursor};
    background: ${({ background }) => background};

    &:hover {
        background:${({ background })=> (background !== "" ? background : "")};
    }
`;

const FlexCount = styled.div<{flex?:number, marginTop?:number}>`
    flex: ${({ flex })=>flex};
    margin-top: ${({ marginTop })=> marginTop}px;
`;

const VerticalDivider = styled.div`
    height: 100%;
    border-left: 1px solid #dcdcdc;
`;

const VerticalCustom = styled.div`
    position:absolute; 
    border-left:1px solid #dcdcdc; 
    right:710px;
    bottom:35px; 
    height:70px;
`;

const DescBox = styled.div`
    width:594px; 
    height:73px;
`;

const DescriptionArea = styled.div`
    color:#585858;
    font-size:14px; 
    font-weight:500; 
    line-height:1.63;
    letter-spacing:2px;
`;

const MarginDiv = styled.div<{marginValue?:number}>`
    margin: ${({ marginValue }) => marginValue}px;
`;