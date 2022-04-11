import { Routes, Route } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { TopBar } from "./components/TopBar";
import { Home } from "./components/Home";
import { SearchPage } from "./components/SearchPage";
import { ListAll } from "./components/ListAll";
import { ListFav } from "./components/ListFav";
import { ListBeach } from "./components/ListBeach";
import { PlacePage } from "./components/PlacePage";
import { Moon } from "./components/Moon";
import { Map } from "./components/Map";
import { Passport } from "./components/Passport";
import "./App.css";

const useStyles = createUseStyles((theme) => ({
	"@global *": {
		boxSizing: "border-box",
		margin: "0",
		padding: "0",
		fontFamily:
			"-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
		color: theme.palette.text,
		textDecoration: "none",
		lineHeight: "1.4",
	},
	"@global html": {
		scrollBehavior: "smooth",
	},

	"@global body": {
		display: "grid",
		height: "100vh",
		overflow: "hidden",
	},
	TopBar: { zIndex: "100", position: "relative" },
	Main: { display: "block", height: "100%", zIndex: "99" },
}));

function App(props) {
	const classes = useStyles(props);
	return (
		<div>
			<div className={classes.TopBar}>
				<TopBar />
			</div>
			<div className={classes.Main}>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/searchfiled" element={<SearchPage />}></Route>
					<Route path="/list_all" element={<ListAll />}></Route>
					<Route path="/list_fav" element={<ListFav />}></Route>
					<Route path="/list_beach" element={<ListBeach />}></Route>
					<Route
						path="/RichmondPark"
						element={
							<PlacePage
								image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Richmond Park H.png"
								location="Richmond Park"
								distance="37 km"
								makeTags={[
									{ id: 0, type: "wheelchair", time: "" },
									{ id: 1, type: "kid", time: "" },
									{ id: 2, type: "time", time: "7AM-7PM" },
								]}
							/>
						}
					></Route>
					<Route
						path="/Stamford"
						element={
							<PlacePage
								image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Stamford H.png"
								location="Stamford"
								distance="122 km"
								makeTags={[{ id: 0, type: "time", time: "24h" }]}
							/>
						}
					></Route>
					<Route
						path="/Brighton"
						element={
							<PlacePage
								image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Brighton H.png"
								location="Brighton"
								distance="126 km"
								makeTags={[{ id: 0, type: "time", time: "24h" }]}
							/>
						}
					></Route>
					<Route
						path="/CotonMannor"
						element={
							<PlacePage
								image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Coton Manor H.png"
								location="Coton Mannor"
								distance="147 km"
								makeTags={[{ id: 0, type: "time", time: "12PM-5:30PM" }]}
							/>
						}
					></Route>
					<Route
						path="/SwanshurstPark"
						element={
							<PlacePage
								image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Swanshurst Park H.png"
								location="Swanshurst Park"
								distance="216 km"
								makeTags={[
									{ id: 0, type: "kid", time: "" },
									{ id: 1, type: "time", time: "24h" },
								]}
							/>
						}
					></Route>
					<Route
						path="/DurdleDoor"
						element={
							<PlacePage
								image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Durdle Door H.png"
								location="Durdle Door"
								distance="268 km"
								makeTags={[{ id: 0, type: "time", time: "24h" }]}
							/>
						}
					></Route>
					<Route
						path="/Wells"
						element={
							<PlacePage
								image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Wells H.png"
								location="Wells"
								distance="282 km"
								makeTags={[{ id: 0, type: "time", time: "24h" }]}
							/>
						}
					></Route>
					<Route
						path="/Whitby"
						element={
							<PlacePage
								image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Whitby H.png"
								location="Whitby"
								distance="417 km"
								makeTags={[{ id: 0, type: "time", time: "24h" }]}
							/>
						}
					></Route>
					<Route
						path="/Cornwall"
						element={
							<PlacePage
								image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Cornwall H.png"
								location="Cornwall"
								distance="446 km"
								makeTags={[{ id: 0, type: "time", time: "24h" }]}
							/>
						}
					></Route>
					<Route
						path="/Moon"
						element={
							<Moon
								image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Moon H.png"
								location="Moon"
								distance="384.4 Mm"
								makeTags={[{ id: 0, type: "time", time: "Closed" }]}
							/>
						}
					></Route>
					<Route
						path="/Map"
						element={
							<Map
								image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/maps.png"
								location="Moon"
								distance="384.4 Mm"
								makeTags={[{ id: 0, type: "time", time: "Closed" }]}
							/>
						}
					></Route>
					<Route
						path="/Passport"
						element={
							<Passport
								image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Moon H.png"
								location="Moon"
								distance="384.4 Mm"
								makeTags={[{ id: 0, type: "time", time: "Closed" }]}
							/>
						}
					></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
