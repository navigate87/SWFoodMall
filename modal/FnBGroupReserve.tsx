import { modalConfirmShowState, recoilSecondStoreOption, recoilSecondStoreState, recoilStoreCode, modalShowState,recoilShowGroupModal, recoilAdultCnt, recoilChildCnt, recoilDateSelectState, recoilReservationContact, recoilReservationEmail, recoilReservationName, recoilReserveOption, recoilSelectedDate, recoilSelectedStore, recoilSelectedTime, recoilStoreState, recoilTimeState, recoilTimeRange } from "@/store/stores/modalState";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Image from "next/image";
import ArrowButton from "@/components/F&B/ArrowButton";
import { useState } from "react";
import ProgressIndicator from "@/components/F&B/ProgressIndicator";
import SelectedStore from "@/components/F&B/SelectedStore";
import SecondSelectedStore from "@/components/F&B/SecondSelectedStore";
import { StoreFirstDataFnb,StoreSelectDataType } from "@/data/StoreType";
import CustomerSelect from "@/components/F&B/CustomerSelect";
import TimePicker from "@/components/F&B/TimePicker";
import MyCalendar from "@/components/DatePicker";

type StyledDivProps = {
  disabled?: boolean;
  show?: boolean;
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
  const [visibleSecondTypeId, setVisibleSecondTypedId] = useState<number | null>(null);
  const [name, setName] = useRecoilState<string>(recoilReservationName);
  const [contact, setContact] = useRecoilState<string>(recoilReservationContact);
  const [email, setEmail] = useRecoilState<string>(recoilReservationEmail);
  const [timeRange, setTimeRange] = useRecoilState(recoilTimeRange);
  const [showComponents, setShowComponents] = useState<boolean>(true);
  const [secondStore , setSecondStore] = useRecoilState<string>(recoilSecondStoreOption)
  const [secondStoreState, setSecondStoreState] = useRecoilState<boolean>(recoilSecondStoreState);
  const [secondStoreCode, setSecondStoreCode] = useRecoilState<string>(recoilStoreCode);
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
    setSecondStore("");
    setSecondStoreCode("")
    document.body.style.overflow = "auto";
}

  const handleDownClick = () => {
      setShowComponents(!showComponents);
    };

  const handleSelectComponent = (id:number) => {
    setVisibleComponentId(id);
  }

  const handleSelectSecondType = (id:number) => {
    setVisibleSecondTypedId(id);
  }
  
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
            <ArrowButton direction={showComponents} onClick={handleDownClick} />
          </ArrowBox>
          <FisrtSelectOptions>
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
                  {adultCnt !== "0" ? `일반  ${adultCnt}명 , 소인  ${childCnt}명` : "인원을 선택해주세요"}
                </CountDisplay>
              </CountContainer>
              {
                showComponents && <CustomerSelect />
              }
            </StyledDiv>

            <BarZone show={showComponents} />
            <StyledDiv disabled={(adultCnt === "0" || childCnt === "0") && (adultCnt === "0")}>
              <div style={{ display:"flex", alignItems:"center", marginLeft:"1.5%"  }}>
                <Image 
                  src={"/icon/icon-main-quick-day.svg"} 
                  width={29} 
                  height={24} 
                  alt="quickday" 
                />
                <Title>날짜</Title>
                <div style={{color:"#A2A2A2", borderBottom: selectedDateState ? "2px solid #DCDCDC" : "2px solid red", fontSize:"16px"}}>
                  { selectedDateState ? formatDate(selectedDate) : "날짜를 선택해주세요" }
                </div>
              </div>
              <DatePickerWrapper show={showComponents}>
                  <MyCalendar />
              </DatePickerWrapper>
              
            </StyledDiv>
            
            <BarZone show={showComponents} />
            <StyledDiv disabled={!selectedDateState}>
              <div style={{ display:"flex", alignItems:"center", marginLeft:"1.5%" }}>
                  <Image 
                      src={"/icon/icon-main-quick-time.svg"} 
                      width={29} 
                      height={24} 
                      alt="Time" 
                  />
                  <Title>시간</Title>  
                  <h3 style={{ borderBottom: selectedTimeState ? "2px solid #DCDCDC" : "2px solid red", fontSize:"16px", color:"#A2A2A2"}}>
                      { selectedTimeState ? timeRange : "시간을 선택해 주세요" }
                  </h3> 
              </div>
              <TimePickerContainer show={showComponents}>
                <TimePicker />
              </TimePickerContainer>
           
            </StyledDiv>
            <BarZone show={showComponents} />
            <StyledDiv disabled={!selectedTimeState}>
              <div style={{ display:"flex", alignItems:"center", marginLeft:"3%" }}>
                <Image 
                  src={"/icon/icon-main-quick-dining.svg"} 
                  width={29} 
                  height={24} 
                  alt="place" />
                <Title>장소</Title>
                <div style={{color:"#A2A2A2", borderBottom: storeState ? "2px solid #DCDCDC" : "2px solid red" , fontSize:"16px"}}>
                  {  storeState ? selectedStoreName : "장소를 선택해주세요" }
                </div>
              </div>
              {
                
                (<Stores show={showComponents}>
                {
                  StoreFirstDataFnb.map((store, id) => (
                    <SelectedStore key={id} id={id} store={store} onSelect={() => handleSelectComponent(id)} isSelected={id === visibleComponentId}/>
                  ))
                }
                </Stores>)   
              }
          </StyledDiv>
          </FisrtSelectOptions>

          <BorderBottomLine />

          <SecondSelectBox>
            <SelectHeaderBox>
              <Image 
                src="/icon/icon-main-quick-addition.svg" 
                width={29} 
                height={24} 
                alt="Customer" 
              />
              <Title style={{width: "85px"}}>선택사항</Title>
              <div style={{ width:"100%" , color:"#A2A2A2", borderBottom: storeState ? "2px solid #DCDCDC" : "2px solid red" , fontSize:"16px"}}>비즈니스 타입 / Circle 타입 / 추가요청 (노래방기기, 식사제공)</div>
            </SelectHeaderBox>
            <FLEX_1>
              <SecondArrowBox>
                <ArrowButton direction={showComponents} onClick={handleDownClick} />
              </SecondArrowBox>
            </FLEX_1>
          </SecondSelectBox>
          <FisrtSelectOptions>
            <StyledDiv style={{ flex: 1 }}>
              <Title style={{ marginLeft: "40px" }}>F&B 타입</Title>
              {
                (<Stores style={{ marginLeft: "30px" }} show={true}>
                {
                  StoreSelectDataType.map((store, id) => (
                    
                    <SecondSelectedStore key={id} id={id} store={store} onSelect={() => handleSelectSecondType(id)} isSelected={id === visibleSecondTypeId}/>
                  ))
                }
                </Stores>)   
              }
            </StyledDiv>
            <SecondBarZone show={true}/>
            <StyledDiv style={{ flex: 1.5 }}>
              <Title style={{ marginLeft: "20px" }}>테이블 타입</Title>
            </StyledDiv>
            <SecondBarZone show={true}/>
            <StyledDiv style={{ flex: 2.5}}>
              <Title style={{ marginLeft: "20px" }}>기본제공 부대시설</Title>
            </StyledDiv>
            <SecondBarZone show={true}/>
            <StyledDiv style={{ flex: 1.8 }}>
              <Title style={{ marginLeft: "20px" }}>추가요청 부대시설</Title>
            </StyledDiv>
          </FisrtSelectOptions>
          
          
          <BorderBottomLine />
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
    height: 820px;
