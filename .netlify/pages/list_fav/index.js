import Head from "next/head";
import styles from "../../styles/pages/ListFav.module.css";
import { destinations } from "../../data/data";
import { TopBar } from "../../Components/Layout/TopBar";
import { BotBar } from "../../Components/Layout/BotBar";
import { SearchField } from "../../Components/Layout/SearchField";
import { Place } from "../../Components/misc/Place";

export const getStaticProps = async () => {
	const data = destinations
		.map((d) =>
			d.fav === true
				? {
						destination: d.destination,
						image: d.image,
						location: d.location,
						type: d.type,
						distance: d.distance,
						fav: d.fav,
						tags: d.tags.map((t) => ({ id: t.id, type: t.type, time: t.time })),
				  }
				: null
		)
		.filter((d) => d !== null);
	return {
		props: {
			data,
		},
	};
};

export default function Home({ data }) {
	return (
		<>
			<Head>
				<title>Explorer App | List Fav</title>
				<meta
					name="description"
					content="Explorer App is a concept of a web application for exploring the world."
				/>
				<meta name="theme-color" content="#d96e1e" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="content">
				<TopBar />
				<div className={styles.home}>
					<div className={styles.top_bar}>
						<SearchField input={""} destination={"./searchfiled"} />
					</div>
					<div className={styles.container}>
						<div className={styles.content}>
							{data.map((d) => (
								<Place
									destination={`./${d.destination}`}
									image={d.image}
									location={d.location}
									type={d.type}
									distance={d.distance}
									fav={d.fav}
								/>
							))}
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
