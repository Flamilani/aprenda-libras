import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Timeline } from '../../shared/constants/timeline.constant';
import Modal from 'react-modal';
import ReactTooltip from 'react-tooltip';
import YouTube from 'react-youtube';

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '18%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-40%, -10%)',
    },
};

const opts = {
    height: '390',
    width: '640',
    playerVars: {
        origin: 'http://localhost:3000',
        autoplay: 1,
    },
};

function TimelineProps() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const cTimeline = Timeline;
    const listTimeline = cTimeline.map((list, index) =>
        <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={list.date}
            iconStyle={list.iconStyle}
            icon={list.icon}
        >
            <h3 className="vertical-timeline-element-title">{list.title}</h3>
            <h4 className="vertical-timeline-element-subtitle subtitle">{list.subtitle}</h4>
            <div className="content">
                <span className="text">{list.content}</span>
                <img className={list.imgStyle} src={list.image} alt={list.title} />
            </div>
            <span className="positionIcons">
                {!!list.iconPath[0] &&
                    <>
                        <button data-tip={list.tooltip[0]} data-for="filme"
                            className="buttonIcon" onClick={openModal}>
                            {list.iconPath[0]}
                        </button>
                        <ReactTooltip id="filme" place="top" effect="solid" />
                    </>
                }
                {!!list.iconPath[1] &&
                    <>
                        <button data-tip={list.tooltip[1]} data-for="imagem"
                            className="buttonIcon" onClick={openModal}>
                            {list.iconPath[1]}
                        </button>
                        <ReactTooltip id="imagem" place="top" effect="solid" />
                    </>
                }
            </span>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                appElement={document.getElementById('root') || undefined}
            >
                <h2>Hello</h2>
                <button className="closeModal" onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <YouTube videoId="Kh7FH3x--mc" opts={opts} />
            </Modal>
        </VerticalTimelineElement>
    );
    return (
        <div>
            <VerticalTimeline>
                {listTimeline}
            </VerticalTimeline>
        </div>
    )
}

export default TimelineProps; 