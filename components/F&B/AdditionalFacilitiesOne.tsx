import React from 'react';
import styled from 'styled-components';
import { Checkbox } from "@/components/CheckBox";
import { FacilitiesOne } from '@/data/CodoInfo';

const FacilityList = styled.ul`
  margin: 5%;
`;

const FacilityItem = styled.li`
  display: flex;
  align-items: center;
  margin: 2%;
`;

const FacilityLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const FacilityDescription = styled.span`
  font-size: 12px;
  margin-left: 8px; // 체크박스와 텍스트 간격 조정
`;

interface FacilityChecklistProps {
  facilities: FacilitiesOne;
  onFacilityChange: (facility: keyof FacilityChecklistProps['facilities']) => void;
}

const AdditionalFacilitiesOne: React.FC<FacilityChecklistProps> = ({ facilities, onFacilityChange }) => {

  return (
    <FacilityList>
      <FacilityItem>
        <FacilityLabel>
          <Checkbox 
            checked={facilities.screen} 
            onChange={() => onFacilityChange('screen')} 
          />
        </FacilityLabel>
        <FacilityDescription>스크린</FacilityDescription>
      </FacilityItem>
      <FacilityItem>
        <FacilityLabel>
          <Checkbox 
            checked={facilities.projector} 
            onChange={() => onFacilityChange('projector')} 
          />
        </FacilityLabel>
        <FacilityDescription>빔프로젝트</FacilityDescription>
      </FacilityItem>
      <FacilityItem>
        <FacilityLabel>
          <Checkbox 
            checked={facilities.wirelessMic} 
            onChange={() => onFacilityChange('wirelessMic')} 
          />
        </FacilityLabel>
        <FacilityDescription>무선 마이크</FacilityDescription>
      </FacilityItem>
      <FacilityItem>
        <FacilityLabel>
          <Checkbox 
            checked={facilities.pinMic} 
            onChange={() => onFacilityChange('pinMic')} 
          />
        </FacilityLabel>
        <FacilityDescription>핀 마이크</FacilityDescription>
      </FacilityItem>
     
    </FacilityList>
  );
};

export default AdditionalFacilitiesOne;
