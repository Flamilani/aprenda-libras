import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Sheet from 'react-modal-sheet';
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import SheetConfiguration from "./BottomSheets/SheetConfiguration";
import './style.css';
import ArticulationProps from "./Props/ArticulationProps";

const ArticulationApp = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            <Slide left>
                <Breadcrumb title="Ponto de Articulação" styles="sectionTop" link="/"></Breadcrumb>
                <Sheet
                    isOpen={isOpen}
                    onClose={() => setOpen(false)}
                    snapPoints={[590]}
                >
                    <Sheet.Container>
                        <Sheet.Content>
                            <Link className="iconClose" onClick={() => setOpen(false)}>
                                <FaTimes />
                            </Link>
                            <SheetConfiguration />
                        </Sheet.Content>
                    </Sheet.Container>
                    <Sheet.Backdrop onClick={() => setOpen(false)} />
                </Sheet>

                <div className="fundoCorpo bodyPoint">
                    <Link className="linkOpen" onClick={() => setOpen(true)}>
                        <BsFillInfoSquareFill />
                    </Link>
                    <ArticulationProps type="corpo" />
                </div>
                <div className="fundoEspaco spacePoint">
                    <Link className="linkOpen" onClick={() => setOpen(true)}>
                        <BsFillInfoSquareFill />
                    </Link>
                    <ArticulationProps type="espaco" />
                </div>
            </Slide>
        </Fragment>
    );
}

export default ArticulationApp;