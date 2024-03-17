'use client';

import React, { FC, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import { testList } from '@/components/calendar/CalendarList';
import CalendarDayInfo from '@/components/calendar/CalendarDayInfo';
import styles from './CalendarComponent.module.scss';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
interface CalendarComponentProps {
  setSelectDay: React.Dispatch<React.SetStateAction<string | undefined>>;
}
const CalendarComponent: FC<CalendarComponentProps> = ({ setSelectDay }) => {
  const today = new Date();
  const [calendarValue, setCalendarValue] = useState<Value>(today);

  useEffect(() => {
    console.log('calendarValue', calendarValue);
    setSelectDay(String(calendarValue));
  }, [calendarValue]);

  return (
    <div className={styles.wrap}>
      <Calendar
        value={calendarValue}
        onChange={setCalendarValue}
        formatDay={(_locale, date) => dayjs(date).format('D')}
        calendarType="gregory"
        locale={'ko'}
        prev2Label={null}
        next2Label={null}
        formatMonthYear={(_locale, date) => dayjs(date).format('YYYY.MM')}
        tileContent={({ date }) => {
          if (
            testList.find((v) => v.day === dayjs(date).format('YYYY-MM-DD'))
          ) {
            return <CalendarDayInfo date={date} />;
          }
        }}
      />
    </div>
  );
};

export default CalendarComponent;
