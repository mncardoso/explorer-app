import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
	Home: {
		position: "absolute",
		top: "0",
		left: "0",
		display: "flex",
		height: "100vh",
		width: "100vw",
		justifyContent: "center",
		overflow: "hidden",
		zIndex: "100",
	},
	Image: {
		display: "flex",
		width: "100%",
		position: "relative",
		overflow: "hidden",
		zIndex: "105",
		"& img": {
			objectFit: "cover",
			width: "100%",
		},
	},
	Button: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		display: "block",
		background: "#ffffff4d",
		width: "354px",
		height: "68px",
		borderRadius: "10px",
		backdropFilter: "blur(30px)",
		textAlign: "center",
		alignContent: "center",
		padding: "15px",
		fontSize: "1.5625rem",
		fontWeight: "600",
		textAlign: "center",
		zIndex: "110",
	},
}));
export let Map = (info, props) => {
	const classes = useStyles(props);
	return (
		<div className={classes.Home}>
			<div className={classes.Image}>
				<img src={info.image} alt=""></img>
			</div>
			<a href={"./list_all"} className={classes.Button}>
				Will open default map app
			</a>
		</div>
	);
};
