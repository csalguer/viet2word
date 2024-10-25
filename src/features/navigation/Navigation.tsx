import React from "react";

import styles from "./Navigation.css";

export interface navigationProps {
	prop?: string;
}

export function Navigation({ prop = "default value" }: navigationProps) {
	return <div className={styles.navigation}>navigation {prop}</div>;
}
