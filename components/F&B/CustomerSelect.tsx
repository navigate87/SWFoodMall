import React, { useState } from 'react';
import styled from 'styled-components';
import PeopleCount from '../Dining/PeopleCount';

const CustomerSelect: React.FC = () => {
    return (
      <>
        <SectionTitle>일반</SectionTitle>
        <CounterContainer>
            <PeopleCount label="일반" min={0} max={100} />
        </CounterContainer>
        <SectionTitle>소인<SmallText>(~11세)</SmallText></SectionTitle>
        <CounterContainer>
            <PeopleCount label="소인" min={0} max={100} />
        </CounterContainer>
      </>
    );
};

export default CustomerSelect;

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