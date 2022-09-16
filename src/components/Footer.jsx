import React from 'react';

const Footer = () => {
    const renderSocials = () => {
        const socials = [
            { name: 'Github', icon: 'ti-github', url: 'https://github.com/migrationtogithubluizvale' },
            {
                name: 'Facebook',
                icon: 'ti-facebook',
                url: 'https://www.facebook.com/luizfelype.silva.9/'
            },
            {
                name: 'Instagram',
                icon: 'ti-instagram',
                url: 'https://www.instagram.com/luizvale6/?hl=en'
            },
            {
                name: 'LinkedIn',
                icon: 'ti-linkedin',
                url: 'https://www.linkedin.com/in/luiz-vale-481169166/'
            }
        ];

        return socials.map(social => (
            <a
                data-sal="slide-down"
                data-sal-delay="300"
                target="_blank"
                href={social.url}
                key={social.icon}
                title={social.name}
                rel="noopener noreferrer"
                className="footer__social-btn">
                <i className={`${social.icon} footer__social-icon`} />
            </a>
        ));
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__social">{renderSocials()}</div>

            <p
                className="footer__copyright"
                data-sal="slide-down"
                data-sal-delay="300">{`Copyright © ${currentYear} Luiz Felipe Vale. All rights reserved.`}</p>
        </footer>
    );
};

export default Footer;
