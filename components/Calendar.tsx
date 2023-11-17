import React, { useState } from 'react';
import styled from 'styled-components';
import { format, addMonths, subMonths } from 'date-fns';

// CalendarComponent에서 사용할 스타일
const Day = styled.td<{
  isToday: boolean;
  isSelected: boolean;
  isSpecialDay: boolean;
  dayOfWeek: number;
  isClicked: boolean;
}>`
  padding: 5px;
  text-align: center;
  cursor: pointer;
  background-color: ${props => (props.isSpecialDay ? '#f8f6f6' : 'transparent')};
  color: ${props =>
    props.isClicked
      ? 'transparent'
      : props.isToday
      ? 'red'
      : props.isSelected
      ? 'white'
      : props.isSpecialDay
      ? '#c8c8c8'
      : props.dayOfWeek === 0
      ? 'red'
      : props.dayOfWeek === 6
      ? 'blue'
      : 'black'};
  border-radius: 50%;
  position: relative;
  &:hover {
    background-color: ${props => (props.isSpecialDay ? '#f8f6f6' : props.isToday ? 'red' : 'lightgray')};
  }
`;

const ClickedDiv = styled.div`
  border-radius: 50%;
  background-color: red;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;

function useCalendar(year: number, month: number, specialDates: Date[]) {
  const [currentMonth, setCurrentMonth] = useState(new Date(year, month));
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const days = [];
  
    for (let i = 1; i <= lastDay; i++) {
      days.push(new Date(year, month, i));
    }
  
    return days;
  }
  
  const daysInMonth = getDaysInMonth(currentMonth);

  const goToPreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const selectDate = (date: Date) => {
    // Date 선택 로직을 구현하세요.
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  // 변경된 부분: 각 날짜의 isSpecialDay 값을 설정
  const daysWithSpecial = daysInMonth.map(date => ({
    date,
    isToday: isSameDay(date, new Date()),
    isSelected: false, // 선택 로직에 따라 수정하세요.
    isSpecialDay: specialDates.some(d => isSameDay(d, date)),
  }));

  return {
    currentMonth: format(currentMonth, 'MMMM yyyy'),
    days: daysWithSpecial,
    goToPreviousMonth,
    goToNextMonth,
    selectDate,
  };
}

const UseMyCalendar: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { currentMonth, days, goToPreviousMonth, goToNextMonth, selectDate } = useCalendar(2023, 8, [
    new Date(2023, 7, 25),
    new Date(2023, 11, 25),
  ]);

  return (
    <div>
      <h1>Calendar App</h1>
      <h2>{currentMonth}</h2>
      <button onClick={goToPreviousMonth}>Previous Month</button>
      <button onClick={goToNextMonth}>Next Month</button>
      <table>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          {days.map(day => (
            <tr key={day.date.toDateString()}>
              <Day
                isToday={day.isToday}
                isSelected={day.isSelected}
                isSpecialDay={day.isSpecialDay}
                dayOfWeek={day.date.getDay()}
                isClicked={isClicked}
                onClick={() => {
                  selectDate(day.date);
                  setIsClicked(true);
                }}
              >
                {isClicked ? <ClickedDiv>{day.date.getDate()}</ClickedDiv> : day.date.getDate()}
              </Day>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UseMyCalendar;
