import styles from './Tag.module.css';

const Tag = ({ type, time }: { type: string; time?: string }) => {
  switch (type) {
    case 'wheelchair':
      return (
        <div className={styles.tag}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 13.125 15">
              <path
                fill="#fff"
                d="M6.875,3.22a1.25,1.25,0,1,0-1.25-1.25A1.251,1.251,0,0,0,6.875,3.22Zm.883,11.461A3.885,3.885,0,0,1,3.9,10.763,3.93,3.93,0,0,1,5.253,7.8L5.185,6.572A4.959,4.959,0,0,0,7.757,15.72a5.122,5.122,0,0,0,4.5-3.125l-.743-1.023a3.861,3.861,0,0,1-3.755,3.108Zm7.623-2.4h-.625l-2.5-3.438c-.135-.238-.625-.938-1.25-.938H8.193V6.658h2.5c.324,0,.673-.138.673-.471s-.34-.467-.673-.467h-2.5V4.47c-.046-.693-.625-.938-1.247-.923s-.941.3-.941.923V8.845c.059.7.565.938,1.25.938h3.75L13.193,12.6c.141.233.625.938.625.938H15.38a.625.625,0,0,0,0-1.25Z"
                transform="translate(-2.88 -0.72)"
              />
            </svg>
          </div>
          <div className={styles.text}>
            <small>Wheelchair Accessible</small>
          </div>
        </div>
      );
    case 'kid':
      return (
        <div className={styles.tag}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 7.5 10">
              <path
                fill="#fff"
                d="M2.344,1.406A1.406,1.406,0,1,1,3.75,2.813,1.406,1.406,0,0,1,2.344,1.406Zm4.973.027a.625.625,0,0,0-.884,0L4.741,3.125H2.759L1.067,1.433a.625.625,0,0,0-.884.884L2.031,4.165v5.21A.625.625,0,0,0,2.656,10h.312a.625.625,0,0,0,.625-.625V7.188h.313V9.375A.625.625,0,0,0,4.531,10h.313a.625.625,0,0,0,.625-.625V4.165L7.317,2.317a.625.625,0,0,0,0-.884Z"
              />
            </svg>
          </div>
          <div className={styles.text}>
            <small>Kid Friendly</small>
          </div>
        </div>
      );
    case 'time':
      return (
        <div className={styles.tag}>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 15 15">
              <g transform="translate(-3.375 -3.375)">
                <path
                  fill="#fff"
                  d="M10.868,3.375a7.5,7.5,0,1,0,7.507,7.5A7.5,7.5,0,0,0,10.868,3.375Zm.007,13.5a6,6,0,1,1,6-6A6,6,0,0,1,10.875,16.875Z"
                  transform="translate(0 0)"
                />
                <path
                  fill="#fff"
                  d="M17.641,10.688h-1.1V15.1L20.4,17.42l.552-.906-3.311-1.963Z"
                  transform="translate(-6.358 -3.503)"
                />
              </g>
            </svg>
          </div>
          <div className={styles.text}>
            <small>{time}</small>
          </div>
        </div>
      );
    default:
      throw new Error('Invalid type');
  }
};

export default Tag;
