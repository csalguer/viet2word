import React from 'react';

import styles from './TabbedCard.css';

export interface TabbedCardProps {
  prop?: string;
}

export function TabbedCard({prop = 'default value'}: TabbedCardProps) {
  return <div className={styles.TabbedCard}>TabbedCard {prop}</div>;
}
