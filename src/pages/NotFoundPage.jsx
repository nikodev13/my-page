import { Link } from "react-router-dom";

function NotFoundPage() {
	return (
		<div className={`bg-gray-800 p-10 lg:p-15 flex flex-col items-center text-center`}>
			<h1 className={`text-8xl text-white font-light animate-bounce`}>404</h1>
			<h2 className={`text-xl mt-4 font-bold tracking-wide uppercase text-red-600`}>page not found</h2>
			<p className={`m-3 px-5 text-gray-300`}>
				Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<br/>
				<span>
					Go to <Link to={`/`} className={`text-blue-600 underline`}>home page</Link>.
				</span>
			</p>
		</div>
	);
}

export default NotFoundPage;