import { useState, useEffect } from "react"

import LunchLogo from "../LunchLogo"
import styles from "./MobileLoader.module.scss"

const MobileLoader = () => {
	const [isActive, setIsActive] = useState(true)

	useEffect(() => {
		if (window.innerWidth < 768) {
			setTimeout(() => {
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
			}, 500)
		}

		setTimeout(() => setIsActive(false), 4000)
	}, [])

	return isActive ? (
		<div className={styles.mobileLoader}>
			<LunchLogo />
			<LunchLogo />
			<LunchLogo />
			<LunchLogo />
		</div>
	) : null
}

export default MobileLoader
