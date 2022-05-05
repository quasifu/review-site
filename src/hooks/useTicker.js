import { useEffect, useState } from 'react';
import { intervalToDuration } from 'date-fns';

export const useTicker = (futureDate) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [futureDate]);

  const isTimeUp = false; //isBefore(futureDate, now);

  if (isTimeUp) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isTimeUp };
  }

  let { years, months, days, hours, minutes, seconds } = intervalToDuration({
    start: futureDate,
    end: now,
  });
  if (years > 0) {
    months += 12;
  }
  return { months, days, hours, minutes, seconds, isTimeUp };
};
