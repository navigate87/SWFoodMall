import { recoilDateSelectState, recoilSelectedDate } from '@/store/stores/modalState';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

// Styled components
const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-collapse: collapse;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 10px;
`;

const MonthLabel = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const CalendarTable = styled.table`
  width: 100%;
  th {
    border-bottom: 5px solid transparent;
    &:nth-child(1) {
      color:  #ff6969;
    }
    &:nth-child(7) {
      color: #0085ff;
    }
  }
  tr {
    
  }
  td {
    border: 10px solid transparent;
  }
`;

const Day = styled.td<{ 
  isToday: boolean; 
  isSelected: boolean; 
  isCurrentMonth: boolean; 
  isSpecialDay: boolean;
  isWeekend: boolean;
  isPastDay: boolean; 
}>`
  
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  cursor: pointer;
  /* border: 1px solid #ddd; */
  transition: background-color 0.3s ease;
  //background-color: ${(props) => (props.isSelected ? '#f44336' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : props.isCurrentMonth ? 'black' : '#aaa')};
  font-weight: ${(props) => (props.isToday ? 'bold' : 'normal')};
  border: ${(props) => (props.isToday ? '2px solid blue' : 'none')};
  opacity: ${(props) => (props.isCurrentMonth || props.isWeekend ? 1.0 : 0.0)};
  background: ${(props) =>
    props.isSpecialDay
      ? '#f8f6f6'
      : props.isSelected
      ? '#f44336'
      : props.isCurrentMonth
      ? 'white'
      : 'transparent'};
  color: ${(props) => (
    
    props.isSpecialDay 
      ? '#c8c8c8' 
      : props.isPastDay 
      ? '#cbcbcb'
      : props.isSelected 
      ? 'white' 
      : props.isCurrentMonth 
      ? 'black' 
      : '#aaa')};
  border-radius: ${(props) => (props.isSpecialDay ? '50%' : '15px')};
  
  &:nth-child(1) {
    color: ${(props) => (props.isPastDay ? "#cbcbcb" : props.isSelected ? 'white' : "#ff6969")};
    opacity: ${(props) => (props.isCurrentMonth ? 1.0 : 0.0)};
  }
  &:nth-child(7) {
    color: ${(props) => (props.isPastDay ? "#cbcbcb" : props.isSelected ? 'white' : "#0085ff")};
    opacity: ${(props) => (props.isCurrentMonth ? 1.0 : 0.0)};
  }
`;

// const SpecialDay = styled(Day)<{ isSpecialDay: boolean }>`
//   background-color: ${(props) => (props.isSpecialDay ? '#cccccc' : '')};
//   position: relative;

//   // 특별한 날짜에 대한 추가 스타일
//   &::after {
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 70%;
//     height: 70%;
//     background-color: ${(props) => (props.isSpecialDay ? '#cccccc' : 'transparent')};
//     border-radius: 50%;
//     transform: translate(-50%, -50%);
//   }
// `;

// Type definitions
type DayInfo = {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isSpecialDay: boolean;
  isPastDay: boolean;
};

