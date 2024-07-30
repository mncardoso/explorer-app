import Image from 'next/image';

import styles from './Stamp.module.css';

const Stamp = ({ image, destination }: { image: any; destination: string }) => {
  return destination === '' ? (
    <div className={styles.stamp}></div>
  ) : (
    <a href={destination} className={styles.stamp}>
      <Image src={image} alt={''} layout="raw" width={110} height={110} />
    </a>
  );
};

export default Stamp;
