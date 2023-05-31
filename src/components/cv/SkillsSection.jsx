const skillsSection = [
	{
		name: '.NET Core & C#',
		level: 'regular',
	},
	{
		name: 'ASP.NET Core',
		level: 'junior',
	},
	{
		name: 'Architecture',
		level: 'beginner',
	},
	{
		name: 'SQL',
		level: 'regular',
	},
	{
		name: 'React',
		level: 'junior',
	},
]

function SkillsSection() {
	return (
		<section>
			<h4 className={`text-xl font-medium mb-2`}>Skills</h4>
			{ skillsSection && skillsSection.map(s => <Skill key={s.name} {...s} />) }
		</section>
	);
}


function Skill({ name, level }) {
	return (
		<div className={`flex justify-between`}>
			<div>{name}</div>
			<div>{level}</div>
		</div>
	);
}

export default SkillsSection;