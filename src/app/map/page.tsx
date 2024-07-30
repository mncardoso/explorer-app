import Image from 'next/image';

import styles from './page.module.css';

function ImageLoader(src: string) {
  return `https://s3.eu-north-1.amazonaws.com/web.mc/assets.explorer/${src}`;
}

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.image}>
        <Image src={ImageLoader('maps.png')} alt="map" layout="raw" width={581} height={1259} />
      </div>
      <a href={'javascript:history.back()'} className={styles.button}>
        Will open default map app
      </a>
    </div>
  );
}
