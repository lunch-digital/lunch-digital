import styles from "./Hero.module.scss"

const Hero = () => (
	<section className={styles.hero} id="hero">
		<div className={styles.description}>
			<p>
				We are a modern executive search firm that assembles teams for startups and growth stage
				companies.
			</p>
			<br /> <br />
			<p>We focus on engineering, design, and product management.</p>
		</div>
	</section>
)

export default Hero
