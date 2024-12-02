import React from "react"

import styles from "./ReadingContent.css"

export interface ReadingContentProps {
	prop?: string
}

export function ReadingContent({
	prop = "default value",
}: ReadingContentProps) {
	return <div className={styles.ReadingContent}>ReadingContent {prop}</div>
}
