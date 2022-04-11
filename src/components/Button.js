import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
	Button: {
		display: "block",
		background: "#f8af7893",
		width: "9.438rem",
		height: "2.75rem",
		borderRadius: "10px",
		backdropFilter: "blur(30px)",
		textAlign: "center",
		alignContent: "center",
		padding: "0.625rem",
	},
}));

export let Button = ({ input, destination, props }) => {
	const classes = useStyles(props);
	return (
		<a href={destination} className={classes.Button}>
			{input}
		</a>
	);
};
