import { reserveDining } from "@/api/api";
import { recoilStoreCode, modalConfirmShowState, modalShowState, recoilAdultCnt, recoilChildCnt, recoilDateSelectState, recoilReservationContact, recoilReservationEmail, recoilReservationName, recoilSelectedDate, recoilSelectedStore, recoilSelectedTime, recoilStoreState, recoilTimeState } from "@/store/stores/modalState";
import { ReservationRequest } from "@/type/Reservation";
import Image from "next/image";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components"

export default function ConfirmModal() {
  const [showModal, setShowModal] = useRecoilState<boolean>(modalShowState);
  const [showConfirmModal, setShowConfirmModal] = useRecoilState<boolean>(modalConfirmShowState);
  const [name, setName] = useRecoilState<string>(recoilReservationName);
  const [storeState, setStoreState] = useRecoilState<boolean>(recoilStoreState);
  const [contact, setContact] = useRecoilState<string>(recoilReservationContact);
  const [email, setEmail] = useRecoilState<string>(recoilReservationEmail);
  const [selectedDateState, setSelectedDateState] = useRecoilState<boolean>(recoilDateSelectState);
  const [selectedTimeState, setSelectedTimeState] = useRecoilState<boolean>(recoilTimeState); 
  const [selectedDate, setSelectedDate] = useRecoilState<Date>(recoilSelectedDate);
  const [childCnt, setChildCnt] = useRecoilState<string>(recoilChildCnt);
  const [adultCnt, setAdultCnt] = useRecoilState<string>(recoilAdultCnt);
  const [selectedStoreName, setSelectedStoreName] = useRecoilState<string>(recoilSelectedStore);
  const [time, setTime] = useRecoilState<string>(recoilSelectedTime);
  const [storeCode, setStoreCode] = useRecoilState<string>(recoilStoreCode);

  const { mutate, isLoading, isError, data } = useMutation(reserveDining);
  

  function formatDate(date: Date) : string {
    const days = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'];
    let day = days[date.getDay()];
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let dayOfMonth = date.getDate().toString().padStart(2, '0');
    return `${date.getFullYear()}-${month}-${dayOfMonth}`;
  }

  const handleModal = (event:any) => {
    setShowModal(true);
    setShowConfirmModal(false);
    document.body.style.overflow = "hidden";
    setStoreState(false);
    setSelectedTimeState(false);
    setSelectedDateState(false);
    setAdultCnt("0");
    setChildCnt("0");
    setName("");
    setContact("");
    setEmail("");
  }

  const handleData = (event:any) => {
    const data: ReservationRequest = {
      order_path: storeCode,
      mem_name: name,          
      mem_mobile: contact,
      mem_email: email,
      order_date: formatDate(selectedDate),
      order_time: time,
      adult_cnt: adultCnt,
      child_cnt: childCnt,
      memo: 'Please prepare a birthday cake.',
      mem_id: 'foodmall_test',
    }

    mutate(data);

    setShowConfirmModal(false);
    document.body.style.overflow = "auto";
    setShowModal(false);
    setStoreState(false);
    setSelectedTimeState(false);
    setSelectedDateState(false);
    setAdultCnt("0");
    setChildCnt("0");
    setName("");
    setContact("");
    setEmail("");
  }

  const handleCancel = (event:any) => {
    setShowConfirmModal(false);
    document.body.style.overflow = "auto";
    setShowModal(false);
    setStoreState(false);
    setSelectedTimeState(false);
    setSelectedDateState(false);
    setAdultCnt("0");
    setChildCnt("0");
    setName("");
    setContact("");
    setEmail("");
  }

  return (
    <>
      <ModalBackground>
        <Container>
          <HeaderBox>
              <Image src={"/icon/icon-main-quick-tit-icon.svg"} alt="예약 내용 확인" width={24} height={24} />
              <div style={{ fontWeight:"bold", margin: "1%",fontSize: "28px", color: "#22201f" }}>예약 내용 확인</div>
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
                <InfoTitle>예약 정보</InfoTitle>
                <ContentBox>
                  <Contents>
                    <KeyInfo>예약자명</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{name}</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>이메일</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{email}</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>일자</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{formatDate(selectedDate)}</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>인원</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{`성인 ${adultCnt}명 / 어린이 ${childCnt}명`}</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>연락처</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{contact}</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>식당</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{selectedStoreName}</ValueInfo>
                  </Contents>
                  <Contents>
                    <KeyInfo>시간</KeyInfo>
                    <Bar></Bar>
                    <ValueInfo>{time}</ValueInfo>
                  </Contents>
                </ContentBox>
              </InfoBox>
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
    top: calc(50vh - 300px);
    left: calc(50vw - 453px);
    background-color: white;
    border-radius: 25px;
    width: 897px;
    height: 453px;
`;

const HeaderBox = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 45%;
    justify-content: center;
    /* background: #cbcbcb; */
`;

const InfoBox = styled.div`
    width: 90%;
    height: 100%;
    border-radius: 5px;
    background: #ebecf0;
`;

const InfoTitle = styled.div`
    margin-top: 2%;
    margin-left: 2%;
    margin-bottom: 1%;
    font-size: 16px;
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
  width: 370px;
  height: 30px;
  margin-left: 14px;
  margin-top: 3px;
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
  height: 30%;
`;

const Button = styled.div<{
  isConfirm?: boolean;
}>`
  width: 180px;
  height: 45px;
  border-radius: 5px;
  background: ${(props) => (props.isConfirm ? '#f84040' : '#dcdcdc' )};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  cursor: pointer;
`;

const ButtonFont = styled.div<{
  isConfirm?: boolean;
}>`
  font-size: 20px;
  color: ${(props) => (props.isConfirm ? '#fff' : '#a2a2a2' )};;
`;

const CloseBox = styled.div`
  position: absolute;
  left: 95%;
  bottom: 90%;
`;

const ImageBox = styled(Image)`
    cursor: pointer;
    &:hover {
        border: 2px solid red;
    }
`;







