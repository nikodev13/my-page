const languagesSection =[
	{
		name: 'Polish',
		level: 'native'
	},
	{
		name: 'English',
		level: 'B1',
	}
]

function LanguagesSection() {
	return (
		<section>
			<h4 className={`text-xl font-medium mb-2`}>Languages</h4>
			{ languagesSection
				&& languagesSection.map(l => <Language key={l.name} {...l} />) }
		</section>
	);
}

function Language({ name, level }) {
	return (
		<div className={`flex justify-between`}>
			<div>{name}</div>
			<div>{level}</div>
		</div>
	);
}

export default LanguagesSection;