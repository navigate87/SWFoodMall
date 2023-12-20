import { recoilTimeRange, recoilTimeState } from '@/store/stores/modalState';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

const PickerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PickerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const TimeButton = styled.button<{ isSelected: boolean, isDisabled?: boolean }>`
  height: 32px;
  width: 81px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  background: ${({ isSelected, isDisabled }) => (isSelected ? '#f84040' : (isDisabled ? '#e0e0e0' : 'white'))};
  color: ${({ isSelected, isDisabled }) => (isSelected ? 'white' : (isDisabled ? '#a0a0a0' : 'black'))};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s, border-color 0.3s;
  border-radius: 10px;
  &:hover {
    border: ${({ isDisabled }) => isDisabled ? '1px solid #ddd' : '1px solid #f84040'};
  }

  &:focus {
    outline: none;
  }
`;

const PickerHeader = styled.h2`
  font-size: 1.5em;
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 20px;
`;

// Type definitions
type TimeOption = '2시간' | '3시간' | '6시간' | '9시간' | "종일";


interface TimePickerProps {
  onTimeSelected: (time: string) => void;
}

const TimePicker: React.FC = () => {
    const [selectedHour, setSelectedHour] = useState<number | null>(null);
    const [selectedDuration, setSelectedDuration] = useState<TimeOption | null>(null);
    const [timeRange, setTimeRange] = useRecoilState(recoilTimeRange);
    const [selectedTimeState, setSelectedTimeState] = useRecoilState<boolean>(recoilTimeState);
    const [userSelection, setUserSelection] = useState<{hour: number | null, duration: TimeOption | null}>({
      hour: null,
      duration: null
    });
    const hours = Array.from({ length: 11 }, (_, index) => 10 + index);
    const durations: TimeOption[] = ['2시간', '3시간', '6시간', '9시간', '종일'];
    
    const getCurrentTime = () => {
      return new Date().toLocaleTimeString();
    }

    const getCurrentHour = () => {
      return new Date().getHours();
    }

    const timeToMinutes = (time: string) => {
      const [hours, minutes] = time.split('시간').map(Number);
      return hours * 60 + (minutes || 0);
    };

    const displayUserSelection = () => {
      const hourString = selectedHour !== null ? `${selectedHour}:00` : '시간 없음';
      const durationString = selectedDuration !== null ? selectedDuration : '기간 없음';
      return `선택한 시간: ${hourString}, 선택한 기간: ${durationString}`;
  };
    
    const updateTimeRange = (hour: number, duration: TimeOption) => {
      const startTime = `${hour < 10 ? `0${hour}` : hour}:00`;
      let endTime = hour + timeToMinutes(duration) / 60;
      let endTimeString = `${endTime < 10 ? `0${endTime}` : endTime}:00`;

      // '종일' 옵션에 대한 특별 처리
      if(duration === '종일') {
        endTimeString = '종일';
      }

      // Recoil 상태 업데이트
      setTimeRange(`${startTime}~${endTimeString} (${duration})`);
      setSelectedTimeState(true)
    };

    const selectHour = (hour: number) => {
        setSelectedHour(hour);
          
        if(selectedDuration) {
          updateTimeRange(hour, selectedDuration);
        }
    };
  
    const selectDuration = (duration: TimeOption) => {
        setSelectedDuration(duration);
        
        if(selectedHour != null) {
          updateTimeRange(selectedHour, duration);
        }
    };

    useEffect(() => {
      console.log("현재 시간",getCurrentTime());
    })
  
    return (
      <>
        <PickerSection>
          <PickerHeader style={{ marginTop: "40px" }}>시간</PickerHeader>
          <PickerWrapper>
            {hours.map((hour) => (
              <TimeButton
                key={hour}
                isSelected={hour === selectedHour}
                isDisabled={hour < getCurrentHour()}
                onClick={() => hour >= getCurrentHour() && selectHour(hour)}
                // onClick={() => selectHour(hour)}
              >
                {hour < 10 ? `0${hour}:00` : `${hour}:00`}
              </TimeButton>
            ))}
          </PickerWrapper>
        </PickerSection>
        <PickerSection>
          <PickerHeader style={{ marginTop: "20px" }}>사용시간</PickerHeader>
          <PickerWrapper>
            {durations.map((duration) => (
              <TimeButton
                key={duration}
                isSelected={duration === selectedDuration}
                onClick={() => selectDuration(duration)}
              >
                {duration}
              </TimeButton>
            ))}
          </PickerWrapper>
        </PickerSection>
      </>
    );
  };
  
  export default TimePicker;