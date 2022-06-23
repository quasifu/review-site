import { Ticker } from '../../components/Ticker';
import { useState } from 'react';
import style from './Home.module.scss';
import appStyle from '../../App.module.scss';
import Timeline from 'components/Timeline';
import ImageSlider from 'components/ImageSlider';
// Defaults to 6 days, 22 hours, 40 minutes and 0 seconds from now in your timezone.
const futureDate = new Date('December 21, 2020'); /*add(new Date(), {
  days: 6,
  hours: 22,
  minutes: 40
});*/

const images = [
  {
    actual: '/actual2.jpg',
    design: '/design2.png',
  },
  {
    actual: '/actual.jpg',
    design: '/design.png',
  },
];
function Home() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [percent, setPercent] = useState(0);
  const [datePaid, setDatePaid] = useState(0);
  return (
    <div className={appStyle.wrapper}>
      <h1>Residential Pools</h1>
      <Ticker futureDate={futureDate} percent={percent} datePaid={datePaid} />
      <div className={style.text}>Since start date</div>
      <div className={style.imgSlideWrapper}>
        <ImageSlider
          backgroundImg={selectedImage.actual}
          foregroundImg={selectedImage.design}
        />
        <div className={style.thumbnails}>
          {images.map((image, i) => (
            <img
              alt={'Liquid Concept Pools'}
              src={image.actual}
              onClick={() => {
                setSelectedImage(images[i]);
              }}
            />
          ))}
        </div>
      </div>
      <div className={style.text}>Our journey started December 21, 2020...</div>
      <Timeline setPercent={setPercent} setDatePaid={setDatePaid} />
    </div>
  );
}

export default Home;