`;

const HeaderBox = styled.div`
    width: 100%;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    border-bottom: 1px solid #CCCCCC;
    height: 10%;
    justify-content: center;
    display: flex;
    align-items: center;
    background: #ECECEC;
`;

const FisrtSelectOptions = styled.div`
  display: flex;
  border-bottom: 1px solid #CCCCCC;
  width: 100%;
`;

const SecondSelectBox = styled.div`
  display: flex;
  margin: 40px;
  width: 100%;
`;

const BorderBottomLine = styled.div`
  width:100%;
  border-top:5px solid #ECECEC;
  border-bottom:1px solid #CCCCCC;
`;

const BarZone = styled.div<{show:boolean}>`
  display: ${({ show }) => (show ? "flex" : "none")};
  border-left: 1px solid #EBEBEB;
  height:320px;
  margin-top: 3%;
`;

const SecondBarZone = styled.div<{show:boolean}>`
  display: ${({ show }) => (show ? "flex" : "none")};
  border-left: 1px solid #EBEBEB;
  height:320px;
`

const StyledDiv = styled.div<StyledDivProps>`
  flex: 1;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  user-select: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const Stores = styled.div<{show: boolean}>`
    display: flex;
    margin: ${({ show }) => (show ? '6%' : '2%')};
    flex-wrap: wrap;
    column-count: 2;
    row-gap: 0em 10px;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    max-height: ${({ show }) => (show ? '700px' : '0')}; 
    opacity: ${({ show }) => (show ? '1' : '0')};
    overflow: hidden;
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

const DatePickerWrapper = styled.div<{show:boolean}>`
    text-align:center;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    max-height: ${({ show }) => (show ? '700px' : '0')}; 
    opacity: ${({ show }) => (show ? '1' : '0')};
    overflow: hidden;
`;

const Title = styled.h3`
    margin-left: 2%;
    margin-right: 3%;
    font-size: 16px;
    font-weight: bold;
`;

const CountDisplay = styled.div<{isSelected: boolean}>`
    color: #A2A2A2;
    border-bottom: ${({ isSelected }) => isSelected ? '2px solid #DCDCDC' : '2px solid red'};
    font-size: 16px;
`;

const CountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 7%;
`;

const TimePickerContainer = styled.ul<{show: boolean}>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    max-height: ${({ show }) => (show ? '700px' : '0')}; 
    opacity: ${({ show }) => (show ? '1' : '0')};
    overflow: hidden;
`;

const SelectHeaderBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const FLEX_1 = styled.div`
  flex:1;
`;

const SecondArrowBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 65px;
`;








