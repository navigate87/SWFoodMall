import { modalConfirmShowState, modalShowState,recoilShowGroupModal, recoilAdultCnt, recoilChildCnt, recoilDateSelectState, recoilReservationContact, recoilReservationEmail, recoilReservationName, recoilReserveOption, recoilSelectedDate, recoilSelectedStore, recoilSelectedTime, recoilStoreState, recoilTimeState, recoilTimeRange } from "@/store/stores/modalState";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Image from "next/image";
import ArrowButton from "@/components/F&B/ArrowButton";
import { useState } from "react";
import ProgressIndicator from "@/components/F&B/ProgressIndicator";
import SelectedStore from "@/components/F&B/SelectedStore";
import { StoreDataFnb } from "@/data/StoreType";
import CustomerSelect from "@/components/F&B/CustomerSelect";
import TimePicker from "@/components/F&B/TimePicker";
import MyCalendar from "@/components/DatePicker";

type StyledDivProps = {
  disabled?: boolean;
}

export default function GroupReservation() {
  
  const [currentValue, setCurrentValue] = useRecoilState<string>(recoilReserveOption);
  const [showGroupModal, setShowGroupModal] = useRecoilState<boolean>(recoilShowGroupModal);
  const [showModal, setShowModal] = useRecoilState<boolean>(modalShowState);
  const [showConfirmModal, setShowConfirmModal] = useRecoilState<boolean>(modalConfirmShowState);
  const [selectedStoreName, setSelectedStoreName] = useRecoilState<string>(recoilSelectedStore);
  const [storeState, setStoreState] = useRecoilState<boolean>(recoilStoreState);
  const [selectedDate, setSelectedDate] = useRecoilState<Date>(recoilSelectedDate);
  const [selectedDateState, setSelectedDateState] = useRecoilState<boolean>(recoilDateSelectState);
  const [selectedTimeState, setSelectedTimeState] = useRecoilState<boolean>(recoilTimeState); 
  const [childCnt, setChildCnt] = useRecoilState<string>(recoilChildCnt);
  const [adultCnt, setAdultCnt] = useRecoilState<string>(recoilAdultCnt);
  const [errorText, setErrorText] = useState<boolean>(false);
  const [time, setTime] = useRecoilState<string>(recoilSelectedTime);
  const [visibleComponentId, setVisibleComponentId] = useState<number | null>(null);
  const [name, setName] = useRecoilState<string>(recoilReservationName);
  const [contact, setContact] = useRecoilState<string>(recoilReservationContact);
  const [email, setEmail] = useRecoilState<string>(recoilReservationEmail);
  const [timeRange, setTimeRange] = useRecoilState(recoilTimeRange);
  
  const handleClick = (event:any) => {
    setShowGroupModal(false);
    setStoreState(false);
    setSelectedTimeState(false);
    setSelectedDateState(false);
    setAdultCnt("0");
    setChildCnt("0");
    setName("");
    setContact("");
    setEmail("");
    setErrorText(false);
    setTimeRange("");
    document.body.style.overflow = "auto";
}

  const handleDownClick = () => {
    console.log('Down button clicked!');
  };

  const handleSelectComponent = (id:number) => {
    setVisibleComponentId(id);
}
  // const handleTimeSelected = (timeRange: string) => {
  //   setTime(timeRange)
  //   setSelectedTimeState(true);
  // }

function formatDate(date: Date) : string {
  const days = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
  let day = days[date.getDay()];
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let dayOfMonth = date.getDate().toString().padStart(2, '0');

  return `${date.getFullYear()}.${month}.${dayOfMonth} ${day}`;
}

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
          <ProgressIndicator 
            storeState={storeState}
            selectedDateState={selectedDateState}
            selectedTimeState={selectedTimeState}
            adultCnt={adultCnt}
            childCnt={childCnt}
          />
          <ArrowBox>
            <ArrowButton direction={false} onClick={handleDownClick} />
          </ArrowBox>
          <div style={{display: "flex", borderBottom: "1px solid #CCCCCC", width:"100%"}}>
            <StyledDiv>
              <CountContainer>
                <Image 
                  src="/icon/icon-main-quick-customer.svg" 
                  width={29} 
                  height={24} 
                  alt="Customer" 
                />
                <Title>인원</Title>
                <CountDisplay isSelected={adultCnt !== "0" || childCnt !== "0"}>
                  {adultCnt !== "0" || childCnt !== "0" ? `일반  ${adultCnt}명 , 소인  ${childCnt}명` : "인원을 선택해주세요"}
                </CountDisplay>
              </CountContainer>
              <CustomerSelect />
            </StyledDiv>
            <div style={{ display:"flex", borderLeft: "1px solid #EBEBEB", height:"350px", marginTop: "3%" }}></div>
            <StyledDiv disabled={adultCnt === "0" && childCnt === "0"}>
              <div style={{ display:"flex", alignItems:"center", marginLeft:"1.5%"  }}>
                <Image 
                  src={"/icon/icon-main-quick-day.svg"} 
                  width={29} 
                  height={24} 
                  alt="quickday" 
                />
                <h3 style={{marginLeft:"2%", marginRight:"3%", fontSize:"16px"}}>날짜</h3>
                <div style={{color:"#A2A2A2", borderBottom: selectedDateState ? "2px solid #DCDCDC" : "2px solid red", fontSize:"16px"}}>
                  { selectedDateState ? formatDate(selectedDate) : "날짜를 선택해주세요" }
                </div>
              </div>
              <DatePickerWrapper>
                 <MyCalendar />
              </DatePickerWrapper>
            </StyledDiv>
            <div style={{ display:"flex", borderLeft: "1px solid #EBEBEB", height:"350px", marginTop: "3%" }}></div>
            <StyledDiv disabled={!selectedDateState}>
              <div style={{ display:"flex", alignItems:"center", marginLeft:"1.5%" }}>
                  <Image 
                      src={"/icon/icon-main-quick-time.svg"} 
                      width={29} 
                      height={24} 
                      alt="Time" 
                  />
                  <h3 style={{ marginLeft:"2%", marginRight:"3%", fontSize:"16px"}}>시간</h3>  
                  <h3 style={{ borderBottom: selectedTimeState ? "2px solid #DCDCDC" : "2px solid red", fontSize:"16px", color:"#A2A2A2"}}>
                      { selectedTimeState ? timeRange : "시간을 선택해 주세요" }
                  </h3> 
              </div>
              <ul style={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}>
                  <TimePicker />
              </ul>
            </StyledDiv>
            <div style={{ display:"flex", borderLeft: "1px solid #EBEBEB", height:"350px", marginTop: "3%" }}></div>
            <StyledDiv disabled={!selectedTimeState}>
              <div style={{ display:"flex", alignItems:"center", marginLeft:"7%" }}>
                <Image 
                  src={"/icon/icon-main-quick-dining.svg"} 
                  width={29} 
                  height={24} 
                  alt="place" />
                <h3 style={{marginLeft:"2%", marginRight:"3%", fontSize:"16px"}}>장소</h3>
                <div style={{color:"#A2A2A2", borderBottom: storeState ? "2px solid #DCDCDC" : "2px solid red" , fontSize:"16px"}}>
                  {  storeState ? selectedStoreName : "장소를 선택해주세요" }
                </div>
              </div>
            <Stores>
              {
                StoreDataFnb.map((store, id) => (
                  <SelectedStore key={id} id={id} store={store} onSelect={() => handleSelectComponent(id)} isSelected={id === visibleComponentId}/>
                ))
              }
            </Stores>   
          </StyledDiv>
          </div>
          
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

const StyledDiv = styled.div<StyledDivProps>`
  flex: 1;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  user-select: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const Stores = styled.div`
    display: flex;
    margin: 6%;
    flex-wrap: wrap;
    column-count: 2;
    row-gap: 0em 10px;
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

const ArrowBox = styled.div`
  position: absolute;
  top: 100px;
  right: 25px;
`;

const DatePickerWrapper = styled.div`
    margin: 7%; 
    text-align:center;
`;

const Title = styled.h3`
    margin-left: 2%;
    margin-right: 3%;
    font-size: 16px;
`;

const CountDisplay = styled.div<{isSelected: boolean}>`
    color: #A2A2A2;
    border-bottom: ${({ isSelected }) => isSelected ? '2px solid #DCDCDC' : '2px solid red'};
    font-size: 16px;
`;

const CountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1%;
`;




