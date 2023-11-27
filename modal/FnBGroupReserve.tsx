import { recoilReserveOption, recoilShowGroupModal } from "@/store/stores/modalState";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Image from "next/image";
import ArrowButton from "@/components/ArrowButton";

interface CheckState {
  isComplete?:boolean;
}

interface ButtonProps {
  direction: 'up' | 'down'
}

export default function GroupReservation() {
  const [currentValue, setCurrentValue] = useRecoilState<string>(recoilReserveOption);
  const [showGroupModal, setShowGroupModal] = useRecoilState<boolean>(recoilShowGroupModal);
  
  const handleClick = (event:any) => {
    setShowGroupModal(false);
    document.body.style.overflow = "auto";
  }

  const handleDownClick = () => {
    console.log('Down button clicked!');
  };

  return (
    <>
      <ModalBackground>
        <Container>
          <HeaderBox>
            <DiningSelectBox>
              <TextBoxBorderBot style={{ borderBottom: currentValue === "Dining" ? "3px solid red" : "", color: currentValue === "Dining" ? "#22201f" : "#a2a2a2" }}>DINING 예약</TextBoxBorderBot> 
            </DiningSelectBox>
            <FNBSelectBox>
              <TextBoxBorderBot style={{ borderBottom: currentValue === "F&B" ? "3px solid red" : "", color: currentValue === "F&B" ? "#22201f" : "#a2a2a2" }}>F&B 단체예약</TextBoxBorderBot>
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
          <StepBox>
            <StepFlexDiv>
              <StepDeepBox>
                <StepCheck>
                  step 1
                </StepCheck>
                <StepDot>&nbsp;∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙&nbsp;</StepDot>
              </StepDeepBox>
            </StepFlexDiv>
            <StepFlexDiv>
              <StepDeepBox>
                <StepCheck>
                  step 2
                </StepCheck>
                <StepDot>&nbsp;∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙&nbsp;</StepDot>
              </StepDeepBox>
            </StepFlexDiv>
            <StepFlexDiv>
              <StepDeepBox>
                <StepCheck>
                  step 3
                </StepCheck>
                <StepDot>&nbsp;∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙&nbsp;</StepDot>
              </StepDeepBox>
            </StepFlexDiv>
            <StepFlexDiv>
              <StepDeepBox>
                <StepCheck>
                  step 4
                </StepCheck>
              </StepDeepBox>
            </StepFlexDiv>
            <ArrowBox>
              <ArrowButton direction={false} onClick={handleDownClick} />
            </ArrowBox>
          </StepBox>

        </Container>
      </ModalBackground>
    </>
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
    font-size: 20px;
`;

const StepBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5%;
`;

const StepFlexDiv = styled.div`
  flex: 1;
`;

const StepDeepBox = styled.div`
  display: flex;
  align-items: center;
`;

const StepCheck = styled.div<CheckState>`
  border: ${(props) => (props.isComplete ? '3px solid #26c46a' : "")};
  border-radius: 5px;
  font-size: 1vw;
  text-align: center;
  width: 15%;
  line-height: 20px;
`;

const StepDot = styled.div<CheckState>`
  color: ${(props) => (props.isComplete ? '#26c46a' : '#c8c8c8')};
`;

const ArrowBox = styled.div`
  position: absolute;
  top: 100px;
  right: 25px;
`;




