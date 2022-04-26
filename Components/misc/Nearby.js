import styles from "../../styles/misc/Nearby.module.css";
import Image from "next/image";

export let Nearby = ({ title, image }) => {
	return (
		<a href="" className={styles.place_nearby}>
			<div className={styles.place_nearby_image}>
				<Image src={image} alt={title} layout="raw" width={166} height={166} />
			</div>
			<div className={styles.place_nearby_title}>
				<p>{title}</p>
			</div>
		</a>
	);
};
