import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import dates from './dates';
import VerticalTimelineElementWrapper from './VerticalTimeElementWrapper';

function Timeline({ setPercent, setDatePaid }) {
  //const [percent, setPercent] = useState(0);

  const renderDetail = (item) => {
    const diffInDatesInDays = Math.round(
      (new Date(item.date) - new Date(dates[0].date)) / (1000 * 60 * 60 * 24)
    );

    return (
      <VerticalTimelineElementWrapper
        item={item}
        key={item.date}
        onEnter={(value, datePaid) => {
          setPercent(parseInt(value));
          setDatePaid(datePaid);
        }}
        onLeave={(value, datePaid) => {
          setPercent(parseInt(value));
          setDatePaid(datePaid);
        }}
        diffInDatesInDays={diffInDatesInDays}
      />
    );
  };
  return (
    <VerticalTimeline>
      {dates.map((date) => renderDetail(date))}
    </VerticalTimeline>
  );
}

export default Timeline;
