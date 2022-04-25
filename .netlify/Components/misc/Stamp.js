import styles from "../../styles/misc/Stamp.module.css";

export let Stamp = (image, destination) => {
	return destination === "" ? (
		<div className={styles.stamp}></div>
	) : (
		<a href={destination} className={styles.stamp}>
			<img src={image} alt="" />
		</a>
	);
};
