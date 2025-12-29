import React from 'react';
import Slider from '../component/Slider';
import ActivitySummary from '../component/ActivitySummary';
import PopularProduct from '../component/PopularProduct';
import CustomerSupport from '../component/CustomerSupport';
import useTitle from '../hooks/useTitle';



const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Slider></Slider>
            <PopularProduct></PopularProduct>
            <ActivitySummary></ActivitySummary>
            <CustomerSupport></CustomerSupport>
        </div>
    );
};

export default Home;