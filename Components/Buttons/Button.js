import Link from "next/link";
import styles from "../../styles/Buttons/Button.module.css";

export let Button = ({ input, destination }) => {
	return (
		<Link href={destination} passHref replace>
			<a className={styles.button}>{input}</a>
		</Link>
	);
};
