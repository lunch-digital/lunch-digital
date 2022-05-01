import React from "react"

import Hero from "./components/Hero"
import Clients from "./components/Clients"
import Team from "./components/Team"
import Footer from "./components/Footer"

const App = () => (
	<>
		<main>
			<Hero />
			<Clients />
			<Team />
		</main>
		<Footer />
	</>
)

export default App
