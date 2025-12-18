import React from 'react';
import Slider from '../component/Slider';
import PopularService from '../component/PopularService';
import TopVolunteers from '../component/TopVolunteers';
import ActivitySummary from '../component/ActivitySummary';



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularService></PopularService>
            <ActivitySummary></ActivitySummary>
            <TopVolunteers></TopVolunteers>
        </div>
    );
};

export default Home;