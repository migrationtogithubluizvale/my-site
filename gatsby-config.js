module.exports = {
    // Autoload the site metadata.
    siteMetadata: {
        title: 'Luiz Felipe Vale Portifólio',
        description: 'Desenvolvedor Full-Stack e Analista de Dados',
        author: 'Luiz Felipe',
        image: '/favicon.jpg',
        social: {
            fbAppId: 'luizfelype.silva.9'
        }
    },
    plugins: [
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 1
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-material-ui`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/img`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                path: `${__dirname}/locales`,
                languages: [`en`, `pt`],
                defaultLanguage: `en`,
                redirect: false,
                i18nextOptions: {
                    lowerCaseLng: true,
                    saveMissing: false,
                    interpolation: {
                        escapeValue: false
                    },
                    keySeparator: '.',
                    nsSeparator: false
                },
                pages: [
                    {
                        matchPath: '/:lang?/',
                        getLanguageFromPath: true
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-138977349-1',
                head: false
            }
        }
    ]
};
