import TypeWriter from "./TypeWriter.jsx";

function ProfileSection() {
	return (
		<section className={`border-b-2 border-slate-600`}>
			<h2 className={`text-4xl font-mono text-white`}>
				<TypeWriter text={`Hi, I'm\u00A0Nikodem!`} duration={150} />
			</h2>
			<p className={`my-2 text-white`}>Junior .NET developer</p>
		</section>
	);
}

export default ProfileSection;