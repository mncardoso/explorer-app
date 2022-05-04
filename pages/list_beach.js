import Head from "next/head";
import styles from "../styles/pages/ListFav.module.css";
import { destinations } from "../data/data";
import { TopBar } from "../Components/Layout/TopBar";
import { BotBar } from "../Components/Layout/BotBar";
import { SearchField } from "../Components/Layout/SearchField";
import { Place } from "../Components/misc/Place";

export const getStaticProps = async () => {
	const data = destinations
		.map((d) =>
			d.type === "seaside"
				? {
						destination: d.destination,
						image: d.image,
						header: d.header,
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
				<title>Explorer App | List Searched</title>
			</Head>
			<div className="content">
				<TopBar />
				<div className={styles.home}>
					<div className={styles.top_bar}>
						<SearchField
							input={"Somewhere that I can swim"}
							destination={"../searchfiled"}
						/>
					</div>
					<div className={styles.container}>
						<div className={styles.content}>
							{data.map((d) => (
								<Place
									key={d.destination}
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
