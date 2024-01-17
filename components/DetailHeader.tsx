import { modalConfirmShowState, modalShowState, recoilReserveOption, recoilShowConfirmGroupModal, recoilShowGroupModal } from "@/store/stores/modalState";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Reservation from "@/modal/reservation";
import ConfirmModal from "@/modal/confirmReservation";
import GroupReservation from "@/modal/FnBGroupReserve";
import ConfirmGroupModal from "@/modal/confirmGroupReservation";
import { useRouter } from "next/router";
import Link from "next/link";
import { relative } from "path";
import StoreSelectPopup from "@/modal/storeSelected";

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
    const [isToggled, setIsToggled] = useState(false);
    const router = useRouter();
    const {storeName}  = router.query;

    const renderStoreName = () => {
        
        switch (storeName) {
            case "카페아뜰리에":
                return <Image style={{ cursor:"pointer" }} src={"/icon/cate-logo-atelier.svg"} width={152} height={44} alt="카페아뜰리에" />;
            case "스시노칸도":
                return <Image style={{ cursor:"pointer" }} src={"/icon/cate-logo-sushinokando.svg"} width={152} height={44} alt="스시노칸도" />;
            case "성원정":
                return <Image style={{ cursor:"pointer" }} src={"/icon/cate-logo-swj.svg"} width={152} height={44} alt="성원정" />;
            default:
                return <div style={{ color: "#fff", fontSize: "28px", marginRight: "15px", cursor:"pointer" }}>{storeName}</div>;
        }
    };

    const handleToggleClick = () => {
        setIsToggled(!isToggled);
    }

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
                            <FlexSection flex={0.5}></FlexSection>
                            <FlexSection flex={1}>
                                <FlexContainer>
                                    <Link href="/" >
                                        <Image style={{ cursor:"pointer" }} src="/image/bi.png" alt="swfood" width={52} height={32} />
                                    </Link>
                                </FlexContainer>
                            </FlexSection>
                            <FlexSection flex={1}></FlexSection>
                           
                            <FlexSection flex={1}>
                                <FlexContainer >
                                    <div style={{ cursor:"pointer"}}>
                                        <Image alt="메뉴" src={"/icon/menu-icon.svg"} width={25} height={25} />
                                    </div>
                                    
                                    <div style={{ margin:"5px" }}></div>
                                    <div style={{ cursor:"pointer"}}>
                                        <Image alt="메뉴" src={"/icon/Search-icon.svg"} width={25} height={25} />
                                    </div>
                                </FlexContainer>
                            </FlexSection>
                            <FlexSection flex={1}>
                                <FlexContainer>
                                      <SelectBox onClick={() => setShowOptions((prev) => !prev)} style={{ pointerEvents: isToggled ? "none" : "inherit" }}>
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
                                    <Label show={true} style={{ pointerEvents: isToggled ? "none" : "inherit" }}>EVENT</Label>
                                </FlexContainer>
                            </FlexSection>
                            <FlexSection flex={1}></FlexSection>
                            
                        </FlexContainer>
                    </FlexSection>
                    <FlexSection flex={3} >
                        <FlexContainer>
                            {renderStoreName()}
                            <Image
                                onClick={handleToggleClick} 
                                style={{ cursor:"pointer" }}
                                src={!isToggled ? "/icon/icon-top-logo-toggle-Top.svg" : "/icon/icon-top-logo-toggle-Bottom.svg"} 
                                alt="arrow" 
                                width={32} 
                                height={32} 
                            />
                        </FlexContainer>
                        
                    </FlexSection>
                    
                    <FlexSection flex={1}>
                        <FlexContainer>
                            <FlexSection flex={1}></FlexSection>
                            <FlexSection flex={1}></FlexSection>
                            <FlexSection flex={0.5}>
                                <SelectLanguageBox id="select-language-box" onClick={() => setIsLanguageSelect((prev) => !prev)} style={{ pointerEvents: isToggled ? "none" : "inherit" }}>
                                    {
                                      !isLanguageSelect && 
                                      <LanguageOptionBox>
                                        <LanguageLabel isSelected={!isLanguageSelect}>KR</LanguageLabel>
                                        <SelectDirection>
                                          <Image src={"/icon/icon_select_down.webp"} width={12} height={9} alt="down" />
                                        </SelectDirection>
                                      </LanguageOptionBox>
                                    }
                                    <LanguageOptions style={{ pointerEvents: isToggled ? "none" : "inherit" }} show={isLanguageSelect}>
                                        <div style={{ display:"flex", justifyContent: "center", alignItems: "center", margin: "5px" }}>
                                        <LanguageLabel  isSelected={!isLanguageSelect}>KR</LanguageLabel> 
                                        {
                                          isLanguageSelect && 
                                          <SelectDirection>
                                            <Image src={"/icon/icon_select_up.svg"} width={12} height={20} alt="up" />
                                          </SelectDirection>
                                        }
                                        </div>
                                        <div style={{ borderBottom:"1px solid #ededed", width:"70%", marginLeft: "8px", marginBottom: "9px"}}></div>
                                        <Option value={0} onClick={handleOnChangeSelectValue}>KR</Option>
                                        <Option value={1} onClick={handleOnChangeSelectValue}>EN</Option>
                                        <Option value={2} onClick={handleOnChangeSelectValue}>CN</Option>
                                        <Option value={3} onClick={handleOnChangeSelectValue}>JP</Option>
                                    </LanguageOptions>
                                </SelectLanguageBox>
                            </FlexSection>
                            <FlexSection flex={0.7}>
                                <FlexContainer>
                                    <Image style={{ marginLeft:"10px",marginTop: "4px" }} alt="메뉴" src={"/icon/my-login.svg"} width={40} height={40} />   
                                </FlexContainer>
                            </FlexSection>
                            <FlexSection flex={0.7}>
                                <FlexContainer style={{ pointerEvents: isToggled ? "none" : "inherit" }}>
                                    <div onMouseOver={() => setIsShowHelpOption(true)}>
                                        <Image onClick={()=>setIsShowHelpOption((prev) => !prev)} style={{marginTop: "4px" }} alt="메뉴" src={"/icon/customcenter.svg"} width={40} height={40} />
                                    </div>
                                    <SelectHelpOptionBox id="select-help-option-box">
                                      <SelectBox  onClick={() => setIsShowHelpOption((prev) => !prev)}>
                                        <SelectHelpOptions show={isShowHelpOption}>
                                          <Option value={0} onClick={handleOnChangeSelectValue}>이용안내</Option>
                                          <Option value={1} onClick={handleOnChangeSelectValue}>공지사항</Option>
                                          <Option value={2} onClick={handleOnChangeSelectValue}>FAQ</Option>
                                          <Option value={3} onClick={handleOnChangeSelectValue}>1:1문의</Option>
                                        </SelectHelpOptions>
                                      </SelectBox>
                                    </SelectHelpOptionBox>
                                </FlexContainer>
                            </FlexSection>
                            <FlexSection flex={0.7}>
                                <FlexContainer>
                                    <Image style={{ marginRight:"10px",marginTop: "4px" }} alt="메뉴" src={"/icon/basket.png"} width={40} height={40} />
                                </FlexContainer>
                            </FlexSection>
                            <FlexSection flex={0.3}></FlexSection>
                        </FlexContainer>
                    </FlexSection>
                </Section>
            </Container>
            {isToggled && <StoreSelectPopup storeName={storeName ? (Array.isArray(storeName) ? storeName : [storeName]) : []} />}
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
  right: 80px;
  top: 50px;
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

