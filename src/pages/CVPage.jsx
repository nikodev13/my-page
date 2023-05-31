import ProfileSection from "../components/cv/ProfileSection.jsx";
import SkillsSection from "../components/cv/SkillsSection.jsx";
import LanguagesSection from "../components/cv/LanguagesSection.jsx";
import AboutMeSection from "../components/cv/AboutMeSection.jsx";
import WorkExperienceSection from "../components/cv/WorkExperienceSection.jsx";
import EducationSection from "../components/cv/EducationSection.jsx";
import HobbiesSection from "../components/cv/HobbiesSection.jsx";
import CertificationsSection from "../components/cv/CertificationsSection.jsx";
import AchievementsSection from "../components/cv/AchievementsSection.jsx";

function CVPage() {
	return (
		<div className={`flex flex-col xl:flex-row`}>
			<div className={`flex flex-col gap-5 bg-slate-800 text-slate-100 p-5`}>
				<ProfileSection />
				<SkillsSection />
				<LanguagesSection />
			</div>
			<div className={`flex flex-col gap-5 bg-slate-700 text-slate-200 p-5`}>
				<AboutMeSection />
				<WorkExperienceSection/>
				<EducationSection />
				<CertificationsSection />
				<AchievementsSection />
				<HobbiesSection />
			</div>
		</div>
	)
}

export default CVPage;