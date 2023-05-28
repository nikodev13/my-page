import { useState } from "react";
import { BarsArrowDownIcon, BarsArrowUpIcon } from "@heroicons/react/24/outline/index.js";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className={`lg:sticky top-0 lg:flex lg:h-screen lg:flex-col text-white relative text-center`}>
			<div className={`before:w-8 lg:before:w-0 p-4 flex bg-gray-800 relative z-10`}>
				<div className={`text-gray-200 text-xl select-none mx-auto`}>
					.NET Developer
				</div>
				<button className={`lg:hidden`} onClick={() => setIsOpen(!isOpen)}>
					{ isOpen
						? <BarsArrowUpIcon className={`h-8 w-8`}/>
						: <BarsArrowDownIcon className={`h-8 w-8`} /> }
				</button>
			</div>
			<div className={`flex flex-col gap-4 bg-[rgb(39,49,64)] lg:bg-gray-800 lg:h-full w-full p-6 lg:p-4 lg:pt-2 transition-transform lg:duration-0 absolute lg:static z-[9] lg:translate-y-0 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
				<a href={`/`}
				   className={`bg-blue-700 hover:bg-blue-800 active:bg-blue-900 py-2 rounded-lg transition-colors ease-in`}>
					Curriculum vitae
				</a>
				<a href={`https://github.com/nikodev13`}
				   className={`bg-indigo-700 hover:bg-indigo-800 active:bg-indigo-900 py-2 rounded-lg transition-colors ease-in lg:mt-auto`}>
					GitHub
				</a>
			</div>
		</nav>
	);
}

export default NavBar;