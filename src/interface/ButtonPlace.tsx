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
  let activeState;
  if (active) {
    activeState = styles.button_active;
  } else {
    activeState = styles.button_inactive;
  }
  return (
    <a href={destination} className={activeState}>
      {input}
    </a>
  );
};

export default ButtonPlace;
