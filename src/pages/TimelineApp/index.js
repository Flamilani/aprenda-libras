import { Breadcrumb } from '../../components/Breadcrumb';
import TimelineProps from './VerticalTimeline';
import 'react-vertical-timeline-component/style.min.css';
import './style.css';
import Modal from 'react-modal';

Modal.setAppElement('#yourAppElement');

/* const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }; */

function TimelineApp() {
    return (
        <aside>
            <Breadcrumb title="Linha de Tempo" styles="sectionTop"></Breadcrumb>
            <TimelineProps />
        </aside>
    )
}

export default TimelineApp; 