import { createUseStyles } from "react-jss";
import { BotBar } from "./BotBar";
import { Stamp } from "./Stamp";

const useStyles = createUseStyles((theme) => ({
	Home: {
		display: "grid",
		background: theme.palette.background,
		padding: "1rem",
		height: "100vh",
		width: "100vw",
		justifyContent: "center",
	},
	ImageHeader: {
		display: "flex",
		width: "100%",
		height: "215px",
		position: "absolute",
		background: theme.palette.background,
		alignItems: "center",
		justifyContent: "center",
		left: 0,
		top: "3.063rem",
		boxShadow: "0 3px 6px rgb(0 0 0 / 30%)",
		zIndex: 88,
	},
	Info: {
		marginLeft: "29px",
		width: "161px",
		"& h6": {
			fontSize: "0.625rem",
			fontWeight: 600,
			color: "#000000",
			marginBottom: "-5px",
		},
		"& p": {
			fontSize: "1.875rem",
			fontWeight: 300,
			color: "#000000",
			marginBottom: "10px",
		},
	},
	Line: {
		position: "absolute",
		width: "100%",
		bottom: 0,
		borderTop: "2px dashed #735645",
		borderBottom: "2px solid #735645",
		height: "6px",
	},
	Content: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 100px)",
		gridTemplateRows: "repeat(3, 100px)",
		gap: "40px",
		height: "calc(100% - 19.688rem)",
		justifyContent: "center",
		justifySelf: "center",
		marginTop: "12.438rem",
		paddingTop: "1.25rem",
		paddingBottom: "1.25rem",
		overflow: "auto",
		"&::-webkit-scrollbar": { display: "none" },
	},

	BotBar: {
		position: "absolute",
		display: "flex",
		width: "100%",
		left: "0",
		bottom: "0",
		boxShadow: "  0 -3px 6px rgb(0 0 0 / 30%)",
		zIndex: "99",
		justifyContent: "center",
	},
}));
export let Passport = (props) => {
	const classes = useStyles(props);
	document.title = "Explorer App | Passport";
	document.getElementsByTagName("META")[2].content =
		"Explorer App is a concept of a web application for exploring the world.";
	document.getElementsByTagName("META")[3].content = "#d96e1e";

	let stampsInfo = [
		{
			id: 0,
			image:
				"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Stamp_RichmondPark.svg",
			destination: "./RichmondPark",
		},
		{
			id: 1,
			image:
				"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Stamp_Wells.svg",
			destination: "./Wells",
		},
		{
			id: 2,
			image:
				"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Stamp_DurdleDoor.svg",
			destination: "./DurdleDoor",
		},
		{
			id: 3,
			image: "",
			destination: "",
		},
		{
			id: 4,
			image: "",
			destination: "",
		},
		{
			id: 5,
			image: "",
			destination: "",
		},
		{
			id: 6,
			image: "",
			destination: "",
		},
		{
			id: 7,
			image: "",
			destination: "",
		},
		{
			id: 8,
			image: "",
			destination: "",
		},
		{
			id: 9,
			image: "",
			destination: "",
		},
		{
			id: 10,
			image: "",
			destination: "",
		},
		{
			id: 11,
			image: "",
			destination: "",
		},
	];
	function Stamps(props) {
		return props.stamp.map((stamp) => (
			<div key={stamp.id}>
				<Stamp image={stamp.image} destination={stamp.destination} />
			</div>
		));
	}
	return (
		<div className={classes.Home}>
			<div className={classes.ImageHeader}>
				<div className={classes.Image}>
					<img
						src="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/jane.png"
						alt=""
					></img>
				</div>
				<div className={classes.Info}>
					<h6>Name</h6>
					<p>Jane Doe</p>
					<h6>Nationality</h6>
					<p>UK</p>
					<h6>Joined</h6>
					<p>20/04/14</p>
				</div>
				<hr class={classes.Line}></hr>
			</div>
			<div className={classes.Content}>
				<Stamps stamp={stampsInfo} />
			</div>
			<div className={classes.BotBar}>
				<BotBar />
			</div>
		</div>
	);
};
