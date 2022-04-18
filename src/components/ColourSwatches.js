import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
	AccentColour: {
		backgroundColor: "#D96E1E",
		borderRadius: "4px",
		overflow: "hidden",
		margin: "12px 8px 0 8px",
		height: "128px",
		padding: "4px",
		outline: "2px solid #735645",
		border: "2px dashed #735645",
		outlineOffset: "4px",
		"& p": {
			color: "white",
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
		},
	},
	BackgroundColour: {
		backgroundColor: "#FFFBF2",
		borderRadius: "4px",
		overflow: "hidden",
		margin: "12px 8px 0 8px",
		height: "128px",
		padding: "4px",
		outline: "2px solid #735645",
		border: "2px dashed #735645",
		outlineOffset: "4px",
		"& p": {
			color: "black",
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
		},
	},
	SeasideColour: {
		backgroundColor: "#1EC6D9",
		borderRadius: "4px",
		overflow: "hidden",
		margin: "12px 8px 0 8px",
		height: "128px",
		padding: "4px",
		outline: "2px solid #735645",
		border: "2px dashed #735645",
		outlineOffset: "4px",
		"& p": {
			color: "white",
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
		},
	},
	ParkColour: {
		backgroundColor: "#768C45",
		borderRadius: "4px",
		overflow: "hidden",
		margin: "12px 8px 0 8px",
		height: "128px",
		padding: "4px",
		outline: "2px solid #735645",
		border: "2px dashed #735645",
		outlineOffset: "4px",
		"& p": {
			color: "white",
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
		},
	},
	CityColour: {
		backgroundColor: "#BF9A78",
		borderRadius: "4px",
		overflow: "hidden",
		margin: "12px 8px 0 8px",
		height: "128px",
		padding: "4px",
		outline: "2px solid #735645",
		border: "2px dashed #735645",
		outlineOffset: "4px",
		"& p": {
			color: "white",
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
		},
	},
}));

export let ColourSwatches = ({ children, type, props }) => {
	const classes = useStyles(props);
	let classType;
	if (type === "accent") {
		classType = classes.AccentColour;
	} else if (type === "background") {
		classType = classes.BackgroundColour;
	} else if (type === "seaside") {
		classType = classes.SeasideColour;
	} else if (type === "park") {
		classType = classes.ParkColour;
	} else if (type === "city") {
		classType = classes.CityColour;
	}
	return <div className={classType}>{children}</div>;
};

// #D96E1E => Accent colour
// #FFFBF2 => Background colour

// #1EC6D9 => Seaside colour
// #768C45 => Forest/Parks colour
// #BF9A78 => City colour
