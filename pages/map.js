import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/Map.module.css";

function ImageLoader({ src }) {
	return `https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/${src}`;
}

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
				<div className={styles.home}>
					<div className={styles.image}>
						<Image
							loader={ImageLoader}
							src="maps.png"
							alt="map"
							layout="raw"
							width={581}
							height={1259}
						/>
					</div>
					<Link href={"javascript:history.back()"} passHref replace>
						<a className={styles.button}>Will open default map app</a>
					</Link>
				</div>
			</div>
		</>
	);
}
