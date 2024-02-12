'use client';

import React, { useState } from 'react';
import CalendarComponent from '@/components/calendar/CalendarComponent';
import WriteCalendar from '@/components/calendar/WriteCalendar';
import CalendarList from '@/components/calendar/CalendarList';
import dayjs from 'dayjs';
import styles from './Calendar.module.scss';

const Calendar = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState<boolean>(false);
  const [isOpenWrite, setIsOpenWrite] = useState<boolean>(false);
  const [selectDay, setSelectDay] = useState<string>(
    dayjs().format('YYYY-MM-DD'),
  );

  const handleCalendar = () => {
    setIsOpenCalendar((prev) => !prev);
  };

  const handleAdd = () => {
    setIsOpenWrite((prev) => !prev);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <button onClick={handleCalendar}>
          캘린더 {isOpenCalendar ? '접기' : '보기'}
        </button>
      </div>
      {isOpenCalendar && <CalendarComponent setSelectDay={setSelectDay} />}

      {!isOpenWrite && (
        <CalendarList
          selectDay={dayjs(selectDay).format('YYYY-MM-DD')}
          handleAdd={handleAdd}
        />
      )}
      {isOpenWrite && (
        <WriteCalendar
          selectDay={dayjs(selectDay).format('YYYY-MM-DD')}
          setIsOpenWrite={setIsOpenWrite}
        />
      )}
    </div>
  );
};

export default Calendar;
