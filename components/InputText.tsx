import React, { FC } from 'react';
import styles from './InputText.module.scss';

/**
 * 버튼 유무
 * */
const InputText: FC = () => {
  return (
    <div className={styles.inputWrap}>
      <input type="text" className={styles.input} />
      <button className={styles.btn}>버튼</button>
    </div>
  );
};

export default InputText;
