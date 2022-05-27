import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import dates from './dates';

function Timeline() {
  const renderDetail = (item) => {
    const diffInDatesInDays = Math.round(
      (new Date(item.date) - new Date(dates[0].date)) / (1000 * 60 * 60 * 24)
    );
    return (
      <VerticalTimelineElement
        key={item.date}
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={`${item.date} - ${diffInDatesInDays} days since start`}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className='vertical-timeline-element-title'>{item.title}</h3>
        <h4 className='vertical-timeline-element-subtitle'>{item.subtitle}</h4>
        <p>{item.content}</p>
      </VerticalTimelineElement>
    );
  };
  return (
    <VerticalTimeline>
      {dates.map((date) => renderDetail(date))}
    </VerticalTimeline>
  );
}

export default Timeline;
