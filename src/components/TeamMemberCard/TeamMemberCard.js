import styles from "./TeamMemberCard.module.scss"

const TeamMemberCard = ({ name, role, avatar }) => (
	<div className={styles.teamMemberCard}>
		<img className={styles.avatar} src={avatar} alt={name} />
		<div className={styles.person}>
			<div>
				<span>{name}</span>
			</div>
			<div className={styles.role}>
				<span>{role}</span>
			</div>
		</div>
	</div>
)

export default TeamMemberCard
