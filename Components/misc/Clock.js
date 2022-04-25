import { useEffect, useState } from "react";

let preTime = new Date();
let preHour = preTime.getHours();
let preMin = preTime.getMinutes();

preHour = preHour < 10 ? "0" + preHour : preHour;
preMin = preMin < 10 ? "0" + preMin : preMin;

export let Clock = () => {
	let [time, setTime] = useState(`${preHour}:${preMin}`);
	useEffect(() => {
		let interval = setInterval(() => {
			let time = new Date();
			let hour = time.getHours();
			let min = time.getMinutes();

			hour = hour < 10 ? "0" + hour : hour;
			min = min < 10 ? "0" + min : min;

			setTime(`${hour}:${min}`);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return <p>{time}</p>;
};
