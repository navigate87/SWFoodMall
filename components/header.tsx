import styled from "styled-components";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalConfirmShowState, modalShowState, recoilReserveOption, recoilShowGroupModal,recoilShowConfirmGroupModal } from "@/store/stores/modalState";
import Reservation from "@/modal/reservation";
import ConfirmModal from "@/modal/confirmReservation";
import { useEffect, useState } from "react";
import GroupReservation from "@/modal/FnBGroupReserve";
import ConfirmGroupModal from "@/modal/confirmGroupReservation";
import {  } from "@mui/material";
import CustomizedSwitches from "./MaterialUISwitch";

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
          <div style={{ display:"flex", alignItems:"center" }}>
            <ImgBox>
              <Image src="/image/bi.png" alt="swfood" width={72} height={44} />
            </ImgBox>
            <div style={{ marginLeft:"30px" }}>
              <CustomizedSwitches />
            </div>
            <div style={{ marginLeft:"5px", cursor:"pointer" }}>
              <Image alt="메뉴" src={"/icon/menu-icon.svg"} width={32} height={32} />
            </div>
            <div style={{ marginLeft:"12px", cursor:"pointer" }}>
              <Image alt="메뉴" src={"/icon/Search-icon.svg"} width={32} height={32} />
            </div>
            <div style={{ marginLeft:"34px" }}>
              <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
                <Label onMouseOver={() => setShowOptions(true)} show={!showOptions}>예약</Label>
                <SelectOptions show={showOptions}>
                  <Option style={{cursor:"none", pointerEvents: "none", fontSize: "20px", color:"#fff",opacity:"0.5", fontFamily:"SourceHanSans", letterSpacing:"-0.4px",  }}>예약</Option>
                  <Option id="dining_option" value={0}>Dining</Option>
                  <Option id="fnb_option" value={1}>F&B</Option>
                  <Option id="room_option" value={2}>객실</Option>
                </SelectOptions>
              </SelectBox>
            </div>
            <div style={{ }}>
              <div style={{ fontSize:"20px", color:"#fff", fontWeight:"500", letterSpacing:"-0.4px", fontFamily:"SourceHanSans", cursor:"pointer" }}>EVENT</div>
            </div>
          </div>
          <div style={{ display:"flex", alignItems:"center" }}>
            <div style={{ marginRight:"20px" }}>
              <SelectLanguageBox id="select-language-box" onClick={() => setIsLanguageSelect((prev) => !prev)}>
                {
                  !isLanguageSelect && 
                  <LanguageOptionBox>
                    <LanguageLabel isSelected={!isLanguageSelect}>KR</LanguageLabel>
                    <SelectDirection>
                      <Image src={"/icon/icon_select_down.webp"} width={12} height={10} alt="down" />
                    </SelectDirection>
                  </LanguageOptionBox>
                }
                <LanguageOptions show={isLanguageSelect}>
                  <div style={{ display:"flex", justifyContent: "center", alignItems: "center", margin: "5px" }}>
                    <LanguageLabel isSelected={!isLanguageSelect}>KR</LanguageLabel> 
                    {
                      isLanguageSelect && 
                      <SelectDirection>
                        <Image src={"/icon/icon_select_up.svg"} width={12} height={10} alt="up" />
                      </SelectDirection>
                    }
                  </div>
                  <div style={{ borderBottom:"1px solid #ededed", width:"70%", marginLeft: "12px", marginBottom: "3px", color:"#242424", opacity:"0.3"}}></div>
                  <Option value={0} onClick={handleOnChangeSelectValue}>KR</Option>
                  <Option value={1} onClick={handleOnChangeSelectValue}>EN</Option>
                  <Option value={2} onClick={handleOnChangeSelectValue}>CN</Option>
                  <Option value={3} onClick={handleOnChangeSelectValue}>JP</Option>
                </LanguageOptions>
              </SelectLanguageBox>
            </div>
            <div style={{ marginRight:"15px", cursor:"pointer" }}>
              <Image style={{ marginTop: "12%" }} alt="메뉴" src={"/icon/my-login.svg"} width={58} height={58} />
            </div>
            <div style={{ marginRight:"15px", cursor:"pointer" }}>
              <div onMouseOver={() => setIsShowHelpOption(true)}>
                <Image onClick={()=>setIsShowHelpOption((prev) => !prev)} style={{ marginTop: "12%" }} alt="메뉴" src={"/icon/customcenter.svg"} width={58} height={58} />
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
            </div>
            <div style={{ marginRight:"50px", cursor:"pointer" }}>
              <Image style={{ marginTop: "12%" }} alt="메뉴" src={"/icon/basket.png"} width={58} height={58} />
            </div>
          </div>
          
          
        </Section>
      </Container>
      {/* <Container>
        <Section>
          <ImgBox>
            <Image src="/image/bi.png" alt="swfood" width={72} height={44} />
          </ImgBox>
          <NavTab>
            <NavTabUl>
              <NavTabUlLi>
                <CustomizedSwitches />
              </NavTabUlLi>
              <NavTabUlLi>
                <Image alt="메뉴" src={"/icon/menu-icon.svg"} width={32} height={32} />
              </NavTabUlLi>
              <NavTabUlLi>
                <Image alt="메뉴" src={"/icon/Search-icon.svg"} width={32} height={32} />
              </NavTabUlLi>
              <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
                <Label onMouseOver={() => setShowOptions(true)} show={!showOptions}>예약</Label>
                <SelectOptions show={showOptions}>
                  <Option style={{cursor:"none", pointerEvents: "none", fontSize: "15px", color:"rgba(81,81,81,0.8)" }}>예약</Option>
                  <Option id="dining_option" value={0}>Dining</Option>
                  <Option id="fnb_option" value={1}>F&B</Option>
                  <Option id="room_option" value={2}>객실</Option>
                </SelectOptions>
              </SelectBox>
              <NavTabUlLi>EVENT</NavTabUlLi>
            </NavTabUl>
          </NavTab>
          <Profile>
            <ProfileUl>
              <ProfileUlLi>
                <SelectLanguageBox id="select-language-box" onClick={() => setIsLanguageSelect((prev) => !prev)}>
                  {
                    !isLanguageSelect && 
                    <LanguageOptionBox>
                      <LanguageLabel isSelected={!isLanguageSelect}>KR</LanguageLabel>
                      <SelectDirection>
                        <Image src={"/icon/icon_select_down.webp"} width={12} height={9} alt="down" />
                      </SelectDirection>
                    </LanguageOptionBox>
                  }
                  <LanguageOptions show={isLanguageSelect}>
                    <div style={{ display:"flex", justifyContent: "center", alignItems: "center", margin: "5px" }}>
                      <LanguageLabel isSelected={!isLanguageSelect}>KR</LanguageLabel> 
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
              </ProfileUlLi>
              <ProfileUlLi>
                <Image style={{ marginTop: "15%" }} alt="메뉴" src={"/icon/my-login.svg"} width={40} height={40} />
              </ProfileUlLi>
              <ProfileUlLi>
                <div onMouseOver={() => setIsShowHelpOption(true)}>
                  <Image onClick={()=>setIsShowHelpOption((prev) => !prev)} style={{ marginTop: "15%" }} alt="메뉴" src={"/icon/customcenter.svg"} width={40} height={40} />
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
              </ProfileUlLi>
              <ProfileUlLi>
                <Image style={{ marginTop: "15%" }} alt="메뉴" src={"/icon/basket.png"} width={40} height={40} />
              </ProfileUlLi>
            </ProfileUl>
          </Profile>
        </Section>
      </Container> */}
      
      {showModal && <Reservation />} 
      {showGroupModal && <GroupReservation />}
      {showConfirmModal && <ConfirmModal />}
      {showConfirmGroupModal && <ConfirmGroupModal />}
      
    </>
    
  );
}

