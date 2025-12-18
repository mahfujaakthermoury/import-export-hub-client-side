import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Nevbar from '../component/Nevbar';
import Footer from '../component/Footer';

const RootLayout = () => {
    const [cart, setCart] = useState(0);
    return (
        <div>
            <Nevbar cart={cart} />
            <Outlet context={{ cart, setCart }} />
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;