// StyledComponents.ts
import styled, { css } from 'styled-components';
import React from 'react';
import Image from 'next/image';

interface StepProps {
  isActive: boolean;
  isCompleted: boolean;
}

interface ProgressIndicatorProps {
  storeState: boolean;
  selectedDateState: boolean;
  selectedTimeState: boolean;
  adultCnt: string;
  childCnt: string;
}


const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  storeState,
  selectedDateState,
  selectedTimeState,
  adultCnt,
  childCnt,
}) => {
  const isStepTwoActive = storeState && !selectedDateState;
  const isStepThreeActive = selectedDateState && !selectedTimeState;
  // const isStepFourActive = selectedTimeState && (adultCnt !== "0" || childCnt !== "0");

  return (
    <FlexContainer>
      <StepContainer>
        <StepFlexBox>
          <StepBox style={{ border: !storeState ? "3px solid #26c46a" : "" }}>
            {storeState ? <Image src={"/icon/check.svg"} alt="checked" width={28} height={28} /> : "step 1"}
          </StepBox>
          <StepDots isActive={storeState} isCompleted={false} />
        </StepFlexBox>
      </StepContainer>
      <StepContainer>
        <StepFlexBox>
          <StepBox style={{ border: isStepTwoActive ? "3px solid #26c46a" : "", background: !storeState && !selectedDateState ? "#C8C8C8" : "", color: isStepTwoActive ? "" : "#FFFFFF" }}>
            {selectedDateState ? <Image src={"/icon/check.svg"} alt="checked" width={28} height={28} /> : "step 2"}
          </StepBox>
          <StepDots isActive={selectedDateState} isCompleted={false} />
        </StepFlexBox>
      </StepContainer>
      <StepContainer>
        <StepFlexBox>
          <StepBox style={{ border: isStepThreeActive ? "3px solid #26c46a" : "", background: !selectedDateState && !selectedTimeState ? "#C8C8C8" : "", color: isStepThreeActive ? "" : "#FFFFFF" }}>
            {selectedTimeState ? <Image src={"/icon/check.svg"} alt="checked" width={28} height={28} /> : "step 3"}
          </StepBox>
          <StepDots isActive={selectedTimeState} isCompleted={false} />
        </StepFlexBox>
      </StepContainer>
      <StepContainer>
        <StepFlexBox>
          <StepBox style={{ border: !(adultCnt !== "0" || childCnt !== "0") && selectedTimeState ? "3px solid #26c46a" : "", background: !(adultCnt !== "0" || childCnt !== "0") && !selectedTimeState ? "#C8C8C8" : "", color: !(adultCnt !== "0" && childCnt !== "0") && selectedTimeState ? "" : "#FFFFFF" }}>
          {adultCnt !== "0" || childCnt !== "0" ? <Image src={"/icon/check.svg"} alt="checked" width={28} height={28} /> : "step 4"}
          </StepBox>
        </StepFlexBox>
      </StepContainer>
    </FlexContainer>
  );
};

export default ProgressIndicator;


const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5%;
`;

const StepContainer = styled.div`
  flex: 1;
`;

const activeStyle = css`
  /* border: 3px solid #26c46a; */
`;

const completedStyle = css`
  /* background: #26c46a; */
  /* color: #FFFFFF; */
`;

const StepFlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const StepBox = styled.div`
  border-radius: 5px;
  font-size: 1vw;
  text-align: center;
  width: 15%;
  line-height: 25px;
`;

// const StepBox = styled.div<StepProps>`
//   border: 3px solid ${({ isActive, isCompleted }) => (isActive || isCompleted) ? '#26c46a' : 'transparent'};
//   background-color: ${({ isCompleted }) => isCompleted ? '#26c46a' : 'transparent'};
//   color: ${({ isActive, isCompleted }) => (isActive || isCompleted) ? '#FFFFFF' : '#000000'};
//   border-radius: 5px;
//   font-size: 1vw;
//   text-align: center;
//   width: 15%;
//   line-height: 25px;
//   margin: 0 8px;
// `;

const StepDots = styled.div<StepProps>`
  color: ${({ isActive, isCompleted }) => isActive || isCompleted ? '#26c46a' : '#c8c8c8'};
  &::after {
    content: '∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙';
  }
`;