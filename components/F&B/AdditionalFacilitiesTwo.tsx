// FacilityCheckbox.tsx
import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '../CheckBox';
import { FacilitiesTwo } from '@/data/CodoInfo';


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
  display: flex;
  align-items: center;
`;

const FacilityDescription = styled.span`
  font-size: 12px;
  margin-left: 8px; // 체크박스와 텍스트 간격 조정
`;

interface FacilityCheckboxProps {
  facilities: FacilitiesTwo
  onFacilityChange: (facility: keyof FacilityCheckboxProps['facilities']) => void;
}

const AdditionalFacilitiesTwo: React.FC<FacilityCheckboxProps> = ({ facilities, onFacilityChange }) => {
  return (
    <div style={{ display: "flex", marginTop: "3%", marginLeft: "7%" }}>
      <FacilityList>
        {/* 단상 */}
        <FacilityItem>
          <FacilityLabel>
            <Checkbox checked={facilities.stage} onChange={() => onFacilityChange('stage')} />
            <FacilityDescription>단상</FacilityDescription>
          </FacilityLabel>
        </FacilityItem>
        {/* 나머지 시설들에 대한 체크박스... */}
        <FacilityItem>
          <FacilityLabel>
            <Checkbox checked={facilities.banner} onChange={() => onFacilityChange('banner')} />
            <FacilityDescription>현수막</FacilityDescription>
          </FacilityLabel>
        </FacilityItem>
        <FacilityItem>
          <FacilityLabel>
            <Checkbox checked={facilities.hanger} onChange={() => onFacilityChange('hanger')} />
            <FacilityDescription>행거</FacilityDescription>
          </FacilityLabel>
        </FacilityItem>
        <FacilityItem>
          <FacilityLabel>
            <Checkbox checked={facilities.blind} onChange={() => onFacilityChange('blind')} />
            <FacilityDescription>블라인드</FacilityDescription>
          </FacilityLabel>
        </FacilityItem>
      </FacilityList>
      <FacilityList>
        {/* 파티션 */}
        <FacilityItem>
          <FacilityLabel>
            <Checkbox checked={facilities.partition} onChange={() => onFacilityChange('partition')} />
            <FacilityDescription>파티션</FacilityDescription>
          </FacilityLabel>
        </FacilityItem>
        {/* 나머지 시설들에 대한 체크박스... */}
        <FacilityItem>
          <FacilityLabel>
            <Checkbox checked={facilities.parkingSpace} onChange={() => onFacilityChange('parkingSpace')} />
            <FacilityDescription>주차공간</FacilityDescription>
          </FacilityLabel>
        </FacilityItem>
      </FacilityList>
    </div>
  );
};

export default AdditionalFacilitiesTwo;
