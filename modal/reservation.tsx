import { useRecoilState } from "recoil";
import styled from "styled-components"
import { modalShowState, recoilSelectedStore, recoilStoreState } from "@/store/stores/modalState";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faUserPlus, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { StoreData } from "@/data/StoreType";
import SelectedStore from "@/components/SelectedStore";
import DatePicker from "react-datepicker";
import { addMonths, getDate, getMonth, getYear } from "date-fns";
// import 'react-datepicker/dist/react-datepicker.css';
import { ko } from "date-fns/locale";

export default function Reservation() {
    const [showModal, setShowModal] = useRecoilState<boolean>(modalShowState);
    const [selectedStoreName, setSelectedStoreName] = useRecoilState<string>(recoilSelectedStore);
    const [storeState, setStoreState] = useRecoilState<boolean>(recoilStoreState);
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null)
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const months :string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    const [visibleComponentId, setVisibleComponentId] = useState<number | null>(null);
    
    // 다이닝 스토어 ID값  
    const handleSelectComponent = (id:number) => {
        setVisibleComponentId(id);
    }

    const onChangeDate = (dates:any) => {
        const [start, end] = dates;
        setStartDate(startDate);
        setEndDate(end);
    }

    const handleClick = (event:any) => {
        setShowModal(false);
        setStoreState(false);
        document.body.style.overflow = "auto";
    }

    return (
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
                            <div style={{ border: "3px solid green", borderRadius: "5px", fontSize:"1vw", textAlign: "center", width:"15%", lineHeight:"20px" }}>step 1</div>
                            <div>&nbsp;∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙&nbsp;</div>
                        </div>
                    </div>
                    <div style={{flex:1}}>
                        <div style={{ display: "flex", alignItems:"center" }}>
                            <div style={{ background: "#C8C8C8", color:"#FFFFFF", borderRadius: "5px", fontSize:"1vw", textAlign:"center", width:"15%", lineHeight:"25px" }}>step 2</div>
                            <div>&nbsp;∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙&nbsp;</div>
                        </div>
                    </div>
                    <div style={{flex:1}}>
                        <div style={{ display: "flex", alignItems:"center" }}>
                            <div style={{ background: "#C8C8C8", color:"#FFFFFF", borderRadius: "5px", fontSize:"1vw", textAlign:"center", width:"15%", lineHeight:"25px" }}>step 3</div>
                            <div>&nbsp;∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙&nbsp;</div>
                        </div>
                    </div>
                    <div style={{flex:1}}>
                        <div style={{ display: "flex", alignItems:"center" }}>
                            <div style={{ background: "#C8C8C8", color:"#FFFFFF", borderRadius: "5px", fontSize:"1vw", textAlign:"center", width:"15%", lineHeight:"25px" }}>step 4</div>
                            <div>&nbsp;&nbsp;</div>   
                        </div>
                    </div>
                </div>
                
                <div style={{display: "flex", borderBottom: "1px solid #CCCCCC", width:"100%"}}>
                    <div style={{flex:1}}>
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
                    </div>
                    <div style={{ display:"flex", borderLeft: "1px solid #EBEBEB", height:"290px", marginTop: "3%" }}></div>
                    <div style={{flex:1}}>
                        <div style={{ display:"flex", alignItems:"center", marginLeft:"1.5%"  }}>
                            <Image 
                                src={"/icon/icon-main-quick-day.svg"} 
                                width={29} 
                                height={24} 
                                alt="quickday" />
                            <h3 style={{marginLeft:"2%", marginRight:"3%", fontSize:"16px"}}>날짜</h3>
                            <div style={{color:"#A2A2A2", borderBottom: "2px solid red", fontSize:"16px"}}>날짜를 선택해주세요</div>
                        </div>
                        <DatePickerWrapper>
                            <StyledDatePicker 
                                locale={ ko }
                                minDate={new Date()}
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(date) => setSelectedDate(date)}
                                inline
                                showDisabledMonthNavigation
                                monthsShown={1}
                                selected={selectedDate}
                                shouldCloseOnSelect
                                withPortal
                                renderCustomHeader={({
                                   date,
                                   prevMonthButtonDisabled,
                                   nextMonthButtonDisabled,
                                   decreaseMonth,
                                   increaseMonth, 
                                }) => (
                                    <div style={{ margin:"10px", display: "flex", justifyContent:"center" }}>
                                        <div style={{cursor:"pointer"}} onClick={decreaseMonth} aria-disabled={prevMonthButtonDisabled}>
                                            ◀️
                                        </div>
                                        <div className="month-day">
                                             {getYear(date)}.{months[getMonth(date)]}
                                        </div>
                                        <div style={{cursor:"pointer"}} onClick={increaseMonth} aria-disabled={nextMonthButtonDisabled}>
                                            ▶️
                                        </div>
                                    </div>
                                )}
                            /> 
                        </DatePickerWrapper>
                    </div>
                    <div style={{ display:"flex", borderLeft: "1px solid #EBEBEB", height:"290px", marginTop: "3%" }}></div>
                    <div style={{flex:1}}>
                        <div style={{ display:"flex", alignItems:"center", marginLeft:"1.5%" }}>
                        <Image 
                                src={"/icon/icon-main-quick-time.svg"} 
                                width={29} 
                                height={24} 
                                alt="Time" />
                            <h3 style={{marginLeft:"2%", marginRight:"3%", fontSize:"16px"}}>시간</h3>   
                        </div>
                        <div style={{marginLeft: "2%", marginTop: "7%", fontSize:"14px"}}>시간</div>
                        <ul style={{ display: "flex", alignContent:"center", flexWrap: "wrap", columnGap:"20px" }}>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>10:00</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>11:00</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>12:00</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>13:00</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>14:00</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>15:00</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>16:00</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>17:00</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>18:00</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>19:00</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>20:00</li>
                        </ul>
                       
                        <div style={{marginLeft: "2%", marginTop: "3%", fontSize:"14px"}}>분</div>
                        <ul style={{ display: "flex", alignContent:"center", columnGap:"20px", flexWrap: "wrap" }}>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>00</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>05</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>10</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>15</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>20</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>25</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>30</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>35</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>40</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>45</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>50</li>
                            <li style={{ height: "25px", width:"70px", borderRadius: "25px", border:"1px solid #ededed", textAlign:"center", lineHeight:"25px", margin:"2%"}}>55</li>
                        </ul>
                    </div>
                    <div style={{ display:"flex", borderLeft: "1px solid #EBEBEB", height:"290px", marginTop: "3%" }}></div>
                    <div style={{flex:1}}>
                        <div style={{ display:"flex", alignItems:"center", marginLeft:"1%" }}>
                            <Image 
                                src={"/icon/icon-main-quick-customer.svg"} 
                                width={29} 
                                height={24} 
                                alt="Customer" />
                            <h3 style={{marginLeft:"2%", marginRight:"3%", fontSize:"16px"}}>인원</h3>   
                        </div>
                        <div style={{ marginLeft: "9%", marginTop:"7%", fontSize:"14px"  }}>일반</div>
                        <div style={{ display:"flex", margin:"3%", alignItems:"center", justifyContent:"center" }}>
                            <div style={{ border:"1px solid #ededed", height:"40px",width:"350px" ,borderRadius:"15px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                                <div style={{marginLeft:"5%"}}>➖</div>
                                <div>0</div>
                                <div style={{marginRight:"5%"}}>➕</div>
                            </div>
                        </div>
                        <div>
                            <ul style={{ display:"flex", alignItems:"center", justifyContent:"space-evenly" }}>
                                <li style={{ border:"1px solid #ededed", height:"40px", width:"40px", borderRadius:"15px",  }}><p style={{ fontSize:"0.7em", lineHeight:"40px", textAlign:"center"}}>+4</p></li>
                                <li style={{ border:"1px solid #ededed", height:"40px", width:"40px", borderRadius:"15px", }}><p style={{ fontSize:"0.7em", lineHeight:"40px", textAlign:"center"}}>+6</p></li>
                                <li style={{ border:"1px solid #ededed", height:"40px", width:"40px", borderRadius:"15px", }}><p style={{ fontSize:"0.7em", lineHeight:"40px", textAlign:"center"}}>+8</p></li>
                                <li style={{ border:"1px solid #ededed", height:"40px", width:"40px", borderRadius:"15px",  }}><p style={{ fontSize:"0.7em", lineHeight:"40px", textAlign:"center"}}>+10</p></li>
                                <li style={{ border:"1px solid #ededed", height:"40px", width:"40px", borderRadius:"15px",  }}><p style={{ fontSize:"0.7em", lineHeight:"40px", textAlign:"center"}}>+20</p></li>
                            </ul>
                        </div>
                        <div style={{ marginLeft: "9%", marginTop:"5%", fontSize:"14px"  }}>소인</div>
                        <div style={{ display:"flex", margin:"3%", alignItems:"center", justifyContent:"center" }}>
                            <div style={{ border:"1px solid #ededed", height:"40px",width:"350px" ,borderRadius:"15px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                                <div style={{marginLeft:"5%"}}>➖</div>
                                <div>0</div>
                                <div style={{marginRight:"5%"}}>➕</div>
                            </div>
                        </div>
                        <div>
                            <ul style={{ display:"flex", alignItems:"center", justifyContent:"space-evenly" }}>
                                <li style={{ border:"1px solid #ededed", height:"40px", width:"40px", borderRadius:"15px" }}><p style={{ fontSize:"0.7em", lineHeight:"40px", textAlign:"center"}}>+4</p></li>
                                <li style={{ border:"1px solid #ededed", height:"40px", width:"40px", borderRadius:"15px" }}><p style={{ fontSize:"0.7em", lineHeight:"40px", textAlign:"center"}}>+6</p></li>
                                <li style={{ border:"1px solid #ededed", height:"40px", width:"40px", borderRadius:"15px" }}><p style={{ fontSize:"0.7em", lineHeight:"40px", textAlign:"center"}}>+8</p></li>
                                <li style={{ border:"1px solid #ededed", height:"40px", width:"40px", borderRadius:"15px" }}><p style={{ fontSize:"0.7em", lineHeight:"40px", textAlign:"center"}}>+10</p></li>
                                <li style={{ border:"1px solid #ededed", height:"40px", width:"40px", borderRadius:"15px" }}><p style={{ fontSize:"0.7em", lineHeight:"40px", textAlign:"center"}}>+20</p></li>
                            </ul>
                        </div>
                    </div>
                </div>    
                                  
                <div style={{ width:"100%", borderTop:"8px solid #ECECEC", borderBottom:"1px solid #CCCCCC"}}></div> 
               
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-evenly", height: "20%" }}>
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
                            <span style={{ marginRight:"2%" }}>예약자명<span style={{ color: "#f84040" }}>*</span></span>
                            <input></input>
                        </div>
                        
                    </div>
                    <div style={{flex:1}}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <div style={{ marginRight:"2%" }}>연락처<span style={{ color: "#f84040" }}>*</span></div>
                            <input></input>
                        </div>
                        
                    </div>
                    <div style={{flex:1}}>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <div style={{ marginRight:"2%" }}>이메일<span style={{ color: "#f84040" }}>*</span></div>
                            <input></input>
                        </div>
                    </div>
                    <div style={{flex:1}}>
                        <div style={{ marginLeft:"8%", cursor:"pointer", display:"flex",justifyContent:"center", background:"#f8f6f6", alignItems:"center", borderRadius:"25px", width:"200px", height:"70px" }}>
                            <Image color="#FFF" src={"/icon/icon-main-quick-reservation.svg"} alt="예약하기" width={40} height={40} />
                            <div style={{ color:"#c8c8c8", marginLeft:"5%" }}>예약하기</div>
                        </div>
                    </div>
                </div>
                   
                
            </Container>
            
        </ModalBackground>
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

    .react-datepicker {
        border: none;
    }
    .react-datepicker__header {
        text-align: center;
        background-color: #fff;
        border: none;
    }
    .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {
        border-radius: 50px;
        color: blue;
        background: #fff;
        border: 1px solid red;

        &:hover {
            border-radius: 50px;
        }
    }

    .react-datepicker__day--selected {
        &:hover {
            border-radius: 50px;
        }
    }
`;

const StyledDatePicker = styled(DatePicker)`
    width: 122px;
    height: 48px;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    padding: 20px;
    background-color: transparent;
    color: #707070;
    position: absolute;
    top: -48px;
    left: 5px;
`;

