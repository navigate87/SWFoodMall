import React from 'react';
import styled from 'styled-components';
import { Checkbox } from "@/components/CheckBox";
import { FacilitiesThree } from '@/data/CodoInfo';

const FacilityList = styled.ul`
  flex: 1;
`;

const FacilityItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1%;
`;

const FacilityLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const FacilityDescription = styled.span`
  font-size: 12px;
`;

interface AdditionalFacilitiesProps {
    facilities: FacilitiesThree;
    onFacilityChange: (facility: keyof FacilitiesThree) => void;
}

const AdditionalFacilitiesThree: React.FC<AdditionalFacilitiesProps> = ({ facilities, onFacilityChange }) => {

  return (
    <FacilityList>
      <FacilityItem>
        <FacilityLabel>
          <Checkbox 
            checked={facilities.karaoke} 
            onChange={() => onFacilityChange('karaoke')} 
          />
        </FacilityLabel>
        <FacilityDescription>노래방 기기(30만원)</FacilityDescription>
      </FacilityItem>
      <FacilityItem>
        <FacilityLabel>
          <Checkbox 
            checked={facilities.amp} 
            onChange={() => onFacilityChange('amp')} 
          />
        </FacilityLabel>
        <FacilityDescription>이동식 엠프(10만원)</FacilityDescription>
      </FacilityItem>
      <FacilityItem>
        <FacilityLabel>
          <Checkbox 
            checked={facilities.tv} 
            onChange={() => onFacilityChange('tv')} 
          />
        </FacilityLabel>
        <FacilityDescription>이동식 TV(10만원)</FacilityDescription>
      </FacilityItem>
      <FacilityItem>
        <FacilityLabel>
          <Checkbox 
            checked={facilities.meal} 
            onChange={() => onFacilityChange('meal')} 
          />
        </FacilityLabel>
        <FacilityDescription>식사제공(별도처리)</FacilityDescription>
      </FacilityItem>
     
    </FacilityList>
  );
};

export default AdditionalFacilitiesThree;
