const skillsSection = [
	{
		name: '.NET & C#',
		level: 'regular',
	},
	{
		name: 'ASP.NET Core',
		level: 'junior',
	},
	{
		name: 'EF & SQL',
		level: 'junior',
	},
	{
		name: 'React',
		level: 'junior',
	},
	{
		name: 'Git',
		level: 'beginner',
	},
	{
		name: 'Architecture',
		level: 'beginner',
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