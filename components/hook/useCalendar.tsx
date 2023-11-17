import { useState } from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, isSaturday, isSunday, isSameMonth } from 'date-fns';

interface CalendarOptions {
  weekendSaturdayColor?: string;
  weekendSundayColor?: string;
  inactiveDateOpacity?: number;
}

const useCalendar = (options: CalendarOptions = {}) => {
  const {
    weekendSaturdayColor = 'blue',
    weekendSundayColor = 'red',
    inactiveDateOpacity = 0.2,
  } = options;

  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);

  const daysOfMonth = eachDayOfInterval({ start: startDate, end: endDate });

  const getDayStyles = (date: Date) => {
    const isSat = isSaturday(date);
    const isSun = isSunday(date);
    const isInactive = !isSameMonth(date, currentDate);

    const styles: React.CSSProperties = {};

    if (isSat) styles.color = weekendSaturdayColor;
    if (isSun) styles.color = weekendSundayColor;
    if (isInactive) styles.opacity = inactiveDateOpacity;

    return styles;
  };

  return {
    currentDate,
    handlePrevMonth,
    handleNextMonth,
    daysOfMonth,
    getDayStyles,
  };
};

export default useCalendar;