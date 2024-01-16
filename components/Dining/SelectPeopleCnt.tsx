import React, { useState } from 'react';
import styled from 'styled-components';
import PeopleCount from './PeopleCount';

interface CustomerSelectProps {
    adultCount: string;
    childCount: string;
}

const CustomerSelect: React.FC<CustomerSelectProps> = ({ adultCount, childCount }) => {
    const isSelected = adultCount !== "0" || childCount !== "0";

    return (
      <>
        <Container>
            <img src="/icon/icon-main-quick-customer.svg" width={29} height={24} alt="Customer" />
            <Title>인원</Title>
            <CountDisplay isSelected={isSelected}>
                {isSelected ? `일반  ${adultCount}명 , 소인  ${childCount}명` : "인원을 선택해주세요"}
            </CountDisplay>
        </Container>
        <SectionTitle>일반</SectionTitle>
        <CounterContainer>
            <PeopleCount  label="일반" min={0} max={100} />
        </CounterContainer>
        <SectionTitle>소인<SmallText>(~11세)</SmallText></SectionTitle>
        <CounterContainer>
            <PeopleCount label="소인" min={0} max={100} />
        </CounterContainer>
      </>
    );
};

export default CustomerSelect;

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1%;
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

const SectionTitle = styled.div`
    margin-left: 9%;
    margin-top: 7%;
    font-size: 14px;
`;

const SmallText = styled.p`
    color: #a2a2a2;
    font-size: 11px;
`;

const CounterContainer = styled.div`
    display: flex;
    justify-content: center;
`;