'use client';

import React, { FC, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import styles from './CalendarComponent.module.scss';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
interface CalendarComponentProps {
  setSelectDay: React.Dispatch<React.SetStateAction<string>>;
}
const CalendarComponent: FC<CalendarComponentProps> = ({ setSelectDay }) => {
  const today = new Date();
  const [value, onChange] = useState<Value>(today);

  useEffect(() => {
    setSelectDay(String(value));
  }, [value]);

  return (
    <div className={styles.wrap}>
      <Calendar
        value={value}
        onChange={onChange}
        formatDay={(_locale, date) => dayjs(date).format('D')}
        calendarType="gregory"
        prev2Label={null}
        next2Label={null}
        formatMonthYear={(_locale, date) => dayjs(date).format('YYYY.DD')}
      />
    </div>
  );
};

export default CalendarComponent;
