import Place from '@/components/Place';

import BotBar from '@/interface/BotBar';
import SearchField from '@/interface/SearchField';
import TopBar from '@/interface/TopBar';

import { destinations } from '@/data/data';

import styles from './page.module.css';

export default function Home() {
  const data = destinations
    .map(d =>
      d.fav === true
        ? {
            destination: d.destination,
            image: d.image,
            header: d.header,
            location: d.location,
            type: d.type,
            distance: d.distance,
            fav: d.fav,
            tags: d.tags.map(t => ({ id: t.id, type: t.type, time: t.time })),
          }
        : null
    )
    .filter(d => d !== null);

  return (
    <div className="content">
      <TopBar />
      <div className={styles.home}>
        <div className={styles.top_bar}>
          <SearchField input={''} destination={'../searchfield'} />
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            {data.map(d => (
              <Place
                key={d.destination}
                destination={`./${d.destination}`}
                image={d.image}
                location={d.location}
                type={d.type}
                distance={d.distance}
                fav={d.fav}
              />
            ))}
          </div>
        </div>
        <div className={styles.bot_bar}>
          <BotBar />
        </div>
      </div>
    </div>
  );
}
