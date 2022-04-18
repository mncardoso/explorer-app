import { createUseStyles } from "react-jss";
import { BotBar } from "./BotBar";
import { ButtonPlace } from "./ButtonPlace";
import { Tag } from "./Tag";
import { Nearby } from "./Nearby";

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
		left: 0,
		top: "3.063rem",
		boxShadow: "0 3px 6px rgb(0 0 0 / 30%)",
		zIndex: 88,
	},
	Distance: {
		position: "absolute",
		right: 0,
		width: "83px",
		height: "23px",
		alignContent: "center",
		textAlign: "end",
		background: "rgba(0, 0, 0, 0.25)",
		backdropFilter: "blur(30px)",
		borderRadius: "0 0 0 10px",
		zIndex: "67",
		"& p": {
			padding: "2px",
			fontSize: "0.8125rem",
			fontWeight: 600,
			marginRight: "5px",
		},
	},
	Location: {
		position: "absolute",
		zIndex: "67",
		"& p": {
			padding: "10px",
			fontSize: "2.5rem",
			fontWeight: 700,
			textShadow: "0 3px 6px rgb(0 0 0 / 30%)",
		},
	},
	Image: {
		display: "flex",
		width: "100%",
		position: "relative",
		left: 0,
		overflow: "hidden",
		zIndex: "66",
		"& img": { objectFit: "cover", width: "100%" },
	},
	Content: {
		display: "block",
		width: "378px",
		height: "calc(100% - 19.688rem)",
		justifyContent: "center",
		marginTop: "12.438rem",
		overflow: "auto",
		"&::-webkit-scrollbar": { display: "none" },
	},
	Tags: {
		display: "flex",
		height: "50px",
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-end",
		marginBottom: "1rem",
	},
	Buttons: {
		display: "flex",
		eight: "50px",
		width: "100%",
		justifyContent: " space-between",
		alignContent: "center",
		marginBottom: "1rem",
	},
	Nearby: {
		display: "block",
		height: "230px",
		marginBottom: "1rem",
		"&::-webkit-scrollbar": { display: "none" },
		"& h3": { color: "black" },
	},
	NearbyList: {
		display: "flex",
		height: "190px",
		width: "100%",
		alignItems: "center",
		gridTemplateColumns: "repeat(auto-fill, 166px)",
		gridColumnGap: "10px",
		alignItems: "center",
		overflowX: "auto",
		overflowY: "hiden",
		"&::-webkit-scrollbar": { display: "none" },
	},
	About: {
		display: "block",
		marginBottom: "1rem",
		"& h3": { color: "black" },
		"& p": { color: "black" },
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
export let PlacePage = (info, props) => {
	const classes = useStyles(props);
	document.title = "Explorer App | Place";
	document.getElementsByTagName("META")[2].content =
		"Explorer App is a concept of a web application for exploring the world.";
	document.getElementsByTagName("META")[3].content = "#d96e1e";
	let nearbyList = [
		{
			id: 0,
			title: "Local Busines",
			image:
				"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/busines1.png",
		},
		{
			id: 1,
			title: "Local Busines",
			image:
				"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/busines2.png",
		},
		{
			id: 2,
			title: "Local Busines",
			image:
				"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/busines3.png",
		},
		{
			id: 3,
			title: "Local Busines",
			image:
				"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/busines4.png",
		},
		{
			id: 4,
			title: "Local Busines",
			image:
				"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/busines5.png",
		},
	];
	function Tags(props) {
		return props.tags.map((tags) => (
			<div key={tags.id}>
				<Tag type={tags.type} time={tags.time} />
			</div>
		));
	}
	function NearbyPlaces(props) {
		return props.plasses.map((plasses) => (
			<div key={plasses.id}>
				<Nearby title={plasses.title} image={plasses.image} />
			</div>
		));
	}
	return (
		<div className={classes.Home}>
			<div className={classes.ImageHeader}>
				<div className={classes.Distance}>
					<p>{info.distance}</p>
				</div>
				<div className={classes.Location}>
					<p>{info.location}</p>
				</div>
				<div className={classes.Image}>
					<img src={info.image} alt=""></img>
				</div>
			</div>
			<div className={classes.Content}>
				<div className={classes.Tags} id="tags">
					<Tags tags={info.makeTags} />
				</div>
				<div className={classes.Buttons}>
					<ButtonPlace
						input={"Get me there"}
						destination={"./map"}
						active={true}
					/>
					<ButtonPlace input={"Get Stamp"} destination={""} active={false} />
				</div>
				<div className={classes.Nearby}>
					<h3>Nearby</h3>
					<div className={classes.NearbyList}>
						<NearbyPlaces plasses={nearbyList} />
					</div>
				</div>
				<div className={classes.About}>
					<h3>About</h3>
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
						erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
						et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
						Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
						sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
						et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
						accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
						no sea takimata sanctus est Lorem ipsum dolor sit amet.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
						erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
						et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
						Lorem ipsum dolor sit amet. Lorem
					</p>
				</div>
			</div>
			<div className={classes.BotBar}>
				<BotBar />
			</div>
		</div>
	);
};
