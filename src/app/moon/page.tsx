import Image from 'next/image';

import Tag from '@/components/Tag';

import BotBar from '@/interface/BotBar';
import ButtonPlace from '@/interface/ButtonPlace';
import TopBar from '@/interface/TopBar';

import { destinations } from '@/data/data';

import styles from './page.module.css';

function ImageLoader(src: string) {
  return `https://s3.eu-north-1.amazonaws.com/web.mc/assets.explorer/${src}`;
}

export default function Home() {
  const data = destinations.map(d => ({
    destination: d.destination,
    image: d.image,
    header: d.header,
    location: d.location,
    type: d.type,
    distance: d.distance,
    fav: d.fav,
    tags: d.tags.map(t => ({ id: t.id, type: t.type, time: t.time })),
  }));
  return (
    <div className="content">
      <TopBar />
      <div className={styles.home}>
        <div className={styles.image_header}>
          <div className={styles.distance}>
            <p>384.4 Mm</p>
          </div>
          <div className={styles.location}>
            <p>Moon</p>
          </div>
          <div className={styles.image}>
            <Image
              src={ImageLoader('placese/moon_header.png')}
              alt="moon"
              layout="raw"
              width={414}
              height={215}
            />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.tags} id="tags">
            <Tag type={'time'} time={'Closed'} />
          </div>
          <div className={styles.buttons}>
            <ButtonPlace input={'Get me there'} destination={''} active={false} />
            <ButtonPlace input={'Case Study'} destination={'../CaseStudy'} active={true} />
          </div>
          <div className={styles.about}>
            <h3>About</h3>
            <p>
              There was an UX sprint proposed by Adobe UK where the participants had from Tuesday
              until Sunday to learn and implement all their knowledge of UX design and Adobe XD.
              (Learn my process by clicking the Case Study button)
            </p>
          </div>
          <div className={styles.made_by}>
            <Image
              src={ImageLoader('made_by.svg')}
              alt="Made By Miguel Cardoso"
              width={298.492}
              height={40.142}
            />
          </div>
        </div>
        <div className={styles.bot_bar}>
          <BotBar />
        </div>
      </div>
    </div>
  );
}
