import { Ticker } from '../../components/Ticker';
import style from './Home.module.scss';
import appStyle from '../../App.module.scss';
// Defaults to 6 days, 22 hours, 40 minutes and 0 seconds from now in your timezone.
const futureDate = new Date('December 21, 2020'); /*add(new Date(), {
  days: 6,
  hours: 22,
  minutes: 40
});*/

function Home() {
  return (
    <div className={appStyle.wrapper}>
      <h1>Residential Pools</h1>
      <Ticker futureDate={futureDate} />
      <div className={style.text}>Since start date</div>
    </div>
  );
}

export default Home;
