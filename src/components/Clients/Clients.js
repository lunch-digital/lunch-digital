import { CLIENTS } from "./Clients.data"
import styles from "./Clients.module.scss"

const Clients = () => (
	<section className={styles.clients}>
		<ul className={styles.clientsList}>
			{CLIENTS.map(({ name, url }, index) => (
				<li key={index}>
					<a href={url} target="_blank" rel="noreferrer">
						{name}
					</a>
				</li>
			))}
			<li>And More</li>
		</ul>
	</section>
)

export default Clients
