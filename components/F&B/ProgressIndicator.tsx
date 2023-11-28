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
    const isStepOneActive = adultCnt === "0" || childCnt === "0";
    const isStepTwoActive = adultCnt !== "0" && !selectedDateState;
    const isStepThreeActive = selectedDateState && !selectedTimeState;
    const isStepFourActive = selectedTimeState && !storeState 
  
    return (
      <FlexContainer>
        <StepContainer>
          <StepFlexBox>
            <StepBox style={{ border: (adultCnt === "0") ? "3px solid #26c46a" : "" }}>
              { (adultCnt !== "0") ? <Image src={"/icon/check.svg"} alt="checked" width={28} height={28} /> : "step 1"}
            </StepBox>
            <StepDots isActive={adultCnt !== "0"} isCompleted={false} />
          </StepFlexBox>
        </StepContainer>
        <StepContainer>
          <StepFlexBox>
            <StepBox style={{ border: isStepTwoActive ? "3px solid #26c46a" : "", background: adultCnt === "0" && !selectedDateState ? "#C8C8C8" : "", color: isStepTwoActive ? "" : "#FFFFFF" }}>
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
            <StepBox style={{ border: isStepFourActive ? "3px solid #26c46a" : "", background: !storeState && !selectedTimeState ? "#C8C8C8" : "", color: isStepFourActive ? "" : "#FFFFFF" }}>
            {storeState ? <Image src={"/icon/check.svg"} alt="checked" width={28} height={28} /> : "step 4"}
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
    box-sizing: border-box;
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
  

  
  const StepDots = styled.div<StepProps>`
    color: ${({ isActive, isCompleted }) => isActive || isCompleted ? '#26c46a' : '#c8c8c8'};
    &::after {
      content: '∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙';
    }
  `;