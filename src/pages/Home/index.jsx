import React from 'react';
import About from '../../sections/About';
import CarouselMain from '../../sections/Carousel';
import Partners from '../../sections/Partners';
import { PartnerEcosystem } from '../../sections/Partners/ecosystem';
import Services from '../../sections/Services';
import CompanyValues from '../../sections/Values';

export const Home = () => {
    return(
        <>
        <CarouselMain />
        <About />
        <Services />
        <Partners />
        <CompanyValues />
        <PartnerEcosystem />
        </>
    )
}
export default Home;