import React from "react"

import styles from "./FeatureSection.module.css"

export interface FeatureSectionProps {
	prop?: string
}

export function FeatureSection({
	prop = "default value",
}: FeatureSectionProps) {
	return <div className={styles.FeatureSection}>FeatureSection {prop}</div>
}
