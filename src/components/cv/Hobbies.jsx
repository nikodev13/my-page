const hobbies = ['math', 'reading fantasy', 'polish trains']

function Hobbies() {
	return (
		<section>
			<h4 className={`text-xl font-medium mb-2`}>Hobbies</h4>
			<p className={`flex gap-10 px-2`}>
				{ hobbies
					&& hobbies.map(h => <span key={h}>{h}</span>) }
			</p>
		</section>
	);
}

export default Hobbies;