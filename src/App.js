import React from "react"

import MobileLoader from "./components/MobileLoader"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Clients from "./components/Clients"
import Team from "./components/Team"
import Footer from "./components/Footer"

const App = () => (
	<>
		<MobileLoader />
		<main>
			<Header />
			<Hero />
			<Clients />
			<Team />
		</main>
		<Footer />
	</>
)

export default App
