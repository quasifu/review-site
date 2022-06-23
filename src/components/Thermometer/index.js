import style from './Thermometer.module.scss';

function Thermometer({ percent, datePaid }) {
  const diffInDatesInDays = Math.round(
    (new Date() - new Date(datePaid)) / (1000 * 60 * 60 * 24)
  );
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.progressWrapper}>
          <div className={style.progress} style={{ width: `${percent}%` }}>
            {percent > 1
              ? `${percent}% paid ${diffInDatesInDays} days ago`
              : `${percent}%`}
          </div>
        </div>
      </div>
    </>
  );
}

export default Thermometer;
