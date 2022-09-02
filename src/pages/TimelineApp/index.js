import { Breadcrumb } from '../../components/Breadcrumb';
import TimelineProps from './VerticalTimeline';
import 'react-vertical-timeline-component/style.min.css';
import './style.css';

function TimelineApp() {
    return (
        <aside>
            <Breadcrumb title="Linha de Tempo" styles="sectionTop"></Breadcrumb>
            <TimelineProps />
        </aside>
    )
}

export default TimelineApp; 