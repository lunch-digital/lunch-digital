import { useState, useRef, useEffect } from "react"

import LunchLogo from "../LunchLogo"
import styles from "./MobileLoader.module.scss"

const getLogoList = () => {
	const logoPadding = 10
	const logoWidth = window.innerWidth - 32
	const logoHeight = logoWidth / 3.46
	const totalLogos = Math.floor((window.innerHeight - 60) / (logoHeight + logoPadding))
	return [...Array(totalLogos).keys()]
}

const MobileLoader = () => {
	const mobileLoaderRef = useRef(null)
	const [isActive, setIsActive] = useState(true)
	const [logoList] = useState(getLogoList())

	const scrollToTop = () => {
		setTimeout(() => {
			document.body.scrollTop = 0
			document.documentElement.scrollTop = 0
		}, 500)
	}

	const setAnimationProperties = () => {
		const fadeOutDelay = logoList.length * 0.25 + 0.6
		const headerLogo = document.querySelector("#header-logo")
		const heroParagraphs = document.querySelectorAll("#hero p")

		mobileLoaderRef.current.style.animationDelay = `${fadeOutDelay}s`
		headerLogo.style.animationDelay = `${fadeOutDelay + 0.45}s`
		heroParagraphs[0].style.animationDelay = `${fadeOutDelay + 0.6}s`
		heroParagraphs[1].style.animationDelay = `${fadeOutDelay + 0.75}s`
	}

	useEffect(() => {
		if (window.innerWidth < 768) {
			scrollToTop()
			setAnimationProperties()
		}

		setTimeout(() => setIsActive(false), 6000)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return isActive ? (
		<div ref={mobileLoaderRef} className={styles.mobileLoader}>
			{logoList.map((id) => (
				<LunchLogo key={id} />
			))}
		</div>
	) : null
}

export default MobileLoader
