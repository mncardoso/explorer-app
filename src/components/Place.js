import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
	Place: {
		display: "flex",
		height: "166px",
		borderRadius: "10px",
		position: "relative",
	},

	Star: {
		position: "absolute",
		marginLeft: "5px",
	},

	Distance: {
		position: "absolute",
		marginLeft: "83px",
		display: "flex",
		width: "83px",
		height: "23px",
		alignContent: "center",
		justifyContent: "end",
		background: "rgba(0, 0, 0, 0.25)",
		backdropFilter: "blur(30px)",
		borderRadius: "0px 10px",
		"& p ": {
			fontSize: "0.8125rem",
			fontWeight: theme.fontWeight.Medium,
			marginRight: "5px",
			padding: "2px",
		},
	},

	City: {
		position: "absolute",
		margintop: "122px",
		width: "166px",
		height: "44px",
		bottom: "0px",
		background: theme.palette.city30,
		backdropFilter: "blur(30px)",
		borderRadius: "0px 0px 10px 10px",
		textAlign: "center",
		"& p": { padding: "10px", fontWeight: theme.fontWeight.Medium },
	},

	Seaside: {
		position: "absolute",
		margintop: "122px",
		width: "166px",
		height: "44px",
		bottom: "0px",
		background: theme.palette.seaside30,
		backdropFilter: "blur(30px)",
		borderRadius: "0px 0px 10px 10px",
		textAlign: "center",
		"& p": { padding: "10px", fontWeight: theme.fontWeight.Medium },
	},

	Park: {
		position: "absolute",
		margintop: "122px",
		width: "166px",
		height: "44px",
		bottom: "0px",
		background: theme.palette.park30,
		backdropFilter: "blur(30px)",
		borderRadius: "0px 0px 10px 10px",
		textAlign: "center",
		"& p": { padding: "10px", fontWeight: theme.fontWeight.Medium },
	},

	Image: {
		marginTop: "0px",
		marginRight: "0px",
		top: "0px",
		left: "0px",
	},
}));

export let Place = ({
	destination,
	image,
	location,
	distance,
	type,
	fav = false,
	props,
}) => {
	const classes = useStyles(props);
	let star = "";
	if (fav === true) {
		star = (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="13.582"
				height="13"
				viewBox="0 0 13.582 13"
			>
				<path
					fill="#fff"
					d="M7.5.451,5.846,3.813l-3.709.541A.813.813,0,0,0,1.688,5.74L4.371,8.354l-.635,3.694a.812.812,0,0,0,1.178.856L8.233,11.16,11.551,12.9a.813.813,0,0,0,1.178-.856l-.635-3.694L14.777,5.74a.813.813,0,0,0-.449-1.386l-3.709-.541L8.961.451A.813.813,0,0,0,7.5.451Z"
					transform="translate(-1.441 0.001)"
				></path>
			</svg>
		);
	} else {
		star = "";
	}
	let locationType = classes.Name;
	if (type === "city") {
		locationType = classes.City;
	} else if (type === "seaside") {
		locationType = classes.Seaside;
	} else if (type === "park") {
		locationType = classes.Park;
	}

	return (
		<a href={destination} className={classes.Place}>
			<div className={classes.Star}>{star}</div>
			<div className={classes.Distance}>
				<p>{distance}</p>
			</div>
			<div className={locationType}>
				<p>{location}</p>
			</div>
			<div className={classes.Image}>
				<img src={image} alt=""></img>
			</div>
		</a>
	);
};
