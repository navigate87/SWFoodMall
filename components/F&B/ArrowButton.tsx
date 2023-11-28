// ButtonStyles.ts
import styled from 'styled-components';
import React from 'react';
import Image from 'next/image';

interface ButtonProps {
    direction: boolean;
  }

interface ArrowButtonProps {
  direction: boolean;
  onClick?: () => void;
}


const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
    return (
      <Button direction={direction} onClick={onClick}>
        <Image src={ direction ? "/icon/icon-arrow-up.svg" : "/icon/icon-arrow-down.svg"} alt='arrow' width={13} height={10} />
      </Button>
    );
  };

export default ArrowButton;

const Button = styled.button<ButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
  }
`;

const ArrowIcon = styled.svg<ButtonProps>`
  width: 20px;
  height: 20px;
  fill: currentColor;

  ${props => props.direction && `
    transform: rotate(180deg);
  `}
`;
