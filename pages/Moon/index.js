import Head from "next/head";
import styles from "../../styles/pages/Moon.module.css";
import { destinations } from "../../data/data";
import { TopBar } from "../../Components/Layout/TopBar";
import { BotBar } from "../../Components/Layout/BotBar";
import { ButtonPlace } from "../../Components/Buttons/ButtonPlace";
import { Tag } from "../../Components/misc/Tag";

// let info = {
// 	image:
// 		"https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Moon H.png",
// 	location: "Moon",
// 	distance: "384.4 Mm",
// 	makeTags: [{ id: 0, type: "time", time: "Closed" }],
// };

// function Tags(props) {
// 	return props.tags.map((tags) => (
// 		<div key={tags.id}>
// 			<Tag type={tags.type} time={tags.time} />{" "}
// 		</div>
// 	));
// }

export const getStaticProps = async () => {
	const data = destinations.map((d) => ({
		destination: d.destination.toString(),
		image: d.image.toString(),
		location: d.location.toString(),
		type: d.type.toString(),
		distance: d.distance.toString(),
		fav: d.fav,
		tags: d.tags,
	}));
	return {
		props: {
			data,
		},
	};
};

export default function Moon({ data }) {
	return (
		<>
			<Head>
				<title>Explorer App | Moon</title>
				<meta
					name="description"
					content="Moon Ester Egg | Explorer App is a concept of a web application for exploring the world."
				/>
				<meta name="theme-color" content="#291f63" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="content">
				<TopBar />
				<div className={styles.home}>
					<div className={styles.image_header}>
						<div className={styles.distance}>
							<p>{data[9].distance}</p>
						</div>
						<div className={styles.location}>
							<p>{data[9].location}</p>
						</div>
						<div className={styles.image}>
							<img src={data[9].image} alt=""></img>
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.tags} id="tags">
							{data[9].tags.map((tags) => (
								<div key={tags.id}>
									<Tag type={tags.type} time={tags.time} />{" "}
								</div>
							))}
						</div>
						<div className={styles.buttons}>
							<ButtonPlace
								input={"Get me there"}
								destination={""}
								active={false}
							/>
							<ButtonPlace
								input={"Case Study"}
								destination={"./CaseStudy"}
								active={true}
							/>
						</div>
						<div className={styles.about}>
							<h3>About</h3>
							<p>
								There was an UX sprint proposed by Adobe UK where the
								participants had from Tuesday until Sunday to learn and
								implement all their knowledge of UX design and Adobe XD. (Learn
								my process by clicking the Case Study button)
							</p>
						</div>
						<div className={styles.made_by}>
							<img
								src="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/Made%20By.svg"
								alt=""
							></img>
						</div>
					</div>
					<div className={styles.bot_bar}>
						<BotBar />
					</div>
				</div>
			</div>
		</>
	);
}