const Container = styled.div`
  height: 60px;
`; 

const Section = styled.div`
  height: 80px;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  display: flex;
  background-color: rgba(71,71,71,0.7);
  justify-content: space-between;
  align-items: center;
  z-index: 40;
`;

const ImgBox = styled.div`
  margin-left: 50px;
`;

const NavTab = styled.div`
  flex: 8;
  padding-left: 30px;
`;

const NavTabUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavTabUlLi = styled.li`
  font-size: 16px;
  margin: 0 15px;
  color: #fff;
  cursor: pointer;
`;

const LanguageOptionBox = styled.div`
  border: 1px solid #fff;
  width: 74px;
  display: flex; 
  border-radius: 15px; 
  height: 30px; 
  color: #fff;
  font-family: "SourceHanSans";
  letter-spacing: -0.28px;
  border:1px solid #e2e2e2;
  justify-content: center; 
  align-items: center;
  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
  opacity: 1;
`;

const Profile = styled.div`
  flex: 8; 
`;

const ProfileUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ProfileUlLi = styled.li`
  font-size: 14px;
  margin-right: 30px;
  color: #fff;
  cursor: pointer;
`;

const SelectLanguageBox = styled.div`
  width:74px;
  height:143px; 
  border-radius:15px; 
  display:flex; 
  justify-content:center; 
  align-items:center;
  cursor: pointer;
`;

const LanguageLabel = styled.div<{isSelected:boolean}>`
  font-size: 16px;
  display: ${(isSelected) => (isSelected ? "block" : "none")};
  cursor: pointer;
  color:"#fff";
  margin-top:3.5px;
  font-weight:"500";
  font-family:"SourceHanSans";

`;

const SelectDirection = styled.div`
  margin-left: 10px;
  margin-top: 2px;
  display: ${(isSelected) => (isSelected ? "block" : "none")};
`;

const SelectBox = styled.div`
  position: relative;
  width: 84px;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;  
`;

const Label = styled.label<show>`
  font-size: 20px;
  color: white;
  font-family: "SourceHanSans";
  cursor: pointer;
  display: ${(props) => (props.show ? "block" : "none")};
  font-weight:500; 
  letter-spacing:-0.4px;
  cursor:pointer;
`;

const SelectOptions = styled.ul<show>`
  position: absolute;
  list-style: none;
  left: -15px;
  text-align: center;
  right: 0;
  width: 84px;
  overflow: hidden;
  top: -8px;
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

const SelectHelpOptionBox = styled.div`
  position: absolute; 
  right: 5.6%;
  top: 90%;
`;

const SelectHelpOptions = styled.ul<show>`
  position: absolute;
  list-style: none;
  left: 0;
  text-align: center;
  right: 0;
  width: 84px;
  overflow: hidden;
  top: 0;
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

const LanguageOptions = styled.ul<show>`
  position: absolute;
  list-style: none;
  top:25px;
  text-align: center;
  width: 74px;
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

const Option = styled.li`
  font-size: 14px;
  padding: 8px 8px;
  letter-spacing: -0.28px;
  font-weight: bold;
  font-family: SourceHanSans;
  transition: background-color 0.2s ease-in;
  &:hover {
    color: #f84040;
  }
`;















