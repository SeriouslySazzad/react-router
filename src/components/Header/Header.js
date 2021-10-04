import React from 'react';
import Banner from '../Banner/Banner';
import Menubar from '../Menubar/Menubar';

const Header = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
        </div>
    );
};

export default Header;