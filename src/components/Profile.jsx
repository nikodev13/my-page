function Profile() {
	return (
		<section className={`flex flex-col`}>
			<img src="/images/photo.jpg" alt="my-photo"
			     className={`rounded-3xl w-48 h-48 border-2 border-white select-none`}/>
			<h3 className={`mt-3 text-2xl font-medium`}>Nikodem Rękiewicz</h3>
			<h4 className={`text-lg mb-1`}>.NET Developer</h4>
			<a href={`tel:+48514695703`}>514 695 703</a>
			<a href={`mailto:nikodem.rekiewicz@outlook.com`}>nikodem.rekiewicz@outlook.com</a>
		</section>
	);
}

export default Profile;