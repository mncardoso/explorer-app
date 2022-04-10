import { createUseStyles } from "react-jss";
import { SearchField } from "./SearchField";
import { BotBar } from "./BotBar";
import { Place } from "./Place";

const useStyles = createUseStyles((theme) => ({
	Home: {
		display: "block",
		background: theme.palette.background,
		height: "100vh",
		width: "100vw",
	},
	TopBar: {
		display: "block",
		width: "100%",
		height: "3.063rem",
		position: "absolute",
		top: "3.063rem",
		marginLeft: "0px",
		background: theme.palette.foreground,
		padding: "0 1rem",
		boxShadow: "0 3px 6px rgb(0 0 0 / 30%)",
		zIndex: 88,
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
	Container: {
		padding: "1rem",
		display: "grid",
		width: "100%",
		height: "calc(100% - 11.314rem)",
		justifyContent: "center",
		marginTop: "3.063rem",
		overflow: "auto",
		"&::-webkit-scrollbar": { display: "none" },
	},
	Content: {
		display: "grid",
		gridTemplateColumns: "166px 166px",
		gridTemplateRows: "repeat(auto-fill, 166px)",
		gap: "10px",
		justifySelf: "center",
		height: "100%",
	},
}));

export let ListFav = (props) => {
	const classes = useStyles(props);
	return (
		<div className={classes.Home}>
			<div className={classes.TopBar}>
				<SearchField input={""} destination={"./searchfiled"} />
			</div>
			<div className={classes.Container}>
				<div className={classes.Content}>
					<Place
						destination={"./RichmondPark"}
						image={
							"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Richmond Park.png"
						}
						location={"Richmond Park"}
						type={"park"}
						distance={"37 km"}
						fav={true}
					/>
					<Place
						destination={"./DurdleDoor"}
						image={
							"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Durdle Door.png"
						}
						location={"Durdle Door"}
						type={"seaside"}
						distance={"268 km"}
						fav={true}
					/>
					<Place
						destination={"./Wells"}
						image={
							"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Wells.png"
						}
						location={"Wells"}
						type={"city"}
						distance={"282 km"}
						fav={true}
					/>
				</div>
			</div>
			<div className={classes.BotBar}>
				<BotBar />
			</div>
		</div>
	);
};
