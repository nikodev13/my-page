import { useState } from "react";
import { BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/24/outline/index.js";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className={`lg:sticky top-0 lg:flex lg:h-screen lg:flex-col bg-gray-800 text-gray-200 relative`}>
			<div className={`before:w-8 lg:before:w-0 p-4 flex bg-gray-800 relative z-10`}>
				<div className={`text-gray-300 text-xl select-none mx-auto`}>
					.NET Developer
				</div>
				<button className={`lg:hidden`} onClick={() => setIsOpen(!isOpen)}>
					{ isOpen
						? <BarsArrowUpIcon className={`h-8 w-8`}/>
						: <BarsArrowDownIcon className={`h-8 w-8`} /> }
				</button>
			</div>
			<div className={`flex flex-col gap-3 bg-gray-800 lg:h-full w-full p-4 pt-2 text-center transition-transform lg:duration-0 absolute lg:static z-[9] lg:translate-y-0 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
				<a href={`/`}
				   className={`bg-blue-700 hover:bg-blue-800 active:bg-blue-900 px-4 py-2 rounded-lg transition-colors ease-in`}>
					Curriculum vitae
				</a>
				<a href={`https://github.com/nikodev13`}
				   className={`bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 px-4 py-2 rounded-lg transition-colors ease-in lg:mt-auto`}>
					GitHub
				</a>
			</div>
		</nav>
	);
}

export default NavBar;