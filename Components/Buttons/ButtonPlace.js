import styles from "../../styles/Buttons/ButtonPlace.module.css";

export let ButtonPlace = ({ input, destination, active }) => {
	let activeState;
	if (active) {
		activeState = styles.button_active;
	} else {
		activeState = styles.button_inactive;
	}
	return (
		<a href={destination} className={activeState}>
			{input}
		</a>
	);
};
