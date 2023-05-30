import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLink({ to, text, icon, colors = ''}) {
	return (
		<a href={to} className={`flex items-center ${colors} rounded-lg p-2 transition-colors ease-in`}>
			<FontAwesomeIcon icon={icon} className={`px-2`}/>
			<span className={`border-l-2 px-2`}>{ text }</span>
		</a>
	);
}

export default SocialLink;