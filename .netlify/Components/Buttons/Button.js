import styles from "../../styles/Buttons/Button.module.css";

export let Button = ({ input, destination }) => {
	return (
		<a href={destination} className={styles.button}>
			{input}
		</a>
	);
};
