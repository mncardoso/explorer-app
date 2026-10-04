import Image from 'next/image';
import Link from 'next/link';

import styles from './Stamp.module.css';

const Stamp = ({ image, destination }: { image: string; destination: string }) => {
  return destination === '' ? (
    <div className={styles.stamp}></div>
  ) : (
    <Link href={destination} className={styles.stamp}>
      <Image src={image} alt="" width={110} height={110} style={{ width: '100%', height: 'auto' }} />
    </Link>
  );
};

export default Stamp;
