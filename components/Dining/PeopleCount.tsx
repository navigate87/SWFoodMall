import { recoilAdultCnt, recoilChildCnt } from '@/store/stores/modalState';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  max-width: 300px; 
  margin-top: 20px;// 최대 너비 고정
`;

const CounterRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px; // rem 대신 픽셀 사용
  margin: 0 5px;
  font-size: 16px; // rem 대신 픽셀 사용
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f7f7f7;
  &:active {
    background-color: #e7e7e7;
  }
`;

const SignButton = styled.button`
  width: 100px;
  height: 30px;
  margin: 0 5px;
  font-size: 16px; // rem 대신 픽셀 사용
  cursor: pointer;
  &:active {
    transform:scale(0.8);
    transition: transform .5s;
  }
`;

const Value = styled.div`
  margin: 0 10px;
  font-size: 16px; // rem 대신 픽셀 사용
  width: 100%;
  text-align: center;
`;

const Label = styled.div`
  margin-bottom: 10px;
  font-size: 16px; // rem 대신 픽셀 사용
`;

interface CounterProps {
  label?: string;
  min?: number;
  max?: number;
}

const PeopleCount: React.FC<CounterProps> = ({ label, min = 0, max = 100 }) => {
  const [childCnt, setChildCnt] = useRecoilState<string>(recoilChildCnt);
  const [adultCnt, setAdultCnt] = useRecoilState<string>(recoilAdultCnt);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (label === "일반") {
      setCount(parseInt(adultCnt));
    } else {
      setCount(parseInt(childCnt));
    }
  }, [adultCnt, childCnt, label]);

  const changeCount = (delta: number) => {
    const newCount = Math.min(max, Math.max(min, count + delta));
    setCount(newCount);

    if (label === "일반") {
      setAdultCnt(newCount.toString());
    } else {
      setChildCnt(newCount.toString());
    }
  };
  
  return (
    <CounterWrapper>
      <CounterRow style={{padding: "20px", height: "40px", width: "100%", borderRadius: "10px", border: "1px solid #c8c8c8" }}>
        <SignButton style={{ marginRight: "32%" }} onClick={()=>changeCount(-1)}>➖</SignButton>
        <Value>{count}</Value>
        <SignButton style={{ marginLeft: "32%" }} onClick={()=>changeCount(1)}>➕</SignButton>
      </CounterRow>
      <CounterRow>
        <Button onClick={()=>changeCount(10)}>+10</Button>
        <Button onClick={()=>changeCount(20)}>+20</Button>
        <Button onClick={()=>changeCount(30)}>+30</Button>
        <Button onClick={()=>changeCount(50)}>+50</Button>
        <Button onClick={()=>changeCount(100)}>+100</Button>
      </CounterRow>
    </CounterWrapper>
  );
};

export default PeopleCount;
