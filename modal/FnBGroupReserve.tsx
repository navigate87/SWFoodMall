import { recoilShowConfirmGroupModal, recoilSecondStoreOption, recoilSecondStoreState, recoilStoreCode, modalShowState,recoilShowGroupModal, recoilAdultCnt, recoilChildCnt, recoilDateSelectState, recoilReservationContact, recoilReservationEmail, recoilReservationName, recoilReserveOption, recoilSelectedDate, recoilSelectedStore, recoilSelectedTime, recoilStoreState, recoilTimeState, recoilTimeRange, recoilTableTypeName, recoilTableTypeSelect, recoilTableTypeCode, recoilEventName, recoilPeriod, recoilFacilitiesThree, recoilFacilitiesTwo, recoilFacilitiesOne } from "@/store/stores/modalState";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import Image from "next/image";
import ArrowButton from "@/components/F&B/ArrowButton";
import { useEffect, useState } from "react";
import ProgressIndicator from "@/components/F&B/ProgressIndicator";
import SelectedStore from "@/components/F&B/SelectedStore";
import SecondSelectedStore from "@/components/F&B/SecondSelectedStore";
import { StoreFirstDataFnb,StoreSelectDataType } from "@/data/StoreType";
import CustomerSelect from "@/components/F&B/CustomerSelect";
import TimePicker from "@/components/F&B/TimePicker";
import MyCalendar from "@/components/DatePicker";
import { TableTypeData } from "@/data/TableType";
import TableTypeSelect from "@/components/F&B/TableType";
import { useMutation, useQuery } from 'react-query';
import { useCodeInfo } from "@/api/api";
import { FacilitiesOne, FacilitiesThree, FacilitiesTwo } from "@/data/CodoInfo";
import AdditionalFacilitiesThree from "@/components/F&B/AdditionalFacilitiesThree";
import AdditionalFacilitiesTwo from "@/components/F&B/AdditionalFacilitiesTwo";
import AdditionalFacilitiesOne from "@/components/F&B/AdditionalFacilitiesOne";

type StyledDivProps = {
  disabled?: boolean;
  show?: boolean;
}

const facilityCodeMapThree: { [key in keyof FacilitiesThree]: { code: string; name:string  } } = {
  karaoke: { code: "FSA01", name: "노래방기기" },
  amp: { code: "FSA02", name: "이동식 엠프" },
  tv: { code: "FSA03", name: "이동식 TV" },
  meal: { code: "FSA04", name: "식사제공" },
};

const facilityCodeMapTwo: { [key in keyof FacilitiesTwo]: { code: string; name:string } } = {
  stage: { code: "FFI01", name: "단상" },
  banner: { code: "FFI03", name: "현수막" },
  hanger: { code: "FFI04", name: "행거" },
  blind: { code: "FFI05", name: "블라인드" },
  partition: { code: "FFI06", name:"파티션"  },
  parkingSpace: { code: "FFI02", name: "주차공간" }
};

const facilityCodeMapOne: { [key in keyof FacilitiesOne]: { code: string; name:string } } = {
  screen: { code: "FFA01", name:"스크린" },
  projector: { code: "FFA02", name:"빔프로젝트"  },
  wirelessMic: { code: "FFA03", name:"무선 마이크" },
  pinMic: { code: "FFA04", name:"핀 마이크" },
};



