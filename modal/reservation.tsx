import { useRecoilState } from "recoil";

import styled from "styled-components"
import { modalShowState } from "@/store/stores/modalState";
import { CloseIcon } from "../components/common/icons/index";
import Image from "next/image";

export default function Reservation() {
    const [showModal, setShowModal] = useRecoilState<boolean>(modalShowState)
    const handleClick = (event:any) => {
        setShowModal(false);
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
                            width={24} 
                            height={24} 
                            alt="Close" />
                    </CloseBox>
                </HeaderBox>
                
                <div style={{display: "flex", justifyContent:"flex-start", margin:"1.5%"}}>
                    step
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
    &:hover{
        border-bottom: 3px solid red;
    }
`;

