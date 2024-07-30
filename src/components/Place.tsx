import Image from 'next/image';

import styles from './Place.module.css';

const Place = ({
  destination,
  image,
  location,
  distance,
  type,
  fav = false,
}: {
  destination: string;
  image: string;
  location: string;
  distance: string;
  type: string;
  fav?: boolean;
}) => {
  const star = fav ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="13.582" height="13" viewBox="0 0 13.582 13">
      <path
        fill="#fff"
        d="M7.5.451,5.846,3.813l-3.709.541A.813.813,0,0,0,1.688,5.74L4.371,8.354l-.635,3.694a.812.812,0,0,0,1.178.856L8.233,11.16,11.551,12.9a.813.813,0,0,0,1.178-.856l-.635-3.694L14.777,5.74a.813.813,0,0,0-.449-1.386l-3.709-.541L8.961.451A.813.813,0,0,0,7.5.451Z"
        transform="translate(-1.441 0.001)"
      ></path>
    </svg>
  ) : (
    ''
  );

  let locationType = styles.name;
  if (type === 'city') {
    locationType = styles.city;
  } else if (type === 'seaside') {
    locationType = styles.seaside;
  } else if (type === 'park') {
    locationType = styles.park;
  }

  return (
    <a href={destination} className={styles.place}>
      <div className={styles.star}>{star}</div>
      <div className={styles.distance}>
        <p>{distance}</p>
      </div>
      <div className={locationType}>
        <p>{location}</p>
      </div>
      <div className={styles.image}>
        <Image src={image} alt={''} layout="raw" width={166} height={166} />
      </div>
    </a>
  );
};

export default Place;
