import React from 'react';

import styles from './FannedCardSet.css';

export interface FannedCardSetProps {
  prop?: string;
}

export function FannedCardSet({prop = 'default value'}: FannedCardSetProps) {
  return <div className={styles.FannedCardSet}>FannedCardSet {prop}</div>;
}
