import { Link } from 'react-router-dom';
import { Parameters } from '../../../shared/constants/parameters/parameters.constant';
import Sheet from 'react-modal-sheet';
import './../style.css';
import { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import CMProps from './ConfigProps';
import ArticulationProps from './ArticulationProps';
import DirectProps from './DirectionalityProps';
import MovProps from './MovimentProps';
import ExpressionsProps from './ExpressionsProps';

const ParametersProps = () => {
    const [isOpenCM, setOpenCM] = useState(false);
    const [isOpenPA, setOpenPA] = useState(false);
    const [isOpenOM, setOpenOM] = useState(false);
    const [isOpenM, setOpenM] = useState(false);
    const [isOpenEF, setOpenEF] = useState(false);

    const cPar = Parameters;

    const lists = [];

    cPar.forEach((list, index) => {
        lists.push(
            <div key={index}>
                {list.abbr === 'cm' &&
                    <>
                        <Sheet
                            isOpen={isOpenCM}
                            onClose={() => setOpenCM(false)}
                            snapPoints={[680]}
                        >
                            <Sheet.Container>
                                <Sheet.Content>
                                    <Link className="iconClose" onClick={() => setOpenCM(false)}>
                                        <FaTimes />
                                    </Link>
                                    <h2 className="marginBottom">{list.name}</h2>
                                    <CMProps />
                                </Sheet.Content>
                            </Sheet.Container>
                            <Sheet.Backdrop onClick={() => setOpenCM(false)} />
                        </Sheet>
                        <Link onClick={() => setOpenCM(true)}>
                            <div className={`parameterAbbr ${list.style}`}>{list.abbr}</div>
                        </Link>
                    </>
                }
                {list.abbr === 'pa' &&
                    <>
                        <Sheet
                            isOpen={isOpenPA}
                            onClose={() => setOpenPA(false)}
                            snapPoints={[680]}
                        >
                            <Sheet.Container>
                                <Sheet.Content>
                                    <Link className="iconClose" onClick={() => setOpenPA(false)}>
                                        <FaTimes />
                                    </Link>
                                    <h2 className="marginBottom">{list.name}</h2>
                                    <div className="fundoCorpo bodyPoint">
                                         <ArticulationProps type="corpo" />
                                    </div>
        {/*                             <div className="fundoEspaco spacePoint">
                                        <ArticulationProps type="espaco" />
                                    </div> */}
                                </Sheet.Content>
                            </Sheet.Container>
                            <Sheet.Backdrop onClick={() => setOpenPA(false)} />
                        </Sheet>
                        <Link onClick={() => setOpenPA(true)}>
                            <div className={`parameterAbbr ${list.style}`}>{list.abbr}</div>
                        </Link>
                    </>
                }
                {list.abbr === 'om' &&
                    <>
                        <Sheet
                            isOpen={isOpenOM}
                            onClose={() => setOpenPA(false)}
                            snapPoints={[680]}
                        >
                            <Sheet.Container>
                                <Sheet.Content>
                                    <Link className="iconClose" onClick={() => setOpenOM(false)}>
                                        <FaTimes />
                                    </Link>
                                    <h2 className="marginBottom">{list.name}</h2>
                                    <div className="fundoHands">
                                         <DirectProps styles="imgDirectorParam" />
                                    </div>
                                </Sheet.Content>
                            </Sheet.Container>
                            <Sheet.Backdrop onClick={() => setOpenOM(false)} />
                        </Sheet>
                        <Link onClick={() => setOpenOM(true)}>
                            <div className={`parameterAbbr ${list.style}`}>{list.abbr}</div>
                        </Link>
                    </>
                }
                {list.abbr === 'm' &&
                    <>
                        <Sheet
                            isOpen={isOpenM}
                            onClose={() => setOpenM(false)}
                            snapPoints={[680]}
                        >
                            <Sheet.Container>
                                <Sheet.Content>
                                    <Link className="iconClose" onClick={() => setOpenM(false)}>
                                        <FaTimes />
                                    </Link>
                                    <h2 className="marginBottom">{list.name}</h2>
                                    <div className="fundoHands">
                                         <MovProps styles="imgMovParam" />
                                    </div>
                                </Sheet.Content>
                            </Sheet.Container>
                            <Sheet.Backdrop onClick={() => setOpenM(false)} />
                        </Sheet>
                        <Link onClick={() => setOpenM(true)}>
                            <div className={`parameterAbbr ${list.style}`}>{list.abbr}</div>
                        </Link>
                    </>
                }
                {list.abbr === 'ef' &&
                    <>
                        <Sheet
                            isOpen={isOpenEF}
                            onClose={() => setOpenEF(false)}
                            snapPoints={[680]}
                        >
                            <Sheet.Container>
                                <Sheet.Content>
                                    <Link className="iconClose" onClick={() => setOpenEF(false)}>
                                        <FaTimes />
                                    </Link>
                                    <h2 className="marginBottom">{list.name}</h2>
                                    <div className="fundoHands">
                                         <ExpressionsProps />
                                    </div>
                                </Sheet.Content>
                            </Sheet.Container>
                            <Sheet.Backdrop onClick={() => setOpenEF(false)} />
                        </Sheet>
                        <Link onClick={() => setOpenEF(true)}>
                            <div className={`parameterAbbr ${list.style}`}>{list.abbr}</div>
                        </Link>
                    </>
                }
            </div>
        )
    });

    return (
        <>
            {lists}
        </>
    )
}

export default ParametersProps; 