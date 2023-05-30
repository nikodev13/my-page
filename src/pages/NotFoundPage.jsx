import { Link } from "react-router-dom";

function NotFoundPage() {
	return (
		<div className={`flex flex-col items-center mt-5 text-center`}>
			<h1 className={`text-8xl text-white font-light`}>404</h1>
			<h2 className={`text-xl mt-3 font-bold f tracking-wide uppercase text-red-600`}>page not found</h2>
			<p className={`mt-3 text-gray-300`}>
				Oops! The Page you are looking for does not exist.<br/>
				Go to <Link to={`/`} className={`text-lg text-green-500`}>home page</Link>.
			</p>
		</div>
	);
}

export default NotFoundPage;