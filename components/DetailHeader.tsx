import { modalConfirmShowState, modalShowState, recoilReserveOption, recoilShowConfirmGroupModal, recoilShowGroupModal } from "@/store/stores/modalState";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Reservation from "@/modal/reservation";
import ConfirmModal from "@/modal/confirmReservation";
import GroupReservation from "@/modal/FnBGroupReserve";
import ConfirmGroupModal from "@/modal/confirmGroupReservation";
type show = {
    show?:boolean;
}

export default function Header() {
    const [showModal, setShowModal] = useRecoilState<boolean>(modalShowState);
    const [showConfirmModal, setShowConfirmModal] = useRecoilState<boolean>(modalConfirmShowState);
    const [showGroupModal, setShowGroupModal] = useRecoilState<boolean>(recoilShowGroupModal);
    const [currentValue, setCurrentValue] = useRecoilState<string>(recoilReserveOption);
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [isLanguageSelect, setIsLanguageSelect] = useState<boolean>(false);
    const [isShowHelpOption, setIsShowHelpOption] = useState<boolean>(false);
    const [showConfirmGroupModal, setShowConfirmGroupModal] = useRecoilState<boolean>(recoilShowConfirmGroupModal);
    
    const handleOnChangeSelectValue = (e:any) => {
      const { innerText } = e.target;
      setCurrentValue(innerText);

      if(innerText === "Dining") {
        setShowModal(true);
      } else if(innerText === "F&B") {
        setShowGroupModal(true);
        
      }
      document.body.style.overflow = "hidden";
    };

    useEffect(() => {
      const handleOutsideClick = (event: any) => {
        const target = event.target as HTMLElement;
        const innerText = event.target.value;
        if(innerText === 0) {
          setCurrentValue("Dining");
        } else if (innerText === 1) {
          setCurrentValue("F&B");
        }

        if (showOptions && target && !target.closest("#select-box")) {
          if(target.closest("#dining_option")) {
            document.body.style.overflow = "hidden";
            setShowModal(true);
            
          }
          if(target.closest("#fnb_option")) {
            document.body.style.overflow = "hidden";
            setShowGroupModal(true);
          }
          if(target.closest("#room_option")) {
            // 객실
          }

          setShowOptions(false);
        }
        if (isLanguageSelect && target && !target.closest("#select-language-box")) {
          setIsLanguageSelect(false);
        }
        if (isShowHelpOption && target && !target.closest("#select-help-option-box")) {
          setIsShowHelpOption(false);
        }

      };

      // 문서에 클릭 이벤트 리스너를 추가합니다.
      document.addEventListener("mousedown", handleOutsideClick);

      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };


    },[showOptions,isLanguageSelect,isShowHelpOption])

    return (
        <>
            <Container>
                <Section>
                    <FlexSection flex={1}>
                        <FlexContainer>
                            <FlexSection flex={0.5}>
                            </FlexSection>
                            <FlexSection flex={1}>
                                <FlexContainer>
                                    <Image src="/image/bi.png" alt="swfood" width={52} height={32} />
                                </FlexContainer>
                            </FlexSection>
                            <FlexSection flex={0.5}></FlexSection>
                            <FlexSection flex={1}>
                                <FlexContainer>
                                    <Image alt="메뉴" src={"icon/menu-icon.svg"} width={25} height={25} />
                                    <div style={{ margin:"5px" }}></div>
                                    <Image alt="메뉴" src={"icon/Search-icon.svg"} width={25} height={25} />
                                </FlexContainer>
                            </FlexSection>
                            <FlexSection flex={1}>
                                <FlexContainer>
                                      <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
                                        <Label onMouseOver={() => setShowOptions(true)} show={!showOptions}>예약</Label>
                                        <SelectOptions show={showOptions}>
                                            <Option style={{cursor:"none", pointerEvents: "none", fontSize: "15px", color:"rgba(81,81,81,0.8)" }}>예약</Option>
                                            <Option id="dining_option" value={0}>Dining</Option>
                                            <Option id="fnb_option" value={1}>F&B</Option>
                                            <Option id="room_option" value={2}>객실</Option>
                                        </SelectOptions>
                                      </SelectBox>
                                </FlexContainer>
                            </FlexSection>
                            <FlexSection flex={1}>
                                <FlexContainer>
                                    <Label show={true}>EVENT</Label>
                                </FlexContainer>
                            </FlexSection>
                        </FlexContainer>
                    </FlexSection>
                    <FlexSection flex={3}>
                        <FlexContainer>
                            <div style={{ color:"#fff", fontSize:"28px" }}>연회장</div>
                        </FlexContainer>
                    </FlexSection>
                    <FlexSection flex={1}>
                        <FlexContainer>
                            <div style={{ color:"#fff", fontSize:"28px" }}>도움말</div>   
                        </FlexContainer>
                    </FlexSection>
                </Section>
            </Container>
            {showModal && <Reservation />} 
            {showGroupModal && <GroupReservation />}
            {showConfirmModal && <ConfirmModal />}
            {showConfirmGroupModal && <ConfirmGroupModal />}
        </>
        
    )
}

const Container = styled.div`
    height: 60px;
`;

const Section = styled.div`
    height: 60px;
    margin: 0 auto;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    z-index: 40;
`;

const FlexSection = styled.div<{flex:number}>`
    flex:${({ flex }) => flex};
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SelectBox = styled.div`
  position: relative;
  width: 50px;
  left: -1px;
  padding: 10px;
  border-radius: 12px;
  align-self: center;
  cursor: pointer;  
`;

const SelectHelpOptionBox = styled.div`
  position: absolute; 
  right: 108px;
  top: 60px;
`;

const SelectHelpOptions = styled.ul<show>`
  position: absolute;
  list-style: none;
  left: 2px;
  text-align: center;
  right: 0;
  width: 60px;
  overflow: hidden;
  top: 2px;
  padding: 0;
  border-radius: 5px;
  background-color: rgba(42,42,42,0.4);
  color: #fefefe;
  max-height: ${(props) => (props.show ? "none" : "0")};
  transition: all  0.3s ease-in-out;
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  z-index: 10; 
`;

const SelectOptions = styled.ul<show>`
  position: absolute;
  list-style: none;
  left: -4px;
  text-align: center;
  right: 0;
  width: 60px;
  overflow: hidden;
  top: -2px;
  
  padding: 0;
  border-radius: 5px;
  background-color: rgba(42,42,42,0.4);
  color: #fefefe;
  max-height: ${(props) => (props.show ? "none" : "0")};
  transition: all  0.3s ease-in-out;
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  z-index: 10;
`;

const Label = styled.label<show>`
  font-size: 14px;
  text-align: center;
  color: white;
  cursor: pointer;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const Option = styled.li`
  font-size: 12px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    color: #f84040;
  }
`;


