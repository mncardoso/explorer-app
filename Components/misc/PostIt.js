import styles from "../../styles/misc/PostIt.module.css";

export let PostIt = ({ txt, type }) => {
	let classType;
	if (type === "blue") {
		classType = styles.BluePostIt;
	} else if (type === "grey") {
		classType = styles.GreyPostIt;
	} else if (type === "pink") {
		classType = styles.PinkPostIt;
	} else if (type === "yellow") {
		classType = styles.YellowPostIt;
	} else if (type === "empty") {
		classType = styles.EmptyPostIt;
	}
	return (
		<div className={classType}>
			<div></div>
			<p>{txt}</p>
		</div>
	);
};
