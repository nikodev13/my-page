
function HomePage() {
	return (
		<div className={`flex flex-col p-5 bg-gray-800`}>
			<div className={`grid md:grid-cols-[16rem_auto] `}>
				<img src="/images/photo.jpg" alt="my-photo"
				     className={`row-span-2  rounded-3xl w-52 h-52 border-2 border-white select-none`} />
				<h2 className={`mt-5 md:mt-0 self-end flex items-center text-4xl font-mono text-white`}>
					<div className={`animate-typing-text`}>Hi, I&apos;m Nikodem!</div>
					<div className={`animate-typing-cursor w-[.2rem] h-9 bg-white`}></div>
				</h2>
				<p className={`mt-2 text-white`}>Technik programista, .NET enjoyer</p>
			</div>
			<p></p>
		</div>
	)
}

export default HomePage;