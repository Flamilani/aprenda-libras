import React, { Fragment } from "react"
import { Breadcrumb } from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';

function SlidesApp() {

    return (
        <Fragment>
            <section>
                <Breadcrumb title="Apresentação" styles="sectionTop"></Breadcrumb>
                <div className="formGroup">
                    <ul>
                        <li>
                        <Link target="_blank" to="/apresentacao/introducao">Introdução à Libras</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </Fragment>
    );
}

export default SlidesApp;