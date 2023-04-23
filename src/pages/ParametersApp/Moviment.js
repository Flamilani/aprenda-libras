import React, { Fragment, useState } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';
import MovProps from "./Props/MovimentProps";
import Slide from 'react-reveal/Slide';
import Sheet from 'react-modal-sheet';
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import SheetConfiguration from "./BottomSheets/SheetConfiguration";
import './style.css';

const MovimentApp = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            <Slide left>
                <Breadcrumb title="Tipos de Movimento" styles="sectionTop" link="/"></Breadcrumb>
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

                <div className="fundoHands">
                    <Link className="linkOpen" onClick={() => setOpen(true)}>
                        <BsFillInfoSquareFill />
                    </Link>
                    <MovProps styles="imgMov" />
                </div>
            </Slide>
        </Fragment>
    );
}

export default MovimentApp;