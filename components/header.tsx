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
  const [isGuideBtnClick, setIsGuideBtnClick] = useState<boolean>(false);
  const handleOpenGuide = (event:any) => {
    document.body.style.overflow = "auto";
    setIsGuideBtnClick(true);
  }
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
        <GuideBox>
          <GuideCafeBox onClick={handleOpenGuide}>
            <GuideCafe>
              <p style={{fontSize:"10px", color:"#fff", margin: "3px"}}>1F</p>
              <p style={{fontSize:"13px", fontWeight:"bold", color:"#fff", margin: "3px"}}>카페</p>
            </GuideCafe>
          </GuideCafeBox>
          <CafeOverLayBox>
            <Image style={{ opacity:"0.1" }} width={369} height={250} alt="cafe-overlay" src={"image/overlay-foodmall-1.svg"} />
          </CafeOverLayBox>
          <GuideSushiBox onClick={handleOpenGuide}>
            <GuideSushi>
              <p style={{fontSize:"10px", color:"#fff", margin: "3px"}}>2F</p>
              <p style={{fontSize:"13px", fontWeight:"bold", color:"#fff", margin: "3px"}}>일식</p>
            </GuideSushi>
          </GuideSushiBox>
          <SushiOverLayBox>
            <Image style={{ opacity:"0.3", }} width={350} height={218} alt="sushi-overlay" src={"image/overlay-foodmall-2.svg"} />
          </SushiOverLayBox>
          <GuideMeatBox onClick={handleOpenGuide}>
            <GuideMeat>
              <p style={{fontSize:"10px", color:"#fff", margin: "3px"}}>3F~4F</p>
              <p style={{fontSize:"13px", fontWeight:"bold", color:"#fff", margin: "3px"}}>한식∙정육</p>
            </GuideMeat>
          </GuideMeatBox>
          <MeatOverLayBox>
            <Image style={{ opacity:"0.3", }} width={374} height={305} alt="meat-overlay" src={"image/overlay-foodmall-3-4.svg"} />
          </MeatOverLayBox>
          <GuideRoopBox onClick={handleOpenGuide}>
            <GuideRoop>
              <p style={{fontSize:"10px", color:"#fff", margin: "3px"}}>5F</p>
              <p style={{fontSize:"13px", fontWeight:"bold", color:"#fff", margin: "3px"}}>루프가든</p>
            </GuideRoop>
          </GuideRoopBox>
          <RoopOverLayBox>
            <Image style={{ opacity: isGuideBtnClick ? "0.5" : "none", }} width={373} height={243} alt="roof-overlay" src={"image/overlay-foodmall-5.svg"} />
          </RoopOverLayBox>
          <GuideRestaurantBox onClick={handleOpenGuide}>
            <GuideRestaurant>
              <p style={{fontSize:"10px", color:"#fff", margin: "3px"}}>2F</p>
              <p style={{fontSize:"13px", fontWeight:"bold", color:"#fff", margin: "3px"}}>레스토랑</p>
            </GuideRestaurant>
          </GuideRestaurantBox>
          <RestaurantOverLayBox>
            <Image style={{ opacity: isGuideBtnClick ? "0.5" : "none", }} width={448} height={200} alt="hotel-2-overlay" src={"image/overlay-hotel-2.svg"} />
          </RestaurantOverLayBox>
          <GuideBuffetBox onClick={handleOpenGuide}>
            <GuideBuffet>
              <p style={{fontSize:"10px", color:"#fff", margin: "3px"}}>3F</p>
              <p style={{fontSize:"13px", fontWeight:"bold", color:"#fff", margin: "3px"}}>뷔페</p>
            </GuideBuffet>
          </GuideBuffetBox>
          <BuffetOverLayBox>
            <Image style={{ opacity: isGuideBtnClick ? "0.5" : "none", }} width={448} height={205} alt="hotel-3-overlay" src={"image/overlay-hotel-3.svg"} />
          </BuffetOverLayBox>
          <GuideRoomBox onClick={handleOpenGuide}>
            <GuideRoom>
              <p style={{fontSize:"10px", color:"#fff", margin: "3px"}}>4F~10F</p>
              <p style={{fontSize:"13px", fontWeight:"bold", color:"#fff", margin: "3px"}}>객실</p>
            </GuideRoom>
          </GuideRoomBox>
          <RoomOverLayBox>
            <Image style={{ opacity: !isGuideBtnClick ? "0.2" : "none", }} width={419} height={340} alt="hotel-4-10-overlay" src={"image/overlay-hotel-4-10.svg"} />
          </RoomOverLayBox>
          <GuideBallRoomBox onClick={handleOpenGuide}>
            <GuideBallRoom>
              <p style={{fontSize:"10px", color:"#fff", margin: "3px"}}>11F~12F</p>
              <p style={{fontSize:"13px", fontWeight:"bold", color:"#fff", margin: "3px"}}>연회장</p>
            </GuideBallRoom>
          </GuideBallRoomBox>
          <BallRoomOverLayBox>
            <Image width={419} height={222} alt="hotel-11-12-overlay" src={"image/overlay-hotel-11-12.svg"} />
          </BallRoomOverLayBox>
        </GuideBox>
      </Container>
      {showModal && <Reservation />} 
      {showGroupModal && <GroupReservation />}
      {showConfirmModal && <ConfirmModal />}
      {showConfirmGroupModal && <ConfirmGroupModal />}
      {isGuideBtnClick && <GuideBackground onClick={()=>setIsGuideBtnClick(!isGuideBtnClick)}/>}
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

