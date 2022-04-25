import styles from "../../styles/misc/Nearby.module.css";

export let Nearby = ({ title, image }) => {
	return (
		<a href="" className={styles.place_nearby}>
			<div className={styles.place_nearby_image}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.place_nearby_title}>
				<p>{title}</p>
			</div>
		</a>
	);
};
