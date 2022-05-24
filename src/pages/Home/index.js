import { Ticker } from '../../components/Ticker';

// Defaults to 6 days, 22 hours, 40 minutes and 0 seconds from now in your timezone.
const futureDate = new Date('December 21, 2020'); /*add(new Date(), {
  days: 6,
  hours: 22,
  minutes: 40
});*/

function Home() {
  return <Ticker futureDate={futureDate} />;
}

export default Home;
