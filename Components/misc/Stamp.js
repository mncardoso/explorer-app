import styles from "../../styles/misc/Stamp.module.css";
import Image from "next/image";

export let Stamp = ({ image, destination }) => {
	return destination === "" ? (
		<div className={styles.stamp}></div>
	) : (
		<a href={destination} className={styles.stamp}>
			<Image src={image} alt={""} layout="raw" width={110} height={110} />
		</a>
	);
};
