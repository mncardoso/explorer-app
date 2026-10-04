import Link from 'next/link';

import styles from './ButtonPlace.module.css';

const ButtonPlace = ({
  input,
  destination,
  active,
}: {
  input: string;
  destination: string;
  active: boolean;
}) => {
  const activeState = active ? styles.button_active : styles.button_inactive;

  if (!destination) {
    return <span className={activeState}>{input}</span>;
  }

  if (destination.startsWith('http')) {
    return (
      <a href={destination} className={activeState} target="_blank" rel="noreferrer">
        {input}
      </a>
    );
  }

  return (
    <Link href={destination} className={activeState}>
      {input}
    </Link>
  );
};

export default ButtonPlace;
