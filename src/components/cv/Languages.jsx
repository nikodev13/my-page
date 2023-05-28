const languages =[
	{
		name: 'Polish',
		level: 'native'
	},
	{
		name: 'English',
		level: 'B1',
	}
]

function Languages() {
	return (
		<section>
			<h4 className={`text-xl font-medium mb-2`}>Languages</h4>
			{ languages
				&& languages.map(l => <Language key={l.name} {...l} />) }
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

export default Languages;