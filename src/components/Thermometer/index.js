import style from './Thermometer.module.scss';

function Thermometer(props) {
  return (
    <div className={style.wrapper}>
      <div className={style.progressWrapper}>
        <div className={style.progress} style={{ height: props.height }}></div>
      </div>
    </div>
  );
}

export default Thermometer;
