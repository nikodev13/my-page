import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLink({ to, text, icon, colors = ''}) {
	return (
		<a href={to} className={`${colors} rounded-lg p-2 transition-colors ease-in`}>
			<FontAwesomeIcon icon={icon} className={`w-8`}/>
			<span className={`border-l-2 px-2`}>{ text }</span>
		</a>
	);
}

export default SocialLink;