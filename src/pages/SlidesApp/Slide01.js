import React from "react"
import Speech from 'react-speech';
import Reveal from 'reveal.js';
import './../../../node_modules/reveal.js/dist/reveal.css';
import './../../../node_modules/reveal.js/dist/reset.css';
import './../../../node_modules/reveal.js/dist/theme/simple.css';
import { Slide } from "../../shared/constants/slides/slide.constant";
import { removeHTML }  from './../../utils/helper';

import './style.css';

function Slide01() {

    React.useEffect(() => {
        let reveal = new Reveal({
            backgroundTransition: 'fade',
        })

        reveal.initialize({
            width: 1075,
            height: 700,
            transition: 'slide',
            pdfSeparateFragments: true,
            slideNumber: 'c/t',
            mouseWheel: true,
        });
    }, []);

    const element = Slide;


    /*     const cSlide = Slide;
        const listSlides = cSlide.map((list, index) =>
            <article key={index}>
                <section>
                    {list.title}
                    {list.img}
                </section>
                {list.text !== "" &&
                    <section>
                        {list.text}
                    </section>
                }
    
            </article>
    
        ); */

    return (
        <div className="reveal">
            <div className="slides">
                <section>
                    {element[0].title}
                    {element[0].image}
                </section>
                <section>
                    <section>
                        <Speech
                            textAsButton={true}
                            displayText="Traduzir"
                            text={removeHTML(element[1].text[0])} />
                        {element[1].text[0]}
                    </section>
                    <section>
                        {element[1].text[1]}
                    </section>
                </section>
            </div>
        </div>
    );
}

export default Slide01;