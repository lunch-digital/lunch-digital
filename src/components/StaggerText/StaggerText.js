import { useMemo } from "react"

import styles from "./StaggerText.module.scss"

const StaggerText = ({ text }) => {
	const chars = useMemo(() => text.split(""), [text])

	return (
		<span className={styles.staggerText}>
			{chars.map((char, index) => (
				<span
					key={index}
					className={styles.char}
					aria-hidden="true"
					style={{ animationDelay: `${0.1 * index}s` }}
				>
					{char === " " ? <>&nbsp;</> : char}
				</span>
			))}
			<span className={styles.fullText}>{text}</span>
		</span>
	)
}

export default StaggerText
