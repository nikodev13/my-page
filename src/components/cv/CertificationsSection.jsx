const certificationsSection = [
	{
		name: 'INF.04',
		description: 'Projektowanie, programowanie i testowanie aplikacji.',
		date: '01/2023'
	},
	{
		name: 'INF.03',
		description: 'Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych.',
		date: '06/2021'
	}
]

function CertificationsSection() {
	return(
		<section>
			<h4 className={`text-xl font-medium mb-2`}>Certifications</h4>
			<div className={`flex flex-col gap-3 px-2`}>
				{ certificationsSection &&
					certificationsSection.map(c => <Certification key={c.name} {...c} />) }
			</div>
		</section>
	)
}

function Certification({ name, description, date }) {
	return (
		<div>
			<h5 className={`text-[1.1rem] font-medium`}>{ name } <span className={`text-[0.9rem] font-normal`}>({ date })</span></h5>
			<p className={`text-[0.9rem]`}>{ description }</p>
		</div>
	);
}

export default CertificationsSection;