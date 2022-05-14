import StaggerText from "../StaggerText"
import { CLIENTS } from "./Clients.data"
import styles from "./Clients.module.scss"

const Clients = () => (
	<section className={styles.clients} id="clients">
		<ul className={styles.clientsList}>
			{CLIENTS.map(({ name, url }, index) => (
				<li key={index}>
					<a href={url} target="_blank" rel="noreferrer">
						<StaggerText text={name} />
					</a>
				</li>
			))}
			<li>And More</li>
		</ul>
	</section>
)

export default Clients
