import styled from "styled-components";
import Image from "next/image";
import SlideShow from "./slideShow";

export default function Header() {
  return (
    <Container>
      <Section>
        <ImgBox>
          <Image src="/image/bi.png" alt="swfood" width={35} height={30} />
        </ImgBox>
        <NavTab>
          <NavTabUl>
            <NavTabUlLi>Online/Store</NavTabUlLi>
            <NavTabUlLi>검색</NavTabUlLi>
            <NavTabUlLi>예약</NavTabUlLi>
            <NavTabUlLi>EVENT</NavTabUlLi>
          </NavTabUl>
        </NavTab>
        <Profile>
          <ProfileUl>
            <ProfileUlLi>Language</ProfileUlLi>
            <ProfileUlLi>Profile</ProfileUlLi>
            <ProfileUlLi>좋아요</ProfileUlLi>
            <ProfileUlLi>장바구니</ProfileUlLi>
          </ProfileUl>
        </Profile>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70vh;
  background-image: url("image/main.png");
  background-size: 100% 100%;
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
`;

const NavTabUlLi = styled.li`
  font-size: 16px;
  margin: 0 15px;
  color: #fff;
`;

const Profile = styled.div`
  flex: 8; 
`;

const ProfileUl = styled.ul`
  display: flex;
  justify-content: flex-end;
`;
const ProfileUlLi = styled.li`
  font-size: 14px;
  margin-right: 30px;
  color: #fff;
`;


