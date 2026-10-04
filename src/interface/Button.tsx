import Link from 'next/link';

import styles from './Button.module.css';

const Button = ({ input, destination }: { input: string; destination: string }) => {
  return (
    <Link href={destination} className={styles.button}>
      {input}
    </Link>
  );
};

export default Button;
