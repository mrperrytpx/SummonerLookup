import React from 'react';
import styles from "./func-button.module.scss";

const FuncButton = ({ children, type, onClick }) => {
  return (
    <button
      className={styles.button}
      type={type ? type : null}
      onClick={onClick}
    >{children}
    </button>
  );
};

export default FuncButton;