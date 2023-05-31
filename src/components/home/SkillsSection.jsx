const skills = [
	{
		name: '.NET',
		colors: 'hover:bg-[#512bd4] border-[#512bd4]'
	},
	{
		name: 'ASP.NET Core',
		colors: 'hover:bg-blue-600 border-blue-600'
	},
	{
		name: 'EF Core & SQL',
		colors: 'hover:bg-green-700 border-green-700'

	},
	{
		name: 'JavaScript',
		colors: 'hover:bg-[#f7df1e] hover:text-slate-800 border-[#f7df1e]'
	},
	{
		name: 'React',
		colors: 'hover:bg-[#087da4] border-[#087da4]'
	},
	{
		name: 'Git',
		colors: 'hover:bg-[#f14e32] hover:text-slate-800 border-[#f14e32]'
	},
	{
		name: 'Rider',
		colors: 'hover:bg-violet-600 border-violet-600'
	},
	{
		name: 'WebStorm',
		colors: 'hover:bg-lime-500 hover:text-slate-800 border-lime-500'
	},
]

function SkillsSection() {
	return (
		<section className={``}>
			<h3 className={`text-xl font-medium`}>
				Skills & tools
			</h3>
			<div className={`select-none p-2 pt-4 flex gap-x-5 md:justify-normal justify-center gap-y-4 flex-wrap`}>
				{ skills && skills.map(s => <Skill key={s.name} {...s} />) }
			</div>
		</section>
	);
}

function Skill({ name, colors = 'hover:bg-slate-700 border-slate-700' }) {
	return (
		<div className={`text-center rounded-lg border-2 transition-all p-5 py-1 ${colors}`}>
			{ name }
		</div>
	);
}


export default SkillsSection;