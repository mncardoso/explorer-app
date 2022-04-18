import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
	BluePostIt: {
		background: "#93a0ba",
		color: "white",
		borderRadius: "4px",
		overflow: "hidden",
		margin: "2px",
		"& div": { background: "#6d7fa2", width: "100%", height: "24px" },
		"& p": {
			margin: "4px",
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
		},
	},
	GreyPostIt: {
		background: "#919398",
		color: "white",
		borderRadius: "4px",
		overflow: "hidden",
		margin: "2px",
		"& div": { background: "#6b6d74", width: "100%", height: "24px" },
		"& p": {
			margin: "4px",
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
		},
	},
	PinkPostIt: {
		background: "#eca18d",
		color: "white",
		borderRadius: "4px",
		overflow: "hidden",
		margin: "2px",
		"& div": { background: "#db9683", width: "100%", height: "24px" },
		"& p": {
			margin: "4px",
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
		},
	},
	YellowPostIt: {
		background: "#efad27",
		color: "white",
		borderRadius: "4px",
		overflow: "hidden",
		margin: "2px",
		"& div": { background: "#e99019", width: "100%", height: "24px" },
		"& p": {
			margin: "4px",
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
		},
	},
	EmptyPostIt: {
		borderRadius: "4px",
		overflow: "hidden",
		margin: "2px",
		"& div": { width: "100%", height: "24px" },
		"& p": {
			margin: "4px",
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
		},
	},
}));

export let PostIt = ({ txt, type, props }) => {
	const classes = useStyles(props);
	let classType;
	if (type === "blue") {
		classType = classes.BluePostIt;
	} else if (type === "grey") {
		classType = classes.GreyPostIt;
	} else if (type === "pink") {
		classType = classes.PinkPostIt;
	} else if (type === "yellow") {
		classType = classes.YellowPostIt;
	} else if (type === "empty") {
		classType = classes.EmptyPostIt;
	}
	return (
		<div className={classType}>
			<div></div>
			<p>{txt}</p>
		</div>
	);
};
