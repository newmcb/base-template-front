import React, { FC } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.contents}>{children}</div>
    </div>
  );
};

export default Modal;
