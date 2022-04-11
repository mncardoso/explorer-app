import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
	PlaceNearby: {
		position: "relative",
		display: "flex",
		width: "166px",
		height: "166px",
		borderRadius: "10px",
		backdropFilter: "blur(30px)",
		textAlign: "center",
		alignContent: "center",
		justifyContent: "center",
	},
	PlaceNearbyTitle: {
		position: "absolute",
		display: "flex",
		background: "#0000004d",
		marginTop: "122px",
		width: "166px",
		height: "44px",
		borderRadius: "0 0 10px 10px",
		padding: "10px",
		backdropFilter: "blur(30px)",
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		"& p": {
			padding: "10px",
			fontWeight: 600,
			color: "#fff",
		},
	},
	PlaceNearbyImage: {
		marginTop: 0,
		marginRight: 0,
		top: 0,
		left: 0,
	},
}));

export let Nearby = ({ title, image, props }) => {
	const classes = useStyles(props);
	return (
		<a href="" className={classes.PlaceNearby}>
			<div className={classes.PlaceNearbyImage}>
				<img src={image} alt={title} />
			</div>
			<div className={classes.PlaceNearbyTitle}>
				<p>{title}</p>
			</div>
		</a>
	);
};
