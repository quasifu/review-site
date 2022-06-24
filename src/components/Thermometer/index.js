import style from './Thermometer.module.scss';
import Emoticon from 'components/Emoticon';
function Thermometer({ percent, datePaid }) {
  const diffInDatesInDays = Math.round(
    (new Date() - new Date(datePaid)) / (1000 * 60 * 60 * 24)
  );
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.progressWrapper}>
          <div className={style.progress} style={{ width: `${percent}%` }}>
            &nbsp;
          </div>
          <div className={style.textWrapper}>
            {percent}% paid {diffInDatesInDays} days ago <Emoticon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Thermometer;
