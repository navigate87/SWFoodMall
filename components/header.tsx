import styled from "styled-components";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalConfirmShowState, modalShowState, recoilReserveOption, recoilShowGroupModal,recoilShowConfirmGroupModal } from "@/store/stores/modalState";
import Reservation from "@/modal/reservation";
import ConfirmModal from "@/modal/confirmReservation";
import { useEffect, useState } from "react";
import GroupReservation from "@/modal/FnBGroupReserve";
import ConfirmGroupModal from "@/modal/confirmGroupReservation";
import { GuideDataProps } from "@/data/GuideType";
import GuideItem from "./GuideItem";
import { wrap } from "module";
import StoreInfoCard from "./StoreInfoCard";
import { StoreInfoDataProps, StoreInfoProps } from "@/data/StoreInfoType";
import { reservedDate } from "@/api/api";
import { useMutation } from "react-query";
import { FnbReservedDateRequest } from "@/type/Reservation";

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
  const { mutate:mutateReservedDate, isLoading: isLoadingReservedDate, isError: isErrorReservedDate, data: dataReservedDate } = useMutation(reservedDate);
  const [overlayStatus, setOverlayStatus] = useState<{[key: string]: boolean}>(
    GuideDataProps.reduce((acc, item) => ({ ...acc, [item.alt]: false }), {})
  );
  const [selectedStoreInfo, setSelectedStoreInfo] = useState<StoreInfoDataProps>();

  const isAnyOverlayActive = Object.values(overlayStatus).some(status => status);

  const handleGuideClick = (alt:string) => {
    setOverlayStatus(prev => ({ ...prev, [alt]: !prev[alt] }));

    const findStoreInfo = StoreInfoProps.find(storeInfo => storeInfo.alt === alt);
    setSelectedStoreInfo(findStoreInfo);
  }
  const handleClick = (event:any) => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  }

  const closeAllOverlays = () => {
    setOverlayStatus(GuideDataProps.reduce((acc, item) => ({ ...acc, [item.alt]: false }), {}));
  };
  
  const handleOnChangeSelectValue = (e:any) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);

    if(innerText === "Dining") {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    } else if(innerText === "F&B") {
      setShowGroupModal(true);

      // const data:FnbReservedDateRequest = {
      //   order_date: "202312",
      // }
      // mutateReservedDate(data, {
      // onSuccess: () => {
      //   alert('월별 날짜 api 호출 못불러옴!');
      // },
      // onError: () => {
      //   alert('못불러옴');
      // }
      // });
      document.body.style.overflow = "hidden";
    }

  };

  const languageDropDown = () => {
    setIsLanguageSelect(!isLanguageSelect)
  }

  useEffect(() => {
  },[showOptions,isLanguageSelect ])

  return (
    <>
      <Container>
        <Section>
          <ImgBox>
            <Image src="/image/bi.png" alt="swfood" width={72} height={44} />
          </ImgBox>
          <NavTab>
            <NavTabUl>
              <NavTabUlLi>Online/Store</NavTabUlLi>
              <NavTabUlLi>
                <Image alt="메뉴" src={"icon/menu-icon.svg"} width={25} height={25} />
              </NavTabUlLi>
              <NavTabUlLi>
                <Image alt="메뉴" src={"icon/Search-icon.svg"} width={25} height={25} />
              </NavTabUlLi>
              <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
                <Label show={!showOptions}>예약</Label>
                <SelectOptions show={showOptions}>
                  <Option style={{ pointerEvents: "none", fontSize: "15px", color:"rgba(81,81,81,0.8)" }}>예약</Option>
                  <Option value={0} onClick={handleOnChangeSelectValue}>Dining</Option>
                  <Option value={1} onClick={handleOnChangeSelectValue}>F&B</Option>
                  <Option value={2} onClick={handleOnChangeSelectValue}>객실</Option>
                </SelectOptions>
              </SelectBox>
              <NavTabUlLi>EVENT</NavTabUlLi>
            </NavTabUl>
          </NavTab>
          <Profile>
            <ProfileUl>
              <ProfileUlLi>
                <SelectLanguageBox onClick={() => setIsLanguageSelect((prev) => !prev)}>
                  <LanguageLabel isSelected={!isLanguageSelect}>KR</LanguageLabel>
                  <SelectDirection isSelected={!isLanguageSelect} />
                  <LanguageOptions show={isLanguageSelect}>
                    <div style={{ display:"flex", justifyContent: "center", alignItems: "center", margin: "5px" }}>
                      <LanguageLabel isSelected={!isLanguageSelect}>KR</LanguageLabel> 
                      <SelectDirection isSelected={!isLanguageSelect} />
                    </div>
                    <div style={{ border:"1px solid #ededed", width:"80%", marginLeft: "6px"}}></div>
                    <Option value={0} onClick={handleOnChangeSelectValue}>KR</Option>
                    <Option value={1} onClick={handleOnChangeSelectValue}>EN</Option>
                    <Option value={2} onClick={handleOnChangeSelectValue}>CN</Option>
                    <Option value={3} onClick={handleOnChangeSelectValue}>JP</Option>
                  </LanguageOptions>
                </SelectLanguageBox>
              </ProfileUlLi>
              <ProfileUlLi>
                <Image style={{ marginTop: "15%" }} alt="메뉴" src={"icon/my-login.svg"} width={40} height={40} />
              </ProfileUlLi>
              <ProfileUlLi>
                <Image onClick={()=>setIsShowHelpOption((prev) => !prev)} style={{ marginTop: "15%" }} alt="메뉴" src={"icon/고객센터.svg"} width={40} height={40} />
                <div style={{ position: "absolute", right: "108px", top:"60px" }}>
                  <SelectBox onClick={() => setIsShowHelpOption((prev) => !prev)}>
                    <SelectOptions show={isShowHelpOption}>
                      <Option value={0} onClick={handleOnChangeSelectValue}>이용안내</Option>
                      <Option value={1} onClick={handleOnChangeSelectValue}>공지사항</Option>
                      <Option value={2} onClick={handleOnChangeSelectValue}>FAQ</Option>
                      <Option value={3} onClick={handleOnChangeSelectValue}>1:1문의</Option>
                    </SelectOptions>
                  </SelectBox>
                </div>
              </ProfileUlLi>
              <ProfileUlLi>
                <Image style={{ marginTop: "15%" }} alt="메뉴" src={"icon/장바구니.svg"} width={50} height={50} />
              </ProfileUlLi>
            </ProfileUl>
          </Profile>
        </Section>
        <GuideBox>  
          {
            GuideDataProps.map((item) => (
              <GuideItem
                key={item.alt}
                data={item}
                isVisible={overlayStatus[item.alt]}
                onClick={() => handleGuideClick(item.alt)}
              />
            ))
          }
        </GuideBox>
      </Container>
      {
        isAnyOverlayActive && 
        <StoreInfoCard 
          storeInfo={selectedStoreInfo}
        />
      }
      {showModal && <Reservation />} 
      {showGroupModal && <GroupReservation />}
      {showConfirmModal && <ConfirmModal />}
      {showConfirmGroupModal && <ConfirmGroupModal />}
      {isAnyOverlayActive && <GuideBackground onClick={closeAllOverlays}/>}
    </>
    
  );
}