const SelectLanguageBox = styled.div`
  width:55px;
  height:23px; 
  border-radius:15px; 
  display:flex; 
  justify-content:center; 
  align-items:center;
  cursor: pointer;
`;

const LanguageOptionBox = styled.div`
  border: 1px solid #fff;
  width: 70px;
  display: flex; 
  border-radius: 15px; 
  height: 25px; 
  justify-content: center; 
  align-items: center;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
  opacity: 1;
`;

const LanguageOptions = styled.ul<show>`
  position: absolute;
  list-style: none;
  top:18px;
  text-align: center;
  width: 60px;
  overflow: hidden;
  padding: 0;
  border-radius: 20px;
  background-color: rgba(42,42,42,0.4);
  color: #fefefe;
  opacity: ${(props) => (props.show ? '1' : '0')};
  z-index: 10;
  transform: translateY(${({ show }) => (show ? '0' : '-5px')});
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  max-height: ${({ show }) => (show ? '200px' : '0')};
`;

const SelectDirection = styled.div`
  margin-left: 8px;
  display: ${(isSelected) => (isSelected ? "block" : "none")};
`;

const LanguageLabel = styled.div<{isSelected:boolean}>`
  font-size: 14px;
  color: #fff;
  display: ${(isSelected) => (isSelected ? "block" : "none")};
  cursor: pointer;
`;


