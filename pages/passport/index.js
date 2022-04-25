import Head from "next/head";
import styles from "../../styles/pages/Passport.module.css";
import { stamps } from "../../data/data";
// import { GetStaticProps } from "next";
import { TopBar } from "../../Components/Layout/TopBar";
import { BotBar } from "../../Components/Layout/BotBar";
import { Stamp } from "../../Components/misc/Stamp";

export const getStaticProps = async () => {
	const data = stamps.map((d) => ({
		id: d.id,
		image: d.image,
		destination: d.destination,
	}));
	return {
		props: {
			data,
		},
	};
};

export default function Passport({ data }) {
	console.log(data);
	return (
		<>
			<Head>
				<title>Explorer App | Passport</title>
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
					<div className={styles.image_header}>
						<div className={styles.image}>
							<img
								src="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/jane.png"
								alt=""
							></img>
						</div>
						<div className={styles.info}>
							<h6>Name</h6>
							<p>Jane Doe</p>
							<h6>Nationality</h6>
							<p>UK</p>
							<h6>Joined</h6>
							<p>20/04/14</p>
						</div>
						<hr className={styles.line}></hr>
					</div>
					<div className={styles.content}>
						{data.map((d) => (
							<div key={d.id}>
								<Stamp image={d.image} destination={d.destination} />
							</div>
						))}
					</div>
					<div className={styles.bot_bar}>
						<BotBar />
					</div>
				</div>
			</div>
		</>
	);
}
