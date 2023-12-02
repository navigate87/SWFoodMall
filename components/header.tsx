import styled from "styled-components";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalConfirmShowState, modalShowState, recoilReserveOption, recoilShowGroupModal,recoilShowConfirmGroupModal } from "@/store/stores/modalState";
import Reservation from "@/modal/reservation";
import ConfirmModal from "@/modal/confirmReservation";
import { useState } from "react";
import GroupReservation from "@/modal/FnBGroupReserve";
import ConfirmGroupModal from "@/modal/confirmGroupReservation";

type show = {
  show?:boolean;
}

export default function Header() {
  const [showModal, setShowModal] = useRecoilState<boolean>(modalShowState);
  const [showConfirmModal, setShowConfirmModal] = useRecoilState<boolean>(modalConfirmShowState);
  const [showGroupModal, setShowGroupModal] = useRecoilState<boolean>(recoilShowGroupModal);
  const [showConfirmGroupModal, setShowConfirmGroupModal] = useRecoilState<boolean>(recoilShowConfirmGroupModal);
  
  const handleClick = (event:any) => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  }
  const [currentValue, setCurrentValue] = useRecoilState<string>(recoilReserveOption);
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e:any) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);

    if(innerText === "Dining") {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    } else if(innerText === "F&B") {
      setShowGroupModal(true);
      //setShowConfirmGroupModal(true);
      document.body.style.overflow = "hidden";
    }

  };

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
                {/* <NavTabUlLi onClick={handleClick}>예약</NavTabUlLi> */}
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
                <div style={{ width:"50px", height:"23px", border:"1px solid #FFF", borderRadius:"15px", display:"flex", justifyContent:"center", alignItems:"center" }}>
                  <div style={{ fontSize: "10px" }}>KR</div>&nbsp;&nbsp; <div style={{ marginBottom:"8%", width: "8px", height: "8px", borderTop:"1px solid #FFF", borderRight:"1px solid #FFF", transform:"rotate(135deg)" }}>
                    
                  </div>
                </div>
              </ProfileUlLi>
              <ProfileUlLi>
                <Image style={{ marginTop: "15%" }} alt="메뉴" src={"icon/my-login.svg"} width={40} height={40} />
              </ProfileUlLi>
              <ProfileUlLi>
                <Image style={{ marginTop: "15%" }} alt="메뉴" src={"icon/고객센터.svg"} width={40} height={40} />
              </ProfileUlLi>
              <ProfileUlLi>
                <Image style={{ marginTop: "15%" }} alt="메뉴" src={"icon/장바구니.svg"} width={50} height={50} />
              </ProfileUlLi>
            </ProfileUl>
          </Profile>
        </Section>
      </Container>
      {showModal && <Reservation />} 
      {showGroupModal && <GroupReservation />}
      {showConfirmModal && <ConfirmModal />}
      {showConfirmGroupModal && <ConfirmGroupModal />}
    </>
    
  );
}

const Container = styled.div`
  /* width: 100%; */
  height: 100%;
  background-image: url("image/main-foodmall-img.png");
  /* background-size: 100% 100%; */
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
`;


const SelectBox = styled.div`
  position: relative;
  width: 50px;
  padding: 8px;
  
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
  border-radius: 8px;
  background-color: rgba(42,42,42,0.4);
  color: #fefefe;
  max-height: ${(props) => (props.show ? "none" : "0")};
  transition: all  0.3s ease-in-out;
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  z-index: 10; // 다른 컨텐츠 위에 표시되도록 z-index를 설정합니다.
`;
const Option = styled.li`
  font-size: 12px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    color: #f84040;
  }
`;






