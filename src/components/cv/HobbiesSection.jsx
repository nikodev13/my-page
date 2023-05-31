const hobbiesSection = ['math', 'reading fantasy', 'polish trains']

function HobbiesSection() {
	return (
		<section>
			<h4 className={`text-xl font-medium mb-2`}>Hobbies</h4>
			<p className={`flex flex-wrap gap-x-10 gap-y-2 px-2`}>
				{ hobbiesSection
					&& hobbiesSection.map(h => <div key={h}>{h}</div>) }
			</p>
		</section>
	);
}

export default HobbiesSection;