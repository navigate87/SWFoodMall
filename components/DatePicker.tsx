import { Dispatch, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import { getMonth, getYear } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './calendar.module.scss';
import styled from 'styled-components';
import { ko } from 'date-fns/locale';

interface Props {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}

const YEARS = Array.from({ length: getYear(new Date()) + 1 - 2000 }, (_, i) => getYear(new Date()) - i);
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Calendar = ({ selectedDate, setSelectedDate }: Props) => {
  return (
    <DatePickerWrapper>
      <DatePicker
        fixedHeight
        locale="ko"
        dateFormat='yyyy.MM.dd'
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
        showYearDropdown
        scrollableYearDropdown
        shouldCloseOnSelect
        yearDropdownItemNumber={100}
        minDate={new Date('2000-01-01')}
        maxDate={new Date()}
        selected={selectedDate}
        calendarClassName={styles.calenderWrapper}
        dayClassName={(d) => (d.getDate() === selectedDate!.getDate() ? styles.selectedDay : styles.unselectedDay)}
        onChange={(date) => setSelectedDate(date)}
        className={styles.datePicker}
        renderCustomHeader={({
          date,
          changeYear,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={styles.customHeaderContainer}>
            <div>
              <span className={styles.month}>{MONTHS[getMonth(date)]}</span>
              <select
                value={getYear(date)}
                className={styles.year}
                onChange={({ target: { value } }) => changeYear(+value)}
              >
                {YEARS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                type='button'
                onClick={decreaseMonth}
                className={styles.monthButton}
                disabled={prevMonthButtonDisabled}
              >
                {/* <LeftArrow fill='#ffffff' /> */}
              </button>
              <button
                type='button'
                onClick={increaseMonth}
                className={styles.monthButton}
                disabled={nextMonthButtonDisabled}
              >
                {/* <RightArrow fill='#ffffff' /> */}
              </button>
            </div>
          </div>
        )}
      />
    </DatePickerWrapper>
  );
};

export default Calendar;

const DatePickerWrapper = styled.div`
    .custom-react-datepicker__wrapper {
        display: flex;
        font-display: row;
        justify-content: space-between;
        align-items: center;
        width: 272px;
    }
`;

const StyledDatePicker = styled(DatePicker)`
    .react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected {
        background-color: #ededed;
        border-radius: 50px;
    }
`;