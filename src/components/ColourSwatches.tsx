import styles from './ColourSwatches.module.css';

const ColourSwatches = ({ children, type }: { children: React.ReactNode; type: string }) => {
  let classType;
  if (type === 'accent') {
    classType = styles.accent_colour;
  } else if (type === 'background') {
    classType = styles.background_colour;
  } else if (type === 'seaside') {
    classType = styles.seaside_colour;
  } else if (type === 'park') {
    classType = styles.park_colour;
  } else if (type === 'city') {
    classType = styles.city_colour;
  }
  return <div className={classType}>{children}</div>;
};

export default ColourSwatches;
