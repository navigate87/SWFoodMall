import { recoilTimeState } from '@/store/stores/modalState';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

export const PickerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PickerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const TimeButton = styled.button<{ isSelected: boolean }>`
  height: 32px;
  width: 81px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  background: ${({ isSelected }) => (isSelected ? '#f84040' : '#white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, border-color 0.3s;
  border-radius: 10px;
  &:hover {
    border: 1px solid #f84040;
  }

  &:focus {
    outline: none;
  }
`;

export const PickerHeader = styled.h2`
  font-size: 1.5em;
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 20px;
`;

// Type definitions
type Time = {
  hour: number;
  minute: number;
};


interface TimePickerProps {
  onTimeSelected: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ onTimeSelected }) => {
    const [selectedHour, setSelectedHour] = useState<number | null>(null);
    const [selectedMinute, setSelectedMinute] = useState<number | null>(null);
    const [selectedTimeState, setSelectedTimeState] = useRecoilState<boolean>(recoilTimeState)
    const hours = Array.from({ length: 11 }, (_, index) => 10 + index);
    const minutes = Array.from({ length: 12 }, (_, index) => index * 5);
  
    const selectHour = (hour: number) => {
      setSelectedHour(hour);
      
      if (selectedMinute !== null) {
        onTimeSelected(`${hour}:${selectedMinute.toString().padStart(2, '0')}`);
        
      }
    };
  
    const selectMinute = (minute: number) => {
      setSelectedMinute(minute);
      
      if (selectedHour !== null) {
        onTimeSelected(`${selectedHour}:${minute.toString().padStart(2, '0')}`);
      }
    };
  
    return (
      <>
        <PickerSection>
          <PickerHeader>시간</PickerHeader>
          <PickerWrapper>
            {hours.map((hour) => (
              <TimeButton
                key={hour}
                isSelected={hour === selectedHour}
                onClick={() => selectHour(hour)}
              >
                {hour}:00
              </TimeButton>
            ))}
          </PickerWrapper>
        </PickerSection>
        <PickerSection>
          <PickerHeader style={{ marginTop: "1px" }}>분</PickerHeader>
          <PickerWrapper>
            {minutes.map((minute) => (
              <TimeButton 
                style={{ width:"81px" }}
                key={minute}
                isSelected={minute === selectedMinute}
                onClick={() => selectMinute(minute)}
              >
                {minute.toString().padStart(2, '0')}
              </TimeButton>
            ))}
          </PickerWrapper>
        </PickerSection>
      </>
    );
  };
  
  export default TimePicker;