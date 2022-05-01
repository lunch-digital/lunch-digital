import styles from "./TeamMemberCard.module.scss"
import StaggerText from "../StaggerText"

const TeamMemberCard = ({ name, role, avatar }) => (
	<div className={styles.teamMemberCard}>
		<img className={styles.avatar} src={avatar} alt={name} />
		<div>
			<span>
				<StaggerText text={name} />
			</span>
		</div>
		<div className={styles.role}>
			<span>{role}</span>
		</div>
	</div>
)

export default TeamMemberCard
