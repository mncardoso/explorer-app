import { createUseStyles } from "react-jss";
import { SearchField } from "./SearchField";
import { Button } from "./Button";

const useStyles = createUseStyles((theme) => ({
	Home: {
		display: "block",
		background: theme.palette.foreground,
		justifyContent: "space-between",
		padding: "1rem",
		height: "100vh",
		width: "100vw",
	},
	Background: {
		position: "absolute",
		left: 0,
		bottom: 0,
		height: "100%",
		zIndex: 0,
	},
	Foreground: {
		zIndex: 2,
		position: "relative",
		left: 0,
		bottom: 0,
		height: "100%",
		width: "100%",
	},

	Logo: {
		display: "grid",
		width: "100%",
		gridTemplateRows: "167.76px 147px",
		marginTop: "0.75rem",
		justifyContent: "center",

		"& svg": { justifySelf: "center" },
		"& h1": {
			fontSize: "3.5rem",
			fontWeight: theme.fontWeight.Medium,
			margin: "0",
		},
	},
	Button: {
		display: "flex",
		width: "100%",
		justifyContent: "flex-end",
		marginTop: "0.625rem",
		zIndex: 10,
	},
	Bar: {
		position: "absolute",
		display: "grid",
		width: "calc(100% - 32px)",
		bottom: "0.563rem",
		zIndex: "99",
		justifyContent: "center",
	},
	BarBlack: {
		backgroundColor: "black",
		width: "9.188rem",
		height: "0.313rem",
		borderRadius: "2.5px",
	},
	BarWhite: {
		backgroundColor: "white",
		width: "9.188rem",
		height: "0.313rem",
		borderRadius: "2.5px",
	},
}));

export let Home = (props) => {
	const classes = useStyles(props);
	return (
		<div className={classes.Home}>
			<div className={classes.Foreground}>
				<div className={classes.Logo}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="124"
						height="167.764"
						viewBox="0 0 124 167.764"
					>
						<g transform="translate(-69.8 -40.2)">
							<path
								fill="#aab1bf"
								d="M111.136,43.8A39.929,39.929,0,0,0,73.869,69.329H148.4A39.929,39.929,0,0,0,111.136,43.8ZM125.28,60.224a3.662,3.662,0,0,1-3.2,1.811H100.195a3.663,3.663,0,0,1-.681-7.294h22.563a3.647,3.647,0,0,1,3.2,5.483Z"
								transform="translate(20.664 18.282)"
							/>
							<path
								fill="#fff"
								d="M124.868,70.66l-.912-2.62a7.33,7.33,0,0,0-4.674-4.559l-1.933-.565-.456-2.055a10.919,10.919,0,0,0-21.317-.225l-.912,3.647-3.532-.918a5.763,5.763,0,0,0-1.368-.225,5.39,5.39,0,0,0-5.355,4.784l-.346,2.17-2.164.8A7.162,7.162,0,0,0,77,77.729a7.238,7.238,0,0,0,7.294,7.294h43.765a7.294,7.294,0,1,0,0-14.588c.34,0,.17.073-.456.115Z"
								transform="translate(36.565 60.941)"
							/>
							<path
								fill="#628ff9"
								d="M73.4,56.494v43.765a40.074,40.074,0,0,0,79.779,5.471,14.26,14.26,0,0,1-6.838,1.824H102.576A14.631,14.631,0,0,1,87.988,92.965c0-5.7,3.647-10.273,8.437-12.649,1.623-5.173,5.939-9.233,11.622-9.233a17.829,17.829,0,0,1,33.5,1.708,14.282,14.282,0,0,1,6.157,5.811,14.706,14.706,0,0,1,5.926,1.939V56.494a40.592,40.592,0,0,0-.687-7.294H74.087A40.594,40.594,0,0,0,73.4,56.494Z"
								transform="translate(18.282 45.706)"
							/>
							<path
								fill="#aab1bf"
								d="M125.706,41.4A54.648,54.648,0,0,0,71,96.106V139.87a54.706,54.706,0,0,0,109.412,0V96.106A54.648,54.648,0,0,0,125.706,41.4Zm47.412,98.47a47.412,47.412,0,0,1-94.823,0V96.106a47.412,47.412,0,0,1,94.823,0Z"
								transform="translate(6.094 6.094)"
							/>
							<path
								d="M131.8,40.2a62.049,62.049,0,0,0-62,62v43.765a62,62,0,1,0,124,0V102.2A62.049,62.049,0,0,0,131.8,40.2Zm54.706,105.765a54.706,54.706,0,0,1-109.412,0V102.2a54.706,54.706,0,0,1,109.412,0Z"
								transform="translate(0 0)"
							/>
							<path
								d="M119.612,42.6A47.465,47.465,0,0,0,72.2,90.012v43.765a47.412,47.412,0,0,0,94.823,0V90.012A47.465,47.465,0,0,0,119.612,42.6Zm32.823,76.588a7.294,7.294,0,1,1,0,14.588H108.671a7.238,7.238,0,0,1-7.294-7.294,7.162,7.162,0,0,1,4.9-6.838l2.164-.8.346-2.17a5.39,5.39,0,0,1,5.355-4.784,5.763,5.763,0,0,1,1.368.225l3.532.918.912-3.647a10.919,10.919,0,0,1,21.317.225l.456,2.055,1.933.565a7.33,7.33,0,0,1,4.674,4.559l.912,2.62,2.735-.109C152.605,119.261,152.776,119.188,152.435,119.188Zm7.294-29.176v24.046a14.706,14.706,0,0,0-5.926-1.939,14.282,14.282,0,0,0-6.157-5.811,17.829,17.829,0,0,0-33.5-1.708c-5.683,0-10,4.06-11.622,9.233-4.79,2.377-8.437,6.954-8.437,12.649a14.631,14.631,0,0,0,14.588,14.588h43.765a14.26,14.26,0,0,0,6.838-1.824,40.074,40.074,0,0,1-79.779-5.471V90.012a40.594,40.594,0,0,1,.687-7.294h78.861A40.592,40.592,0,0,1,159.729,90.012ZM82.345,75.424a39.965,39.965,0,0,1,74.534,0Z"
								transform="translate(12.188 12.188)"
							/>
							<path
								d="M103.427,45.6H80.864a3.663,3.663,0,0,0,.681,7.294h21.882a3.647,3.647,0,1,0,0-7.294Z"
								transform="translate(39.314 27.423)"
							/>
						</g>
					</svg>
					<h1>Explorer</h1>
				</div>
				<div>
					<SearchField input={""} destination={"./searchfiled"} />
					<div className={classes.Button}>
						<Button input={"Let's explore"} destination={"./list_all"} />
					</div>
				</div>
			</div>
			<img
				className={classes.Background}
				src="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/SpaceMan.png"
				alt=""
			/>
			<div className={classes.Bar}>
				<div className={classes.BarWhite}></div>
			</div>
		</div>
	);
};
