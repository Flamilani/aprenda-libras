import { Breadcrumb } from '../../components/Breadcrumb';
import TimelineProps from './VerticalTimeline';
import 'react-vertical-timeline-component/style.min.css';
import Slide from 'react-reveal/Slide';
import './style.css';
function TimelineApp() {
    return (
        <>
            <Slide left>
                <Breadcrumb title="Linha de Tempo" styles="sectionTop ampliaTop" link="/"></Breadcrumb>
            </Slide>
            <TimelineProps />
        </>
    )
}

export default TimelineApp; 