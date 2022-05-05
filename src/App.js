import { useState } from "react";
import { add } from "date-fns";

import { Ticker } from "components/Ticker";

import style from "./App.module.scss";

// Defaults to 6 days, 22 hours, 40 minutes and 0 seconds from now in your timezone.
const futureDate = new Date(
  "March 20, 2021"
); /*add(new Date(), {
  days: 6,
  hours: 22,
  minutes: 40
});*/

function App() {
  const [tickerVisible] = useState(true);
  const tickerEl = tickerVisible ? <Ticker futureDate={futureDate} /> : null;

  return <div className={style.pageContainer}>{tickerEl}</div>;
}

export default App;
