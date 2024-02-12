import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Header.module.scss';

const Header = () => {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <div className={styles.navi}>
        <button
          onClick={() => {
            router.push('/');
          }}
        >
          Main
        </button>
        <button
          className={styles.calendar}
          onClick={() => {
            router.push('/calendar');
          }}
        >
          Calendar
        </button>
        <button>Test 1</button>
        <button>Test 2</button>
        <button>Test 3</button>
      </div>
    </div>
  );
};

export default Header;
