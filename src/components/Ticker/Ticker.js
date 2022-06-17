import { TickerCell } from 'components/TickerCell';
import { TickerSeparator } from 'components/TickerSeparator';
import { useTicker, useIntersection } from 'hooks';
import React, { useRef } from 'react';

import style from './Ticker.module.scss';

export const Ticker = ({ futureDate }) => {
  const ref = useRef();
  const inViewport = useIntersection(ref, '0px');
  const { months, days, hours, minutes, seconds, isTimeUp } =
    useTicker(futureDate);
  const tickerContents = isTimeUp ? (
    <div className={style.timeIsUp}>Time is up!!!</div>
  ) : (
    <>
      <TickerCell value={months} label='Months' />
      <TickerSeparator />
      <TickerCell value={days} label='Days' />
      <TickerSeparator />
      <TickerCell value={hours} label='Hours' />
      <TickerSeparator />
      <TickerCell value={minutes} label='Minutes' />
      <TickerSeparator />
      <TickerCell value={seconds} label='Seconds' />
    </>
  );

  return (
    <>
      <div className={style.tickerShell} ref={ref}>
        {tickerContents}
      </div>
      {!inViewport && (
        <div className={style.fixedTickerShell}>
          <div className={style.fixedTicker}>{tickerContents}</div>
        </div>
      )}
    </>
  );
};
