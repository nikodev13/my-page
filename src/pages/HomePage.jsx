import ProfileSection from "../components/home/ProfileSection.jsx";
import SkillsSection from "../components/home/SkillsSection.jsx";
import AboutMeSection from "../components/home/AboutMeSection.jsx";

function HomePage() {
	return (
		<div className={`flex flex-col gap-4 p-10 bg-gray-800 text-gray-200`}>
			<ProfileSection />
			<SkillsSection />
			<AboutMeSection />
		</div>
	);
}

export default HomePage;