const Container = styled.div`
  height: 100%;
  background-image: url("image/main-foodmall-img.png");
  background-position: center center;
  background-repeat: no-repeat;
`;

const Section = styled.div`
  height: 60px;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  display: flex;
  background-color: rgba(71,71,71,0.5);
  justify-content: space-between;
  align-items: center;
  z-index: 40;
`;

const ImgBox = styled.div`
  padding-left: 20px;
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
  width:55px;
  height:23px; 
  border-radius:15px; 
  display:flex; 
  justify-content:center; 
  align-items:center;
  cursor: pointer;
`;

const HelpOptionBox = styled.div`
  width:55px;
  height:23px; 
  border-radius:5px; 
  display:flex; 
  justify-content:center; 
  align-items:center;
  cursor: pointer;
`;

const LanguageLabel = styled.label<{isSelected:boolean}>`
  font-size: 14px;
  display: ${(isSelected) => (isSelected ? "block" : "none")};
  cursor: pointer;
`;

const SelectDirection = styled.div<{isSelected:boolean}>`
  margin-bottom: ${(isSelected) => (isSelected ? "5" : "-5")}px; 
  margin-left: 8px;
  width: 8px; 
  height: 8px; 
  border-top:1px solid #FFF;
  border-right:1px solid #FFF;
  transform: ${(isSelected) => (isSelected ? "rotate(135deg)" : "rotate(325deg)")};
  transition: transform 0.3s ease;
  display: ${(isSelected) => (isSelected ? "block" : "none")};
  
`;

const SelectBox = styled.div`
  position: relative;
  width: 50px;
  padding: 10px;
  border-radius: 12px;
  align-self: center;
  cursor: pointer;  
`;

const Label = styled.label<show>`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
  color: white;
  cursor: pointer;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const SelectOptions = styled.ul<show>`
  position: absolute;
  list-style: none;
  left: 0;
  text-align: center;
  right: 0;
  width: 60px;
  overflow: hidden;
  top: -5px;
  padding: 0;
  border-radius: 5px;
  background-color: rgba(42,42,42,0.4);
  color: #fefefe;
  max-height: ${(props) => (props.show ? "none" : "0")};
  transition: all  0.3s ease-in-out;
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  z-index: 10; // 다른 컨텐츠 위에 표시되도록 z-index를 설정합니다.
`;

const HelpOptions = styled.ul<show>`
  position: absolute;
  list-style: none;
  left: 0;
  text-align: center;
  right: 0;
  width: 60px;
  overflow: hidden;
  top: -5px;
  padding: 0;
  border-radius: 25px;
  background-color: rgba(42,42,42,0.4);
  color: #fefefe;
  max-height: ${(props) => (props.show ? "none" : "0")};
  transition: all  0.3s ease-in-out;
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  z-index: 10; // 다른 컨텐츠 위에 표시되도록 z-index를 설정합니다.
`;

const LanguageOptions = styled.ul<show>`
  position: absolute;
  list-style: none;
  bottom : -80px;
  text-align: center;
  width: 60px;
  overflow: hidden;
  padding: 0;
  border-radius: 8px;
  background-color: rgba(42,42,42,0.4);
  color: #fefefe;
  max-height: ${(props) => (props.show ? "none" : "0")};
  transition: all  0.3s ease-in-out;
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  z-index: 10;
`;

const Option = styled.li`
  font-size: 12px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    color: #f84040;
  }
`;



const GuideBox = styled.div`
  height: 91.3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GuideBackground = styled.div`
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 300;
  
`;

const DropdownContainer = styled.div`
  display: flex;
`;

const DropdownButton = styled.button`
  //background-color: #4CAF50;
  display: flex;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 70px;
  top: 10px;
  text-align: center;
  box-shadow: 2px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  ${DropdownContainer}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    color: #f84040;
  }
`;