// Custom hook for calendar logic
const useCalendar = (year: number, month: number) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useRecoilState<Date>(recoilSelectedDate);
  const [selectedDateState, setSelectedDateState] = useRecoilState<boolean>(recoilDateSelectState);
  const getDaysInMonth = (date: Date): DayInfo[] => {
    const daysArray: DayInfo[] = [];
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
  
    // Get the first and last day of the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  
    // Fill in the days of the month
    for (let day = new Date(firstDayOfMonth); day <= lastDayOfMonth; day.setDate(day.getDate() + 1)) {
      daysArray.push(createDayInfo(new Date(day), true));
    }
  
    // Fill in the trailing days of the previous month
    const firstDayOfWeek = firstDayOfMonth.getDay();
    for (let i = firstDayOfWeek; i > 0; i--) {
      const day = new Date(firstDayOfMonth);
      day.setDate(day.getDate() - i);
      daysArray.unshift(createDayInfo(day, false));
    }
  
    // Fill in the leading days of the next month
    const lastDayOfWeek = lastDayOfMonth.getDay();
    for (let i = 1; i < 7 - lastDayOfWeek; i++) {
      const day = new Date(lastDayOfMonth);
      day.setDate(day.getDate() + i);
      daysArray.push(createDayInfo(day, false));
    }
  
    return daysArray
  };

  const createDayInfo = (day: Date, isCurrentMonth: boolean = true): DayInfo => {
    const currentYear = new Date().getFullYear();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const specialDates: Date[] = [
      new Date(currentYear, 11, 25), // Christmas
      new Date(currentYear, 9, 31),  // Halloween
      new Date(currentYear, 1, 14),  // Valentine's Day
      // 다른 특별한 날짜들을 여기에 추가하세요.
    ]; 
    const isThisYearSpecialDay = specialDates.some((specialDate: Date) => 
      day.getDate() === specialDate.getDate() && 
      day.getMonth() === specialDate.getMonth() &&
      day.getFullYear() === currentYear // 올해 특별한 날짜만 고려합니다.
    );

    return {
      date: new Date(day),
      isCurrentMonth: isCurrentMonth,
      isToday: day.toDateString() === new Date().toDateString(),
      isSelected: day.toDateString() === selectedDate.toDateString(),
      isSpecialDay: isThisYearSpecialDay,
      isPastDay: day < today,
    };
};

  const checkIfSpecialDay = (date: Date): boolean => {
    // Define special dates here
    const currentYear = new Date().getFullYear();
    // Define special dates for the current year
    const specialDates: Date[] = [
      new Date(currentYear, 11, 25), // Christmas
      new Date(currentYear, 9, 31),  // Halloween
      new Date(currentYear + 1 , 1, 14),  // Valentine's Day
      // Add more special dates as needed
    ];

    return specialDates.some(specialDate => 
      date.getDate() === specialDate.getDate() && 
      date.getMonth() === specialDate.getMonth() && currentYear
    );
  };

  useEffect(() => {
    // Update days when month changes
    setDays(getDaysInMonth(currentMonth));
  }, [currentMonth, selectedDate]);

  const [days, setDays] = useState<DayInfo[]>(getDaysInMonth(currentMonth));

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const selectDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 시간을 00:00:00.000으로 설정

    const isSpecialDay = checkIfSpecialDay(date);
  
    if (!isSpecialDay && date >= today && date.getMonth() === currentMonth.getMonth()) {
      setSelectedDate(date);
      setSelectedDateState(true);
    }
  };
  

  return {
    currentMonth,
    days,
    goToPreviousMonth,
    goToNextMonth,
    selectDate,
  };
};

// Calendar component
const MyCalendar: React.FC = () => {
  const now = new Date();
  const { currentMonth, days, goToPreviousMonth, goToNextMonth, selectDate } = useCalendar(now.getFullYear(), now.getMonth()); // September 2023

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <button onClick={goToPreviousMonth}>&lt;</button>
        <MonthLabel>
          {currentMonth.toLocaleDateString('default', { year: 'numeric', month: 'long' })}
        </MonthLabel>
        <button onClick={goToNextMonth}>&gt;</button>
      </CalendarHeader>
      <CalendarTable>
        <thead >
          <tr>
            {['일', '월', '화', '수', '목', '금', '토'].map((dayName) => (
              <th  key={dayName}>{dayName}</th>
            ))}
          </tr>
        </thead>
        <tbody >
          {Array.from({ length: 6 }, (_, weekIndex) => (
            <tr key={weekIndex}>
              {days.slice(weekIndex * 7, (weekIndex + 1) * 7).map((day, dayIndex) => (
                <Day
                  key={dayIndex}
                  isToday={day.isToday}
                  isSelected={day.isSelected}
                  isCurrentMonth={day.isCurrentMonth}
                  isSpecialDay={day.isSpecialDay}
                  isWeekend={dayIndex === 0 || dayIndex === 6}
                  isPastDay={day.isPastDay}
                  onClick={() => selectDate(day.date)}
                >
                  {day.date.getDate()}
                </Day>
              ))}
            </tr>
          ))}
        </tbody>
      </CalendarTable>
    </CalendarWrapper>
  );
};

export default MyCalendar;