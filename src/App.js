import { Routes, Route } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { TopBar } from "./components/TopBar";
import { Home } from "./components/Home";
import { SearchPage } from "./components/SearchPage";
import { ListAll } from "./components/ListAll";
import { ListFav } from "./components/ListFav";
import { ListBeach } from "./components/ListBeach";
import { PlacePage } from "./components/PlacePage";

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
				</Routes>
			</div>
		</div>
	);
}

export default App;
