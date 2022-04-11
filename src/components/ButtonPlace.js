import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
	ButtonActive: {
		display: "block",
		background: "rgb(217, 110, 30)",
		width: "11.25.rem",
		height: "2.75rem",
		borderRadius: "10px",
		backdropFilter: "blur(30px)",
		textAlign: "center",
		alignContent: "center",
		padding: "0.625rem",
		fontWeight: theme.fontWeight.Medium,
	},
	ButtonInactive: {
		display: "block",
		background: "rgba(0, 0, 0, 0.33)",
		width: "11.25.rem",
		height: "2.75rem",
		borderRadius: "10px",
		backdropFilter: "blur(30px)",
		textAlign: "center",
		alignContent: "center",
		padding: "0.625rem",
		fontWeight: theme.fontWeight.Medium,
		color: "rgba(0, 0, 0, 0.33)",
		cursor: "not-allowed",
	},
}));

export let ButtonPlace = ({ input, destination, active, props }) => {
	const classes = useStyles(props);
	let activeState;
	if (active) {
		activeState = classes.ButtonActive;
	} else {
		activeState = classes.ButtonInactive;
	}
	return (
		<a href={destination} className={activeState}>
			{input}
		</a>
	);
};
