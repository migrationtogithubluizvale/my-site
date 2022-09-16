import React from 'react';

import Design from '../img/computer.svg';
import WebApp from '../img/development.svg';
import Hero from '../img/hero.svg'
const About = () => {
    const description =
        'Hi ! I am Luiz Felipe. I’m currently assigned as a Software Engineer for Web Systems and Machine Learning projects'
    const renderBreakdowns = () => {
        const breakdowns = [
            {
                img: Design,
                title: 'Frontend Development',
                description:
                    'I love working on the development of wireframes and front end prototypes, always thinking about responsiveness',
                subTitle: 'Concepts and Techonologies that i work',
                subDesc: 'Wireframes, Websites, Prototypes, Hibrid Apps',
                listTitle: 'Tools + Frameworks',
                list: [
                    'ReactJS',
                    'Vanilla JS',
                    'JQuery',
                    'Bootstrap',
                    'CSS Compilers',
                ]
            },
            {
                img: WebApp,
                title: 'Backend Development',
                description:
                    'I also love building Rest APIs, Architecture in Microservices, APIs in Graphql; Websocket Servers and Crawlers for Data mining',
                subTitle: 'Concepts and Techonologies that i work',
                subDesc: 'Web Apps, REST APIs, Test Driven Design, Clean Architecture, OOP, Domain Driven Design',
                listTitle: 'Tools + Languages',
                list: [
                    'NodeJS',
                    'Python',
                    'C#',
                    'Typescript',
                    'Relational Databases'
                ]
            },
            {
                img: Hero,
                title: 'Cloud Computing',
                description:
                    'I have already worked on the main cloud platforms, supporting the process of devops and hosting applications in production',
                subTitle: 'Concepts and Techonologies that i work',
                subDesc: 'Elastic Containers, S3 Storage, Elasticsearch, Docker',
                listTitle: 'Tools + Languages',
                list: [
                    'AWS',
                    'Google Cloud Platform',
                    'Serveless',
                    'Cloud Storage',
                    'Containers & Cloud Computing'
                ]
            }
        ];

        return breakdowns.map(breakdown => (
            <div className="about__breakdown col" key={breakdown.title.toLowerCase()}>
                <img
                    data-sal="slide-down"
                    data-sal-delay="300"
                    src={breakdown.img}
                    alt={breakdown.title}
                    className="about__breakdown-img"
                />

                <h3 data-sal="slide-down" data-sal-delay="300" className="about__breakdown-title">
                    {breakdown.title}
                </h3>
                <p data-sal="slide-down" data-sal-delay="300" className="about__breakdown-desc">
                    {breakdown.description}
                </p>

                <p data-sal="slide-down" data-sal-delay="300" className="about__breakdown-subtitle">
                    {breakdown.subTitle}
                </p>
                <p data-sal="slide-down" data-sal-delay="300" className="about__breakdown-subdesc">
                    {breakdown.subDesc}
                </p>

                <p data-sal="slide-down" data-sal-delay="300" className="about__breakdown-subtitle">
                    {breakdown.listTitle}
                </p>
                <ul className="about__breakdown-list">
                    {breakdown.list.map(elem => (
                        <li
                            data-sal="slide-down"
                            data-sal-delay="300"
                            key={elem}
                            className="about__breakdown-elem">
                            {elem}
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <div className="about">
            <div className="about__inner">
                <h2 className="about__title" data-sal="slide-down" data-sal-delay="300">
                Hi ! My name is Luiz Felipe. Nice to meet you 👋🏼
                </h2>
                <p className="about__text" data-sal="slide-down" data-sal-delay="300">
                    {description}
                </p>

                <a href="/Curriculum.pdf" download="" className="about__cv">
                    Download my curriculum &nbsp;
                    <i className="ti-file" />
                </a>
            </div>

            <div className="about__breakdowns grid grid--padded">{renderBreakdowns()}</div>
        </div>
    );
};

export default React.memo(About);
