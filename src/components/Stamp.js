import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
	Stamp: {
		display: "flex",
		width: "100px",
		height: "100px",
		border: "2px dashed rgba(115, 86, 69, 0.33)",
		borderRadius: "10px",
		justifyContent: "center",
		alignItems: "center",
		contain: "overflow",
	},
}));

export let Stamp = ({ image, destination, props }) => {
	const classes = useStyles(props);
	return (
		<a href={destination} className={classes.Stamp}>
			<img src={image} alt="" />
		</a>
	);
};
