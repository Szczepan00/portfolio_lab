import React from 'react';
import signature from './../../assets/Signature.svg'

export function HomeAboutUs() {
    return (
        <section className="aboutUs">
            <aside className="aboutUs__description">
                <h3 className="aboutUs__description--title">O nas</h3>
                <span>Nori grape silver beet broccoli kombu beet <br/>
                    greens fava bean potato quandong celery. <br/>
                    Bunya nuts black-eyed pea prairie turnip leek <br/>
                    lentil turnip greens parsnip.</span>
                <img src={signature} alt="Signature"/>
            </aside>
            <aside className="aboutUs__picture" />
        </section>
    );
}