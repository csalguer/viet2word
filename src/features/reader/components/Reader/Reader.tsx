import React from 'react';

import styles from './Reader.css';

export interface ReaderProps {
  prop?: string;
}

export function Reader({prop = 'default value'}: ReaderProps) {
  return <div className={styles.Reader}>Reader {prop}</div>;
}
