const workExperience = [
	{
		position: 'Trainee',
		location: 'Kopytkowo, Pomeranian',
		company: 'Netto Sp. z.o.o',
		from: '09/2021',
		to: '09/2021',
		description: 'Managing logistic data using SAP ERP and MS Excel.',
	},
	{
		position: 'Trainee',
		location: 'remote',
		company: 'DGT Sp. z.o.o.',
		from: '03/2021',
		to: '04/2021',
		description: 'Programming in C++, telecommunications systems.',
	},
	{
		position: 'Trainee',
		location: 'remote',
		company: 'SEVENET S.A.',
		from: '03/2021',
		to: '04/2021',
		description: 'Programming in Java (modeling entities), computer network.',
	},
	{
		position: 'Office worker',
		location: 'Kopytkowo, Pomeranian',
		company: 'Netto Sp. z.o.o',
		from: '07/2019',
		to: '08/2019',
		description: 'Assisting in documentation completion using Microsoft Office.',
	}
];

function WorkExperience() {
	return (
		<section>
			<h4 className={`text-xl font-medium mb-2`}>Work experience</h4>
			<div className={`flex flex-col gap-3 px-2 `}>
				{ workExperience && workExperience.map((we, i) =>
					<Experience key={i} {...we}  />) }
			</div>
		</section>
	);
}


function Experience({ position, location, company, from, to, description }) {
	const date = from === to ? from : `${from} - ${to}`

	return (
		<div className={`grid md:grid-cols-[10rem_auto] items-baseline`}>
			<div className={`text-[0.95rem]`}>{date}</div>
			<div className={`ms-5 flex flex-wrap items-baseline`}>
				<h5 className={`inline text-[1.1rem] font-medium`}>{position} at {company}</h5>
				<span className={`ms-1 text-[0.85rem] font-normal`}>({location})</span>
				<p className={`w-full text-[0.9rem]`}>{description}</p>
			</div>
		</div>
	);
}

export default WorkExperience;