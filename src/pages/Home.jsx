import React from 'react';
import Slider from '../component/Slider';
import TopVolunteers from '../component/TopVolunteers';
import ActivitySummary from '../component/ActivitySummary';
import PopularProduct from '../component/PopularProduct';



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularProduct></PopularProduct>
            <ActivitySummary></ActivitySummary>
            <TopVolunteers></TopVolunteers>
        </div>
    );
};

export default Home;