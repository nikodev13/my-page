import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import NavLink from "./NavLink.jsx";
import SocialLink from "./SocialLink.jsx";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => setIsOpen(false), [pathname]);

	return (
		<nav className={`lg:sticky top-0 lg:flex lg:h-screen lg:flex-col text-white relative text-left bg-slate-800 lg:p-2`}>
			<div className={`before:w-8 lg:before:w-0 p-4 lg:pt-2 flex relative bg-slate-800 z-10`}>
				<Link to={`/`} className={`text-slate-200 text-xl select-none mx-auto`}>
					.NET developer
				</Link>
				<button className={`lg:hidden`} onClick={() => setIsOpen(!isOpen)}>
					<FontAwesomeIcon icon={faEllipsisVertical} className={`w-8 h-6 align-middle`} />
				</button>
			</div>
			<div className={`flex flex-col select-none border-y lg:border-b-0 border-blue-600 bg-slate-800 gap-4 lg:h-full w-full p-4 lg:px-2 transition-transform lg:duration-0 absolute lg:static z-[9] left-0 lg:translate-y-0 ${isOpen ? 'translate-y-0' : '-translate-y-[102%]'}`}>
				<NavLink to={`/cv`}>
					<span className="fa-layers fa-fw w-8">
					    <FontAwesomeIcon icon={faFile} />
					    <FontAwesomeIcon icon={faUser} transform={`down-3.5 shrink-8`} />
					</span>
					<span className={`border-l-2 px-2`}>
						Curriculum vitae
					</span>
				</NavLink>
				<div className={`mt-auto grid grid-cols-2 lg:grid-cols-1 gap-4`}>
					<SocialLink to={`https://www.linkedin.com/in/nikodem-rekiewicz-8313b723b/`}
					            text={`LinkedIn`}
					            icon={faLinkedinIn}
					            colors={`bg-[#0a66c2] hover:bg-[#004182]`} />
					<SocialLink to={`https://github.com/nikodev13`}
					            text={`GitHub`}
					            icon={faGithub}
					            colors={`bg-[#161b22] hover:bg-[#0d1117]`} />
				</div>
			</div>
		</nav>
	);
}

export default NavBar;