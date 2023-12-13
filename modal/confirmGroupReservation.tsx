import { reserveFnb, reservedDate } from "@/api/api";
import { TableTypeData } from "@/data/TableType";
import { recoilStoreCode,recoilTimeRange,recoilSecondStoreOption,recoilSecondStoreState,recoilEventName,recoilPeriod,recoilShowConfirmGroupModal, recoilShowGroupModal, recoilAdultCnt, recoilChildCnt, recoilDateSelectState, recoilReservationContact, recoilReservationEmail, recoilReservationName, recoilSelectedDate, recoilSelectedStore, recoilSelectedTime, recoilStoreState, recoilTimeState, recoilFacilitiesThree, recoilTableTypeName, recoilTableTypeSelect, recoilTableTypeCode, recoilFacilitiesTwo, recoilFacilitiesOne } from "@/store/stores/modalState";
import {  ReservationGroupRequest, FnbReservedDateRequest} from "@/type/Reservation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components"

export default function ConfirmGroupModal() {
  const [showGroupModal, setShowGroupModal] = useRecoilState<boolean>(recoilShowGroupModal);
  const [showConfirmGroupModal, setShowConfirmGroupModal] = useRecoilState<boolean>(recoilShowConfirmGroupModal);
  const [name, setName] = useRecoilState<string>(recoilReservationName);
  const [storeState, setStoreState] = useRecoilState<boolean>(recoilStoreState);
  const [selectedDateState, setSelectedDateState] = useRecoilState<boolean>(recoilDateSelectState);
  const [selectedTimeState, setSelectedTimeState] = useRecoilState<boolean>(recoilTimeState); 
  const [selectedDate, setSelectedDate] = useRecoilState<Date>(recoilSelectedDate);
  const [childCnt, setChildCnt] = useRecoilState<string>(recoilChildCnt);
  const [adultCnt, setAdultCnt] = useRecoilState<string>(recoilAdultCnt);
  const [selectedStoreName, setSelectedStoreName] = useRecoilState<string>(recoilSelectedStore);
  const [timeRange, setTimeRange] = useRecoilState(recoilTimeRange);
  // F&B 타입 명 & F&B 타입 선택 상태 & F&B 선택 Code(디비에 보낼 데이터)
  const [secondStore , setSecondStore] = useRecoilState<string>(recoilSecondStoreOption)
  const [secondStoreState, setSecondStoreState] = useRecoilState<boolean>(recoilSecondStoreState);
  const [secondStoreCode, setSecondStoreCode] = useRecoilState<string>(recoilStoreCode);
  const [storeCode, setStoreCode] = useRecoilState<string>(recoilStoreCode);
  // 연락처
  const [contact, setContact] = useRecoilState<string>(recoilReservationContact);
  // 이메일
  const [email, setEmail] = useRecoilState<string>(recoilReservationEmail);
   // 행사명
  const [eventName, setEventName] = useRecoilState<string>(recoilEventName);
   // 주최기간
  const [period, setPeriod] = useRecoilState<string>(recoilPeriod);
  const [tableTypeName , setTableTypeName] = useRecoilState<string>(recoilTableTypeName)
  const [tableSelectState, setTableSelectState] = useRecoilState<boolean>(recoilTableTypeSelect);
  const [tableTypeCode, setTableTypeCode] = useRecoilState<string>(recoilTableTypeCode);
  const { mutate, isLoading, isError, data } = useMutation(reserveFnb);
  const { mutate:mutateReservedDate, isLoading: isLoadingReservedDate, isError: isErrorReservedDate, data: dataReservedDate } = useMutation(reservedDate);
  const [selectedFacilitiesThree, setSelectedFacilitiesThree] = useRecoilState(recoilFacilitiesThree);
  const [selectedFacilitiesTwo, setSelectedFacilitiesTwo] = useRecoilState(recoilFacilitiesTwo);
  const [selectedFacilitiesOne, setSelectedFacilitiesOne] = useRecoilState(recoilFacilitiesOne);

  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [facilitiesString, setFacilitiesString] = useState<string>();

  function formatDate(date: Date) : string {
    const days = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
    let day = days[date.getDay()];
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let dayOfMonth = date.getDate().toString().padStart(2, '0');
    return `${date.getFullYear()}-${month}-${dayOfMonth}`;
  }
  
  function splitTimeRange(timeRange:string){
    const [timeString] = timeRange.split(" ");
    const [start, end] = timeString.split("~");
    setStartTime(start);
    setEndTime(end);
  }

  function combineAndFormatFacilities(facilityOne: string[], facilityTwo: string[]) {
    const combinedFacilities = [...facilityOne, ...facilityTwo];
    const facilitiesString = combinedFacilities.join(", ");

    setFacilitiesString(facilitiesString);
}

  const tableType = TableTypeData.find(table => table.code === tableTypeCode);

  const handleModal = (event:any) => {
    setShowGroupModal(true);
    setShowConfirmGroupModal(false);
    document.body.style.overflow = "hidden";
    setStoreState(false);
    setStoreCode("");
    setSelectedStoreName("");
    setSelectedTimeState(false);
    setSelectedDateState(false);
    setAdultCnt("0");
    setChildCnt("0");
    setName("");
    setContact("");
    setEmail("");
    setTimeRange("");
    setPeriod("");
    setEventName("");
    setSecondStoreState(false);
    setSecondStoreCode("");
    setSecondStore("");
    setTableTypeName("");
    setTableTypeCode("");
    setTableSelectState(false);
    setSelectedFacilitiesThree([]);
    setSelectedFacilitiesTwo([]);
    setSelectedFacilitiesOne([]);
  }

  const formatPhoneNumber = (phoneNumber:string) => {
    if (phoneNumber.length !== 11) {
      return 'Invalid number'; // 유효하지 않은 번호일 경우
    }
    // 번호 형식에 맞게 대시(-)를 추가
    return phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3, 7) + '-' + phoneNumber.slice(7);
  }

  const handleData = (event:any) => {
    const data: ReservationGroupRequest = {
      order_path: storeCode,
      mem_name: name,          
      mem_mobile: formatPhoneNumber(contact),
      mem_email: email,
      order_date: formatDate(selectedDate),
      start_order_time: startTime,
      end_order_time: endTime,
      adult_cnt: adultCnt,
      child_cnt: childCnt,
      host_com_name: period,
      event_name: eventName,
      fb_type: secondStoreCode,
      fb_table_type: tableTypeCode,
      fb_sub_facilities_af: facilityOneCode,
      fb_sub_facilities_ie: facilityTwoCode,
      fb_sub_facilities_add: facilityThreeCode,
      memo: 'Please prepare a birthday cake.',
      mem_id: 'foodmall_test',
    }

    mutate(data, {
      onSuccess: () => {
        alert('예약이 완료되었습니다.');
        setShowConfirmGroupModal(false);
        document.body.style.overflow = "auto";
        setShowGroupModal(false);
        setStoreState(false);
        setStoreCode("");
        setSelectedStoreName("");
        setSelectedTimeState(false);
        setSelectedDateState(false);
        setAdultCnt("0");
        setChildCnt("0");
        setName("");
        setContact("");
        setEmail("");
        setTimeRange("");
        setPeriod("");
        setEventName("");
        setSecondStoreState(false);
        setSecondStoreCode("");
        setSecondStore("");
        setTableTypeName("");
        setTableTypeCode("");
        setTableSelectState(false);
        setSelectedFacilitiesThree([]);
        setSelectedFacilitiesTwo([]);
        setSelectedFacilitiesOne([]);
      },
      onError: () => {
        alert('예약에 실패했습니다. 다시 시도해주세요.');
      }
    });
  }

  const handleCancel = (event:any) => {
    setShowConfirmGroupModal(false);
    document.body.style.overflow = "auto";
    setShowGroupModal(false);
    setStoreState(false);
    setStoreCode("");
    setSelectedStoreName("");
    setSelectedTimeState(false);
    setSelectedDateState(false);
    setAdultCnt("0");
    setChildCnt("0");
    setName("");
    setContact("");
    setEmail("");
    setTimeRange("");
    setPeriod("");
    setEventName("");
    setSecondStoreState(false);
    setSecondStoreCode("");
    setSecondStore("");
    setTableTypeName("");
    setTableTypeCode("");
    setTableSelectState(false);
    setSelectedFacilitiesThree([]);
    setSelectedFacilitiesTwo([]);
    setSelectedFacilitiesOne([]);
    
  }
  const facilityThreeCode = selectedFacilitiesThree.map(facility => facility.code);
  const facilityThreeName = selectedFacilitiesThree.map(facility => facility.name);
  const facilityTwoCode = selectedFacilitiesTwo.map(facility => facility.code);
  const facilityTwoName = selectedFacilitiesTwo.map(facility => facility.name);
  const facilityOneCode = selectedFacilitiesOne.map(facility => facility.code);
  const facilityOneName = selectedFacilitiesOne.map(facility => facility.name);
  
  
  useEffect(() => {

    const timeString = timeRange;
    splitTimeRange(timeString);
    
    const tempFacilityOneName = facilityOneName;
    const tempFacilityTwoName = facilityTwoName;
 
    combineAndFormatFacilities(tempFacilityOneName, tempFacilityTwoName);

    // const data:FnbReservedDateRequest = {
    //   order_date: "202312",
    // }
    // mutateReservedDate(data, {
    //   onSuccess: () => {
    //     console.log("데이터 뭐 받아와요?");
    //   },
    //   onError: () => {
    //     alert('못불러옴')
    //   }
    // });
    
  })
  
  return (
    <>
      <ModalBackground>
        <Container>
          <HeaderBox>
              <Image src={"/icon/icon-main-quick-tit-icon.svg"} alt="예약 내용 확인" width={20} height={20} />
              <div style={{ fontWeight:"bold", marginLeft:"1%", fontSize: "20px", color: "#22201f" }}>예약 내용 확인</div>
          </HeaderBox>
          <CloseBox>
            <ImageBox 
              onClick={handleCancel} 
              src={"/icon/close.svg"} 
              width={28} 
              height={28} 
              alt="Close" />
            </CloseBox>
          <InfoContainer>
              <InfoBox>
                <InfoTitle>예약 기본정보</InfoTitle>
                <ContentBox>
                  <Contents>
                    <KeyInfo>예약자명</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{name}</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>연락처</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{formatPhoneNumber(contact)}</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>이메일</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{email}</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>행사명</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{eventName}</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>F&B</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{secondStore === "" ? "선택안함" : `${secondStore}` }</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>일자</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{formatDate(selectedDate)}</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>시간</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{timeRange}</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>인원</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{`성인 ${adultCnt}명 / 어린이 ${childCnt}명`}</ValueInfo>
                  </Contents>
                </ContentBox>
              </InfoBox>
          </InfoContainer>
          <div style={{ margin: "10px" }} ></div>
          <FacilityContainer>
            <FacilityBox>
                <InfoTitle>기본제공 부대시설</InfoTitle>
                <FacilityListBox>
                  <FontDiv>
                    {facilitiesString}
                  </FontDiv>
                </FacilityListBox>
            </FacilityBox>
            <TableTypeBox>
                <InfoTitle>테이블 타입</InfoTitle>
                <TableIconBox>
                 { tableType ? (
                  <>
                    <Image src={tableType.src_3} alt={tableType.alt} width={48} height={48} />
                    <div style={{margin:"10px"}}>{tableType.alt}</div>
                  </>
                    
                 )  :
                    (
                      <p>선택 안함</p>
                )}
                </TableIconBox>
            </TableTypeBox>
          </FacilityContainer>
          <InfoContainer>
            <AddReqBox>
                <InfoTitle>추가요청</InfoTitle>
                <ReqListBox>
                  <FontDiv>
                    {(facilityThreeName.join(", "))}
                  </FontDiv>
                </ReqListBox>
            </AddReqBox>
            
          </InfoContainer>
          <ButtonBox>
            <Button onClick={handleModal} isConfirm={false}><ButtonFont isConfirm={false}>이전</ButtonFont></Button>
            <Button onClick={handleData} isConfirm={true}><ButtonFont isConfirm={true}>완료</ButtonFont></Button>
          </ButtonBox>
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
    top: calc(50vh - 350px);
    left: calc(50vw - 453px);
    background-color: white;
    border-radius: 25px;
    width: 897px;
    height: 670px;
`;

const HeaderBox = styled.div`
    width: 900px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InfoContainer = styled.div`
    width: 897px;
    display: flex;
    justify-content: center;
`;

const InfoBox = styled.div`
    width: 90%;
    height: 170px;
    border-radius: 5px;
    background: #ebecf0;
`;

const AddReqBox = styled.div`
    width: 90%;
    height: 140px;
    border-radius: 5px;
    background: #ebecf0;
    margin: 10px;
`;

const ReqListBox = styled.div`
    width: 96%;
    height: 90px;
    margin-top: 10px;
    margin-left: 16px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
`;

const FacilityContainer = styled.div`
    width: 897px;
    display: flex;
`;

const FacilityBox = styled.div`
    width: 680px;
    height: 140px;
    border-radius: 5px;
    background: #ebecf0;
    margin-left: 44px;    
`;

const FacilityListBox = styled.div`
    width: 650px;
    height: 95px;
    margin-left: 13px;
    margin-top: 9px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
`;

const FontDiv = styled.div`
  margin: 40px;
  font-size: 15px;
`;

const TableTypeBox = styled.div`
    width: 118px;
    height: 140px;
    border-radius: 5px;
    background: #ebecf0;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TableIconBox = styled.div`
    width: 95px;
    height: 95px;
    margin-top: 10px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const InfoTitle = styled.div`
    margin-top: 2%;
    margin-left: 2%;
    margin-bottom: 1%;
    font-size: 13px;
    font-weight: bold;
`;

const ContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  gap: 5px;
`;

const Contents = styled.div`
  width: 380px;
  height: 27px;
  margin-left: 14px;
  border-radius: 5px;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KeyInfo = styled.div`
  width: 30%;
  text-align: center;
  font-size: 13px;
  color: #707070;
`;

const Bar = styled.div`
  width: 10%;
  text-align: center;
  border-left: 2px solid #EBEBEB;
  height: 20px;
  display: flex;
  color: #707070;
`;

const ValueInfo = styled.div`
  width: 60%;
  font-size: 13px;
  color: #484848;
  margin-left: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const Button = styled.div<{
  isConfirm?: boolean;
}>`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  background: ${(props) => (props.isConfirm ? '#f84040' : '#dcdcdc' )};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 13px;
  cursor: pointer;
`;

const ButtonFont = styled.div<{
  isConfirm?: boolean;
}>`
  font-size: 15px;
  color: ${(props) => (props.isConfirm ? '#fff' : '#a2a2a2' )};;
`;

const CloseBox = styled.div`
  position: absolute;
  left: 95%;
  bottom: 93%;
`;

const ImageBox = styled(Image)`
    cursor: pointer;
    &:hover {
        border: 2px solid red;
    }
`;







