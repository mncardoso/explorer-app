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

export let ListAll = (props) => {
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
						destination={"./Stamford"}
						image={
							"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Stamford.png"
						}
						location={"Stamford"}
						type={"city"}
						distance={"122 km"}
					/>
					<Place
						destination={"./Brighton"}
						image={
							"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Brighton.png"
						}
						location={"Brighton"}
						type={"seaside"}
						distance={"126 km"}
					/>
					<Place
						destination={"./CotonMannor"}
						image={
							"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Coton Manor.png"
						}
						location={"Coton Manor"}
						type={"park"}
						distance={"147 km"}
					/>
					<Place
						destination={"./SwanshurstPark"}
						image={
							"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Swanshurst Park.png"
						}
						location={"Swanshurst Park"}
						type={"park"}
						distance={"216 km"}
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
					<Place
						destination={"./Whitby"}
						image={
							"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Whithby.png"
						}
						location={"Whitby"}
						type={"city"}
						distance={"417 km"}
					/>
					<Place
						destination={"./Cornwall"}
						image={
							"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Cornwall.png"
						}
						location={"Cornwall"}
						type={"seaside"}
						distance={"446 km"}
					/>
					<Place
						destination={"./Moon"}
						image={
							"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Moon.png"
						}
						location={"Moon"}
						type={"city"}
						distance={"384.4 Mm"}
					/>
				</div>
			</div>
			<div className={classes.BotBar}>
				<BotBar />
			</div>
		</div>
	);
};
