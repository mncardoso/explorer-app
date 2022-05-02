import Head from "next/head";
import Image from "next/image";
import { PostIt } from "../Components/misc/PostIt.js";
import { ColourSwatches } from "../Components/misc/ColourSwatches.js";
import { ButtonPlace } from "../Components/Buttons/ButtonPlace.js";
import styles from "../styles/pages/CaseStudy.module.css";

function ImageLoader({ src }) {
	return `https://s3.eu-north-1.amazonaws.com/web.mc/assets.explorer/${src}`;
}

function TwitterImageLoader({ src }) {
	return `https://pbs.twimg.com/profile_images/${src}`;
}

export default function Home() {
	return (
		<>
			<Head>
				<title>Explorer App | Case Study</title>
				<meta
					name="description"
					content="Case Study for Explorer App | Explorer App is a concept of a web application for exploring the world."
				/>
				<meta name="theme-color" content="#fffbf2" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.case_study}>
				<div className={styles.home}>
					<div className={styles.title}>
						<h1>Explorer App Case Study #adobexdmasterclass</h1>
					</div>
					<div className={styles.challenge}>
						<h2>Challenge</h2>
						<p>
							The challenge was to create a local travel app for any device.
						</p>
						<h2>About</h2>
						<p>
							There was an UX sprint proposed by Adobe UK where the
							participantsb had from Tuesday until Sunday to learn and apply all
							their knowledge of UX Design and Adobe XD.
						</p>
					</div>
					<div className={styles.features_research}>
						<h2>Features and User Research</h2>
						<p>
							Based on the features and the user reserch provided, I had to
							develop a wireframe to find out the position and space each
							element needed for the screen size (I went an iPhone as it would
							be the smallest screen size that the app would work on)
						</p>
						<div className={styles.features}>
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
						<div className={styles.user_research}>
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
					<div className={styles.mood_board}>
						<h2>Mood Board</h2>
						<p>
							For inspiration I selected a couple of images from different types
							of locations (seaside, forest/parks and city) as that would set
							the mood for the colour palette. I also chose a passport and some
							stamps for the look of the app, as if it were a digital passport
							with a stamp for every location visited.
						</p>
						<div className={styles.mood_board_img}>
							<Image
								loader={ImageLoader}
								src={"mood_board.png"}
								alt="Mood board"
								layout="responsive"
								width={1285}
								height={751}
							/>
						</div>
					</div>
					<div className={styles.colours}>
						<h2>Colours</h2>
						<div className={styles.colours_signature}>
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
						<div className={styles.colours_location}>
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
					<div className={styles.design}>
						<h2>Design</h2>
						<div className={styles.design_img}>
							<Image
								loader={ImageLoader}
								src="design.png"
								alt="Design"
								layout="responsive"
								width={1285}
								height={723}
							/>
						</div>
					</div>
					<div className={styles.conclusion}>
						<h2>Conclusion</h2>
						<p>
							I really enjoined working on this project as taking part in this
							challenge. I believe this app works as a proof of concept, but it
							would need more research on possible APIs that share information
							on points of interest (like google maps, trip advisor, yelp) in
							order to find out what tags they use to get a better insight on
							each location, not only for the type of location but also for the
							accessibilities and restrictions the location has.
						</p>
					</div>
					<div className={styles.feedback}>
						<h2>Feedback</h2>
						<a
							href="https://twitter.com/ux_patricia"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								loader={TwitterImageLoader}
								src={"1126446972880207876/GVtXo5V4_400x400.png"}
								alt="Patricia Reiners"
								layout="raw"
								width={400}
								height={400}
							/>
						</a>
						<div>
							<h3>Patricia Reiners</h3>
							<p>
								“Love to see how you explained each step of the process! Really
								great work 🎊”
							</p>
						</div>
					</div>
					<div className={styles.footer}>
						<ButtonPlace
							destination={"../"}
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
		</>
	);
}
