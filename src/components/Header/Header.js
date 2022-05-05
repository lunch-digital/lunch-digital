import { useEffect, useRef } from "react"

import LunchLogo from "../LunchLogo"
import styles from "./Header.module.scss"

const Header = () => {
	const headerRef = useRef(null)

	const setHeroHeight = () => {
		const header = headerRef.current
		header.nextSibling.style.minHeight = `calc(100vh - ${header.offsetHeight - 5}px)`
	}

	useEffect(() => {
		setHeroHeight()

		window.addEventListener("resize", setHeroHeight)
	}, [])

	return (
		<header ref={headerRef} className={styles.header}>
			<span className={styles.logo}>
				<LunchLogo />
			</span>
		</header>
	)
}

export default Header