export default function GroupReservation() {
  
  // 현재 다이닝인지,F&B인지 
  const [currentValue, setCurrentValue] = useRecoilState<string>(recoilReserveOption);                                  
  // F&B 팝업
  const [showGroupModal, setShowGroupModal] = useRecoilState<boolean>(recoilShowGroupModal);                            
  // F&B 예약 내용 확인 팝업
  const [showConfirmGroupModal, setShowConfirmGroupModal] = useRecoilState<boolean>(recoilShowConfirmGroupModal);       
  // 성인 일반 Count
  const [adultCnt, setAdultCnt] = useRecoilState<string>(recoilAdultCnt);
  // 소인 어린이 Count
  const [childCnt, setChildCnt] = useRecoilState<string>(recoilChildCnt);
  // 날짜 & 날짜 선택 상태 체크
  const [selectedDate, setSelectedDate] = useRecoilState<Date>(recoilSelectedDate);
  const [selectedDateState, setSelectedDateState] = useRecoilState<boolean>(recoilDateSelectState);
  // 장소명  & 장소 선택 상태 체크
  const [selectedStoreName, setSelectedStoreName] = useRecoilState<string>(recoilSelectedStore);                       
  const [storeState, setStoreState] = useRecoilState<boolean>(recoilStoreState);
  // 시간 선택 상태 & 시간 간격
  const [selectedTimeState, setSelectedTimeState] = useRecoilState<boolean>(recoilTimeState); 
  const [timeRange, setTimeRange] = useRecoilState(recoilTimeRange);
  // 인원 날짜 시간 장소 전부 체크 상태시 선택사항 열리는 조건 상태
  const [showComponents, setShowComponents] = useState<boolean>(true);
  // 선택 사항 열리는 조건 상태
  const [showSelectComponents, setShowSelectComponents] = useState<boolean>(false);
  // 이메일 에러 체크 
  const [errorText, setErrorText] = useState<boolean>(false);
  // 장소 선택된 ID값
  const [visibleComponentId, setVisibleComponentId] = useState<number | null>(null);
  // F&B 타입 선택 ID값
  const [visibleSecondTypeId, setVisibleSecondTypedId] = useState<number | null>(null);
  // 테이블 타입 선택 ID 값
  const [visibleTableTypeId, setVisibleTableTypeId] = useState<number | null>(null);
  // F&B 타입 명 & F&B 타입 선택 상태 & F&B 선택 Code(디비에 보낼 데이터)
  const [secondStore , setSecondStore] = useRecoilState<string>(recoilSecondStoreOption)
  const [secondStoreState, setSecondStoreState] = useRecoilState<boolean>(recoilSecondStoreState);
  const [secondStoreCode, setSecondStoreCode] = useRecoilState<string>(recoilStoreCode);
  // 테이블 타입명 & 테이블 타입 선택 상태 & 테이블 선택 코드(디비에 보낼 데이터)
  const [tableTypeName , setTableTypeName] = useRecoilState<string>(recoilTableTypeName)
  const [tableSelectState, setTableSelectState] = useRecoilState<boolean>(recoilTableTypeSelect);
  const [tableTypeCode, setTableTypeCode] = useRecoilState<string>(recoilTableTypeCode);
  // 예약자명
  const [name, setName] = useRecoilState<string>(recoilReservationName);
  // 연락처
  const [contact, setContact] = useRecoilState<string>(recoilReservationContact);
  // 이메일
  const [email, setEmail] = useRecoilState<string>(recoilReservationEmail);
  
  // 행사명
  const [eventName, setEventName] = useRecoilState<string>(recoilEventName);
  // 주최기간
  const [period, setPeriod] = useRecoilState<string>(recoilPeriod);
  
  const setFacilitiesItemThree = useSetRecoilState(recoilFacilitiesThree);
  const setFacilitiesItemTwo = useSetRecoilState(recoilFacilitiesTwo);
  const setFacilitiesItemOne = useSetRecoilState(recoilFacilitiesOne);
  // 추가 요청 부대시설 체크 상태
  const [facilitiesThree, setFacilitiesThree] = useState<FacilitiesThree>({
    karaoke: true,
    amp: true,
    tv: true,
    meal: true
  });

  // 부대시설 체크 상태 default false
  const [facilitiesTwo, setFacilitiesTwo] = useState<FacilitiesTwo>({
    stage: false,
    banner: false,
    hanger: false,
    blind: false,
    partition: false,
    parkingSpace: false,
  });

  // 음향 영상장비 체크상태 default false
  const [facilitiesOne, setFacilitiesOne] = useState<FacilitiesOne>({
    screen: false,
    projector: false,
    wirelessMic: false,
    pinMic: false,
  }); 

  // 추가 요청 부대시설 체크
  const handleFacilityChangeThree = (facilityThree : keyof FacilitiesThree) => {
    setFacilitiesThree(prev => ({
      ...prev,
      [facilityThree]: !prev[facilityThree]
    }));

    console.log("추가요청 부대시설? facilityThree",facilityThree);
  };

  // 기본제공부대시설 - 부대시설 체크 
  const handleFacilityChangeTwo = (facilityTwo : keyof FacilitiesTwo) => {
    setFacilitiesTwo(prev => ({
      ...prev,
      [facilityTwo]: !prev[facilityTwo]
    }));

    console.log("부대시설? facilityTwo",facilityTwo);
  };

  // 기본제공부대시설 - 음향 영상장비 체크
  const handleFacilityChangeOne = (facilityOne : keyof FacilitiesOne) => {
    setFacilitiesOne(prev => ({
      ...prev,
      [facilityOne]: !prev[facilityOne]
    }));

    console.log("음향 영상장비? facilityOne",facilityOne);
  };
  
  // 추가 요청 부대 시설 코드 (디비에 보낼 데이터)
  const selectedFacilitiesThree = Object.entries(facilitiesThree)
    .filter(([key, value]) => !value)
    .map(([key]) => ({
      code: facilityCodeMapThree[key as keyof FacilitiesThree].code,
      name: facilityCodeMapThree[key as keyof FacilitiesThree].name,
  }));
  // 부대 시설 코드(디비에 보낼 데이터)
  const selectedFacilitiesTwo = Object.entries(facilitiesTwo)
  .filter(([key, value]) => !value)
  .map(([key]) => ({
    code: facilityCodeMapTwo[key as keyof FacilitiesTwo].code,
    name: facilityCodeMapTwo[key as keyof FacilitiesTwo].name
  }));
  // 음향 영상 장비(디비에 보낼 데이터)
  const selectedFacilitiesOne = Object.entries(facilitiesOne)
  .filter(([key, value]) => !value)
  .map(([key]) => ({
    code: facilityCodeMapOne[key as keyof FacilitiesOne].code,
    name: facilityCodeMapOne[key as keyof FacilitiesOne].name
  }));

  // Init Data 확인용
  //const { data, isLoading, error } = useCodeInfo(); 

  const isReservation = () => { // 예약하기 버튼 활성화 조건
    if(
        storeState                                      // 스토어 선택
        && selectedDateState                            // 날짜 선택
        && selectedTimeState                            // 시간 선택
        && (adultCnt !== "0")                           // 인원 선택
        && name !== ""                                  // 이름 
        && email !== ""                                 // 이메일    
        && contact !== ""                               // 연락처
        && errorText === false
        && period !== ''
        && eventName !== ''
    ) {
      return true;
    } else {
      return false;
    }
  }

  const isSecondSelectOptions = () => {
    if(secondStoreState                            // F&B 선택
    && tableSelectState                            //  선택 
    ) {
      return true;
    } else {
      return false;
    } 
  }

  const isShowSelectOptions = () => {
    if(storeState                                   // 스토어 선택
    && selectedDateState                            // 날짜 선택
    && selectedTimeState                            // 시간 선택
    && (adultCnt !== "0")                           // 인원 선택
    ) {
      return true;
    } else {
      return false;
    } 
  }

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
    setSecondStoreCode("");
    setSecondStoreState(false);
    setTableTypeName("");
    setTableSelectState(false);
    setTableTypeCode("");
    setEventName("");
    setPeriod("");
    document.body.style.overflow = "auto";
  }

  const handleDownClick = () => {
      setShowComponents(!showComponents);
      setShowSelectComponents(!showSelectComponents);
    };

  const handleShowSelectBoxClick = () => {
    setShowSelectComponents(!showSelectComponents);
    setShowComponents(!showComponents);
  }

  const handleSelectComponent = (id:number) => {
    setVisibleComponentId(id);
  }

  const handleSelectSecondType = (id:number) => {
    setVisibleSecondTypedId(id);
  }

  const handleSelectTableType = (id:number) => {
    setVisibleTableTypeId(id);
  }

  const handleModalConfirm = (event:any) => {
    setShowConfirmGroupModal(true)
    setShowGroupModal(false);
    document.body.style.overflow = "hidden";
  }

  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const email = e.target.value;

    if(emailRegex.test(email)) {
        setEmail(email)
        setErrorText(false)
    } else {
        setEmail("");
        setErrorText(true);
    }
  }

  const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^\d{10,11}$/;
    const inputValue = e.target.value;
    if (regex.test(inputValue) || inputValue === '') {
      setContact(inputValue);
    } else {
      setContact("");
    }
  }
  
  function formatDate(date: Date) : string {
    const days = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
    let day = days[date.getDay()];
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let dayOfMonth = date.getDate().toString().padStart(2, '0');

    return `${date.getFullYear()}.${month}.${dayOfMonth} ${day}`;
  }

  useEffect(() => {
    const reservationReady = isReservation();

    setFacilitiesItemThree(selectedFacilitiesThree);
    setFacilitiesItemTwo(selectedFacilitiesTwo);
    setFacilitiesItemOne(selectedFacilitiesOne);
    

    // console.log("값 뭐 들어있을까?", selectedFacilitiesThree);

  }, [storeState, selectedDateState, selectedTimeState, adultCnt, childCnt, name, email, contact, errorText, period, eventName,facilitiesThree, facilitiesTwo,facilitiesOne]);

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
          <ArrowBox disabled={!isShowSelectOptions()}>
            <ArrowButton direction={showComponents || !isShowSelectOptions()} onClick={handleDownClick} />
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
                (showComponents || !isShowSelectOptions()) && <CustomerSelect />
              }
            </StyledDiv>

            <BarZone show={showComponents || !isShowSelectOptions()} />
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
              <DatePickerWrapper show={showComponents || !isShowSelectOptions()}>
                  <MyCalendar />
              </DatePickerWrapper>
              
            </StyledDiv>
            
            <BarZone show={showComponents || !isShowSelectOptions()} />
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
              <TimePickerContainer show={showComponents || !isShowSelectOptions()}>
                <TimePicker />
              </TimePickerContainer>
           
            </StyledDiv>
            <BarZone show={showComponents || !isShowSelectOptions()} />
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
                (<Stores show={showComponents || !isShowSelectOptions()}>
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
              <div style={{  width:"100%" , color: "#A2A2A2", borderBottom: !isSecondSelectOptions() || !isShowSelectOptions() ? "2px solid red" : "2px solid #DCDCDC"  , fontSize:"16px", textAlign: "center"}}>
                {
                  !isSecondSelectOptions() || !isShowSelectOptions() ? "추가 선택사항을 모두 선택해 주세요" :  `${secondStore} 타입 / ${tableTypeName} 타입 `
                }
              </div>
            
              
            </SelectHeaderBox>
            <FLEX_1 >
              <SecondArrowBox disabled={!isShowSelectOptions()}>
                <ArrowButton direction={showSelectComponents || !isShowSelectOptions()} onClick={handleShowSelectBoxClick}  />
              </SecondArrowBox>
            </FLEX_1>
          </SecondSelectBox>


          <SecondSelectOptions show={showSelectComponents || !isShowSelectOptions()}>
            {
              showSelectComponents && isShowSelectOptions() 
              &&
              <StyledDiv style={{ flex: 1 }}>
              <Title style={{ marginLeft: "40px" }}>F&B 타입</Title>
              {
                (<Stores style={{ marginLeft: "30px" }} show={showSelectComponents || isShowSelectOptions()}>
                {
                  StoreSelectDataType.map((store, id) => (
                    
                    <SecondSelectedStore key={id} id={id} store={store} onSelect={() => handleSelectSecondType(id)} isSelected={id === visibleSecondTypeId}/>
                  ))
                }
                </Stores>)   
              }
            </StyledDiv>
            }
           
            <SecondBarZone show={showSelectComponents || isShowSelectOptions()}/>
            {
              showSelectComponents && isShowSelectOptions() 
              &&
              <StyledDiv style={{ flex: 1 }}>
              <Title style={{ marginLeft: "35px" }}>테이블 타입</Title>
              <Stores style={{ marginLeft: "35px" }} show={showSelectComponents || isShowSelectOptions()}>
                {
                  TableTypeData.map((table, id) => (
                    
                    <TableTypeSelect key={id} id={id} table={table} onSelect={() => handleSelectTableType(id)} isSelected={id === visibleTableTypeId}/>
                  ))
                }
              </Stores>
            </StyledDiv>
            }
            
            <SecondBarZone show={showSelectComponents || isShowSelectOptions()}/>
            {
              showSelectComponents && isShowSelectOptions() 
              &&
              <StyledDiv style={{ flex: 2.5}}>
                <Title style={{ marginLeft: "35px" }}>기본제공 부대시설</Title>
                <BaseAmentiesBox>
                  <div style={{ flex: 1.5 }}>
                    <div style={{ width: "160px", height: "190px", border: "1px solid #dcdcdc", marginTop: "11%", marginLeft: "20%", borderRadius: "10px" }}>
                      <div style={{ display: "flex", width: "auto", height: "15%", background:"#ECECEC" , justifyContent: "center", alignItems: "center", borderTopLeftRadius: "10px", borderTopRightRadius: "10px",boxSizing: "border-box"  }}>
                        <div style={{ fontSize: "13px", fontWeight: "bold" }}>음향 ∙ 영상장비</div>
                      </div>
                        <AdditionalFacilitiesOne 
                          facilities={facilitiesOne}
                          onFacilityChange={handleFacilityChangeOne}
                        />
                    </div>
                  </div>
                  <div style={{ flex: 3 }}>
                    <div style={{ width: "320px", height: "190px", border: "1px solid #dcdcdc", marginTop: "5.5%", marginLeft: "15%", borderRadius: "10px" }}>
                      <div style={{ display: "flex", width: "auto", height: "15%", background:"#ECECEC" , justifyContent: "center", alignItems: "center", borderTopLeftRadius: "10px", borderTopRightRadius: "10px",boxSizing: "border-box"  }}>
                        <div style={{ fontSize: "13px", fontWeight: "bold" }}>부대시설</div>
                      </div>
                      <AdditionalFacilitiesTwo 
                        facilities={facilitiesTwo}
                        onFacilityChange={handleFacilityChangeTwo}
                      />
                    </div> 
                  </div>
                  <div style={{ flex: 1}} />
                </BaseAmentiesBox>
              </StyledDiv>
            }
            
            <SecondBarZone show={showSelectComponents || isShowSelectOptions()}/>
            {
              showSelectComponents && isShowSelectOptions() 
              &&
              <StyledDiv style={{ flex: 1.8 }}>
                <Title style={{ marginLeft: "60px" }}>추가요청 부대시설</Title>
                <div style={{ width: "170px", height: "190px", border: "1px solid #dcdcdc", marginTop: "4.5%", marginLeft: "15%", borderRadius: "10px" }}>
                  <div style={{display: "flex", marginTop:"3%", marginLeft: "5%"}}>
                    <AdditionalFacilitiesThree 
                      facilities={facilitiesThree}
                      onFacilityChange={handleFacilityChangeThree}
                    />
                  </div>
                </div>
              </StyledDiv>
            }
            
          </SecondSelectOptions>
          <BorderBottomLine />
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-evenly", height: "15%" }}>
            <div style={{flex:1}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Image
                      src={"/image/require_input.png"} 
                      width={28} 
                      height={28} 
                      alt="text" 
                      style={{marginRight:"2%"}}
                    />
                    <div style={{ margin:"1%", fontSize:"18px", fontWeight: "bold" }}>필수입력<span style={{ color: "#f84040" }}>*</span></div>
                </div>
            </div>
            
            <div style={{flex:1}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column"}}>
                  <div style={{ width: "100%", margin: "10px"}}>
                    <span style={{ marginRight:"4%" }}>예약자명<span style={{ color: "#f84040" }}>*</span></span>
                    <input type="text" onChange={(e) => setName(e.target.value) } style={{width:"200px", height: "35px", border:"2px solid #cbcbcb", borderRadius:"5px", fontSize:"12px"}} placeholder=" 예약자 이름 입력" />
                  </div>
                  <div style={{ width: "100%" }}>
                    <span style={{ marginRight:"4%" }}>주최기간<span style={{ color: "#f84040" }}>*</span></span>
                    <input type="text" onChange={(e) => setPeriod(e.target.value) } style={{width:"200px", height: "35px", border:"2px solid #cbcbcb", borderRadius:"5px", fontSize:"12px"}} placeholder=" 성원애드피아" />
                  </div>
                </div>
            </div>
            <div style={{flex:1}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                  <div style={{ width: "100%", margin: "10px"}}>
                    <div style={{ display: errorText ? "block" : "none", position:"absolute", left: "730px", bottom: showSelectComponents ? "120px" : "110px" , fontSize: "10px", color: "#ff0000" }}>이메일 주소를 정확히 입력해주세요</div>
                    <span style={{ marginRight:"4%" }}>이메일<span style={{ color: "#f84040" }}>*</span></span>
                    <input type="text" onChange={handleEmailChange} style={{width:"200px", height: "35px", border:"2px solid #cbcbcb", borderRadius:"5px", fontSize:"12px"}} placeholder=" 예) foodmail@foodmail.co.kr" />
                    
                  </div>
                  <div style={{ width: "100%"}}>
                    <span style={{ marginRight:"4%" }}>행사명<span style={{ color: "#f84040" }}>*</span></span>
                    <input type="text" onChange={ (e) => setEventName(e.target.value) } style={{width:"200px", height: "35px", border:"2px solid #cbcbcb", borderRadius:"5px", fontSize:"12px"}} placeholder=" 성원 송년회" />
                  </div>
                
              </div>
            </div>
            <div style={{flex:1}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                  <div style={{ width: "100%", margin: "10px"}}>
                    <span style={{ marginRight:"2%" }}>연락처<span style={{ color: "#f84040" }}>*</span></span>
                    <input type="text"  onChange={ (e) => setContact(e.target.value) } style={{width:"200px", height: "35px", border:"2px solid #cbcbcb", borderRadius:"5px", fontSize:"12px"}} placeholder=" 숫자만 입력해주세요." />
                  </div>
                  <div style={{ width: "100%", height: "35px"}}>
                    
                  </div>
                </div>
            </div>
            <div style={{flex:1}}>
                <div onClick={handleModalConfirm} style={{ pointerEvents: isReservation() ? "auto" : "none", marginLeft:"8%", cursor: isReservation() ? "pointer" : "", display:"flex",justifyContent:"center", background: isReservation() ? "#f84040" : "#f8f6f6", alignItems:"center", borderRadius:"25px", width:"200px", height:"70px" }}>
                  <Image color="#FFF" src={ isReservation() ? "/icon/icon-main-quick-reservation-on.svg" : "/icon/icon-main-quick-reservation.svg"} alt="예약하기" width={40} height={40} />
                  <div style={{ color:isReservation() ? "#FFF" : "#c8c8c8", marginLeft:"5%", fontSize: "20px",  }}>예약하기</div>
                </div>
            </div>
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
    height: 800px;
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

const SecondSelectOptions = styled.div<{show:boolean}>`
display: ${({ show }) => (show ? "flex" : "none")};
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

const SecondArrowBox = styled.div<{disabled:boolean}>`
  display: flex;
  justify-content: flex-end;
  margin-right: 65px;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  user-select: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const ArrowBox = styled.div<{disabled:boolean}>`
  position: absolute;
  top: 100px;
  right: 25px;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  user-select: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

const BaseAmentiesBox = styled.div`
  display: flex;
  justify-content: center;
`;













