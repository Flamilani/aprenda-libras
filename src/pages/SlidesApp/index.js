import React from "react"
import Reveal from 'reveal.js';
import './../../../node_modules/reveal.js/dist/reveal.css';
import './style.css';

function SlidesApp() {

    React.useEffect(() => {
        let deck = new Reveal({
            backgroundTransition: 'slide',
            transition: 'slide'
         })
         deck.initialize();
         console.log('initialized fool');
    },[]);

    return (
            <div className="reveal">
                <div className="slides">
                    <section>Slide 1</section>
                    <section>Slide 2</section>
                </div>
            </div>
    );
}




export default SlidesApp;