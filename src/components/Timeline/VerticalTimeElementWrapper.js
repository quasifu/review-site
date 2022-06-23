import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useInView } from 'react-cool-inview';

function VerticalTimelineElementWrapper({
  item,
  diffInDatesInDays,
  onEnter,
  onLeave,
}) {
  const { observe } = useInView({
    threshold: 0.5,
    onEnter: ({ scrollDirection, entry }) => {
      console.log('Enter', scrollDirection, entry.target.id);
      if (scrollDirection.vertical === 'up' && entry.target.id) {
        onEnter(entry.target.id, item.date);
      }
      //onEnter(string, scrollDirection.vertical || '');
    },
    onLeave: ({ scrollDirection, entry }) => {
      console.log('Leave', scrollDirection, entry.target.id);
      if (scrollDirection.vertical === 'down' && entry.target.id) {
        onLeave(entry.target.id, item.date);
      }
    },
  });

  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={`${item.date} - ${diffInDatesInDays} days since start`}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
      <h3
        className='vertical-timeline-element-title'
        ref={observe}
        id={item.ref}
      >
        {item.title}
      </h3>
      <h4 className='vertical-timeline-element-subtitle'>{item.subtitle}</h4>
      <p>{item.content}</p>
    </VerticalTimelineElement>
  );
}

export default VerticalTimelineElementWrapper;