const GuideBox = styled.div`
  height: 91.3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GuideCafeBox = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: 260px;
  left: 520px;
  background: rgba(0,0,0, 0.3);
  height: 65px;
  width: 68px;
  z-index: 10;
  cursor: pointer;
  &:hover {
    background: #f84040;
  } 
`;

const GuideCafe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  flex-direction: column;
`;

const CafeOverLayBox = styled.div`
  position: absolute;
  height: 250px;
  width: 369px;
  bottom: 103px;
  left: 579px;
`; 

const GuideSushiBox = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: 360px;
  left: 520px;
  background: rgba(0,0,0, 0.3);
  height: 65px;
  width: 68px;
  z-index: 10;
  cursor: pointer;
  &:hover {
    background: #f84040;
  } 
`;

const GuideSushi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  flex-direction: column;
`;

const SushiOverLayBox = styled.div`
  position: absolute;
  height: 218px;
  width: 350px;
  bottom: 225px;
  left: 579px;
`; 

const GuideMeatBox = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: 460px;
  left: 520px;
  background: rgba(0,0,0, 0.3);
  height: 65px;
  width: 68px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: #f84040;
  } 
`;

const GuideMeat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  flex-direction: column;
`;

const MeatOverLayBox = styled.div`
  position: absolute;
  height: 305px;
  width: 374;
  bottom: 316px;
  left: 579px;
`;

const GuideRoopBox = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: 620px;
  left: 520px;
  background: rgba(0,0,0, 0.3);
  height: 65px;
  width: 68px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: #f84040;
  } 
`;

const GuideRoop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  flex-direction: column;
`;

const RoopOverLayBox = styled.div`
  position: absolute;
  height: 243px;
  width: 373;
  bottom: 493px;
  left: 579px;
`;

const GuideRestaurantBox = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: 225px;
  left: 1350px;
  background: rgba(0,0,0, 0.3);
  height: 65px;
  width: 68px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: #f84040;
  } 
`;

const GuideRestaurant = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  flex-direction: column;
`;

const RestaurantOverLayBox = styled.div`
  position: absolute;
  height: 200px;
  width: 448px;
  bottom: 118px;
  left: 929px;
`;

const GuideBuffetBox = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: 335px;
  left: 1350px;
  background: rgba(0,0,0, 0.3);
  height: 65px;
  width: 68px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: #f84040;
  } 
`;

const GuideBuffet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  flex-direction: column;
`;

const BuffetOverLayBox = styled.div`
  position: absolute;
  height: 205px;
  width: 448px;
  bottom: 206px;
  left: 929px;
`;

const GuideRoomBox = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: 460px;
  left: 1350px;
  background: rgba(0,0,0, 0.3);
  height: 65px;
  width: 68px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: #f84040;
  } 
`;

const GuideRoom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  flex-direction: column;
`;

const RoomOverLayBox = styled.div`
  position: absolute;
  height: 340px;
  width: 419px;
  bottom: 286px;
  left: 959px;
  
`;

const GuideBallRoomBox = styled.div`
  position: absolute;
  border-radius: 50%;
  bottom: 610px;
  left: 1350px;
  background: rgba(0,0,0, 0.3);
  height: 65px;
  width: 68px;
  z-index: 201;
  cursor: pointer;
  z-index: 201;
  &:hover {
    background: #f84040;
  } 
`;

const GuideBallRoom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  flex-direction: column;
  
`;

const BallRoomOverLayBox = styled.div`
  position: absolute;
  height: 222px;
  width: 419px;
  bottom: 502px;
  left: 959px;
  z-index: 200;
  filter:  opacity(10%) drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.6));
`;

const GuideBackground = styled.div`
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
  overflow: hidden;
`;










