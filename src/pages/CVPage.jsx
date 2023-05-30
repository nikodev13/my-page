import Profile from "../components/cv/Profile.jsx";
import Skills from "../components/cv/Skills.jsx";
import Languages from "../components/cv/Languages.jsx";
import AboutMe from "../components/cv/AboutMe.jsx";
import WorkExperience from "../components/cv/WorkExperience.jsx";
import Education from "../components/cv/Education.jsx";
import Hobbies from "../components/cv/Hobbies.jsx";
import Certifications from "../components/cv/Certifications.jsx";
import Achievements from "../components/cv/Achievements.jsx";

function CVPage() {
	return (
		<div className={`flex flex-col xl:flex-row`}>
			<div className={`flex flex-col gap-5 bg-gray-800 text-gray-200 p-5`}>
				<Profile />
				<Skills />
				<Languages />
			</div>
			<div className={`flex flex-col gap-5 bg-gray-700 text-white p-5`}>
				<AboutMe />
				<WorkExperience/>
				<Education />
				<Certifications />
				<Achievements />
				<Hobbies />
			</div>
		</div>
	)
}

export default CVPage;