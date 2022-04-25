import { Tag } from "../../Components/misc/Tag";

function Tags(props) {
	return props.tags.map((tags) => (
		<div key={tags.id}>
			<Tag type={tags.type} time={tags.time} />
		</div>
	));
}

function NearbyPlaces(props) {
	return props.plasses.map((plasses) => (
		<div key={plasses.id}>
			<Nearby title={plasses.title} image={plasses.image} />
		</div>
	));
}

function Stamps(props) {
	return props.stamps.map((stamp) => (
		<div key={stamp.id}>
			{console.log(stamp.destination)}
			<Stamp image={stamp.image} destination={stamp.destination} />
		</div>
	));
}
