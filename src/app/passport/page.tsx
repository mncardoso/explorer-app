import Image from 'next/image';

import Stamp from '@/components/Stamp';

import BotBar from '@/interface/BotBar';
import TopBar from '@/interface/TopBar';

import { stamps } from '@/data/data';

import styles from './page.module.css';

function ImageLoader(src: string) {
  return `https://s3.eu-north-1.amazonaws.com/web.mc/assets.explorer/${src}`;
}

export default function Home() {
  const data = stamps.map(d => ({
    id: d.id,
    image: d.image,
    destination: d.destination,
  }));

  return (
    <div className="content">
      <TopBar />
      <div className={styles.home}>
        <div className={styles.image_header}>
          <div className={styles.image}>
            <Image
              src={ImageLoader('jane.png')}
              alt={'Jane Doe'}
              layout="intrinsic"
              width={161}
              height={161}
            />
          </div>
          <div className={styles.info}>
            <h6>Name</h6>
            <p>Jane Doe</p>
            <h6>Nationality</h6>
            <p>UK</p>
            <h6>Joined</h6>
            <p>20/04/14</p>
          </div>
          <hr className={styles.line}></hr>
        </div>
        <div className={styles.content}>
          {data.map(d => (
            <div key={d.id}>
              <Stamp image={d.image} destination={d.destination} />
            </div>
          ))}
        </div>
        <div className={styles.bot_bar}>
          <BotBar />
        </div>
      </div>
    </div>
  );
}
