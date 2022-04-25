import Head from "next/head";
import styles from "../../styles/pages/Map.module.css";
import { TopBar } from "../../Components/Layout/TopBar";

export default function Map() {
	return (
		<>
			<Head>
				<title>Explorer App | Map</title>
				<meta name="description" content="" />
				<meta name="theme-color" content="#ffffff4d" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="content">
				<TopBar />
				<div className={styles.home}>
					<div className={styles.image}>
						<img
							src="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/maps.png"
							alt=""
						></img>
					</div>
					<a href={"javascript:history.back()"} className={styles.button}>
						Will open default map app
					</a>
				</div>
			</div>
		</>
	);
}
