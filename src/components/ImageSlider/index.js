import style from './ImageSlider.module.scss';
import { useEffect, useState } from 'react';
function ImageSlider(props) {
  const [pos, setPos] = useState(50);
  console.log(props);
  useEffect(() => {
    //  $('.foreground-img').css('width', `${sliderPos}%`);
    //  // Update the position of the slider button
    //  $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`);
  }, [pos]);
  return (
    <div className={style.container}>
      <div
        className={style.backgroundImg}
        style={{ backgroundImage: `url('${props.backgroundImg}')` }}
      ></div>
      <div
        className={style.foregroundImg}
        style={{
          width: `calc(${pos}% - 9px)`,
          backgroundImage: `url('${props.foregroundImg}')`,
        }}
      ></div>
      <input
        type='range'
        min='1'
        max='100'
        value={pos}
        className={style.slider}
        name='slider'
        id='slider'
        onChange={(e) => {
          setPos(e.target.value);
        }}
      />
      <div
        className={style.sliderButton}
        style={{ left: `calc( -21px + ${pos}%)` }}
      ></div>
    </div>
  );
}

export default ImageSlider;
