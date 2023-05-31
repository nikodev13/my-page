import { useEffect, useState } from "react";

function TypeWriter({ text, duration }) {
	const [currentText, setCurrentText] = useState('');

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCurrentText(text.slice(0, currentText.length + 1));
		}, duration);
		return () => clearTimeout(timeout);
	}, [currentText, text, duration]);

	return (
		<span>
			{ currentText }
			<span className={`select-none text-blue-600 font-bold animate-pulse-fast`}>_</span>
		</span>
	);
}

export default TypeWriter;