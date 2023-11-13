/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface LayoutItemProp {
  children?: React.ReactNode;
}
export default function Layout({ children }: LayoutItemProp) {
    const [item, setItem] = useState<string>("")

    useEffect(() => {
      setItem("레이아웃이래!!")
    }, [])
    return (
      <>
        <Header />
        <Container>
          <EventBox>
            <EventFlexBox>
              <EventText><p>EVENT NOTICE  &nbsp;&nbsp;&nbsp;&nbsp;<span> ✛ </span></p></EventText>
            </EventFlexBox>
            <EventFlexBox>
              <EventListBox>
                <EventListCircle>NEW</EventListCircle>
                <EventListTextBox>
                  <EventTextDate>[성원정] 2023.06.16 ~ 2023.08.31</EventTextDate>
                  <div>전복삼계탕 시즌 메뉴 예약</div>
                </EventListTextBox>
              </EventListBox>
              <EventListBox>
                <EventListCircle>NEW</EventListCircle>
                <EventListTextBox>
                  <EventTextDate>[성원정] 2023.06.16 ~ 2023.08.31</EventTextDate>
                  <div>전복삼계탕 시즌 메뉴 예약</div>
                </EventListTextBox>
              </EventListBox>
              <EventListBox>
                <EventListCircle>NEW</EventListCircle>
                <EventListTextBox>
                  <EventTextDate>[성원정] 2023.06.16 ~ 2023.08.31</EventTextDate>
                  <div>전복삼계탕 시즌 메뉴 예약</div>
                </EventListTextBox>
              </EventListBox>
            </EventFlexBox>
          </EventBox>
        </Container>
        <div style={{ display:"flex", justifyContent:"center" }}>{children}</div>
        <Footer/>
      </>
    )
}

const Container = styled.div`
  margin-top: -4%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const EventBox = styled.div`
  border-radius: 125px;
  background:#F6F6F6;
  height: 15vh;
  width: 80%;
  position: relative;
`;

const EventFlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const EventText = styled.div`
  font-size: 25px;
  margin-top: 20px;
`;

const EventListBox = styled.div`
  border-radius: 125px;
  margin-top: 20px;
  width: 22%;
  height: 50px;
  background: #ECECEC;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const EventListCircle = styled.div`
  border-radius: 50%;
  height: 85%;
  background: #343434;
  color: #FFF;
  margin-left: 7px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const EventListTextBox = styled.div`
  margin: 0 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const EventTextDate = styled.div`
  color: #888888;
  font-size:13px;
  margin-right: 5px;
  margin-bottom: 5px;
`;








