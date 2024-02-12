import React, { FC, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import styles from './CalendarList.module.scss';

interface CalendarListProps {
  selectDay: string;
  handleAdd: () => void;
}

export interface listType {
  day: string;
  title: string;
  contents: string;
  writer: string;
  addr: string;
}

const testList: listType[] = [
  {
    day: '2024-02-05',
    title: '회식',
    contents: '회사회식',
    writer: '',
    addr: '',
  },
  {
    day: '2024-02-08',
    title: '모임',
    contents: '가족모임',
    writer: '',
    addr: '',
  },
  {
    day: '2024-02-12',
    title: '모임',
    contents: '스터디모임',
    writer: '',
    addr: '',
  },
];

const CalendarList: FC<CalendarListProps> = ({ selectDay, handleAdd }) => {
  const [pastSchedule, setPastSchedule] = useState<listType[]>();
  const [futureSchedule, setFutureSchedule] = useState<listType[]>();

  const handleCheckSchedule = () => {
    const future = testList.filter((s) => dayjs(s.day) >= dayjs());
    const past = testList.filter((s) => dayjs(s.day) < dayjs());

    setFutureSchedule(future);
    setPastSchedule(past);
  };

  useEffect(() => {
    handleCheckSchedule();
  }, [selectDay]);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h4 className={styles.text}>리스트 헤더헤더헤더 {selectDay}</h4>
        <button onClick={handleAdd} className={styles.addBtn}>
          등록하기+
        </button>
      </div>
      <div className={styles.contents}>
        {pastSchedule &&
          pastSchedule.map((c, i) => {
            return (
              <div
                key={`${c.day}_${i}_p`}
                className={`${styles.card} ${styles.past}`}
              >
                <div>{c.day}</div>
                <div>{c.title}</div>
                <div>{c.contents}</div>
                <div>{c.writer}</div>
                <div>{c.addr}</div>
              </div>
            );
          })}
        {futureSchedule &&
          futureSchedule.map((c, i) => {
            return (
              <div key={`${c.day}_${i}_f`} className={styles.card}>
                <div>{c.day}</div>
                <div>{c.title}</div>
                <div>{c.contents}</div>
                <div>{c.writer}</div>
                <div>{c.addr}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CalendarList;
