import Profile from "./Profile.jsx";
import Skills from "./Skills.jsx";
import Languages from "./Languages.jsx";
import AboutMe from "./AboutMe.jsx";
import WorkExperience from "./WorkExperience.jsx";
import Education from "./Education.jsx";
import Hobbies from "./Hobbies.jsx";
import Certifications from "./Certifications.jsx";
import Achievements from "./Achievements.jsx";

function CurriculumVitae() {
	return (
		<div className={`flex flex-col xl:flex-row xl:mx-20 mx-8 my-5 h-fit`}>
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

export default CurriculumVitae;