import style from './Thermometer.module.scss';

function Thermometer({ width }) {
  return (
    <div className={style.wrapper}>
      <div className={style.progressWrapper}>
        <div className={style.progress} style={{ width: width }}></div>
      </div>
    </div>
  );
}

export default Thermometer;
