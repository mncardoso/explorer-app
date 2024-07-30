'use client';

import { useEffect, useState } from 'react';

const preTime = new Date();
let preHour = preTime.getHours().toString();
let preMin = preTime.getMinutes().toString();

preHour = parseInt(preHour) < 10 ? '0' + preHour : preHour;
preMin = parseInt(preMin) < 10 ? '0' + preMin : preMin;

const Clock = () => {
  const [time, setTime] = useState(`${preHour}:${preMin}`);
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date();
      let hour = time.getHours().toString();
      let min = time.getMinutes().toString();

      hour = parseInt(hour) < 10 ? '0' + hour : hour;
      min = parseInt(min) < 10 ? '0' + min : min;

      setTime(`${hour}:${min}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{time}</p>;
};

export default Clock;
