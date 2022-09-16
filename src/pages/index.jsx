import React from 'react';

import '../css/home.css';
import '../css/animate.css';

import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

export default function Homepage() {
    return (
        <Layout className="home" canonicalUrl="">
            <React.Fragment>
                <Hero />
                <About />
                <Contact />
                <Footer />
            </React.Fragment>
        </Layout>
    );
}
