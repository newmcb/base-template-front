import React, { FC } from 'react';
import { testList } from '@/components/calendar/CalendarList';
import dayjs from 'dayjs';
import styles from './CalendarDayInfo.module.scss';

interface CalenderDayInfoProps {
  date: Date;
}

const CalendarDayInfo: FC<CalenderDayInfoProps> = ({ date }) => {
  return (
    <div className={styles.wrap}>
      <div>
        {testList.map((vv, i) => {
          if (vv.day === dayjs(date).format('YYYY-MM-DD')) {
            return (
              <div key={`${vv.day}_${i + 1}`} className={styles.info}>
                {vv.contents}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default CalendarDayInfo;
