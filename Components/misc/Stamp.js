import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/misc/Stamp.module.css";

export let Stamp = ({ image, destination }) => {
	return destination === "" ? (
		<div className={styles.stamp}></div>
	) : (
		<Link href={destination} passHref replace>
			<a className={styles.stamp}>
				<Image src={image} alt={""} layout="raw" width={110} height={110} />
			</a>
		</Link>
	);
};
