import { useCallback } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

function NavLink({ to, children }) {
	const classNameFunc = useCallback(
		({ isActive }) =>
			`${ isActive
				? `bg-gray-700`
				: `text-gray-300 hover:bg-gray-700`
			} p-2 rounded-lg transition-colors ease-in`, [])

	return (
		<RouterNavLink to={to} className={classNameFunc}>
			{ children }
		</RouterNavLink>
	);
}

export default NavLink;