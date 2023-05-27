const achievements = [
	{ name: 'Scholarship of the Prime Minister of the Republic of Poland for the year 2022/2023.', }
]

function Achievements() {
	return (
		<section>
			<h4 className={`text-xl font-medium mb-2`}>Achievements</h4>
			<div className={`flex flex-col gap-3 px-2`}>
				{ achievements &&
					achievements.map(a => <Achievement key={a.name} name={a.name} />)}
			</div>
		</section>
	);
}

function Achievement({ name }) {
	return (
		<p>{ name }</p>
	);
}

export default Achievements;