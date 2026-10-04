'use client';

import Image from 'next/image';

import styles from './page.module.css';

function ImageLoader(src: string) {
  return `https://s3.eu-north-1.amazonaws.com/web.mc/assets.explorer/${src}`;
}

export default function MapPage() {
  return (
    <div className={styles.home}>
      <div className={styles.image}>
        <Image
          src={ImageLoader('maps.png')}
          alt="map"
          fill
          sizes="(max-width: 28rem) 100vw, 28rem"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <button type="button" onClick={() => history.back()} className={styles.button}>
        Will open default map app
      </button>
    </div>
  );
}
