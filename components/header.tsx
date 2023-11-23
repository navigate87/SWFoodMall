import styled from "styled-components";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalConfirmShowState, modalShowState } from "@/store/stores/modalState";
import Reservation from "@/modal/reservation";
import ConfirmModal from "@/modal/confirmReservation";

export default function Header() {
  const [showModal, setShowModal] = useRecoilState<boolean>(modalShowState);
  const [showConfirmModal, setShowConfirmModal] = useRecoilState<boolean>(modalConfirmShowState);
  const handleClick = (event:any) => {
    setShowModal(true);
    //setShowConfirmModal(false);
    document.body.style.overflow = "hidden";
  }
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
              <NavTabUlLi onClick={handleClick}>예약</NavTabUlLi>
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
      {showConfirmModal && <ConfirmModal />}
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


