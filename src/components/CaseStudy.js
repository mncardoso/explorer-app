import { createUseStyles } from "react-jss";
import { PostIt } from "./PostIt";
import { ColourSwatches } from "./ColourSwatches";
import { Button } from "./Button";
import { ButtonPlace } from "./ButtonPlace";

const useStyles = createUseStyles((theme) => ({
	CaseStudy: {
		position: "absolute",
		top: 0,
		left: 0,
		background: theme.palette.background,
		padding: "1rem",
		height: "100vh",
		width: "100vw",
		zIndex: 120,
		overflow: "auto",
	},
	Home: {
		maxWidth: "1098px",
		display: "grid",
		margin: "0 auto",
		background: theme.palette.background,
		justifyContent: "space-between",
		gap: "1.5rem",
		"&  *": { color: "black" },
	},
	Title: {
		fontSize: "1.75rem",
		fontWeight: theme.fontWeight.Bold,
	},
	Challenge: {
		"& > h2": {
			fontSize: "1.5rem",
			fontWeight: theme.fontWeight.Bold,
		},
		"& > p": {
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
			margin: "0.25rem 0 0.5rem 5rem ",
		},
	},
	FeaturesResearch: {
		"& > h2": {
			fontSize: "1.5rem",
			fontWeight: theme.fontWeight.Bold,
		},
		"& > p": {
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
			margin: "0.25rem 0 0.5rem 5rem ",
		},
	},
	Features: {
		display: "grid",
		gap: "1rem",
		"& > h3": {
			fontSize: "1.25rem",
			fontWeight: theme.fontWeight.Bold,
		},
		"& > div": {
			display: "grid",
			gridTemplateColumns: "repeat(5, 1fr)",
			gridTemplateRows: "repeat(4, 1fr)",
		},
	},
	UserResearch: {
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		gap: "1rem",
		"& > h3": {
			gridColumn: "1 / span all",
			fontSize: "1.25rem",
			fontWeight: theme.fontWeight.Bold,
		},
		"& > div": {
			display: "grid",
			gridTemplateColumns: "repeat(2, 1fr)",
			gridTemplateRows: "auto repeat(3, 1fr)",
			"& > p": {
				gridColumn: "1 / span 2",
				fontSize: "1rem",
				fontWeight: theme.fontWeight.Medium,
			},
		},
	},
	MoodBoard: {
		"& > h2": {
			fontSize: "1.5rem",
			fontWeight: theme.fontWeight.Bold,
		},
		"& > p": {
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
			margin: "0.25rem 0 0.5rem 5rem ",
		},
		"& img": {
			width: "calc(100% - 12px)",
			padding: "1rem",
			borderRadius: "4px",
			marginTop: "6px",
			outline: "2px solid #735645",
			border: "2px dashed #735645",
			outlineOffset: "4px",
			transform: "translateX(6px)",
		},
	},
	Colours: {
		display: "grid",
		gridTemplateColumns: "2fr  3fr",
		"& > h2": { gridColumn: "1 / span all" },
		"& > div": {
			display: "grid",
			gridTemplateRows: "1.5rem",
			gap: "0.25rem",
			"& > p": {
				fontSize: "1rem",
				fontWeight: theme.fontWeight.Medium,
				margin: "0.25rem 0 0.5rem 0 ",
			},
		},
	},
	ColoursSignature: {
		gridTemplateColumns: "repeat(2, 1fr)",
		"& > p": { gridColumn: "1 / span all" },
	},
	ColoursLocation: {
		gridTemplateColumns: "repeat(3, 1fr)",
		"& > p": { gridColumn: "1 / span all" },
	},
	Design: {
		"& > h2": {
			fontSize: "1.5rem",
			fontWeight: theme.fontWeight.Bold,
		},
		"& img": {
			width: "calc(100% - 12px)",
			borderRadius: "4px",
			marginTop: "6px",
			outline: "2px solid #735645",
			border: "2px dashed #735645",
			outlineOffset: "4px",
			transform: "translateX(6px)",
		},
	},
	Conclusion: {
		"& > h2": {
			fontSize: "1.5rem",
			fontWeight: theme.fontWeight.Bold,
		},
		"& > p": {
			fontSize: "1rem",
			fontWeight: theme.fontWeight.Medium,
			margin: "0.25rem 0 0.5rem 5rem ",
		},
	},
	Feedback: {
		display: "grid",
		gridTemplateColumns: "128px 1fr",
		gap: "16px",
		"& > h2": { gridColumn: "1 / span all" },
		"& img": {
			width: "100%",
			borderRadius: "100%",
			boxShadow: "2px 2px 2px 2px rgb(0 0 0 / 20%)",
		},
		"& > div": {
			alignSelf: "end",
			"& > h3": {
				fontSize: "1.25rem",
				fontWeight: theme.fontWeight.Bold,
			},
			"& > p": {
				fontSize: "1rem",
				fontWeight: theme.fontWeight.Medium,
			},
		},
	},
	Footer: {
		display: "flex",
		width: "100%",
		justifyContent: "center",
		"& > a": { color: theme.palette.text, margin: "0 0.5rem" },
	},
}));

