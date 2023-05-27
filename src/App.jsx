import NavBar from "./components/NavBar.jsx";
import CurriculumVitae from "./components/CurriculumVitae.jsx";

function App() {
	return (
		<div className={`flex lg:flex-row flex-col min-h-screen bg-gray-900`}>
			<NavBar />
			<main className={`flex-1`}>
				<CurriculumVitae />
			</main>
		</div>
	)
}

export default App
