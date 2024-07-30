import Image from 'next/image';

import styles from './Nearby.module.css';

const Nearby = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className={styles.place_nearby}>
      <div className={styles.place_nearby_image}>
        <Image src={image} alt={title} layout="raw" width={166} height={166} />
      </div>
      <div className={styles.place_nearby_title}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Nearby;
