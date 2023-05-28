const hobbies = ['math', 'reading fantasy', 'polish trains']

function Hobbies() {
	return (
		<section>
			<h4 className={`text-xl font-medium mb-2`}>Hobbies</h4>
			<p className={`flex flex-wrap gap-x-10 gap-y-2 px-2`}>
				{ hobbies
					&& hobbies.map(h => <div key={h}>{h}</div>) }
			</p>
		</section>
	);
}

export default Hobbies;