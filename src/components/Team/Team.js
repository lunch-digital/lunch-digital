import TeamMemberCard from "../TeamMemberCard"
import { TEAM_MEMBERS } from "./Team.data"
import styles from "./Team.module.scss"

const Team = () => (
	<section className={styles.team}>
		<div className={styles.members}>
			{TEAM_MEMBERS.map((member, index) => (
				<TeamMemberCard key={index} {...member} />
			))}
		</div>
	</section>
)

export default Team
