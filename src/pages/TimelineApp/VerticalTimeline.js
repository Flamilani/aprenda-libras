import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Timeline } from './timeline.constant';

function TimelineProps() {
    const cTimeline = Timeline;
    const listTimeline = cTimeline.map((list, index) =>
        <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={list.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={list.icon}
        >
            <h3 className="vertical-timeline-element-title">{list.title}</h3>
            <h4 className="vertical-timeline-element-subtitle subtitle">{list.subtitle}</h4>
            <p className="content">
                <span className="text">{list.content}</span>
                <img className={list.imgStyle} src={list.image} alt={list.title} />
            </p>
        </VerticalTimelineElement>
    );
    return (
        <VerticalTimeline>
            {listTimeline}
        </VerticalTimeline>
    )
}

export default TimelineProps; 