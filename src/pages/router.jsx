import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./HomePage.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import CVPage from "./CVPage.jsx";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				loader: titleLoader('my page'),
				element: <HomePage />
			},
			{
				path: '/cv',
				loader: titleLoader('Curriculum vitae'),
				element: <CVPage />
			},
			{
				path: '*',
				loader: titleLoader('page not found'),
				element: <NotFoundPage />
			}
		]
	}
])

function titleLoader(title) {
	return () => document.title = title;
}

export default router;