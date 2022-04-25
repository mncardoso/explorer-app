import styles from "../../styles/misc/ColourSwatches.module.css";

export let ColourSwatches = ({ children, type }) => {
	let classType;
	if (type === "accent") {
		classType = styles.accent_colour;
	} else if (type === "background") {
		classType = styles.background_colour;
	} else if (type === "seaside") {
		classType = styles.seaside_colour;
	} else if (type === "park") {
		classType = styles.park_colour;
	} else if (type === "city") {
		classType = styles.city_colour;
	}
	return <div className={classType}>{children}</div>;
};
