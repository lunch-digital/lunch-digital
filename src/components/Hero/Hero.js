import styles from "./Hero.module.scss"

const Hero = () => (
	<section className={styles.hero}>
		<div className={styles.description}>
			<p>
				We are a modern digital search firm that assembles teams for startups and growth stage
				companies.
			</p>
			<br /> <br />
			<p>We focus on product, design, and engineering.</p>
		</div>
	</section>
)

export default Hero
