import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
	TopBar: {
		display: "flex",
		background: theme.palette.foreground,
		justifyContent: "space-between",
		padding: "1rem",
		paddingLeft: "0.844rem",
		paddingRight: "0.438rem",
		height: "3.063rem",
	},
	Clock: { marginLeft: "1rem", fontWeight: theme.fontWeight.Medium },
	Stats: {
		"& ul": {
			listStyleType: "none",
			display: "flex",
			gap: "0.25rem",
		},
	},
}));

let clock = () => {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;

	let timeString = `${hour}:${min}`;

	return (document.getElementById("clock").innerHTML = timeString);
};

export let TopBar = (props) => {
	const classes = useStyles(props);
	setInterval(clock, 1000);
	return (
		<div className={classes.TopBar}>
			<div className={classes.Clock}>
				<div id="clock"></div>
			</div>
			<div className={classes.Stats}>
				<ul>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18.768"
							height="11.776"
							viewBox="0 0 18.768 11.776"
						>
							<path
								fill="#fff"
								d="M17.664,11.776h-1.1a1.105,1.105,0,0,1-1.1-1.1V1.1A1.105,1.105,0,0,1,16.56,0h1.1a1.105,1.105,0,0,1,1.1,1.1v9.568A1.105,1.105,0,0,1,17.664,11.776Zm-5.152,0h-1.1a1.105,1.105,0,0,1-1.1-1.1V3.68a1.105,1.105,0,0,1,1.1-1.1h1.1a1.105,1.105,0,0,1,1.1,1.1v6.992A1.105,1.105,0,0,1,12.512,11.776Zm-5.153,0h-1.1a1.105,1.105,0,0,1-1.1-1.1V6.256a1.105,1.105,0,0,1,1.1-1.1h1.1a1.106,1.106,0,0,1,1.1,1.1v4.417A1.106,1.106,0,0,1,7.36,11.776Zm-5.152,0H1.1a1.105,1.105,0,0,1-1.1-1.1V8.464a1.106,1.106,0,0,1,1.1-1.1h1.1a1.106,1.106,0,0,1,1.1,1.1v2.208A1.105,1.105,0,0,1,2.208,11.776Z"
							/>
						</svg>
					</li>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16.928"
							height="12.144"
							viewBox="0 0 16.928 12.144"
						>
							<path
								fill="#fff"
								d="M8.464,12.144a.346.346,0,0,1-.245-.1L6,9.809a.342.342,0,0,1-.1-.255.348.348,0,0,1,.114-.25,3.794,3.794,0,0,1,4.9,0,.347.347,0,0,1,.01.506L8.71,12.041A.346.346,0,0,1,8.464,12.144Zm3.889-3.918a.346.346,0,0,1-.237-.094,5.441,5.441,0,0,0-7.3,0,.346.346,0,0,1-.237.094.341.341,0,0,1-.242-.1L3.056,6.833a.355.355,0,0,1,0-.508,7.94,7.94,0,0,1,10.809,0,.356.356,0,0,1,.109.253.352.352,0,0,1-.1.254L12.6,8.126A.341.341,0,0,1,12.353,8.226ZM15.3,5.253a.337.337,0,0,1-.237-.1,9.583,9.583,0,0,0-13.2,0,.339.339,0,0,1-.48,0L.1,3.86a.356.356,0,0,1,0-.5,12.086,12.086,0,0,1,16.715,0,.356.356,0,0,1,0,.5L15.543,5.152A.338.338,0,0,1,15.3,5.253Z"
							/>
						</svg>
					</li>
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="26.858"
							height="12.512"
							viewBox="0 0 26.858 12.512"
						>
							<rect
								fill="none"
								stroke="none"
								stroke-miterlimit="10"
								width="24.288"
								height="12.512"
								rx="2.667"
							/>
							<rect
								fill="none"
								stroke="#fff"
								stroke-miterlimit="10"
								opacity="0.35"
								x="0.5"
								y="0.5"
								width="23.288"
								height="11.512"
								rx="2.167"
							/>
							<path
								fill="#fff"
								opacity="0.4"
								d="M0,0V4.416A2.4,2.4,0,0,0,1.466,2.208,2.4,2.4,0,0,0,0,0"
								transform="translate(25.392 4.048)"
							/>
							<rect
								fill="#fff"
								width="19.872"
								height="8.096"
								rx="1.333"
								transform="translate(2.208 2.208)"
							/>
						</svg>
					</li>
				</ul>
			</div>
		</div>
	);
};
