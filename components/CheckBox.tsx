import React, { useState } from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  checked: boolean;
}

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

const StyledCheckbox = styled.div<CheckboxProps>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transition: all 150ms;
  border: ${props => props.checked ? '1px solid #dcdcdc' : '1px solid #f84040' };
  background: ${props => props.checked ? '#white':'#f84040'};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: '✓';
    font-size: 10px;
    color: ${props => props.checked ? '#cdcdcd' : 'white' };
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
  display: block;
`;

export const Checkbox: React.FC<CheckboxProps & { onChange: () => void }> = ({ checked, onChange }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked} />
  </CheckboxContainer>
);

