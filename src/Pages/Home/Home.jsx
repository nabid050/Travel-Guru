import React from 'react';
import Banner from '../../Components/Banner/Banner';
import HomeCards from './../../Components/HomeCards/HomeCards'
import TourPartners from '../../Components/Partners/TourPartners';
import TravelFAQ from '../../Components/TravelFAQ/TravelFAQ';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCards></HomeCards>
            <TourPartners></TourPartners>
            <TravelFAQ></TravelFAQ>
        </div>
    );
};

export default Home;