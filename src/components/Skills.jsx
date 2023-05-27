const skills = [
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

function Skills() {
	return (
		<section>
			<h4 className={`text-xl font-medium mb-2`}>Skills</h4>
			{ skills && skills.map(s => <Skill key={s.name} {...s} />) }
		</section>
	);
}


function Skill({ name, level }) {
	return (
		<div className={`flex flex-row`}>
			<div>{name}</div>
			<div className={`ms-auto text-center`}>
				{level}
			</div>
		</div>
	);
}

export default Skills;