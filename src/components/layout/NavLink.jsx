import { useCallback } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

function NavLink({ to, children }) {
	const classNameFunc = useCallback(
		({ isActive }) =>
			`${ isActive
				? `bg-slate-700`
				: `text-slate-300 hover:bg-slate-700`
			} p-2 rounded-lg transition-colors ease-in`, [])

	return (
		<RouterNavLink to={to} className={classNameFunc}>
			{ children }
		</RouterNavLink>
	);
}

export default NavLink;