import React, { FC, useState } from 'react';
import { listType } from '@/components/calendar/CalendarList';
import styles from './WriteCalendar.module.scss';

interface WriteCalendarProps {
  selectDay: string;
  setIsOpenWrite: React.Dispatch<React.SetStateAction<boolean>>;
}
const WriteCalendar: FC<WriteCalendarProps> = ({
  selectDay,
  setIsOpenWrite,
}) => {
  const [schedule, setSchedule] = useState<listType>({
    day: selectDay,
    title: '',
    contents: '',
    writer: '',
    addr: '',
  });

  const handleSubmit = () => {
    console.log(schedule);
  };

  return (
    <div className={styles.wrap}>
      <h3>새로운 이벤트 등록</h3>
      <div className={styles.input}>
        <label htmlFor="title" className={styles.inputLabel}>
          title
          <input
            type="text"
            id="title"
            onChange={(e) => {
              setSchedule({ ...schedule, title: e.target.value });
            }}
          />
        </label>
      </div>
      <div className={styles.input}>
        <label htmlFor="contents" className={styles.inputLabel}>
          contents
          <textarea
            rows={5}
            onChange={(e) => {
              setSchedule({ ...schedule, contents: e.target.value });
            }}
          />
        </label>
      </div>
      <div className={styles.input}>
        <label htmlFor="addr" className={styles.inputLabel}>
          위치
          <input
            type="text"
            id="addr"
            onChange={(e) => {
              setSchedule({ ...schedule, addr: e.target.value });
            }}
          />
        </label>
        {/* <DaumPostcodeEmbed */}
        {/*  onComplete={(e) => { */}
        {/*    console.log('e', e); */}
        {/*  }} */}
        {/* /> */}
      </div>
      <div className={styles.footer}>
        <button onClick={handleSubmit}>등록</button>
        <button
          onClick={() => {
            setIsOpenWrite(false);
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default WriteCalendar;
