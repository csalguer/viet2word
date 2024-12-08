import React from "react"

export interface ReadingContentProps {
	prop?: string
}

export function ReadingContent({
	prop = "default value",
}: ReadingContentProps) {
	return <div className={styles.ReadingContent}>ReadingContent {prop}</div>
}