export let CaseStudy = (props) => {
	const classes = useStyles(props);
	document.title = "Explorer App | Case Study";
	document.getElementsByTagName("META")[2].content =
		"Case Study for Explorer App | Explorer App is a concept of a web application for exploring the world.";
	document.getElementsByTagName("META")[3].content = "#fffbf2";
	return (
		<div className={classes.CaseStudy}>
			<div className={classes.Home}>
				<div className={classes.Title}>
					<h1>Explorer App Case Study #adobexdmasterclass</h1>
				</div>
				<div className={classes.Challenge}>
					<h2>Challenge</h2>
					<p>The challenge was to create a local travel app for any device.</p>
					<h2>About</h2>
					<p>
						There was an UX sprint proposed by Adobe UK where the participantsb
						had from Tuesday until Sunday to learn and apply all their knowledge
						of UX Design and Adobe XD.
					</p>
				</div>
				<div className={classes.FeaturesResearch}>
					<h2>Features and User Research</h2>
					<p>
						Based on the features and the user reserch provided, I had to
						develop a wireframe to find out the position and space each element
						needed for the screen size (I went an iPhone as it would be the
						smallest screen size that the app would work on)
					</p>
					<div className={classes.Features}>
						<h3>Features</h3>
						<div>
							<PostIt txt={"Search function"} type={"blue"} />
							<PostIt txt={"Past travels"} type={"blue"} />
							<PostIt txt={"Places"} type={"blue"} />
							<PostIt txt={"Bookmarks"} type={"blue"} />
							<PostIt txt={"Searching"} type={"blue"} />

							<PostIt txt={"Overview about all the options"} type={"blue"} />
							<PostIt txt={"Digital passport"} type={"grey"} />
							<PostIt txt={"Traveling with kids"} type={"grey"} />
							<PostIt txt={"Favorite places"} type={"grey"} />
							<PostIt txt={"Travel mood contextual search"} type={"grey"} />

							<PostIt txt={""} type={"empty"} />
							<PostIt txt={""} type={"empty"} />
							<PostIt txt={"Possible activities"} type={"grey"} />
							<PostIt txt={""} type={"empty"} />
							<PostIt txt={""} type={"empty"} />

							<PostIt txt={""} type={"empty"} />
							<PostIt txt={""} type={"empty"} />
							<PostIt txt={"Disabilities"} type={"grey"} />
							<PostIt txt={""} type={"empty"} />
							<PostIt txt={""} type={"empty"} />
						</div>
					</div>
					<div className={classes.UserResearch}>
						<h3>User Research</h3>
						<div>
							<p>Pain points</p>
							<PostIt
								txt={"Many people don't know about the most beautiful places"}
								type={"pink"}
							/>
							<PostIt
								txt={
									"Travel options are difficult to find (train, bike, car etc.)"
								}
								type={"pink"}
							/>
							<PostIt
								txt={
									"Weekend trips are often planned and booked spontaneously and involve a lot of organization"
								}
								type={"pink"}
							/>
							<PostIt
								txt={"Many options, it's hard to choose one"}
								type={"pink"}
							/>
							<PostIt txt={""} type={"empty"} />
							<PostIt
								txt={
									"The user needs to check different websites to get all information"
								}
								type={"pink"}
							/>
						</div>
						<div>
							<p>Questions</p>
							<PostIt
								txt={"How do I find a travel option for the weekend"}
								type={"yellow"}
							/>
							<PostIt
								txt={"Where are great places for outdoor camping?"}
								type={"yellow"}
							/>
							<PostIt
								txt={"How do I find places for families with kids"}
								type={"yellow"}
							/>
							<PostIt
								txt={"Where are great places for hiking?"}
								type={"yellow"}
							/>
							<PostIt
								txt={
									"How do I find places that are easily accessible by public transport?"
								}
								type={"yellow"}
							/>
							<PostIt txt={""} type={"empty"} />
						</div>
					</div>
				</div>
				<div className={classes.MoodBoard}>
					<h2>Mood Board</h2>{" "}
					<p>
						For inspiration I selected a couple of images from different types
						of locations (seaside, forest/parks and city) as that would set the
						mood for the colour palette. I also chose a passport and some stamps
						for the look of the app, as if it were a digital passport with a
						stamp for every location visited.
					</p>
					<img
						src="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/assets/expMoodBoard.png"
						alt="Mood board"
					></img>
				</div>
				<div className={classes.Colours}>
					<h2>Colours</h2>

					<div className={classes.ColoursSignature}>
						<p>Signature colours</p>
						<ColourSwatches type={"accent"}>
							<p>#D96E1E</p>
							<p>Accent colour</p>
						</ColourSwatches>
						<ColourSwatches type={"background"}>
							<p>#FFFBF2</p>
							<p>Background colour</p>
						</ColourSwatches>
					</div>

					<div className={classes.ColoursLocation}>
						<p>Location colours</p>
						<ColourSwatches type={"seaside"}>
							<p>#1EC6D9</p>
							<p>Seaside colour</p>
						</ColourSwatches>
						<ColourSwatches type={"park"}>
							<p>#768C45</p>
							<p>Forest/Parks colour</p>
						</ColourSwatches>
						<ColourSwatches type={"city"}>
							<p>#BF9A78</p>
							<p>City colour</p>
						</ColourSwatches>
					</div>
				</div>
				<div className={classes.Design}>
					<h2>Design</h2>
					<img
						src="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/assets/expDesign.png"
						alt="Design"
					></img>
				</div>
				<div className={classes.Conclusion}>
					<h2>Conclusion</h2>
					<p>
						I really enjoined working on this project as taking part in this
						challenge. I believe this app works as a proof of concept, but it
						would need more research on possible APIs that share information on
						points of interest (like google maps, trip advisor, yelp) in order
						to find out what tags they use to get a better insight on each
						location, not only for the type of location but also for the
						accessibilities and restrictions the location has.
					</p>
				</div>
				<div className={classes.Feedback}>
					<h2>Feedback</h2>
					<a href="https://twitter.com/ux_patricia" target="_blank">
						<img src="https://pbs.twimg.com/profile_images/1126446972880207876/GVtXo5V4_400x400.png"></img>
					</a>
					<div>
						<h3>Patricia Reiners</h3>
						<p>
							“Love to see how you explained each step of the process! Really
							great work 🎊”
						</p>
					</div>
				</div>
				<div className={classes.Footer}>
					<ButtonPlace
						destination={"./"}
						input={"Back to home screen"}
						active={true}
					/>
					<ButtonPlace
						destination={"https://miguel-cardoso.com"}
						input={"Portfolio"}
						active={true}
					/>
				</div>
			</div>
		</div>
	);
};
