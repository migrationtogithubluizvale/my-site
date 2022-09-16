import React from 'react';

import HeroFooter from '../img/hero.svg';
import Memoji from '../img/memoji.svg';

const Hero = () => (
    <div className="hero">
        <div className="hero__body">
            <h1 className="hero__title">Software Engineer &amp; Machine Learning Developer</h1>

            <p className="hero__subtitle">
                I develop APIs and machine learning projects
            </p>
            <img src={Memoji} alt="" className="hero__memoji" />

            <div className="hero__footer">
                <img src={HeroFooter} className="hero__footer-img" alt="" />
            </div>
        </div>
    </div>
);

export default React.memo(Hero);
