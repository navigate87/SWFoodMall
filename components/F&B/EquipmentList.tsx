import React, { useState } from 'react';
import styled from 'styled-components';

// Checkbox의 props 타입 정의
type CheckboxProps = {
  checked: boolean;
};

// EquipmentList의 props 타입 정의
type EquipmentListProps = {
  checkedState: { [key: string]: boolean };
  onCheckboxChange: (item: string) => void;
};

const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  background-color: white;
  max-width: 500px; // 최대 너비 설정
  margin: auto; // 페이지 중앙에 위치
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxLabel = styled.label`
  display: block; // 라벨을 블록 요소로 설정
  cursor: pointer;
  padding: 8px;
  position: relative; // 상대 위치 설정
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0; // 체크박스 숨기기
  position: absolute; // 절대 위치 설정
  cursor: pointer;
`;

const StyledCheckbox = styled.span<CheckboxProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  transition: all 150ms;
  border: 2px solid #f84040;
  background-color: ${props => (props.checked ? '#f84040' : 'transparent')};
  &:after {
    content: '${props => (props.checked ? '✓' : '')}';
    font-size: 16px;
    color: white;
    display: ${props => (props.checked ? 'block' : 'none')};
    position: absolute;
    top: 2px;
    left: 7px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Label = styled.span`
  margin-left: 36px; // 체크박스 크기와 border를 고려한 라벨 위치 조정
`;

export const EquipmentList: React.FC<EquipmentListProps> = ({ checkedState, onCheckboxChange }) => {
  const items = ['stage', 'banner', 'hanger', 'blind', 'partition', 'parking'];
  const leftColumnItems = items.slice(0, 3);
  const rightColumnItems = items.slice(3);

  return (
    <LayoutContainer>
      <ColumnContainer>
        {leftColumnItems.map(item => (
          <CheckboxContainer key={item}>
            <HiddenCheckbox
              checked={checkedState[item]}
              onChange={() => onCheckboxChange(item)}
            />
            <StyledCheckbox checked={checkedState[item]} />
            <Label>{translateItem(item)}</Label>
          </CheckboxContainer>
        ))}
      </ColumnContainer>
      <ColumnContainer>
        {rightColumnItems.map(item => (
          <CheckboxContainer key={item}>
            <HiddenCheckbox
              checked={checkedState[item]}
              onChange={() => onCheckboxChange(item)}
            />
            <StyledCheckbox checked={checkedState[item]} />
            <Label>{translateItem(item)}</Label>
          </CheckboxContainer>
        ))}
      </ColumnContainer>
    </LayoutContainer>
  );
};

const translateItem = (item: string): string => {
  const translations: { [key: string]: string } = {
    stage: '단상',
    banner: '현수막',
    hanger: '행거',
    blind: '블라인드',
    partition: '파티션',
    parking: '주차공간',
  };
  return translations[item] || item;
};

// const App: React.FC = () => {
//   const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>({
//     stage: false,
//     banner: false,
//     hanger: false,
//     blind: false,
//     partition: false,
//     parking: false,
//   });

//   const handleCheckboxChange = (item: string): void => {
//     setCheckedState((prevState) => ({
//       ...prevState,
//       [item]: !prevState[item],
//     }));
//   };

//   return (
//     <div>
//       <EquipmentList
//         checkedState={checkedState}
//         onCheckboxChange={handleCheckboxChange}
//       />
//     </div>
//   );
// };

// export default App;
