import LunchLogo from "../LunchLogo"
import styles from "./Footer.module.scss"

const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles.contactInfo}>
			<div>
				<h4>Social</h4>
				<div className={styles.links}>
					<a href="https://www.instagram.com/lunch.digital" target="_blank" rel="noreferrer">
						Instagram
					</a>{" "}
					/{" "}
					<a href="https://www.linkedin.com/company/ineedlunch/" target="_blank" rel="noreferrer">
						LinkedIn
					</a>
				</div>
			</div>
			<div>
				<h4>Email</h4>
				<div className={styles.links}>
					<a href="mailto:info@lunch.digital">info@lunch.digital</a>
				</div>
			</div>
		</div>
		<LunchLogo />
	</footer>
)

export default Footer
