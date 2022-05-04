import Head from "next/head";
import styles from "../styles/pages/ListFav.module.css";
import { destinations } from "../data/data";
import { TopBar } from "../Components/Layout/TopBar";
import { BotBar } from "../Components/Layout/BotBar";
import { SearchField } from "../Components/Layout/SearchField";
import { Place } from "../Components/misc/Place";

export const getStaticProps = async () => {
	const data = destinations.map((d) => ({
		destination: d.destination,
		image: d.image,
		header: d.header,
		location: d.location,
		type: d.type,
		distance: d.distance,
		fav: d.fav,
		tags: d.tags.map((t) => ({ id: t.id, type: t.type, time: t.time })),
	}));
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
			</Head>
			<div className="content">
				<TopBar />
				<div className={styles.home}>
					<div className={styles.top_bar}>
						<SearchField input={""} destination={"../searchfiled"} />
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
							<Place
								key="Moon"
								destination="../Moon"
								image="https://s3.eu-north-1.amazonaws.com/web.mc/assets.explorer/placese/moon.png"
								location="Moon"
								type="city"
								distance="384.4 Mm"
								fav={false}
							/>
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
