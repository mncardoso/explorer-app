import Head from "next/head";
import { withRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/pages/Place.module.css";
import { destinations, near_by } from "../data/data";
import { TopBar } from "../Components/Layout/TopBar";
import { BotBar } from "../Components/Layout/BotBar";
import { ButtonPlace } from "../Components/Buttons/ButtonPlace";
import { Tag } from "../Components/misc/Tag";
import { Nearby } from "../Components/misc/Nearby";

export const getStaticProps = async (context) => {
	const data = destinations
		.map((d) =>
			d.destination === context.params.place
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

export const getStaticPaths = async () => {
	const paths = destinations.map((d) => ({
		params: { place: d.destination.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
};

function Page({ data }) {
	return (
		<>
			<Head>
				<title>Explorer App | {data[0].location}</title>
			</Head>
			<div className="content">
				<TopBar />
				<div className={styles.home}>
					<div className={styles.image_header}>
						<div className={styles.distance}>
							<p>{data[0].distance}</p>
						</div>
						<div className={styles.location}>
							<p>{data[0].location}</p>
						</div>
						<div className={styles.image}>
							<Image
								src={data[0].header}
								alt="moon"
								layout="raw"
								width={414}
								height={215}
							/>
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.tags} id="tags">
							{data[0].tags.map((d) => (
								<Tag key={d.type} type={d.type} time={d.time} />
							))}
						</div>
						<div className={styles.buttons}>
							<ButtonPlace
								input={"Get me there"}
								destination={"./map"}
								active={true}
							/>
							<ButtonPlace
								input={"Get Stamp"}
								destination={""}
								active={false}
							/>
						</div>
						<div className={styles.nearby}>
							<h3>Nearby</h3>
							<div className={styles.nearby_list}>
								{near_by.map((d) => (
									<div key={d.id}>
										<Nearby title={d.title} image={d.image} />
									</div>
								))}
							</div>
						</div>
						<div className={styles.about}>
							<h3>About</h3>
							<p>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat, sed diam voluptua. At vero eos et accusam et
								justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
								takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
								dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
								eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
								sed diam voluptua. At vero eos et accusam et justo duo dolores
								et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
								est Lorem ipsum dolor sit amet.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat, sed diam voluptua. At vero eos et accusam et
								justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
								takimata sanctus est Lorem ipsum dolor sit amet. Lorem
							</p>
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

export default withRouter(Page);
