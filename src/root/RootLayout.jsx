import { Outlet } from 'react-router';
import Nevbar from '../component/Nevbar';
import Footer from '../component/Footer';

const RootLayout = () => {

    return (
        <div>
            <Nevbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;