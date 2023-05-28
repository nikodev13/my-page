const educationLevels = [
	{
		school: 'Zespół Szkół Łączności w Gdańsku im. Obrońców Poczty Polskiej',
		degree: 'Programmer Technician',
		from: '09/2019',
		to: '04/2023',
	}
]

function Education() {
	return (
		<section>
			<h4 className={`text-xl font-medium mb-2`}>Education</h4>
			<div className={`flex flex-col gap-3 px-2`}>
				{ educationLevels &&
					educationLevels.map(el => <EducationLevel key={el.degree} {...el} />)}
			</div>
		</section>
	);
}

function EducationLevel({ school, degree, from, to}) {
	return (
		<div className={`grid md:grid-cols-[10rem_auto] items-baseline`}>
			<div className={`text-[0.95rem] w-40`}>{ from } - { to }</div>
			<div className={`ms-5`}>
				<h5 className={`text-[1.1rem] font-medium`}>{ degree }</h5>
				<p className={`text-[0.9rem]`}>{ school }</p>
			</div>
		</div>
	);
}

export default Education;