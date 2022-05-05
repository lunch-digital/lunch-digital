import { useEffect, useRef } from "react"

import LunchLogo from "../LunchLogo"
import styles from "./Header.module.scss"

const Header = () => {
	const headerRef = useRef(null)
	const overlayRef = useRef(null)
	const sectionTitlesItemsRef = useRef(null)
	const scaleRef = useRef(null)
	const targetScaleRef = useRef(null)

	const setHeaderProperties = () => {
		// if not mobile
		const minLogoHeight = 54
		const headerPadding = 66
		const logoWrapper = document.querySelector("#header-logo")
		const logo = document.querySelector("#header-logo svg")
		const hero = document.querySelector("#hero")
		const clients = document.querySelector("#clients")
		const team = document.querySelector("#team")

		const logoWrapperHeight = logoWrapper.clientHeight
		const logoHeight = logo.clientHeight
		const heroClientTop = Math.ceil(hero.getBoundingClientRect().top)
		const clientsClientTop = Math.ceil(clients.getBoundingClientRect().top)
		const teamClientTop = Math.ceil(team.getBoundingClientRect().top)
		const scale =
			Math.max(heroClientTop - headerPadding - (logoWrapperHeight - logoHeight), minLogoHeight) /
			logoHeight

		if (!scaleRef.current) {
			scaleRef.current = scale
		}

		targetScaleRef.current = scale

		scaleRef.current -= (scaleRef.current - targetScaleRef.current) * 0.4
		const scaleVal = scaleRef.current

		// Set logo scale
		logo.style.transform = `scale3d(${scaleVal}, ${scaleVal}, 1)`

		// Set overlay height
		overlayRef.current.style.height =
			clientsClientTop > 200 || teamClientTop < 0 ? "200px" : `${Math.max(clientsClientTop, 0)}px`

		// Set mix-blend-mode height
		headerRef.current.style.mixBlendMode =
			clientsClientTop < 130 && teamClientTop > 0 ? "difference" : ""

		// Set header height
		headerRef.current.style.height = teamClientTop < 0 ? "200px" : ""

		// Set active section
		if (teamClientTop < 92) {
			sectionTitlesItemsRef.current.style.transform = "translate3d(0, -50%, 0)"
		} else if (clientsClientTop < 60) {
			sectionTitlesItemsRef.current.style.transform = "translate3d(0, 0, 0)"
		} else {
			sectionTitlesItemsRef.current.style.transform = ""
		}

		requestAnimationFrame(setHeaderProperties)
	}

	const setHeroHeight = () => {
		const header = headerRef.current
		header.nextSibling.style.minHeight = `calc(100vh - ${header.offsetHeight - 5}px)`
	}

	useEffect(() => {
		setHeroHeight()
		requestAnimationFrame(setHeaderProperties)

		window.addEventListener("resize", setHeroHeight)
	}, [])

	return (
		<header ref={headerRef} className={styles.header}>
			<div ref={overlayRef} className={styles.overlay} />
			<span className={styles.logo} id="header-logo">
				<LunchLogo />
			</span>
			<div className={styles.sectionTitles}>
				<div ref={sectionTitlesItemsRef} className={styles.sectionTitlesItems}>
					<span>Clients</span>
					<span>Team</span>
				</div>
			</div>
		</header>
	)
}

export default Header
