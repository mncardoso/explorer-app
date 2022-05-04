import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/Moon.module.css";
import { TopBar } from "../Components/Layout/TopBar";
import { BotBar } from "../Components/Layout/BotBar";
import { ButtonPlace } from "../Components/Buttons/ButtonPlace";
import { Tag } from "../Components/misc/Tag";

function ImageLoader({ src }) {
	return `https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/explorer.assets/${src}`;
}

export default function Moon() {
	return (
		<>
			<Head>
				<title>Explorer App | Moon</title>
				<meta
					name="description"
					content="Moon Ester Egg | Explorer App is a concept of a web application for exploring the world."
				/>
				<meta name="theme-color" content="#291f63" />
			</Head>
			<div className="content">
				<TopBar />
				<div className={styles.home}>
					<div className={styles.image_header}>
						<div className={styles.distance}>
							<p>384.4 Mm</p>
						</div>
						<div className={styles.location}>
							<p>Moon</p>
						</div>
						<div className={styles.image}>
							<Image
								loader={ImageLoader}
								src={"Moon%20H.png"}
								alt="moon"
								layout="raw"
								width={414}
								height={215}
							/>
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.tags} id="tags">
							<Tag type={"time"} time={"Closed"} />
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
							<Image
								loader={ImageLoader}
								src={"Made%20By.svg"}
								alt="Made By Miguel Cardoso"
								width={298.492}
								height={40.142}
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
