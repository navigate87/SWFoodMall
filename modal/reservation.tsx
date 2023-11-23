import { useRecoilState } from "recoil";
import styled from "styled-components"
import { modalConfirmShowState, modalShowState, recoilAdultCnt, recoilChildCnt, recoilDateSelectState, recoilReservationContact, recoilReservationEmail, recoilReservationName, recoilSelectedDate, recoilSelectedStore, recoilSelectedTime, recoilStoreState, recoilTimeState } from "@/store/stores/modalState";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StoreData } from "@/data/StoreType";
import SelectedStore from "@/components/SelectedStore";
import MyCalendar from "@/components/DatePicker";
import TimePicker from "@/components/TimePicker";
import PeopleCount from "@/components/PeopleCount";
import ConfirmModal from "./confirmReservation";
type StyledDivProps = {
    disabled?: boolean;
}

export default function Reservation() {
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

    const handleTimeSelected = (selectedTime: string) => {
        setTime(selectedTime)
        setSelectedTimeState(true);
    }
    // 다이닝 스토어 ID값  
    const handleSelectComponent = (id:number) => {
        setVisibleComponentId(id);
    }

    const handleModalConfirm = (event:any) => {
        setShowConfirmModal(true)
        setShowModal(false);
        document.body.style.overflow = "hidden";
    }

    const handleClick = (event:any) => {
        setShowModal(false);
        setStoreState(false);
        setSelectedTimeState(false);
        setSelectedDateState(false);
        setAdultCnt("0");
        setChildCnt("0");
        setName("");
        setContact("");
        setEmail("");
        setErrorText(false);
        document.body.style.overflow = "auto";
    }

    const handleEmailChange = (e:any) => {
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

    const isReservation = () => { // 예약하기 버튼 활성화 조건
        if(
            storeState                                      // 스토어 선택
            && selectedDateState                            // 날짜 선택
            && selectedTimeState                            // 시간 선택
            && (adultCnt !== "0" || childCnt !== "0")       // 인원 선택
            && name !== ""                                  // 이름 
            && email !== ""                                 // 이메일    
            && contact !== ""                               // 연락처
            && errorText === false
        ) {
            return true;
        } else {
            return false;
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

    }, [storeState, selectedDateState, selectedTimeState, adultCnt, childCnt, name, email, contact, errorText]);
    
    return (
        <>
          <ModalBackground>
            <Container>
                <HeaderBox>
                    <DiningSelectBox>
                        <TextBoxBorderBot>DINING 예약</TextBoxBorderBot> 
                    </DiningSelectBox>
                    <FNBSelectBox>
                        <TextBoxBorderBot>F&B 단체예약</TextBoxBorderBot>
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
                
                <div style={{display: "flex", justifyContent:"center", margin:"1.5%"}}>
                    <div style={{flex:1}}>
                        <div style={{ display: "flex", alignItems:"center" }}>
                            <div style={{ border: !storeState ? "3px solid #26c46a" : "" , borderRadius: "5px", fontSize:"1vw", textAlign: "center", width:"15%", lineHeight:"20px" }}>
                                {
                                    storeState ? <Image src={"/icon/check.svg"} alt="checked" width={28} height={28} /> : "step 1"
                                }
                            </div>
                            <div style={{ color: storeState ? "#26c46a" : "#c8c8c8" }}>&nbsp;∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙&nbsp;</div>
                        </div>
                    </div>
                    <div style={{flex:1}}>
                        <div style={{ display: "flex", alignItems:"center" }}>
                            <div style={{ border: storeState && !selectedDateState ? "3px solid #26c46a" : "", background: !storeState && !selectedDateState ? "#C8C8C8" : "", color: storeState && !selectedDateState ? "" : "#FFFFFF"  , borderRadius: "5px", fontSize:"1vw", textAlign:"center", width:"15%", lineHeight:"25px" }}>
                            {
                                selectedDateState ? <Image src={"/icon/check.svg"} alt="checked" width={28} height={28} /> : "step 2"
                            }
                            </div>
                            <div style={{ color: selectedDateState ? "#26c46a" : "#c8c8c8" }}>&nbsp;∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙&nbsp;</div>
                        </div>
                    </div>
                    <div style={{flex:1}}>
                        <div style={{ display: "flex", alignItems:"center" }}>
                            <div style={{ border: selectedDateState && !selectedTimeState ? "3px solid #26c46a" : "", background: !selectedDateState && !selectedTimeState ? "#C8C8C8" : "", color:selectedDateState && !selectedTimeState ? "" : "#FFFFFF", borderRadius: "5px", fontSize:"1vw", textAlign:"center", width:"15%", lineHeight:"25px" }}>
                                {
                                    selectedTimeState ? <Image src={"/icon/check.svg"} alt="checked" width={28} height={28} /> : "step 3"
                                }
                            </div>
                            <div style={{ color: selectedTimeState ? "#26c46a" : "#c8c8c8" }}>&nbsp;∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙&nbsp;</div>
                        </div>
                    </div>
                    <div style={{flex:1}}>
                        <div style={{ display: "flex", alignItems:"center" }}>
                            <div style={{ border: !(adultCnt !== "0" || childCnt !== "0") && selectedTimeState ? "3px solid #26c46a" : "", background: !(adultCnt !== "0" || childCnt !== "0") && !selectedTimeState ? "#C8C8C8" : "", color: !(adultCnt !== "0" && childCnt !== "0") && selectedTimeState ? "" : "#FFFFFF", borderRadius: "5px", fontSize:"1vw", textAlign:"center", width:"15%", lineHeight:"25px" }}>
                                {
                                    adultCnt === "0" && childCnt === "0" ? "step 4" : <Image src={"/icon/check.svg"} alt="checked" width={28} height={28} />
                                }
                            </div>
                            <div>&nbsp;&nbsp;</div>   
                        </div>
                    </div>
                </div>
                
                <div style={{display: "flex", borderBottom: "1px solid #CCCCCC", width:"100%"}}>
                    <StyledDiv>
                        <div style={{ display:"flex", alignItems:"center", marginLeft:"6%" }}>
                            <Image 
                                src={"/icon/icon-main-quick-dining.svg"} 
                                width={29} 
                                height={24} 
                                alt="Dining" />
                            <h3 style={{marginLeft:"2%", marginRight:"3%", fontSize:"16px"}}>다이닝</h3>
                            <div style={{color:"#A2A2A2", borderBottom: storeState ? "2px solid #DCDCDC" : "2px solid red" , fontSize:"16px"}}>
                                {  storeState ? selectedStoreName : "식당을 선택해주세요" }
                            </div>
                        </div>
                        <Stores>
                            {
                              StoreData.map((store, id) => (
                                <SelectedStore key={id} id={id} store={store} onSelect={() => handleSelectComponent(id)} isSelected={id === visibleComponentId}/>
                              ))
                            }
                        </Stores>   
                    </StyledDiv>
                    <div style={{ display:"flex", borderLeft: "1px solid #EBEBEB", height:"350px", marginTop: "3%" }}></div>
                    <StyledDiv disabled={!storeState}>
                        <div style={{ display:"flex", alignItems:"center", marginLeft:"1.5%"  }}>
                            <Image 
                                src={"/icon/icon-main-quick-day.svg"} 
                                width={29} 
                                height={24} 
                                alt="quickday" />
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
                                { selectedTimeState ? time : "시간을 선택해 주세요" }
                            </h3> 
                        </div>
                        
                        <ul style={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}>
                            <TimePicker onTimeSelected={handleTimeSelected} />
                        </ul>
                       
                    </StyledDiv>
                    <div style={{ display:"flex", borderLeft: "1px solid #EBEBEB", height:"350px", marginTop: "3%" }}></div>
                    <StyledDiv disabled={!selectedTimeState}>
                        <div style={{ display:"flex", alignItems:"center", marginLeft:"1%" }}>
                            <Image 
                                src={"/icon/icon-main-quick-customer.svg"} 
                                width={29} 
                                height={24} 
                                alt="Customer" />
                            <h3 style={{marginLeft:"2%", marginRight:"3%", fontSize:"16px"}}>인원</h3>   
                            <div style={{ color:"#A2A2A2", borderBottom: adultCnt !== "0" || childCnt !== "0" ? "2px solid #DCDCDC" : "2px solid red" , fontSize:"16px"}}>
                                 { adultCnt !== "0" || childCnt !== "0" ? `일반  ${adultCnt}명 , 소인  ${childCnt}명` : "인원을 선택해주세요"} 
                            </div>
                           
                        </div>
                        
                        <div style={{ marginLeft: "9%", marginTop:"7%", fontSize:"14px"  }}>일반</div>
                        <div style={{ display:"flex", justifyContent:"center" }}>
                            <PeopleCount initialValue={0} label="일반" min={0} max={100}  />
                        </div>
                        <div style={{ marginLeft: "9%", marginTop:"7%", fontSize:"14px"  }}>소인<p style={{color:"#a2a2a2", fontSize:"11px"}}>(~11세)</p></div>
                        <div style={{ display:"flex", justifyContent:"center" }}>
                            <PeopleCount initialValue={0} label="소인" min={0} max={100}  />
                        </div>
                    </StyledDiv>
                </div>    
                                  
                <div style={{ width:"100%", borderTop:"8px solid #ECECEC", borderBottom:"1px solid #CCCCCC"}}></div> 
               
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-evenly", height: "15%"  }}>
                    <div style={{flex:1}}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <Image
                                src={"/image/require_input.png"} 
                                width={28} 
                                height={28} 
                                alt="text" 
                                style={{marginRight:"2%"}}
                            />
                            <div style={{ margin:"1%" }}>필수입력<span style={{ color: "#f84040" }}>*</span></div>
                        </div>
                    </div>
                    
                    <div style={{flex:1}}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <span style={{ marginRight:"1%" }}>예약자명<span style={{ color: "#f84040" }}>*</span></span>
                            <input type="text" onChange={(e) => setName(e.target.value) } style={{width:"200px", height: "35px", border:"2px solid #cbcbcb", borderRadius:"5px", fontSize:"12px"}} placeholder=" 예약자 이름 입력" />
                            {/* <button style={{ position:"absolute", marginLeft: "12%" }}><Image src={"/icon/Search_area_delete.svg"} width={20} height={20} alt="cancel" /></button> */}
                        </div>
                        
                    </div>
                    <div style={{flex:1}}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <div style={{ marginRight:"2%" }}>이메일<span style={{ color: "#f84040" }}>*</span></div>
                            <input type="text" onChange={handleEmailChange} style={{width:"200px", height: "35px", border:"2px solid #cbcbcb", borderRadius:"5px", fontSize:"12px"}} placeholder=" 예) foodmail@foodmail.co.kr" />
                            {/* <button style={{ position:"absolute", marginLeft: "12%" }}><Image src={"/icon/Search_area_delete.svg"} width={20} height={20} alt="cancel" /></button> */}
                        </div>
                        
                    </div>
                    <div style={{flex:1}}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        
                        <div style={{ marginRight:"2%" }}>연락처<span style={{ color: "#f84040" }}>*</span></div>
                            <input type="text" onChange={ (e) => setContact(e.target.value) } style={{width:"200px", height: "35px", border:"2px solid #cbcbcb", borderRadius:"5px", fontSize:"12px"}} placeholder=" 숫자만 입력해주세요." />
                            <div style={{ display: errorText ? "block" : "none", position:"absolute", marginBottom: "55px", marginRight: "41%" , fontSize: "10px", color: "#ff0000" }}>이메일 주소를 정확히 입력해주세요</div>
                        </div>
                    </div>
                    <div style={{flex:1}}>
                        <div onClick={handleModalConfirm} style={{ marginLeft:"8%", cursor: isReservation() ? "pointer" : "", display:"flex",justifyContent:"center", background: isReservation() ? "#f84040" : "#f8f6f6", alignItems:"center", borderRadius:"25px", width:"200px", height:"70px" }}>
                            <Image color="#FFF" src={ isReservation() ? "/icon/icon-main-quick-reservation-on.svg" : "/icon/icon-main-quick-reservation.svg"} alt="예약하기" width={40} height={40} />
                            <div style={{ color:isReservation() ? "#FFF" : "#c8c8c8", marginLeft:"5%", fontSize: "20px" }}>예약하기</div>
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
    cursor: pointer;
    &:hover{
        border-bottom: 3px solid red;
    }
`;

const Stores = styled.div`
    display: flex;
    margin: 6%;
    flex-wrap: wrap;
    column-count: 2;
    row-gap: 0em 10px;
`;

const DatePickerWrapper = styled.div`
    margin: 7%; 
    text-align:center;
`;

const StyledDiv = styled.div<StyledDivProps>`
  flex: 1;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  user-select: ${(props) => (props.disabled ? 'none' : 'auto')};
`;

